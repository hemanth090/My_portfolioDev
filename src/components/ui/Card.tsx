import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps {
    children: ReactNode;
    as?: ElementType;
    /** Adds hover lift and border shift. Omit for static content. */
    interactive?: boolean;
    padding?: 'none' | 'sm' | 'md';
    className?: string;
}

/**
 * The single card recipe. Replaces four divergent inline recipes that used
 * three different radii and three different transition durations.
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
                'rounded-card border border-line bg-bg-subtle',
                padding === 'md' && 'p-6',
                padding === 'sm' && 'p-4',
                interactive &&
                    'transition-all duration-base ease-brand hover:border-line-hover hover:-translate-y-0.5 hover:shadow-soft',
                className,
            )}
        >
            {children}
        </Tag>
    );
}
