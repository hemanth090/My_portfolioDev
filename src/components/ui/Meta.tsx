import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface MetaProps {
    children: ReactNode;
    as?: ElementType;
    className?: string;
}

/**
 * The overline / metadata role. Replaces five near-identical recipes that
 * differed only in 10px-vs-12px and tracking-widest-vs-[0.2em].
 *
 * Uses text-fg-secondary, never text-fg-muted: muted on the dark background is
 * 4.9:1, which only clears WCAG AA at >=14px, and this role is 11px.
 */
export default function Meta({ children, as: Tag = 'span', className }: MetaProps) {
    return (
        <Tag
            className={cn(
                'text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-secondary',
                className,
            )}
        >
            {children}
        </Tag>
    );
}
