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
            // Components use these (bg-bg-subtle, text-fg-secondary, border-line)
            // instead of arbitrary [var(--color-*)] values.
            colors: {
                bg: {
                    DEFAULT: 'var(--color-bg-primary)',
                    subtle: 'var(--color-bg-secondary)',
                    muted: 'var(--color-bg-tertiary)',
                    nav: 'var(--color-bg-nav)',
                },
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
            // Three radii only. Replaces the previous 12px / 2rem / 32px spread.
            borderRadius: {
                card: '16px',
                control: '10px',
            },
            // One shadow, with real offset and blur — never a decorative halo.
            boxShadow: {
                soft: '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)',
            },
            transitionDuration: {
                fast: '150ms',
                base: '220ms',
            },
            transitionTimingFunction: {
                brand: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            },
            // 45-75ch readability rule; replaces max-w-2xl on body copy.
            maxWidth: {
                measure: '68ch',
            },
        },
    },
    plugins: [],
}
