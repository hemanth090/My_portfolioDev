import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionProps {
    id: string;
    /** id of the heading that names this landmark. */
    labelledBy: string;
    children: ReactNode;
    className?: string;
}

/**
 * Every top-level band: a named landmark, a scroll-spy target, and a
 * programmatic focus target with clearance under the fixed rail.
 *
 * Vertical rhythm lives on <main> (space-y-*), not here, so a Section nested
 * inside a grid needs no margin override.
 */
export default function Section({ id, labelledBy, children, className }: SectionProps) {
    return (
        <section
            id={id}
            tabIndex={-1}
            aria-labelledby={labelledBy}
            className={cn(
                'scroll-mt-8 lg:scroll-mt-16 outline-none',
                // A programmatic .focus() only triggers :focus-visible when the
                // last input was a keypress, so mouse users never see the ring
                // but Enter-on-nav does.
                'focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-4 focus-visible:ring-offset-bg',
                className,
            )}
        >
            {children}
        </section>
    );
}
