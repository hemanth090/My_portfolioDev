import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { EMAIL, projects, sectionKeywords, socials } from '../data/content'
import { ExternalLinkIcon, HashIcon } from '../data/icons'
import { socialIcons } from '../data/social-icons'
import { cn } from '../lib/cn'
import { useLockBodyScroll } from '../lib/useLockBodyScroll'
import { Kbd } from './ui/Kbd'

type PaletteItem = {
  id: string
  label: string
  hint: string
  href: string
  icon: ReactNode
  keywords: string
  external?: boolean
}

const SECTION_LABELS: Record<string, string> = {
  about: 'About',
  work: "Things I've built",
  experience: 'Experience',
  skills: 'Skills',
  background: 'Education & certificates',
  contact: "Let's talk",
}

function ProjectIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  )
}

function buildItems(): PaletteItem[] {
  const sections: PaletteItem[] = Object.keys(SECTION_LABELS).map((id) => ({
    id,
    label: SECTION_LABELS[id]!,
    hint: 'Section',
    href: `/#${id}`,
    icon: <HashIcon className="size-4" />,
    keywords: sectionKeywords[id] ?? '',
  }))

  const work: PaletteItem[] = projects.map((project) => ({
    id: `work-${project.slug}`,
    label: project.name,
    hint: 'Case study',
    href: `/work/${project.slug}`,
    icon: <ProjectIcon />,
    keywords: `${project.subtitle} ${project.stack.join(' ')}`,
  }))

  const links: PaletteItem[] = [
    {
      id: 'email',
      label: 'Email',
      hint: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: <socialIcons.mail className="size-4" />,
      keywords: 'mail copy contact',
    },
    ...socials
      .filter((s) => s.id !== 'mail')
      .map((s) => ({
        id: s.id,
        label: s.label,
        hint:
          s.id === 'github' ? 'hemanth090' : s.id === 'linkedin' ? 'hemanthkokkonda' : 'HemanthKokkonda',
        href: s.href,
        icon: (() => {
          const Icon = socialIcons[s.id]
          return <Icon className="size-4" />
        })(),
        keywords: s.id === 'github' ? 'code repos source' : s.id === 'linkedin' ? 'network profile' : 'twitter social',
        external: true,
      })),
  ]

  return [...sections, ...work, ...links]
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;',
  )
}

function Highlight({ text, query }: { text: string; query: string }) {
  const safe = escapeHtml(text)
  if (!query) return <>{safe}</>
  const index = safe.toLowerCase().indexOf(escapeHtml(query).toLowerCase())
  if (index === -1) return <>{safe}</>
  const end = index + query.length
  return (
    <>
      {safe.slice(0, index)}
      <mark className="bg-transparent font-bold text-primary-ink">{safe.slice(index, end)}</mark>
      {safe.slice(end)}
    </>
  )
}

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const navigate = useNavigate()
  const items = useMemo(() => buildItems(), [])
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useLockBodyScroll(open)

  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    if (terms.length === 0) return items
    return items.filter((item) => {
      const hay = `${item.label} ${item.hint} ${item.keywords}`.toLowerCase()
      return terms.every((t) => hay.includes(t))
    })
  }, [items, query])

  // background inert + focus management
  useEffect(() => {
    const scopes = Array.from(document.querySelectorAll<HTMLElement>('[data-inert-scope]'))
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement | null
      scopes.forEach((el) => el.setAttribute('inert', ''))
      const id = window.setTimeout(() => inputRef.current?.focus(), 0)
      return () => window.clearTimeout(id)
    }
    scopes.forEach((el) => el.removeAttribute('inert'))
    return undefined
  }, [open])

  useEffect(() => {
    if (!open) return
    return () => {
      const scopes = Array.from(document.querySelectorAll<HTMLElement>('[data-inert-scope]'))
      scopes.forEach((el) => el.removeAttribute('inert'))
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onOpenChange(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  useEffect(() => {
    if (!open) return
    const row = listRef.current?.children[active] as HTMLElement | undefined
    row?.scrollIntoView({ block: 'nearest' })
  }, [active, open, filtered.length])

  function close() {
    onOpenChange(false)
  }

  function choose(item: PaletteItem) {
    close()
    if (item.external) {
      window.open(item.href, '_blank', 'noopener')
      return
    }
    if (item.href.startsWith('mailto:')) {
      window.location.href = item.href
      return
    }
    navigate(item.href)
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Tab') {
      event.preventDefault()
      inputRef.current?.focus()
      return
    }
    if (!filtered.length) return
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => Math.min(i + 1, filtered.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActive(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setActive(filtered.length - 1)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const item = filtered[active]
      if (item) choose(item)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-[rgb(23_17_31_/_0.45)] px-4 pt-[12vh] backdrop-blur-[4px] animate-fade-in"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="palette-label"
        className="w-full max-w-[34rem] overflow-hidden rounded-xl bg-surface shadow-lift animate-pop-in"
      >
        <h2 id="palette-label" className="sr-only">
          Command palette
        </h2>
        <div className="flex items-center gap-3 border-b border-line p-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-4 text-faint"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <label className="sr-only" htmlFor="palette-input">
            Search sections and links
          </label>
          <input
            id="palette-input"
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActive(0)
            }}
            onKeyDown={onKeyDown}
            placeholder="Jump to a section or link…"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            role="combobox"
            aria-expanded={filtered.length > 0}
            aria-controls="palette-list"
            aria-autocomplete="list"
            aria-activedescendant={filtered[active] ? `palette-opt-${active}` : undefined}
            aria-describedby="palette-help"
            className="min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-faint"
          />
          <Kbd>Esc</Kbd>
        </div>

        <ul id="palette-list" ref={listRef} role="listbox" aria-label="Results" className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <li role="option" aria-disabled="true" className="p-6 text-center text-sm text-faint">
              Nothing found
            </li>
          ) : (
            filtered.map((item, index) => (
              <li
                key={item.id}
                id={`palette-opt-${index}`}
                role="option"
                aria-selected={index === active}
                onMouseMove={() => setActive(index)}
                onClick={() => choose(item)}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-sm p-3 text-foreground',
                  'transition-colors duration-150 ease-soft',
                  index === active ? 'bg-primary/10' : 'hover:bg-primary/10',
                )}
              >
                <span className="text-faint">{item.icon}</span>
                <span className="text-sm font-medium">
                  <Highlight text={item.label} query={query.trim()} />
                </span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  {item.external ? <ExternalLinkIcon className="size-3" /> : null}
                  {item.hint}
                </span>
              </li>
            ))
          )}
        </ul>

        <div
          id="palette-help"
          className="flex justify-between gap-4 border-t border-line px-4 py-3 font-mono text-xs text-faint"
        >
          <span>↑↓ move</span>
          <span>↵ open</span>
          <span>Esc close</span>
        </div>
      </div>
    </div>
  )
}
