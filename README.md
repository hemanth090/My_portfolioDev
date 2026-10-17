# Naveen Hemanth Kokkonda — Portfolio

React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · React Router v7.

## Stack

| Concern | Choice |
|---|---|
| UI | React 19 (StrictMode) |
| Language | TypeScript 6 (strict, project references) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 — tokens live in `src/index.css` (`@theme`) |
| Routing | react-router-dom v7 (BrowserRouter) |
| Tests | Vitest 5 + Testing Library (jsdom) |
| Lint | oxlint (`npm run lint`) |

## Structure

```
src/
  data/        content.ts (all copy, typed) · icons.tsx · social-icons.ts · wolfFrames.ts
  lib/         cn · useTheme · useScrollProgress · useScrollSpy · useReveal
               useClipboard · useLockBodyScroll · useReducedMotion · toast
  components/
    ui/        Button · Card · Badge · Chip · Kbd · Tip · Logo · Scramble
    sections/  Hero · About · Work · Experience · Skills · Education · Contact · Footer
    Header · CommandPalette · Preloader · Progress · BackToTop · ThemeToggle · Seo
  routes/      Layout · Home · CaseStudy · NotFound
```

## Routes

| Route | Renders |
|---|---|
| `/` | Home — hero + all sections |
| `/work/:slug` | Case study (`articulate`, `scout`, `toon-studio`) |
| `*` | 404, marked `noindex` |

Per-page `<title>`, `description`, `canonical` and OG/Twitter tags come from
`src/components/Seo.tsx` using React 19's native metadata hoisting — no helmet
library, and `index.html` intentionally ships no title.

`ScrollToHash` owns scroll position: it honours `#anchors`, restores the offset on
back/forward (`history.scrollRestoration = 'manual'`), and resets instantly on a push.

## Commands

```bash
npm install
npm run dev        # dev server
npm run build      # tsc -b && vite build  ->  build/
npm run preview    # serve build/
npm test           # vitest run
npm run lint       # oxlint
npm run typecheck  # tsc -b
```

## Deployment

Deployed on **Render** as a static site, serving **https://hemanthk.dev**.

- `render.yaml` sets `buildCommand: npm install && npm run build` and
  `staticPublishPath: ./build`, so **`vite.config.ts` must keep `outDir: 'build'`**.
- The `/* → /index.html` rewrite in `render.yaml` is required: it is what lets
  deep links such as `/work/articulate` resolve. `public/_redirects` mirrors it for
  Netlify-style hosts.
- `public/CNAME` (GitHub Pages) and `public/robots.txt` + `public/sitemap.xml` are
  kept in sync with the live routes.

## Design system

Violet-mono, sharp edges, no borders on surfaces. Tokens follow cline.bot:
`#FBF8FF` ground, `#17111F` ink, brand purple `#7C3AED`, blue→green→pink accent
gradient. Type is Geist (body/UI), Geist Mono (bold/labels) and Geist Pixel
(display headings). Dark mode overrides the same tokens under `.dark`.

Every motion path respects `prefers-reduced-motion`, and all copy lives in
`src/data/content.ts` — nothing is hard-coded in components.
