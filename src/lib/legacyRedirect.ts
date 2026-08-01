/**
 * Collapses pre-board deep links onto the single screen.
 *
 * Both the old routes (/projects, /skills, ...) and the old scroll anchors
 * (#experience, #contact, ...) are gone - everything is visible on one
 * viewport, so every legacy URL folds to `/`. Runs before createRoot();
 * replaceState neither scrolls nor fires events, so this is invisible.
 * This is also the 404 story: unknown paths show the board, not an error.
 */
export function normalizeLegacyPath(): void {
    const { pathname, search, hash } = window.location;
    const path = pathname.replace(/\/+$/, '') || '/';
    if (path !== '/' || hash) {
        window.history.replaceState(null, '', `/${search}`);
    }
}
