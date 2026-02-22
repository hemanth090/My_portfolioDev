import { memo } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="relative p-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] overflow-hidden"
        >
            {/* Icon container with smooth rotation transition */}
            <div className="relative w-[18px] h-[18px]">
                {/* Sun icon */}
                <Sun
                    className={`absolute inset-0 w-[18px] h-[18px] transition-all duration-200 ease-out ${
                        theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                />
                {/* Moon icon */}
                <Moon
                    className={`absolute inset-0 w-[18px] h-[18px] transition-all duration-200 ease-out ${
                        theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                    }`}
                />
            </div>
        </button>
    );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
