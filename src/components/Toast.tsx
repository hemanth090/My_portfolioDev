import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { CheckIcon } from '../data/icons'
import { cn } from '../lib/cn'
import { ToastContext } from '../lib/toast'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const hideTimer = useRef<number | null>(null)
  const clearTimer = useRef<number | null>(null)

  const notify = useCallback((next: string) => {
    setMessage(next)
    setVisible(true)
    if (hideTimer.current !== null) window.clearTimeout(hideTimer.current)
    if (clearTimer.current !== null) window.clearTimeout(clearTimer.current)
    hideTimer.current = window.setTimeout(() => {
      setVisible(false)
      clearTimer.current = window.setTimeout(() => setMessage(null), 240)
    }, 2200)
  }, [])

  useEffect(
    () => () => {
      if (hideTimer.current !== null) window.clearTimeout(hideTimer.current)
      if (clearTimer.current !== null) window.clearTimeout(clearTimer.current)
    },
    [],
  )

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={cn(
          'fixed left-1/2 z-[90] inline-flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2',
          'rounded-sm bg-foreground px-4 py-3 text-sm font-medium text-background shadow-lift',
          'bottom-[calc(2rem+env(safe-area-inset-bottom))]',
          'transition-[opacity,transform] duration-300 ease-soft',
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
        )}
      >
        <CheckIcon className="size-4" />
        <span>{message}</span>
      </div>
    </ToastContext.Provider>
  )
}
