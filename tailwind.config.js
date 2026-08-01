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
            // Retro register: square corners everywhere. The tokens stay so a
            // future radius change is one line, but they resolve to 0.
            borderRadius: {
                card: '0px',
                control: '0px',
            },
            // One shadow: hard offset, zero blur - crisp, not soft. Color is a
            // CSS var so each theme picks its own weight.
            boxShadow: {
                soft: '3px 3px 0 0 var(--shadow-hard)',
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
