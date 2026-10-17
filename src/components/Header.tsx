import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { headerSocials, nav, profile } from '../data/content'
import { SearchIcon } from '../data/icons'
import { socialIcons } from '../data/social-icons'
import { cn } from '../lib/cn'
import { useScrollSpy } from '../lib/useScrollSpy'
import { ThemeToggle } from './ThemeToggle'
import { IconButton } from './ui/Button'
import { Kbd } from './ui/Kbd'
import { Logo } from './ui/Logo'
import { Tip } from './ui/Tip'

const NAV_IDS = nav.map((item) => item.id)

export function Header({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { pathname } = useLocation()
  // Re-subscribes on route change: sections are recreated by the router while
  // this header persists, otherwise the spy would watch detached nodes.
  const active = useScrollSpy(NAV_IDS, pathname)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const glideRef = useRef<HTMLSpanElement>(null)
  const [scrolled, setScrolled] = useState(false)

  // Publish the real header height (it wraps to two rows on small screens) so
  // --header-h, the first screen height and the anchor offset never drift.
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const apply = () =>
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    apply()
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(apply) : null
    observer?.observe(el)
    window.addEventListener('resize', apply, { passive: true })
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', apply)
    }
  }, [])

  // Only toggles a shadow — never geometry, so nothing below can shift.
  useEffect(() => {
    let ticking = false
    let raf = 0
    const update = () => {
      setScrolled(window.scrollY > 8)
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

  // Position the animated underline under the active link.
  useLayoutEffect(() => {
    const navEl = navRef.current
    const glide = glideRef.current
    if (!navEl || !glide) return

    const position = () => {
      if (glide.offsetParent === null) return
      const link = navEl.querySelector<HTMLAnchorElement>('a[data-active="true"]')
      if (!link) {
        glide.style.opacity = '0'
        return
      }
      const navRect = navEl.getBoundingClientRect()
      const linkRect = link.getBoundingClientRect()
      glide.style.width = `${linkRect.width}px`
      glide.style.transform = `translateX(${linkRect.left - navRect.left - navEl.clientLeft}px)`
      glide.style.opacity = '1'
    }

    position()
    void document.fonts?.ready.then(position)
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(position) : null
    observer?.observe(navEl)
    window.addEventListener('resize', position, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', position)
    }
  }, [active])

  return (
    <header
      ref={headerRef}
      data-inert-scope
      className={cn(
        'sticky top-0 z-40 bg-background/85 backdrop-blur-[4px]',
        'transition-shadow duration-300 ease-soft',
        scrolled ? 'header-scrolled' : 'shadow-none',
      )}
    >
      <div className="mx-auto flex min-h-16 max-w-[85rem] flex-wrap items-center gap-x-4 gap-y-1 px-5 py-2 sm:px-6 md:py-0 lg:px-8">
        <Link className="brand inline-flex items-center gap-3 font-medium tracking-[-0.02em]" to="/">
          <Logo />
          <span className="hidden text-sm md:inline">{profile.shortName}</span>
        </Link>

        {/* Plain links on small screens (second row, evenly spread) and inline
            from md up — no capsule fills, just a moving underline. */}
        <nav
          ref={navRef}
          aria-label="Primary"
          className="relative order-last flex w-full min-w-0 items-center md:order-none md:ml-4 md:w-auto"
        >
          {nav.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              data-active={active === item.id ? 'true' : undefined}
              aria-current={active === item.id ? 'location' : undefined}
              className={cn(
                'relative inline-flex min-h-8 flex-1 items-center justify-center px-1 text-xs font-medium',
                'whitespace-nowrap text-muted-foreground transition-colors duration-150 ease-soft',
                'hover:text-foreground data-[active=true]:text-foreground',
                'md:flex-none md:px-3 md:text-sm',
              )}
            >
              {item.label}
            </Link>
          ))}
          <span
            ref={glideRef}
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary opacity-0 transition-[transform,width,opacity] duration-300 ease-soft"
          />
        </nav>

        <div className="ml-auto flex items-center gap-0.5">
          <IconButton
            aria-label="Open command palette"
            aria-haspopup="dialog"
            onClick={onOpenPalette}
            className="gap-2 px-2"
          >
            <SearchIcon className="size-4" />
            <Kbd className="max-md:hidden">⌘K</Kbd>
          </IconButton>

          <ThemeToggle />

          <ul className="flex gap-0.5">
            {headerSocials.map((social) => {
              const Icon = socialIcons[social.id]
              return (
                <li key={social.id} className="flex">
                  <Tip label={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-10 items-center justify-center text-muted-foreground transition-[background-color,color,transform] duration-150 ease-soft hover:bg-primary/10 hover:text-foreground active:scale-[0.94]"
                    >
                      <Icon className="size-4" />
                    </a>
                  </Tip>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
