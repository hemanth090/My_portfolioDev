import { MoonIcon, SunIcon } from '../data/icons'
import { useTheme } from '../lib/useTheme'
import { IconButton } from './ui/Button'
import { Tip } from './ui/Tip'

/** Borderless icon button that flips between light and dark. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <Tip label={`Switch to ${next} mode`}>
      <IconButton
        aria-label={`Switch to ${next} mode`}
        aria-pressed={theme === 'dark'}
        onClick={toggle}
        className="rounded-md"
      >
        {theme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
      </IconButton>
    </Tip>
  )
}
