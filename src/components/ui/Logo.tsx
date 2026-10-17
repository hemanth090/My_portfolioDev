import { cn } from '../../lib/cn'

/** The wolf mark itself, sized by the caller. */
export function WolfMark({ className }: { className?: string }) {
  return (
    <svg className={cn('wolf', className)} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path className="wolf-ear wolf-ear-l" d="M6 22 8 4 22 13Z" />
      <path className="wolf-ear wolf-ear-r" d="M42 22 40 4 26 13Z" />
      <path className="wolf-head" d="M24 10 40 20 34.5 25 32 32 16 32 13.5 25 8 20Z" />
      <path className="wolf-eye" d="M14 21 20 23.5 14 25Z" />
      <path className="wolf-eye" d="M34 21 28 23.5 34 25Z" />
      <path className="wolf-nose" d="M22 29.6 26 29.6 24 32.4Z" />
      <path className="wolf-mouth" d="M16.5 32.5 31.5 32.5 28 39 20 39Z" />
      <path className="wolf-fang" d="M18.4 32.5 20.4 32.5 19.4 36.6Z" />
      <path className="wolf-fang" d="M27.6 32.5 29.6 32.5 28.6 36.6Z" />
      <g className="wolf-jaw">
        <path className="wolf-face" d="M16.5 32.5 31.5 32.5 28.5 39.5 19.5 39.5Z" />
        <path className="wolf-fang" d="M20.6 38.4 22.2 38.4 21.4 34.8Z" />
        <path className="wolf-fang" d="M25.8 38.4 27.4 38.4 26.6 34.8Z" />
      </g>
    </svg>
  )
}

/** Header lockup: the mark inside its clickable tile. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('grid size-10 flex-none place-items-center text-primary', className)}
    >
      <WolfMark className="size-6" />
    </span>
  )
}
