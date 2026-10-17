import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BackToTop } from '../components/BackToTop'
import { Header } from '../components/Header'
import { Preloader } from '../components/Preloader'
import { Progress } from '../components/Progress'
import { ScrollToHash } from '../components/ScrollToHash'
import { ToastProvider } from '../components/Toast'
import { Footer } from '../components/sections/Footer'

const CommandPalette = lazy(() =>
  import('../components/CommandPalette').then((m) => ({ default: m.CommandPalette })),
)

export function Layout() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const openPalette = useCallback(() => setPaletteOpen(true), [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && !event.altKey && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <ToastProvider>
      <Preloader />
      <Progress />
      <ScrollToHash />
      <Header onOpenPalette={openPalette} />
      <main id="main" data-inert-scope>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      {paletteOpen ? (
        <Suspense fallback={null}>
          <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
        </Suspense>
      ) : null}
    </ToastProvider>
  )
}
