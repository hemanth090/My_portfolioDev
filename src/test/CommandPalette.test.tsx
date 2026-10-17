import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { CommandPalette } from '../components/CommandPalette'

describe('CommandPalette', () => {
  it('filters to the matching entry and reports the selection', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    render(
      <MemoryRouter>
        <CommandPalette open onOpenChange={onOpenChange} />
      </MemoryRouter>,
    )

    const input = screen.getByRole('combobox')
    await user.type(input, 'linkedin')

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(1)
    expect(options[0]).toHaveTextContent('LinkedIn')

    await user.keyboard('{Enter}')
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('shows an empty state for a non-matching query', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <CommandPalette open onOpenChange={vi.fn()} />
      </MemoryRouter>,
    )
    await user.type(screen.getByRole('combobox'), 'zzzzz')
    expect(screen.getByText('Nothing found')).toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    render(
      <MemoryRouter>
        <CommandPalette open onOpenChange={onOpenChange} />
      </MemoryRouter>,
    )
    await user.keyboard('{Escape}')
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})
