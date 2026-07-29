import { NAV_SECTIONS } from '../../config/sections';
import NavItem from './NavItem';
import ThemeToggle from '../ui/ThemeToggle';

interface SideNavProps {
    activeId: string;
}

/**
 * Fixed rail: a bottom pill on mobile, a vertical column from lg up.
 *
 * The tighter mobile gap/padding is deliberate — the previous px-4/gap-2
 * combination measured ~331px of content against max-w-[95%] and overflowed
 * at a 320px viewport.
 */
export default function SideNav({ activeId }: SideNavProps) {
    return (
        <nav
            className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:left-6 lg:translate-x-0 lg:bottom-auto z-50 max-w-[95%] print:hidden"
            aria-label="Section navigation"
        >
            <div className="flex lg:flex-col items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-5 py-2.5 lg:px-3 lg:py-6 bg-bg-nav backdrop-blur-xl border border-line rounded-full shadow-soft dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                {NAV_SECTIONS.map((section) => (
                    <NavItem
                        key={section.id}
                        id={section.id}
                        label={section.label}
                        icon={section.icon}
                        active={activeId === section.id}
                    />
                ))}

                <div className="w-px h-6 lg:w-6 lg:h-px bg-line mx-1 lg:my-1" aria-hidden="true" />

                <ThemeToggle />
            </div>
        </nav>
    );
}
