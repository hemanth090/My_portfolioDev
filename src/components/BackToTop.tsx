import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '../data/icons'
import { IconButton } from './ui/Button'
import { Tip } from './ui/Tip'
import { useReducedMotion } from '../lib/useReducedMotion'
import { cn } from '../lib/cn'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    let ticking = false
    let raf = 0
    const update = () => {
      setVisible(window.scrollY > 600)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      data-inert-scope
      className={cn(
        'fixed right-6 z-[45] bottom-[calc(1.5rem+env(safe-area-inset-bottom))]',
        'transition-[opacity,transform] duration-300 ease-soft',
        visible ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <Tip label="Back to top">
        <IconButton
          aria-label="Back to top"
          aria-hidden={!visible}
          tabIndex={visible ? 0 : -1}
          onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
          className="size-10 rounded-none bg-surface shadow-card ring-1 ring-line/70"
        >
          <ArrowUpIcon className="size-4" />
        </IconButton>
      </Tip>
    </div>
  )
}
