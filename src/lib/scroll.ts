export function prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export interface GoToSectionOptions {
    /** 'push' = user-initiated nav (Back returns). 'none' = responding to popstate. */
    history?: 'push' | 'replace' | 'none';
    smooth?: boolean;
}

/**
 * Scrolls a section into view, moves focus into it, and records the hash.
 *
 * Deliberately stateless — no "programmatic scroll in flight" flag. Suppressing
 * the passive hash sync during a smooth scroll would need a timeout or
 * `scrollend` (patchy in Safari) and can strand a stale hash; the only symptom
 * it fixes is a sub-second URL flicker. All passive writes are replaceState on
 * the entry the click already pushed, so the resting state is always correct.
 */
export function goToSection(id: string, options: GoToSectionOptions = {}): void {
    const { history: mode = 'push', smooth = !prefersReducedMotion() } = options;
    const element = document.getElementById(id);
    if (!element) return;

    // 'instant', never 'auto': index.css sets html { scroll-behavior: smooth },
    // and 'auto' defers to CSS — it does NOT mean "jump".
    element.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' });

    // Move the keyboard/AT reading position into the section so the next Tab
    // lands inside the content instead of continuing through the nav rail.
    // Requires tabIndex={-1} on the section. preventScroll keeps the smooth
    // animation above from being cancelled.
    element.focus({ preventScroll: true });

    if (mode === 'push') window.history.pushState(null, '', `#${id}`);
    else if (mode === 'replace') window.history.replaceState(null, '', `#${id}`);
}
