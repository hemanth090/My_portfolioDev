import { certifications, education } from '../../data/content'
import { Badge } from '../ui/Badge'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="background" title="Education & certificates" index="05">
      <article className="relative pl-6">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 rounded-full bg-line"
        />
        <span
          aria-hidden="true"
          className="absolute top-[9px] left-0 size-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary-soft"
        />
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-mono text-lg font-bold tracking-[-0.02em]">{education.title}</h3>
          <Badge muted>{education.date}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{education.org}</p>
      </article>

      <ul className="mt-6">
        {certifications.map((certification) => (
          <li
            key={certification.name}
            className="flex flex-wrap justify-between gap-1 border-t border-line py-3 text-sm text-muted-foreground last:border-b"
          >
            <span>{certification.name}</span>
            <span className="font-mono text-xs text-faint tabular-nums">{certification.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
