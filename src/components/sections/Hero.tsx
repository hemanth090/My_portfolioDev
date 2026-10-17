import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Scramble } from '../ui/Scramble'
import { useClipboard } from '../../lib/useClipboard'
import { useToast } from '../../lib/toast'
import { EMAIL, facts, profile, socials } from '../../data/content'
import { GitHubIcon } from '../../data/icons'

export function Hero() {
  const { copied, copy } = useClipboard()
  const { notify } = useToast()
  const github = socials.find((s) => s.id === 'github')!.href

  async function onCopy() {
    const ok = await copy(EMAIL)
    notify(ok ? 'Email copied to clipboard' : `Copy failed. Email: ${EMAIL}`)
  }

  return (
    <section
      id="top"
      className="first-screen mx-auto flex max-w-[85rem] flex-col justify-center px-5 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <div className="flex flex-col items-start justify-center gap-6 rounded-lg bg-surface p-8 shadow-card transition-shadow duration-300 ease-soft hover:shadow-lift lg:col-span-4 lg:row-span-2">
          <Badge dot>{profile.availability}</Badge>
          {/* Pixel-scramble headline: one continuous sweep, accent phrase kept. */}
          <h1 className="font-display text-[2rem] leading-tight sm:text-[2.5rem] lg:text-display">
            <Scramble
              block
              segments={[
                { text: profile.headline[0] },
                { text: profile.headline[1], className: 'text-primary' },
                { text: profile.headline[2] },
              ]}
            />
          </h1>
          <p className="max-w-[48ch] text-base text-muted-foreground sm:text-lg">{profile.lead}</p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={onCopy} className="min-w-32">
              {copied ? 'Copied' : 'Copy email'}
            </Button>
            <Button variant="outline" href={github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="size-4" />
              See my code
            </Button>
          </div>
        </div>

        <aside className="flex flex-col justify-center gap-4 rounded-lg bg-gradient-to-br from-primary-soft to-surface p-8 shadow-card lg:col-span-2 lg:row-span-2">
          <span className="avatar relative block size-32 flex-none">
            <img
              src="/avatar.jpg"
              alt="Portrait of Naveen Hemanth Kokkonda"
              width={460}
              height={460}
              loading="eager"
              decoding="async"
              className="size-full object-cover"
            />
            <span aria-hidden="true" className="avatar-tint" />
          </span>
          <p className="font-mono text-lg font-bold tracking-[-0.02em]">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
        </aside>

        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col justify-center gap-2 rounded-lg bg-surface p-8 shadow-card lg:col-span-2"
          >
            <span className="font-mono text-xs tracking-[0.08em] text-faint uppercase">{fact.label}</span>
            <span className="text-sm font-medium">{fact.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
