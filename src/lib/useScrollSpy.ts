import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in the reading band.
 *
 * `dep` re-subscribes the observer. The spy lives in the persistent layout
 * while sections belong to a route, so without it the observer keeps watching
 * detached nodes after a route change and the highlight silently freezes.
 */
export function useScrollSpy(ids: readonly string[], dep?: unknown): string | null {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) {
      // No sections on this route (e.g. a case study) — clear the highlight.
      // oxlint-disable-next-line react/set-state-in-effect
      setActive(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, dep])
  return active
}
