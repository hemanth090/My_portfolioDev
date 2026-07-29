import { useEffect } from 'react';

/**
 * Mirrors the section under the reader into location.hash so the URL is always
 * shareable. replaceState only — passive scrolling must never touch the back
 * button. Fires at most once per section change (~6 writes per full page),
 * comfortably under Safari's ~100-per-30s replaceState throttle.
 */
export function useHashSync(activeId: string, rootId: string): void {
    useEffect(() => {
        if (!activeId) return;
        const { pathname, search, hash } = window.location;
        // The hero is the canonical URL: strip the hash rather than writing #hero.
        const next = activeId === rootId ? `${pathname}${search}` : `#${activeId}`;
        if (next === (hash || `${pathname}${search}`)) return;
        window.history.replaceState(null, '', next);
    }, [activeId, rootId]);
}
