import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Chip({ className, children, ...rest }: HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn(
        'rounded-sm bg-primary/10 px-2 py-1 font-mono text-xs font-medium text-muted-foreground',
        className,
      )}
      {...rest}
    >
      {children}
    </li>
  )
}

export function ChipList({ className, children, ...rest }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn('flex flex-wrap gap-1', className)} {...rest}>
      {children}
    </ul>
  )
}
