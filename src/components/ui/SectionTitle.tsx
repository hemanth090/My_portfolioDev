import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import IconBox from './IconBox';

interface SectionTitleProps {
    children: ReactNode;
    icon: LucideIcon;
    /** Referenced by the enclosing Section's aria-labelledby. */
    id: string;
}

/**
 * H2 role from the type scale: 20px / 600 / 0.08em uppercase.
 *
 * The id is required rather than optional: with every section on one page,
 * each landmark needs a distinct accessible name, and pointing
 * aria-labelledby at the visible heading beats duplicating it in aria-label.
 */
export default function SectionTitle({ children, icon, id }: SectionTitleProps) {
    return (
        <div className="flex items-center gap-3 mb-8">
            <IconBox icon={icon} />
            <h2
                id={id}
                className="text-xl font-semibold uppercase tracking-[0.08em] leading-tight text-fg-secondary"
            >
                {children}
            </h2>
        </div>
    );
}
