import { useEffect } from 'react'

/**
 * Locks background scroll while a dialog is open.
 *
 * `html { scrollbar-gutter: stable }` permanently reserves the scrollbar
 * track, so hiding overflow does NOT reclaim that space and no padding
 * compensation is needed — adding one double-compensates and shifts the
 * whole page sideways.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const root = document.documentElement
    const previous = root.style.overflow
    root.style.overflow = 'hidden'
    return () => {
      root.style.overflow = previous
    }
  }, [locked])
}
