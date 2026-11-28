# New Portfolio

A recreation of the layout, typography, motion and interactions of
[prathm.me](https://prathm.me), populated entirely with Naveen Hemanth's
content from the existing `~/Desktop/portfolio` project.

The original `portfolio` folder was only read/copied from and remains unchanged.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Static production build:

```bash
npm run build
npm start
```

`npm run build` fetches the latest GitHub contributions, creates the static
export in `out/`, and copies it to `build/`. `npm start` serves `out/` at
[http://localhost:4173](http://localhost:4173).

## Routes

| Route | Description |
| --- | --- |
| `/` | Profile, About, Experience, Projects, Skills, Activity, Achievements, Education & Certifications, Areas of focus, CTA, Contact |
| `/projects/` | Full project list with live search |
| `/contact/` | Email/X routes and message form |
| `/data/github.json` | Build-time GitHub contribution data for `hemanth090` |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots file |

## Content

All personal content lives in `src/content/`:

| File | Contents |
| --- | --- |
| `profile.ts` | Name, roles, about copy, email, links, avatar, orbit labels |
| `projects.ts` | Four projects, descriptions, links and technology tags |
| `experience.ts` | Tradl AI experience |
| `skills.ts` | 18 skills from the existing tech stack |
| `achievements.ts` | Achievements, education and certifications |
| `social.ts` | Social, contact and navigation links |

Project technology tags are derived from each repository's languages and
README. Featured home projects are Telangana Open Data and agent-mem. The GitHub contribution graph uses the public
`github-contributions-api.jogruber.de` API at build time; the result is written
to `public/data/github.json` by `scripts/fetch-github.mjs`.

## Notes

- The reference toggles between an illustrated avatar and a real photo. This
  build uses a monochrome stylized derivative of the supplied profile photo as
  the default state and reveals the original color photo when the switch is
  turned on.
- The hero dot field blends `/images/hero-dot-field.webp` behind the existing
  interactive canvas; it drifts slowly and responds to pointer movement.
- Page order is Hero, About, Experience, Projects, Skills, Activity,
  Achievements, Education & Certifications, Areas of focus/CTA, Contact, Footer.
- The top Connect strip is gone. A dedicated Contact section with Email,
  GitHub, LinkedIn and X sits above the footer.
- Education and certifications live in a dedicated **Education & Certifications**
  section after Achievements, grouped into Education and Certifications with
  shadcn-style cards.
- The contact form validates the email/message locally and opens the visitor's
  mail app prefilled to `naveenhemanth4@gmail.com`. There is no email backend.
- The visual layer uses the reference's compiled Tailwind utility CSS
  (`src/app/reference.css`) for identical spacing and typography. Personal content,
  images and links are Naveen's.
- Typography is self-hosted: Geist (variable) for normal text and UI,
  Satoshi for headings and subheadings, and Pixelify Sans for the wordmark.
- Layout stability: the command palette reserves a fixed results area, the
  activity section reserves the loaded graph height in loading/error states,
  the contact form keeps a fixed textarea height and reserved status line, and
  the bottom Contact section contains Email, GitHub, LinkedIn and X.
- Deployment is static export. `render.yaml` publishes `./build` to Render;
  `public/CNAME` contains `hemanthk.xyz`; the copied `scripts/` directory
  contains the static export and preview helpers.

## Deploy

The deployment files mirror the existing portfolio's Render setup:

- `render.yaml` — static site, build command `npm install && npm run build`,
  publish path `./build`, legacy-route redirects
- `public/CNAME` — `hemanthk.xyz`
- `scripts/export-to-build.mjs` — copies `out/` to `build/`
- `scripts/serve-static.mjs` — local static preview server
- `scripts/fetch-github.mjs` — regenerates contribution data at build time

`next.config.ts` uses `output: "export"` and `trailingSlash: true`, so no Node
server is required in production.

## Attribution

Layout and interaction study based on [prathm.me](https://prathm.me). All
personal content, project images and profile assets belong to Naveen Hemanth.
