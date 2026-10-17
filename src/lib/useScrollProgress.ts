import { useEffect, useRef } from 'react'

/** Drives a top progress bar with a single rAF-throttled passive scroll listener. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let docHeight = 0
    let ticking = false

    const measure = () => {
      docHeight = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
    }
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      el.style.transform = `scaleX(${docHeight > 0 ? Math.min(y / docHeight, 1) : 0})`
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    const remeasure = () => {
      measure()
      onScroll()
    }

    measure()
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', remeasure, { passive: true })
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(remeasure) : null
    ro?.observe(document.body)
    void document.fonts?.ready.then(remeasure)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', remeasure)
      ro?.disconnect()
    }
  }, [])
  return ref
}
