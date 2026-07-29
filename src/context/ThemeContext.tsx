import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './theme-context';

/** Matches the anti-FOUC inline script in index.html, which runs before React mounts. */
function getInitialTheme(): Theme {
    if (typeof window !== 'undefined') {
        // Trust the class the inline script already put on <html>.
        if (document.documentElement.classList.contains('light')) return 'light';
        if (document.documentElement.classList.contains('dark')) return 'dark';

        const stored = localStorage.getItem('theme') as Theme;
        if (stored) return stored;
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
        localStorage.setItem('theme', theme);
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
