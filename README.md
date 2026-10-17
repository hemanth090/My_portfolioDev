# Naveen Hemanth Kokkonda — Portfolio

Production-grade single-page portfolio. React 19 · TypeScript · Vite 8 · Tailwind CSS v4.

## Stack

| Concern | Choice |
|---|---|
| UI | React 19 (StrictMode) |
| Language | TypeScript 6 (strict, project references) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@theme` tokens in `src/index.css`) |
| Routing | React Router v7 (BrowserRouter) |
| Tests | Vitest 5 + Testing Library (jsdom) |
| Lint | oxlint |

## Structure

```
src/
  data/        content.ts (all copy, typed), icons.tsx, social-icons.ts
  lib/         hooks: scroll progress, scroll spy, reveal, clipboard,
               reduced motion, body-scroll lock, toast context, cn()
  components/
    ui/        Button, Card, Badge, Chip, Kbd, Tip, Logo, Scramble, RichText
    sections/  Hero, About, Work, Experience, Skills, Education, Contact, Footer
    Header.tsx, CommandPalette.tsx, Toast.tsx, Progress.tsx, BackToTop.tsx
```

## Routing

`react-router-dom` v7 (BrowserRouter). The layout (header, footer, progress, back-to-top,
command palette, toast) lives in `src/routes/Layout.tsx` and renders an `<Outlet />`.

| Route | Renders |
|---|---|
| `/` | `routes/Home.tsx` — hero + all sections |
| `/work/:slug` | `routes/CaseStudy.tsx` — per-project page |
| `*` | `routes/NotFound.tsx` |

- Per-page `<title>`/OG tags come from `<Seo>` (`src/components/Seo.tsx`) via React 19's
  native metadata hoisting — no helmet library, and `index.html` intentionally has no title.
- `ScrollToHash` scrolls to `#hash` on navigation, otherwise resets to the top.
- Nav links point at `/#section`, so they work from any route.

### SPA fallback is required

Deep links like `/work/articulate` must be rewritten to `index.html` by the host:

- **Netlify** — done, `public/_redirects` contains `/*    /index.html   200`.
- **Vercel** — add `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- **Others** — same idea; anything not a static asset serves `index.html`.
- Locally `vite dev` and `vite preview` already do this.

## Design system

Derived from cline.bot: `#FBF8FF` ground, `#F5EEFF` surface, `#17111F` ink,
brand purple `#7C3AED`, blue→green→pink gradient, square buttons, 4/8/12px radii.
Type: Geist (body/UI), Geist Mono (bold + labels), Geist Pixel (display headings).

## Commands

```bash
npm install
npm run dev        # dev server
npm run build      # tsc -b && vite build
npm run preview    # serve dist
npm test           # vitest run
npm run lint       # oxlint
npm run typecheck  # tsc -b
```

## Notes

- `CommandPalette` is lazy-loaded (⌘K / Ctrl-K) so it is not in the initial bundle.
- Every motion path respects `prefers-reduced-motion`.
- Content lives entirely in `src/data/content.ts` — nothing is hard-coded in components.
