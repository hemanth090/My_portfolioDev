import { EMAIL, headerSocials, profile } from '../../data/content'
import { CopyIcon } from '../../data/icons'
import { socialIcons } from '../../data/social-icons'
import { useClipboard } from '../../lib/useClipboard'
import { Button } from '../ui/Button'
import { Scramble } from '../ui/Scramble'
import { Tip } from '../ui/Tip'
import { useToast } from '../../lib/toast'
import { Section } from './Section'

const INTRO =
  "If you're building something in the AI space and want someone who can carry it from prototype to something people actually rely on, I'd love to hear about it."

export function Contact() {
  const { copy } = useClipboard()
  const { notify } = useToast()

  async function onCopy() {
    const ok = await copy(EMAIL)
    notify(ok ? 'Email copied to clipboard' : `Copy failed. Email: ${EMAIL}`)
  }

  return (
    <Section id="contact" title={<Scramble text="Let's talk" />} index={<Scramble text="06" decorative />}>
      <div className="flex flex-col gap-6 rounded-lg bg-gradient-to-br from-primary-soft to-surface p-8 shadow-card sm:p-12">
        <p className="max-w-[62ch] text-muted-foreground">
          <Scramble text={INTRO} block />
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${EMAIL}`}>
            <Scramble text={EMAIL} />
          </Button>
          <Button variant="outline" onClick={onCopy}>
            <CopyIcon className="size-4" />
            <Scramble text="Copy" />
          </Button>
        </div>
        <ul className="flex gap-2">
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
                    className="inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-[background-color,color,transform] duration-150 ease-soft hover:bg-primary/10 hover:text-foreground active:scale-[0.94]"
                  >
                    <Icon className="size-4" />
                  </a>
                </Tip>
              </li>
            )
          })}
        </ul>
      </div>
      <p className="sr-only">{profile.name}</p>
    </Section>
  )
}
