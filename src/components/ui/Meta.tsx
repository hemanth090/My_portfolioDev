import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface MetaProps {
    children: ReactNode;
    as?: ElementType;
    /** For panel titles: the id that the panel's aria-labelledby points at. */
    id?: string;
    className?: string;
}

/**
 * The overline / metadata role: dates, labels, and panel titles.
 *
 * Uses text-fg-secondary, never text-fg-muted — at 11px this role sits below
 * the size where the muted token's contrast margin is comfortable.
 */
export default function Meta({ children, as: Tag = 'span', id, className }: MetaProps) {
    return (
        <Tag
            id={id}
            className={cn(
                'text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-secondary',
                className,
            )}
        >
            {children}
        </Tag>
    );
}
