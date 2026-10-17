import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { useReveal } from '../../lib/useReveal'

export function Section({
  id,
  title,
  index,
  first = false,
  children,
  className,
}: {
  id: string
  title: ReactNode
  index: ReactNode
  first?: boolean
  children: ReactNode
  className?: string
}) {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id={id}
      ref={ref}
      data-reveal
      className={cn(
        'mx-auto max-w-[85rem] px-5 py-16 sm:px-6 lg:px-8',
        !first && 'border-t border-line',
        className,
      )}
    >
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="font-display text-title">{title}</h2>
        <span aria-hidden="true" className="font-mono text-xs text-faint tabular-nums">
          {index}
        </span>
      </div>
      {children}
    </section>
  )
}
