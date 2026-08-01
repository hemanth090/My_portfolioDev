import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './theme-context';

/** Matches the anti-FOUC inline script in index.html, which runs before React mounts. */
function getInitialTheme(): Theme {
    if (typeof window !== 'undefined') {
        // Trust the class the inline script already put on <html>.
        if (document.documentElement.classList.contains('light')) return 'light';
        if (document.documentElement.classList.contains('dark')) return 'dark';

        // localStorage ACCESS throws SecurityError when the browser blocks
        // site data ("Block all cookies" in Chromium, dom.storage off in
        // Firefox) — an uncaught throw here would unmount the entire app.
        try {
            const stored = localStorage.getItem('theme') as Theme;
            if (stored) return stored;
        } catch {
            /* storage blocked: fall through to the media query */
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // Storage blocked: the theme still applies, it just won't persist.
            // Without this guard the commit-phase throw unmounts the app.
        }
        // Keeps native controls (scrollbars, form widgets) in the right scheme.
        root.style.colorScheme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
