import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'ghost' | 'icon';

const FOCUS_RING =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-4 focus-visible:ring-offset-bg';

const VARIANTS: Record<Variant, string> = {
    primary: 'px-8 py-3.5 rounded-full bg-fg text-bg text-sm font-semibold hover:opacity-90',
    ghost: 'px-5 py-2.5 rounded-full border border-line text-fg-secondary hover:text-fg hover:border-line-hover',
    icon: 'p-3.5 rounded-full border border-line text-fg-secondary hover:text-fg hover:border-line-hover bg-bg-subtle sm:bg-transparent',
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
        'inline-flex items-center justify-center gap-2 transition-all duration-base ease-brand',
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
