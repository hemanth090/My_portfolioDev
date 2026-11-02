# Naveen Hemanth — Portfolio

Personal portfolio for Naveen Hemanth, an AI engineer. Built around selected projects, experience, and credentials.

Site URL: [https://hemanthk.xyz](https://hemanthk.xyz)

## Overview

The site uses the Next.js App Router and is configured as a fully static export. Pages are pre-rendered at build time, and the generated `out/` directory can be served by any static host. A small dependency-free Node server is included for local previews.

### Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4, shadcn/ui, Geist 1.9.0 by Vercel
- **Motion and UI:** Motion, Base UI, Hugeicons

## Routes

| Route | Description |
| --- | --- |
| `/` | Profile, overview, projects, experience, tech stack, GitHub contributions, and contact links |
| `/projects` | All selected projects |
| `/credentials` | Certifications and education |
| `/contact` | Contact links and email CTA |
| `/llms.txt` | Concise site index for language models |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated robots file |

Retired paths are redirected at the hosting layer: `/story` and `/blog` → `/projects`; `/collection` → `/credentials`. These redirects live in `render.yaml`; they are not part of the static export and do not apply to the local preview server.

## Development

```bash
npm ci
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Build and preview

```bash
npm run build
npm start
```

- `npm run build` runs `next build`, writes the static export to `out/`, then copies it to `build/` for the existing Render service.
- `npm start` serves `out/` at [http://localhost:4173](http://localhost:4173).
- `npm run preview` is an alias for the same static preview server.
- `npm run lint` runs ESLint.

The preview server has no dependencies beyond Node.js. It resolves trailing-slash routes to their `index.html` files, redirects directory requests to a trailing slash, and serves `out/404.html` for unknown paths.

## Static export notes

- `next.config.ts` sets `output: "export"`; production has no Next.js server, API runtime, or image optimizer.
- `trailingSlash: true` emits routes such as `/projects/` as `out/projects/index.html`.
- `images.unoptimized: true` is required because the default Next.js image optimizer needs a server.
- Next.js rewrites are not supported in static exports, so none are configured.
- `NEXT_PUBLIC_APP_URL` is inlined during the build. Set it to the production URL before building when deploying elsewhere.
- Unknown paths are served with `out/404.html` and a `404` status by the preview server.

## Deploy on Render

The repository includes a Render Blueprint at `render.yaml`:

- **Service type:** static site
- **Build command:** `npm install && npm run build`
- **Publish path:** `./build`
- **Redirects:** `/story` and `/blog` → `/projects`; `/collection` → `/credentials`

To deploy, create a new Blueprint instance from this repository in Render, or configure a static site manually with the same build command and publish path. `NEXT_PUBLIC_APP_URL=https://hemanthk.xyz` is set in `render.yaml` and must also be present during any other production build. Then add `hemanthk.xyz` as a custom domain.

`public/CNAME` contains `hemanthk.xyz` and is copied into the export for static hosts that use a `CNAME` file, such as GitHub Pages. Render custom domains are configured in the Render dashboard.

## Content locations

| Path | Contents |
| --- | --- |
| `src/config/site.ts` | Site name, description, URL, navigation, and social links |
| `src/config/metadata.ts` | Default SEO and social metadata |
| `src/features/portfolio/data/` | Profile, projects, experience, tech stack, social links, collection, and GitHub data |
| `src/features/portfolio/types/` | Data types for the portfolio records |
| `public/images/` | Project covers, avatar, logos, and Open Graph image |
| `public/resume-hemanth.pdf` | Résumé served by the site |
| `src/styles/` | Global styles and theme tokens |

## Attribution

Design adapted from ratneshc.com by Ratnesh Chipre (MIT). Original LICENSE retained in this repository.

See [NOTICE.md](./NOTICE.md) for details and [LICENSE](./LICENSE) for the full license text.

## License

MIT. See [LICENSE](./LICENSE).
