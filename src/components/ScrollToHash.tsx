import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { useReducedMotion } from '../lib/useReducedMotion'

/** Scroll offset per history entry, so browser Back returns you where you were. */
const positions = new Map<string, number>()

/**
 * Owns scroll position: honours `#hash` targets, restores the offset when the
 * user navigates back/forward (history.scrollRestoration is 'manual'), and
 * resets to the top on a fresh push — always instantly, never animated, so
 * route changes don't perform a long smooth slide.
 */
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()
  const reduced = useReducedMotion()

  // Track this entry's offset while the user scrolls, so POP can restore it.
  useEffect(() => {
    const save = () => positions.set(key, window.scrollY)
    save()
    window.addEventListener('scroll', save, { passive: true })
    return () => {
      save()
      window.removeEventListener('scroll', save)
    }
  }, [key])

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' })
        return
      }
    }

    if (navigationType === 'POP') {
      const saved = positions.get(key)
      if (saved !== undefined) {
        window.scrollTo({ top: saved, left: 0, behavior: 'instant' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, key, navigationType, reduced])

  return null
}
