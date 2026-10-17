import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Kbd({ className, children, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        'inline-flex min-w-6 items-center justify-center rounded-sm bg-muted px-1 font-mono text-xs font-medium text-muted-foreground',
        className,
      )}
      {...rest}
    >
      {children}
    </kbd>
  )
}
