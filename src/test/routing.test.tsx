import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { CaseStudy } from '../routes/CaseStudy'
import { Home } from '../routes/Home'
import { Layout } from '../routes/Layout'
import { NotFound } from '../routes/NotFound'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  )
}

describe('routing', () => {
  it('renders the home page and sets its document title', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/hold up/i)
    expect(document.title).toBe('Naveen Hemanth Kokkonda · AI Engineer')
  })

  it('renders a case study for a known slug with its own title', () => {
    renderAt('/work/articulate')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Articulate')
    expect(document.title).toBe('Articulate · Naveen Hemanth Kokkonda')
  })

  it('exposes prev/next project navigation on a case study', () => {
    renderAt('/work/scout')
    expect(screen.getByRole('link', { name: /Articulate/ })).toHaveAttribute('href', '/work/articulate')
    expect(screen.getByRole('link', { name: /TOON Studio/ })).toHaveAttribute('href', '/work/toon-studio')
  })

  it('404s an unknown project slug', () => {
    renderAt('/work/does-not-exist')
    expect(screen.getByText(/wandered off/i)).toBeInTheDocument()
  })

  it('404s an unknown path', () => {
    renderAt('/nonsense')
    expect(screen.getByText(/wandered off/i)).toBeInTheDocument()
  })
})
