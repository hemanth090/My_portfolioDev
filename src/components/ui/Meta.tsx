import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface MetaProps {
    children: ReactNode;
    as?: ElementType;
    /** For panel titles: the id that the panel's aria-labelledby points at. */
    id?: string;
    /** 'accent' marks panel titles - the scarce cobalt moments of the board. */
    tone?: 'default' | 'accent';
    className?: string;
}

/**
 * The overline / metadata role: dates stay quiet ink; panel titles carry the
 * accent. Never text-fg-muted - at 11px this role sits below the size where
 * the muted token's contrast margin is comfortable.
 */
export default function Meta({ children, as: Tag = 'span', id, tone = 'default', className }: MetaProps) {
    return (
        <Tag
            id={id}
            className={cn(
                'text-[11px] font-semibold uppercase tracking-[0.12em]',
                tone === 'accent' ? 'text-accent' : 'text-fg-secondary',
                className,
            )}
        >
            {children}
        </Tag>
    );
}
