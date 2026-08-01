/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            // Semantic aliases over the CSS custom properties in index.css.
            colors: {
                bg: {
                    DEFAULT: 'var(--color-bg-primary)',
                    subtle: 'var(--color-bg-secondary)',
                    muted: 'var(--color-bg-tertiary)',
                    nav: 'var(--color-bg-nav)',
                },
                surface: 'var(--color-surface)',
                fg: {
                    DEFAULT: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    muted: 'var(--color-text-muted)',
                },
                line: {
                    DEFAULT: 'var(--color-border)',
                    hover: 'var(--color-border-hover)',
                },
            },
            fontFamily: {
                sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            // Normal modern radii: panels 12px, controls 8px.
            borderRadius: {
                card: '12px',
                control: '8px',
            },
            // One shadow: real offset with a soft blur (craft floor: a
            // zero-offset halo is decoration, a zero-blur block is a gimmick).
            boxShadow: {
                soft: '0 1px 2px var(--shadow-1), 0 6px 20px var(--shadow-2)',
            },
            transitionDuration: {
                fast: '150ms',
                base: '220ms',
            },
            transitionTimingFunction: {
                brand: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            },
            maxWidth: {
                measure: '68ch',
            },
        },
    },
    plugins: [],
}
