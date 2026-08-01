import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ChipProps {
    children: ReactNode;
    as?: ElementType;
    /** Board density: compact is the default; 'md' for roomier contexts. */
    size?: 'sm' | 'md';
    className?: string;
}

/** The single chip recipe. One face for every keyword on the page. */
export default function Chip({ children, as: Tag = 'span', size = 'sm', className }: ChipProps) {
    return (
        <Tag
            className={cn(
                'inline-flex items-center rounded-md border border-line bg-bg-muted text-fg-secondary font-medium min-w-0 [overflow-wrap:anywhere]',
                size === 'sm' ? 'px-2 py-1 text-xs lg:px-1.5 lg:py-0.5 lg:text-[11px]' : 'px-2.5 py-1 text-xs',
                className,
            )}
        >
            {children}
        </Tag>
    );
}
