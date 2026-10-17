import { Link } from 'react-router-dom'
import { projects } from '../../data/content'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Chip, ChipList } from '../ui/Chip'
import { cn } from '../../lib/cn'
import { Section } from './Section'

export function Work() {
  return (
    <Section id="work" title="Things I've built" index="02">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className={cn(
              'flex flex-col rounded-lg bg-surface p-5 shadow-card',
              'transition-[box-shadow,transform] duration-300 ease-soft hover:-translate-y-0.5 hover:shadow-lift',
              project.featured && 'sm:col-span-2',
            )}
          >
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="font-mono text-lg font-bold tracking-[-0.02em]">
                <Link
                  to={`/work/${project.slug}`}
                  className="transition-colors duration-150 ease-soft hover:text-primary-ink"
                >
                  {project.name}
                </Link>
              </h3>
              <Badge muted>{project.date}</Badge>
            </div>
            <p className="mb-3 font-mono text-xs font-bold tracking-[0.08em] text-primary-ink uppercase">
              {project.subtitle}
            </p>
            <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
            <ChipList className="mb-5">
              {project.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </ChipList>
            <div className="mt-auto">
              <Button
                size="sm"
                variant="outline"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
