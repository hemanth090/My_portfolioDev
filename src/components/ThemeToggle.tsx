import { memo } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="relative p-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] 
                 bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-secondary)]
                 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]
                 transition-colors duration-150 overflow-hidden"
        >
            {/* Icon container with smooth rotation transition */}
            <div className="relative w-4 h-4">
                {/* Sun icon */}
                <Sun
                    className={`absolute inset-0 w-4 h-4 transition-all duration-200 ease-out
            ${theme === 'dark'
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 -rotate-90 scale-75'
                        }`}
                />
                {/* Moon icon */}
                <Moon
                    className={`absolute inset-0 w-4 h-4 transition-all duration-200 ease-out
            ${theme === 'light'
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 rotate-90 scale-75'
                        }`}
                />
            </div>
        </button>
    );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
