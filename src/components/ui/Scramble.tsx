import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../lib/useReducedMotion'

export type ScrambleSegment = { text: string; className?: string }

/** Reveal is quantised into discrete steps so it reads as digital, not a blur. */
const STEPS = 10
const DURATION = 900

const UPPER = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
const LOWER = 'abcdefghijkmnopqrstuvwxyz'
const DIGITS = '0123456789'

/**
 * Replaces a character with a random glyph of the *same case and kind*.
 * Matching case keeps glyph widths close to the original, so the animated
 * line never rewraps or jitters. Spaces and punctuation are left alone.
 */
function noiseFor(ch: string): string {
  if (ch >= '0' && ch <= '9') return DIGITS[(Math.random() * DIGITS.length) | 0]!
  if (ch >= 'A' && ch <= 'Z') return UPPER[(Math.random() * UPPER.length) | 0]!
  if (ch >= 'a' && ch <= 'z') return LOWER[(Math.random() * LOWER.length) | 0]!
  return ch
}

/**
 * Pixel-scramble reveal.
 *
 * `segments` are scrambled as ONE continuous left-to-right sweep while keeping
 * their own styling (so an accent phrase stays accented). The final text is
 * rendered twice — an invisible copy that reserves the exact box, and an
 * absolutely positioned animated overlay — so the animation can never reflow.
 */
export function Scramble({
  text,
  segments,
  decorative = false,
  block = false,
  className,
}: {
  text?: string
  segments?: ScrambleSegment[]
  /** Decorative strings (e.g. "06") skip the screen-reader duplicate. */
  decorative?: boolean
  /** Use block layout for multi-line copy such as paragraphs. */
  block?: boolean
  className?: string
}) {
  const reduced = useReducedMotion()
  const hostRef = useRef<HTMLSpanElement>(null)

  const parts = useMemo<ScrambleSegment[]>(
    () => segments ?? [{ text: text ?? '' }],
    [segments, text],
  )
  const plain = useMemo(() => parts.map((part) => part.text).join(''), [parts])
  const offsets = useMemo(
    () =>
      parts.map((_, index) =>
        parts.slice(0, index).reduce((total, part) => total + part.text.length, 0),
      ),
    [parts],
  )

  const [display, setDisplay] = useState(plain)

  useEffect(() => {
    if (reduced) {
      // Recover the real text if reduced-motion turns on mid-animation.
      // oxlint-disable-next-line react/set-state-in-effect
      setDisplay(plain)
      return
    }
    const host = hostRef.current
    if (!host || typeof IntersectionObserver === 'undefined') return

    let raf = 0
    let cancelled = false
    let lastStep = -1

    const run = () => {
      const length = plain.length
      const start = performance.now()

      const frame = (now: number) => {
        if (cancelled) return
        const progress = Math.min((now - start) / DURATION, 1)
        const step = Math.round(progress * STEPS)

        if (step !== lastStep) {
          lastStep = step
          const settled = Math.floor((step / STEPS) * (length + 3))
          let out = ''
          for (let i = 0; i < length; i++) {
            const ch = plain[i]!
            out += i < settled ? ch : noiseFor(ch)
          }
          setDisplay(step >= STEPS ? plain : out)
        }

        if (progress < 1) raf = requestAnimationFrame(frame)
        else setDisplay(plain)
      }
      raf = requestAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.disconnect()
            run()
          }
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(host)

    return () => {
      cancelled = true
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [plain, reduced])

  const renderSegments = (slice: (start: number, end: number) => string) =>
    parts.map((part, index) => {
      const from = offsets[index]!
      return (
        <span key={index} className={part.className}>
          {slice(from, from + part.text.length)}
        </span>
      )
    })

  return (
    <span ref={hostRef} className={cn('relative', block ? 'block' : 'inline-block', className)}>
      {decorative ? null : <span className="sr-only">{plain}</span>}
      {/* reserves the exact final box so animated glyphs cannot shift layout */}
      <span aria-hidden="true" className="invisible">
        {renderSegments((start, end) => plain.slice(start, end))}
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0">
        {renderSegments((start, end) => display.slice(start, end))}
      </span>
    </span>
  )
}
