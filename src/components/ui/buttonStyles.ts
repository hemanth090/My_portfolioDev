import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'md' | 'sm'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-semibold leading-snug ' +
  'cursor-pointer select-none transition-[background-color,color,transform,box-shadow,border-color] ' +
  'duration-150 ease-soft disabled:pointer-events-none disabled:opacity-50'

const sizes: Record<ButtonSize, string> = {
  md: 'min-h-10 px-4 text-sm sm:px-6',
  sm: 'min-h-8 px-3 text-sm',
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-foreground text-background shadow-btn hover:bg-foreground/85 hover:-translate-y-0.5 hover:shadow-btn-lift active:translate-y-0',
  outline: 'bg-primary/10 text-foreground hover:bg-primary/20',
  ghost: 'rounded-lg bg-transparent text-muted-foreground hover:bg-primary/10 hover:text-foreground',
}

export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return cn(base, sizes[size], variants[variant], className)
}
