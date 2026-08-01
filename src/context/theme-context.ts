import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

/**
 * Lives in its own non-component module so ThemeContext.tsx can export only a
 * component — `react-refresh/only-export-components` errors otherwise, and
 * mixing the two also breaks Fast Refresh for the provider.
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
