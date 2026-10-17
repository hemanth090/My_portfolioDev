import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Chip, ChipList } from '../components/ui/Chip'
import { projects } from '../data/content'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const index = projects.findIndex((project) => project.slug === slug)

  if (index === -1) return <NotFound />

  const project = projects[index]!
  const previous = projects[(index - 1 + projects.length) % projects.length]!
  const next = projects[(index + 1) % projects.length]!

  return (
    <>
      <Seo
        title={`${project.name} · Naveen Hemanth Kokkonda`}
        description={project.description}
        path={`/work/${project.slug}`}
        type="article"
      />

      <article className="mx-auto max-w-[85rem] px-5 py-16 sm:px-6 lg:px-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.02em] text-muted-foreground transition-colors duration-150 ease-soft hover:text-foreground"
        >
          ← All work
        </Link>

        <header className="mt-10 flex max-w-[62ch] flex-col gap-4">
          <Badge muted>{project.date}</Badge>
          <h1 className="font-display text-display">{project.name}</h1>
          <p className="font-mono text-xs font-bold tracking-[0.08em] text-primary-ink uppercase">
            {project.subtitle}
          </p>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </header>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <section className="flex flex-col gap-4 rounded-lg bg-surface p-6 shadow-card lg:col-span-2">
            <h2 className="font-display text-title">Stack</h2>
            <ChipList>
              {project.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </ChipList>
          </section>

          <aside className="flex flex-col justify-between gap-6 rounded-lg bg-gradient-to-br from-primary-soft to-surface p-6 shadow-card">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold">Source</h2>
              <p className="text-sm text-muted-foreground">
                Read the code, or reach out and I&apos;ll walk you through the build.
              </p>
            </div>
            <Button href={project.href} target="_blank" rel="noopener noreferrer">
              View on GitHub ↗
            </Button>
          </aside>
        </div>

        <nav aria-label="Other projects" className="mt-14 flex flex-wrap justify-between gap-4 border-t border-line pt-6">
          <Link
            to={`/work/${previous.slug}`}
            className="flex flex-col gap-1 text-sm transition-colors duration-150 ease-soft hover:text-primary-ink"
          >
            <span className="font-mono text-xs text-faint">← Previous</span>
            <span className="font-medium">{previous.name}</span>
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="flex flex-col items-end gap-1 text-sm transition-colors duration-150 ease-soft hover:text-primary-ink"
          >
            <span className="font-mono text-xs text-faint">Next →</span>
            <span className="font-medium">{next.name}</span>
          </Link>
        </nav>
      </article>
    </>
  )
}
