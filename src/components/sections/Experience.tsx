import { experience } from '../../data/content'
import { Badge } from '../ui/Badge'
import { RichText } from '../ui/RichText'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" title="Experience" index="03">
      {experience.map((role) => (
        <article key={role.title} className="relative pl-6">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 rounded-full bg-line"
          />
          <span
            aria-hidden="true"
            className="absolute top-[9px] left-0 size-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary-soft"
          />
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-mono text-lg font-bold tracking-[-0.02em]">{role.title}</h3>
            <Badge muted>{role.date}</Badge>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">{role.org}</p>
          <ul className="grid max-w-[76ch] gap-3">
            {role.bullets.map((bullet) => (
              <li key={bullet.slice(0, 28)} className="relative pl-6 text-sm text-muted-foreground">
                <span aria-hidden="true" className="absolute top-[0.6em] left-0 size-1.5 rounded-full bg-primary" />
                <RichText text={bullet} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  )
}
