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
 * The single card recipe: square corners and a crisp 3px double border - the
 * retro register's signature frame. (border-double needs >=3px to actually
 * draw two lines.)
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
                'rounded-none border-[3px] border-double border-line bg-bg-subtle',
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
