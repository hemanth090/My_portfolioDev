import { useEffect } from 'react';
import { goToSection, prefersReducedMotion } from '../lib/scroll';

export function useAnchorNavigation(anchorIds: readonly string[]): void {
    // First load with #experience in the URL. The browser's native fragment
    // scroll already failed — it ran before React put the element in the DOM.
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (!id || !anchorIds.includes(id)) return;
        // Non-zero scroll means the browser restored a position (reload mid-page).
        // Don't fight it: the hash it restored is the one the spy just wrote anyway.
        if (window.scrollY > 0) return;

        // Two rAFs may be pending at once (landing + correction) — they need
        // separate handles or cleanup can only cancel the later one.
        let landFrame = 0;
        let correctFrame = 0;
        let landed = false;
        // Once the user scrolls, taps, or types, the page is theirs — the
        // late-load correction must not yank the viewport or steal focus.
        let userMoved = false;
        const markMoved = () => {
            userMoved = true;
        };
        const moveEvents = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;

        const land = (focus: boolean) => {
            const element = document.getElementById(id);
            if (!element) return;
            // Instant, not smooth: animating 6 screens down from the top on a
            // deep link is slow and disorienting.
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
            if (focus) element.focus({ preventScroll: true });
            landed = true;
        };

        landFrame = requestAnimationFrame(() => {
            land(false);
            for (const event of moveEvents) {
                window.addEventListener(event, markMoved, { passive: true, once: true });
            }
        });

        // Correct once fonts and images have settled — late layout shifts above
        // the target would otherwise leave the landing a few hundred px off.
        const correct = () => {
            if (landed && !userMoved) land(true);
        };
        if (document.readyState === 'complete') {
            correctFrame = requestAnimationFrame(correct);
        } else {
            window.addEventListener('load', correct, { once: true });
        }

        return () => {
            cancelAnimationFrame(landFrame);
            cancelAnimationFrame(correctFrame);
            window.removeEventListener('load', correct);
            for (const event of moveEvents) {
                window.removeEventListener(event, markMoved);
            }
        };
    }, [anchorIds]);

    // Back/Forward across hashes pushed by nav clicks.
    useEffect(() => {
        const onPopState = () => {
            const id = window.location.hash.slice(1);
            if (id && anchorIds.includes(id)) {
                goToSection(id, { history: 'none', smooth: false });
            } else if (id && document.getElementById(id)) {
                // A real in-DOM anchor outside our list (#education, typed into
                // the URL bar): the browser already navigated there natively —
                // do not fight it.
                return;
            } else {
                window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
            }
        };
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, [anchorIds]);
}
