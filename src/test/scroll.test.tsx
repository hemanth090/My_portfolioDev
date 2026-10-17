import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ScrollToHash } from '../components/ScrollToHash'

function setup(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ScrollToHash />
      <div id="work">Work</div>
    </MemoryRouter>,
  )
}

describe('ScrollToHash', () => {
  it('scrolls to the target section when the URL carries a hash', () => {
    setup('/#work')
    expect(document.getElementById('work')!.scrollIntoView).toHaveBeenCalled()
  })

  it('resets to the top instantly when there is no hash', () => {
    setup('/')
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 0, behavior: 'instant' }),
    )
  })

  it('falls back to the top rather than throwing for an unknown hash', () => {
    setup('/#nope')
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 0, behavior: 'instant' }),
    )
  })
})
