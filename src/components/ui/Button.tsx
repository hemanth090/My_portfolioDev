import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'ghost' | 'icon';

const FOCUS_RING =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

const VARIANTS: Record<Variant, string> = {
    // min-h-11 below lg = the 44px touch-target guideline; desktop stays compact.
    primary: 'px-4 py-2 min-h-11 lg:min-h-0 rounded-control bg-accent text-accent-on text-sm font-semibold hover:opacity-90',
    ghost: 'px-3.5 py-2 min-h-11 lg:min-h-0 rounded-control border border-line text-fg-secondary text-sm font-medium hover:text-fg hover:border-line-hover',
    // Bare glyph, no container: the icon IS the control.
    icon: 'p-3.5 lg:p-1.5 rounded-control text-fg-muted hover:text-accent',
};

interface OwnProps {
    children: ReactNode;
    variant?: Variant;
    className?: string;
}

type LinkProps = OwnProps & { as: 'a' } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof OwnProps>;
type NativeProps = OwnProps & { as?: 'button' } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof OwnProps>;

function classesFor(variant: Variant, className?: string): string {
    return cn(
        'inline-flex items-center justify-center gap-1.5 transition-all duration-fast ease-brand',
        VARIANTS[variant],
        FOCUS_RING,
        className,
    );
}

export default function Button(props: LinkProps | NativeProps) {
    if (props.as === 'a') {
        const { as, children, variant = 'primary', className, ...anchorProps } = props;
        void as;
        return (
            <a className={classesFor(variant, className)} {...anchorProps}>
                {children}
            </a>
        );
    }

    const { as, children, variant = 'primary', className, ...buttonProps } = props;
    void as;
    return (
        <button className={classesFor(variant, className)} {...buttonProps}>
            {children}
        </button>
    );
}
