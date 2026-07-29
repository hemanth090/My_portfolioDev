import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ChipProps {
    children: ReactNode;
    as?: ElementType;
    /** 'mono' is the compact technical-keyword form used on project cards. */
    variant?: 'default' | 'mono';
    className?: string;
}

/**
 * The single chip recipe. Replaces the skill pill and the tech tag, which
 * carried the same meaning at two sizes, two radii, and two font families.
 */
export default function Chip({
    children,
    as: Tag = 'span',
    variant = 'default',
    className,
}: ChipProps) {
    return (
        <Tag
            className={cn(
                'inline-flex items-center rounded-full border border-line bg-bg-subtle text-fg-secondary',
                variant === 'mono' ? 'px-2.5 py-1 text-[11px] font-mono' : 'px-3 py-1.5 text-sm',
                className,
            )}
        >
            {children}
        </Tag>
    );
}
