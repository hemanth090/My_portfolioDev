import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'
import { WOLF_FRAME_CLOSED, WOLF_FRAME_OPEN } from './ui/wolfFrames'

type Phase = 'visible' | 'leaving' | 'gone'

/**
 * Roaring-wolf boot animation. The two pixel sprites alternate so the jaw
 * opens and closes; the overlay lifts once the document is loaded and the
 * webfonts have settled (with a minimum run so the roar is actually seen).
 */
export function Preloader() {
  const [phase, setPhase] = useState<Phase>(
    typeof document !== 'undefined' && document.readyState === 'complete' ? 'visible' : 'visible',
  )

  useEffect(() => {
    let cancelled = false
    const minimum = new Promise<void>((resolve) => window.setTimeout(resolve, 1150))
    const fonts = document.fonts?.ready ?? Promise.resolve()

    Promise.all([minimum, fonts])
      .catch(() => undefined)
      .then(() => {
        if (cancelled) return
        setPhase('leaving')
        window.setTimeout(() => {
          if (!cancelled) setPhase('gone')
        }, 320)
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'fixed inset-0 z-[100] grid place-items-center bg-background',
        'transition-opacity duration-300 ease-soft',
        phase === 'leaving' ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      <span className="sr-only">Loading</span>
      <span aria-hidden="true" className="wolf-sprite">
        <i className="wolf-frame-a" style={{ backgroundImage: `url(${WOLF_FRAME_CLOSED})` }} />
        <i className="wolf-frame-b" style={{ backgroundImage: `url(${WOLF_FRAME_OPEN})` }} />
      </span>
    </div>
  )
}
