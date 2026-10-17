import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { buttonClasses } from '../components/ui/buttonStyles'

export function NotFound() {
  return (
    <>
      <Seo title="Not found · Naveen Hemanth Kokkonda" description="That page doesn't exist." noindex />
      <section className="mx-auto flex max-w-[85rem] flex-col items-start gap-6 px-5 py-32 sm:px-6 lg:px-8">
        <span className="font-mono text-xs tracking-[0.08em] text-faint uppercase">Error 404</span>
        <h1 className="font-display text-display">This page wandered off.</h1>
        <p className="max-w-[46ch] text-muted-foreground">
          The link you followed doesn&apos;t point anywhere. Head back and pick a section.
        </p>
        <Link to="/" className={buttonClasses('primary', 'md')}>
          Back to home
        </Link>
      </section>
    </>
  )
}
