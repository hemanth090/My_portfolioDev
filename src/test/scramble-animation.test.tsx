import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Scramble } from '../components/ui/Scramble'

function overlayOf(container: HTMLElement): HTMLElement {
  // spans: [invisible reserve, animated overlay]
  const spans = container.querySelectorAll('span[aria-hidden="true"]')
  return spans[spans.length - 1] as HTMLElement
}

describe('Scramble', () => {
  afterEach(() => vi.useRealTimers())

  it('exposes the real text to assistive tech', () => {
    const { container } = render(<Scramble text="naveenhemanth4@gmail.com" />)
    expect(container.querySelector('.sr-only')?.textContent).toBe('naveenhemanth4@gmail.com')
  })

  it('skips the screen-reader duplicate when decorative', () => {
    const { container } = render(<Scramble text="06" decorative />)
    expect(container.querySelector('.sr-only')).toBeNull()
  })

  it('only ever shows a glyph of the same case/kind, and settles exactly', () => {
    vi.useFakeTimers()
    const text = 'Ab1 c!'
    const { container } = render(<Scramble text={text} />)
    const overlay = overlayOf(container)

    act(() => {
      vi.advanceTimersByTime(250)
    })

    const mid = overlay.textContent ?? ''
    expect(mid).toHaveLength(text.length)
    for (let i = 0; i < text.length; i++) {
      const original = text[i]!
      const shown = mid[i]!
      if (shown === original) continue
      if (original >= 'a' && original <= 'z') expect(shown).toMatch(/[a-z]/)
      else if (original >= 'A' && original <= 'Z') expect(shown).toMatch(/[A-Z]/)
      else if (original >= '0' && original <= '9') expect(shown).toMatch(/[0-9]/)
      // spacing and punctuation are never replaced, so the line keeps its shape
      else expect(shown).toBe(original)
    }

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(overlay.textContent).toBe(text)
  })

  it('scrambles multiple segments as one sweep inside a single reserved box', () => {
    vi.useFakeTimers()
    const { container } = render(
      <Scramble
        block
        segments={[{ text: 'Build ' }, { text: 'fast', className: 'text-primary' }, { text: '.' }]}
      />,
    )
    const reserved = container.querySelector('span.invisible')!
    const overlay = overlayOf(container)

    expect(reserved.textContent).toBe('Build fast.')
    expect(overlay.textContent).toBe('Build fast.')
    expect(overlay.className).toContain('absolute')
  })
})
