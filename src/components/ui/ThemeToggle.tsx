import { memo } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="relative p-3 lg:p-1.5 rounded-control text-fg-muted hover:text-accent overflow-hidden transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
            {/* Both icons are always mounted; they cross-fade and counter-rotate. */}
            <span className="relative block w-5 h-5">
                <Sun
                    aria-hidden="true"
                    className={`absolute inset-0 w-5 h-5 transition-all duration-base ease-brand ${
                        theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                />
                <Moon
                    aria-hidden="true"
                    className={`absolute inset-0 w-5 h-5 transition-all duration-base ease-brand ${
                        theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                    }`}
                />
            </span>
        </button>
    );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
