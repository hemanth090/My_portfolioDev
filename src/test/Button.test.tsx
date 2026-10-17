import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '../components/ui/Button'

describe('Button', () => {
  it('renders an anchor when href is provided', () => {
    render(<Button href="https://github.com/hemanth090">See my code</Button>)
    const link = screen.getByRole('link', { name: 'See my code' })
    expect(link).toHaveAttribute('href', 'https://github.com/hemanth090')
  })

  it('renders a button with type-safe defaults', () => {
    render(<Button variant="outline">Copy</Button>)
    const button = screen.getByRole('button', { name: 'Copy' })
    expect(button.className).toContain('rounded-none')
  })
})
