import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type Props = HTMLAttributes<HTMLSpanElement> & { muted?: boolean; dot?: boolean }

export function Badge({ muted, dot, className, children, ...rest }: Props) {
  return (
    <span
      className={cn(
        'inline-flex h-6 items-center gap-2 whitespace-nowrap rounded-sm px-3 font-mono text-xs font-medium',
        muted ? 'bg-muted text-muted-foreground' : 'bg-surface text-muted-foreground shadow-card',
        className,
      )}
      {...rest}
    >
      {dot ? <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" /> : null}
      {children}
    </span>
  )
}
