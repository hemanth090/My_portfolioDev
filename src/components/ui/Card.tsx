import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Card({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg bg-surface p-5 shadow-card',
        'transition-[box-shadow,transform] duration-300 ease-soft',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
