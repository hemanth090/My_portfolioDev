import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Shrinks the observer root to a 10vh band sitting 20%-30% down the viewport.
 *
 *  - Top inset (-20%): a section must scroll meaningfully into view before it
 *    can claim "active". With rootMargin 0 the next section lights up while it
 *    is still a 2px sliver at the bottom edge — the classic flicker.
 *  - Bottom inset (-70%): keeps the band thin so at most two adjacent sections
 *    can claim it at once, which makes the winner rule below trivial.
 *  - 10vh, not 0: a zero-height line sits inside the inter-section gutter for
 *    many frames and, on a fling or a smooth programmatic scroll, IO can sample
 *    between frames and miss a section entirely. 10vh guarantees several frames
 *    of overlap at realistic scroll velocities.
 *  - Upper third, not centre: on a long read the eye tracks near the top; a
 *    centre line makes the nav lag behind what is actually being read.
 */
const BAND_ROOT_MARGIN = '-20% 0px -70% 0px';

interface UseScrollSpyOptions {
    /** Section ids, in document order. Must be module-scoped (stable identity). */
    sectionIds: readonly string[];
    /** Zero-height probe rendered after the last section. */
    endSentinelRef: RefObject<HTMLElement | null>;
}

export function useScrollSpy({ sectionIds, endSentinelRef }: UseScrollSpyOptions): string {
    // '' = "not measured yet", NOT the first section. Seeding with a section id
    // caused two real bugs: the initial hash-sync write fired against a value
    // the observer never produced (stripping deep-link hashes during the mount
    // effect flush), and a reload with browser-restored scroll in an unobserved
    // region reported 'hero' while the viewport showed Credentials. Consumers
    // must treat '' as "no active section".
    const [bandId, setBandId] = useState<string>('');
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        const order = new Map(sectionIds.map((id, index) => [id, index]));
        // IO reports only what CHANGED, so intersection state must be accumulated
        // across callbacks. Reacting to a single entry is the bug that makes most
        // scroll-spies wrong on fast scroll.
        const visible = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id);
                    else visible.delete(entry.target.id);
                }

                // Band is sitting in a gutter between two sections: hold the
                // previous winner rather than clearing. This kills boundary flicker.
                if (visible.size === 0) return;

                let winner = '';
                let rank = -1;
                for (const id of visible) {
                    const index = order.get(id) ?? -1;
                    if (index > rank) {
                        rank = index;
                        winner = id;
                    }
                }

                // Last in DOCUMENT order wins. Scrolling down (the dominant
                // direction) the incoming section takes over the instant it
                // touches the band; scrolling up, the outgoing one holds until it
                // fully clears. Either rule lags in one direction — optimise for
                // the common one.
                setBandId((prev) => (winner && winner !== prev ? winner : prev));
            },
            { rootMargin: BAND_ROOT_MARGIN, threshold: 0 },
        );

        // threshold MUST be 0: with a shrunken root the ratio is measured against
        // the TARGET's box, so a 2000px section inside an 80px band never exceeds
        // ~0.04 and any higher threshold simply never fires.
        for (const id of sectionIds) {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        }

        return () => observer.disconnect();
    }, [sectionIds]);

    useEffect(() => {
        const sentinel = endSentinelRef.current;
        if (!sentinel) return;
        // Bottom clamp, pure IO, no scroll listener: once the end-of-content probe
        // is on screen the reader has hit the floor, so pin the last section.
        // Without this, a final section shorter than 30vh can never reach the band
        // and the nav gets stuck one item early at max scroll.
        const observer = new IntersectionObserver(
            (entries) => setAtEnd(entries.some((entry) => entry.isIntersecting)),
            { threshold: 0 },
        );
        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [endSentinelRef]);

    if (atEnd && sectionIds.length > 0) return sectionIds[sectionIds.length - 1];
    return bandId;
}
