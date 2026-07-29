import type { ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/cn';

interface RevealProps {
    children: ReactNode;
    /** Stagger position; 80ms per step. */
    index?: number;
    as?: ElementType;
    className?: string;
}

/**
 * The single authored motion moment: section entrance.
 *
 * Replaces framer-motion's whileInView. Reduced motion needs no special case
 * here — the global rule in index.css zeroes animation-duration, and the
 * keyframe's `forwards` fill still resolves opacity to 1.
 */
export default function Reveal({
    children,
    index = 0,
    as: Tag = 'div',
    className,
}: RevealProps) {
    const { ref, inView } = useInView();

    return (
        <Tag
            ref={ref}
            // opacity-0 holds until visible; once the animation class lands its
            // origin outranks the utility, so the fill wins the cascade.
            className={cn('opacity-0', inView && 'animate-fade-in-up', className)}
            style={inView ? { animationDelay: `${index * 80}ms` } : undefined}
        >
            {children}
        </Tag>
    );
}
