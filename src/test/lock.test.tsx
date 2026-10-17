import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useLockBodyScroll } from '../lib/useLockBodyScroll'

describe('useLockBodyScroll', () => {
  it('locks the scrolling element without padding compensation', () => {
    const { unmount } = renderHook(() => useLockBodyScroll(true))
    expect(document.documentElement.style.overflow).toBe('hidden')
    // `html { scrollbar-gutter: stable }` already reserves the gutter; adding
    // padding here would double-compensate and shift the page sideways.
    expect(document.body.style.paddingRight).toBe('')
    unmount()
    expect(document.documentElement.style.overflow).toBe('')
  })

  it('does nothing while unlocked', () => {
    renderHook(() => useLockBodyScroll(false))
    expect(document.documentElement.style.overflow).toBe('')
  })
})
