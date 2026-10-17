import { profile } from '../../data/content'
import { Scramble } from '../ui/Scramble'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      data-inert-scope
      className="mx-auto flex max-w-[85rem] flex-wrap justify-between gap-2 border-t border-line px-5 py-6 font-mono text-xs text-faint sm:px-6 lg:px-8"
    >
      <p>
        <Scramble text={`© ${YEAR} ${profile.name}`} />
      </p>
      <p>
        <Scramble text="React · TypeScript · Tailwind CSS · Geist" />
      </p>
    </footer>
  )
}
