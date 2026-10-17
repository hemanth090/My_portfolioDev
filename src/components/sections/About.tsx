import { about } from '../../data/content'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About" index="01" first>
      <div className="grid max-w-[68ch] gap-4 text-muted-foreground">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
