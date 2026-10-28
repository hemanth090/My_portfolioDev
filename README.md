# Naveen Hemanth Portfolio

Portfolio for Naveen Hemanth Kokkonda — AI Engineer / Full-Stack developer.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Tailwind CSS v4 tokens and utilities
- `next-themes` (theme persistence + system fallback), `framer-motion` (role cycle, cursor),
  `lenis` (smooth scrolling), `cmdk` + Radix UI (command menu, dropdown, tooltip),
  `lucide-react` + Simple Icons (icon set)

## Run

```bash
npm install
npm run dev     # development server (http://localhost:3000)
npm run build   # static export: next build -> out/ -> build/
npm run start   # serve the built build/ directory locally
```

`NEXT_PUBLIC_SITE_URL` can be set to the public origin used in metadata, `sitemap.xml` and
`robots.txt` (defaults to `https://hemanthk.xyz`).

## Structure

```
app/                  routes (/, /story, /projects, /contact), layout, metadata, sitemap/robots
app/story/story.css   motion-experience styles (plain CSS on the existing tokens)
components/           layout shell, page sections, interactive UI (clients)
components/story/     the /story overlay: chapters, motion primitives, chapter rail
components/hide-on-story.tsx  hides the site navbar/footer on the immersive route
lib/config.ts         all personal content (profile, about, projects, experience, skills, education)
lib/story.ts          /story chapter content, derived from the same records as lib/config.ts
lib/brand-icons.ts    Simple Icons glyph data
lib/github-contributions.ts  client-side contribution calendar fetch
scripts/              static-export copy + local static server
public/images         generated placeholder illustrations and project covers (SVG)
public/fonts          self-hosted Satoshi / Geist Mono / Pixelify Sans
public/sounds         interface click sound
```

## Routes

| Route | Renders |
|---|---|
| `/` | Home — hero, about, connect, experience, activity, projects, skills, education, certificates, focus |
| `/story` | Full-screen motion story of the last four years (scroll-driven chapters, chapter rail, Esc to exit) |
| `/projects` | All projects with search |
| `/contact` | Contact routes + message form |
| `*` | Custom 404 page |

## Content notes

- **Story** lives at `/story` and opens from the navbar. It is an immersive overlay: the site
  navbar, footer and bottom fade are hidden while it is open, body scroll is locked, and Escape
  or the Exit control returns home. Chapters use native scrolling only. Progress, reveals,
  counters, recall bars, the timeline draw and the project ticker all respect
  `prefers-reduced-motion`, and the no-JS render is complete. Content is in `lib/story.ts` and
  derives from the same records as the rest of the site.
- **Portrait** is the real photo (`public/images/avatar-photo.jpg`), shown by default in the hero
  avatar, the focus-area circle and the footer CTA. The hero avatar switch toggles to a generated
  `NH` monogram. **Project covers** are generated SVG mockups; swap them for real screenshots in
  `public/images/`.
- **Tradl AI** uses the real app-icon logo from https://tradl.ai (`public/images/tradl-logo.png`).
- **Links are live**: GitHub (`github.com/hemanth090`), LinkedIn, X, email
  (`naveenhemanth4@gmail.com`) and every project's Live/Code URLs are wired from the GitHub account.
- **GitHub activity** fetches the last year of contributions for `hemanth090` from the public
  GitHub contributions calendar in the browser, with a zero-activity fallback if the request fails.
- **Contact form** validates submissions, then opens the visitor's mail app pre-filled to
  `naveenhemanth4@gmail.com` (the site is a static export, so there is no server runtime).
- **Projects**: Articulate, Scout, TOON Studio (Lexa Studio), plus `ragpdf`, AgentCam and the
  NL → MongoDB Query API from public repos on the same GitHub account.
- **Résumé**: `public/resume/hemanth-resume.pdf` is linked from the Connect row and the ⌘K
  command menu ("Resume"). `public/resume.pdf` keeps the previous URL working.
- **Certificates** link to their verification pages (Oracle badge, Simplilearn, Infosys/Drive).
- **Still placeholders**: project cover screenshots, OG social image.

## Deployment

Deployed on **Render** as a static site serving **https://hemanthk.xyz**.

- `render.yaml` keeps the Render service name, build command (`npm install && npm run build`)
  and the `build/` publish directory.
- `next.config.ts` uses `output: "export"`; `npm run build` runs `next build` and copies the
  static export from `out/` to `build/` via `scripts/export-to-build.mjs`.
- `public/CNAME` (`hemanthk.xyz`) and `public/_redirects` are included in the published output.
