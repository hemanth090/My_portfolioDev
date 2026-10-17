import { useScrollProgress } from '../lib/useScrollProgress'

export function Progress() {
  const ref = useScrollProgress<HTMLDivElement>()
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="brand-gradient fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{ transform: 'scaleX(0)' }}
    />
  )
}
