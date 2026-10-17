import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Tip({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn('group/tip relative inline-flex', className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2',
          'max-w-[min(70vw,18rem)] rounded-sm bg-foreground px-2 py-1 text-center text-xs font-medium text-background',
          'opacity-0 transition-opacity duration-150 ease-soft',
          'group-hover/tip:opacity-100 group-focus-within/tip:opacity-100',
        )}
      >
        {label}
      </span>
    </span>
  )
}
