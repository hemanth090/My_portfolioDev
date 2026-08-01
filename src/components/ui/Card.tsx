import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps {
    children: ReactNode;
    as?: ElementType;
    /** Adds hover border shift + shadow. Omit for static panels. */
    interactive?: boolean;
    padding?: 'none' | 'sm' | 'md';
    className?: string;
}

/**
 * The single panel recipe: a white surface on the tinted page (inverted in
 * dark), 1px border, 12px radius. Panels never nest.
 */
export default function Card({
    children,
    as: Tag = 'div',
    interactive = false,
    padding = 'md',
    className,
}: CardProps) {
    return (
        <Tag
            className={cn(
                'rounded-card border border-line bg-surface',
                padding === 'md' && 'p-4',
                padding === 'sm' && 'p-3',
                interactive &&
                    'transition-all duration-base ease-brand hover:border-line-hover hover:shadow-soft',
                className,
            )}
        >
            {children}
        </Tag>
    );
}
