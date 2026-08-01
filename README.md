# hemanthk.dev — Portfolio

Single-page portfolio and printable resume for Naveen Hemanth Kokkonda.

## Stack

- **React 19** + **TypeScript 5.9** (strict, `noUnusedLocals`, `verbatimModuleSyntax`)
- **Vite 6** (output in `build/`)
- **Tailwind CSS v3** with semantic tokens over CSS custom properties (`src/index.css`)
- **lucide-react** icons — no router, no animation library

## Architecture

One scrolling document. The fixed icon rail is a scroll-spy (IntersectionObserver
band, `src/hooks/useScrollSpy.ts`) rather than a router: the active item reflects
what is on screen. Old route URLs (`/projects`, `/skills`, `/experience`, `/about`)
are 301-redirected by Render (`render.yaml`) and normalised client-side before
React mounts (`src/lib/legacyRedirect.ts`).

All content lives in one typed object: `src/data.ts` (`PortfolioData` in
`src/types.ts`). Experience, projects, skills, education, and certifications are
transcribed verbatim from the resume.

```
src/
  config/sections.ts    nav rail + scroll-spy targets (single source of truth)
  hooks/                useScrollSpy, useAnchorNavigation, useHashSync, useInView, useTheme
  lib/                  cn (clsx + tailwind-merge), scroll, legacyRedirect
  components/
    layout/             Section, SideNav, NavItem, SkipLink, SiteFooter
    sections/           Hero, Experience, Projects, Skills, About, Credentials, Contact
    ui/                 Card, Chip, Meta, Button, IconBox, Reveal, CursorAura, ...
    resume/             ResumeDocument — print-only A4 resume
```

## Print / PDF

`Ctrl+P` (or the footer **Resume** button) prints a dedicated one-page A4 resume.
`ResumeDocument` is always mounted, hidden on screen, and swapped in by the
`@media print` layer at the bottom of `src/index.css` — the screen app is never
restyled for print.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc -b && vite build  -> build/
npm run lint     # eslint
```

Design anti-pattern scan (no LLM needed):

```bash
node .claude/skills/impeccable/scripts/detect.mjs src index.html
```

## Deploy

Static site on Render (`render.yaml`): `npm install && npm run build`, publish
`./build`. `public/CNAME` pins the `hemanthk.dev` domain.
