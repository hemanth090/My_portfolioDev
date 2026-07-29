import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

/** Three icon sizes only, replacing the previous ad-hoc 16/18/20/24 spread. */
const SIZES = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
} as const;

interface IconBoxProps {
    icon: LucideIcon;
    size?: keyof typeof SIZES;
    className?: string;
}

/** An icon in a bordered container. Used by section titles. */
export default function IconBox({ icon: Icon, size = 'md', className }: IconBoxProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center justify-center rounded-control border border-line bg-bg-muted p-2 text-fg-secondary',
                className,
            )}
        >
            <Icon className={SIZES[size]} aria-hidden="true" />
        </span>
    );
}
