const LEGACY_ROUTES: Readonly<Record<string, string>> = {
    '/about': 'about',
    '/projects': 'projects',
    '/skills': 'skills',
    '/experience': 'experience',
};

/**
 * Collapses pre-one-page deep links onto the single document.
 *
 * Must run BEFORE createRoot().render() so the hash is already correct when
 * the deep-link hook reads it on mount. replaceState neither scrolls nor fires
 * hashchange, so this is invisible.
 *
 * This is also the 404 answer: no 404 route, no 404 component. Every unknown
 * path canonicalises to `/` and renders the page — on a one-page portfolio,
 * showing the portfolio beats showing a 404.
 */
export function normalizeLegacyPath(): void {
    const { pathname, search, hash } = window.location;
    const path = pathname.replace(/\/+$/, '') || '/';

    const sectionId = LEGACY_ROUTES[path];
    if (sectionId) {
        window.history.replaceState(null, '', `/${search}#${sectionId}`);
        return;
    }

    if (path !== '/') {
        window.history.replaceState(null, '', `/${search}${hash}`);
    }
}
