import type { LucideIcon } from 'lucide-react';
import { goToSection } from '../../lib/scroll';
import { cn } from '../../lib/cn';

interface NavItemProps {
    id: string;
    label: string;
    icon: LucideIcon;
    active: boolean;
}

/**
 * A real anchor, not a button: middle-click, "copy link address", and
 * open-in-new-tab all keep working. The click handler only intercepts the
 * default jump so the scroll can be smooth and focus can be moved.
 */
export default function NavItem({ id, label, icon: Icon, active }: NavItemProps) {
    return (
        <a
            href={`#${id}`}
            aria-label={label}
            aria-current={active ? 'true' : undefined}
            onClick={(event) => {
                // Let modified clicks fall through to the browser.
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                event.preventDefault();
                goToSection(id);
            }}
            className={cn(
                'relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full',
                'transition-colors duration-base ease-brand',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg',
                active
                    ? 'bg-fg text-bg shadow-soft'
                    : 'text-fg-secondary hover:bg-bg-muted hover:text-fg',
            )}
        >
            <Icon className="w-5 h-5" aria-hidden="true" />
        </a>
    );
}
