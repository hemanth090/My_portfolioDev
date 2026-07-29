# Single-Page Resume Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Collapse a 5-route React portfolio into one premium scrolling page driven by resume-accurate data, with a print stylesheet that yields a clean A4 one-pager.

**Architecture:** Router removed; scroll-spy anchors replace `NavLink`. All content flows from one typed `DATA` object. A separate always-mounted `<ResumeDocument>` (hidden on screen, shown in print) owns the A4 output rather than restyling the live DOM.

**Tech Stack:** React 19.2, TypeScript 5.9 (strict, `noUnusedLocals`, `verbatimModuleSyntax`), Vite 6.4 (`outDir: build`), Tailwind v3.4.19 (`darkMode: 'class'`), lucide-react. Removing `react-router-dom` and `framer-motion`. Activating the already-installed-but-unused `clsx` + `tailwind-merge`.

**Target file:** copy this document to `My_portfolioDev/plan.md` on approval.

---

## Global Constraints

Every task's requirements implicitly include this section.

- **Do not invent content.** Copy is either verbatim from the resume text supplied by the owner, or existing `src/data.ts` strings. No new claims, no rewritten bullets.
- `noUnusedLocals` + `noUnusedParameters` are ON — a leftover import **fails `tsc -b`**. Remove imports in the same edit that removes their usage.
- `verbatimModuleSyntax: true` — type-only imports need the inline `type` modifier. `import { ClassValue }` is a hard build error; `import { type ClassValue }` is correct.
- No new runtime dependencies. Two existing ones are removed.
- Tailwind is **v3**, not v4 — `@tailwind` directives, `tailwind.config.js`, and the `print:` variant are all available.
- Dark mode must keep working via the `class` strategy and the anti-FOUC inline script at `index.html:82-91`.
- Build gate after every task: `npm run build` (`tsc -b && vite build`) and `npm run lint`.
- **Impeccable craft floor** (see Design Brief §8) is a hard gate, not advice.

---

# Part A — Design Brief

Produced per Impeccable `shape.md` Phase 3. Visitor mode: **Experience** (portfolio / artifact-first).

### 1. Job and audience
A recruiter or hiring engineer arrives from a resume link, LinkedIn, or GitHub, on a phone as often as a laptop, scanning for 20–40 seconds to answer one question: *is this person worth an interview?* Visitor mode is Experience — the work itself is the argument.

### 2. Outcome and proof
Primary action: reach contact details convinced. Proof carried on the page: a shipped role at Tradl AI with hard numbers (40% table perf, 60% memory, retrieval recall 0.37 → 0.61 over 30,137 indexed points), two deployed AI products with live demos, and a verifiable CGPA plus three certifications. Product-specific truth: this is a final-year student already shipping production RAG infrastructure — a combination a generic student portfolio cannot claim.

### 3. Selected direction
Visual authority stays with the existing monochrome system (near-black `#0a0a0a` / pure white) — already restrained and correct for the Linear/Stripe register. **Typeface is an open decision**: the Impeccable detector flags Space Grotesk as an overused AI-UI face (see §9). Outfit was not flagged and stays. The structural thesis changes: **evidence-first sequencing**. Experience is promoted from the bottom of a route nobody visits to the first block after the hero. Focal moment is the Tradl AI entry with its metric-bearing bullets. Implementation consequence: one document, one scroll, one data source.

### 4. Scope and boundaries
Fidelity: production-ready. Breadth: the whole site. Interactivity: scroll-spy navigation, theme toggle, print. **Untouched:** `ThemeContext.tsx`, the anti-FOUC script, the Google Fonts loading strategy, `PixelLogo`. **Anti-goals:** no gradients, no glassmorphism, no new color accents, no hero animation set-piece, no CMS, no test framework.

### 5. States and ranges
Content ranges are known and small: 1 experience entry (6 bullets), 3 projects (2 printed), 5 skill groups (1–7 items each), 1 education, 3 certifications. Design must not assume plurality — the Experience section renders correctly with exactly one entry, and `Tools & DevOps` holds a single chip. Print is the constrained state: A4, one page.

### 6. Interaction and layout
Hierarchy: name → role → evidence → credentials → contact. Topology: fixed icon rail (vertical on `lg+`, bottom pill on mobile) reflecting scroll position, not clicks. Responsiveness: mobile-first; the rail must stop overflowing at 320px. Feedback: active nav state, focus-visible rings, hover lift on interactive cards only. Transitions: one authored motion moment (section entrance), everything else is state feedback.

### 7. Constraints and open decisions
Binding: WCAG AA both themes, `prefers-reduced-motion` honoured in JS *and* CSS, A4 single page, no new deps. **A builder must not invent:** any resume copy, certification URLs (none were supplied — certs render unlinked), or replacement bio prose.

### 8. Craft floor gate (Impeccable)
Hard rules this build is checked against:

| Rule | Current status |
|---|---|
| Eyebrow/kicker above a heading — **absolute ban** | **VIOLATED** at `App.tsx:78-82` — uppercase `tracking-[0.2em]` span holding `DATA.title` sits directly above `<h1>` |
| Body measure 45–75ch | **VIOLATED** — `max-w-2xl` (672px) at 15px ≈ 85ch |
| One authored motion moment, not scattered | **VIOLATED** — cursor aura + noise overlay + `hover-elastic` scale(1.05) + `fade-in-up` + framer `whileInView` |
| Light-on-dark needs weight/tracking/leading compensation | **VIOLATED** — dark theme reuses identical type settings |
| Shadows have offset + blur, never decorative halos | Passes (`shadow-lg` on nav only) |
| Identical card grids as page structure | At risk — education/cert/project cards are three near-identical recipes |
| Contrast ≥4.5:1 body, ≥3:1 large | `--color-text-muted #737373` on `#0a0a0a` ≈ 4.9:1 — passes, but must not go below 14px |
| Gradient text, decorative glassmorphism, thick colored borders | Not present — keep it that way |

**Resolution:** the kicker is removed, not restyled. Role becomes a `<p>` *below* the `h1`, where it reads as a subtitle rather than a label.

### 9. Detector baseline (actual output, not predicted)

`node .claude/skills/impeccable/scripts/detect.mjs src index.html` — run against the current tree before any changes. **5 anti-patterns, 2 distinct rules:**

| Rule | Locations | Status |
|---|---|---|
| `overused-font` — Space Grotesk | `index.css:73`, `index.css:146`, `index.html:46`, `index.html:50` | **Open decision — needs your call** |
| `bounce-easing` — `cubic-bezier(0.34, 1.56, 0.64, 1)` | `index.css:213` | **Already fixed** by Task 4 Step 4 |

On `overused-font`: Impeccable groups Space Grotesk with Inter, Roboto, Fraunces, Geist, and Plus Jakarta Sans as faces that "no longer feel distinctive… each new wave of AI-generated UIs converges on the same handful." Outfit (the display face) is **not** flagged and stays either way. This is a brand decision, not a defect — the detector is a floor, not a verdict. Three options:

1. **Keep Space Grotesk.** Waive the rule via `.impeccable/config.json`. Zero work, zero risk; the site keeps its current voice.
2. **Swap the body face only.** Outfit stays for display; body moves to something less saturated. One `@layer base` rule, one `fontFamily.sans` entry, one Google Fonts `<link>`. Requires re-checking the 45–75ch measure since metrics differ.
3. **Self-host a distinctive face.** Removes the Google Fonts round-trip entirely and kills the `overused-font` finding, but adds font files to `public/` and a `@font-face` block.

Nothing in Tasks 1–13 depends on this; it is a swap inside Task 4. **Default if you say nothing: option 1** — keep the current face, waive the rule, and note the waiver in the config.

On `bounce-easing`: the flagged easing is `.hover-elastic`'s. Task 4 Step 4 already replaces it with `ease-brand` (`cubic-bezier(0.2,0.8,0.2,1)`), which is exponential decel and satisfies the rule. Task 13 Step 2 re-runs the detector to confirm the finding is gone.

**Not caught by the detector but still real:** the eyebrow/kicker violation in §8. The static engine reads CSS and HTML; the kicker lives in JSX (`App.tsx:78-82`) as a Tailwind class string with no rendered DOM to inspect. It remains a manual gate in Task 7 Step 1, and Task 13 Step 3 re-checks the §8 table by hand.

---

# Part B — Audit

## 1. Current Architecture

```
src/
  main.tsx                   16   StrictMode > BrowserRouter > ThemeProvider > App
  App.tsx                   265   shell + rail + footer + 4 INLINE components
  data.ts                    91   one DATA literal, zero interfaces
  index.css                 234   CSS custom properties, base layer, keyframes
  assets/react.svg                UNUSED (Vite scaffold)
  components/
    AboutSection.tsx          57   about prose + Education + Certifications  (3 blocks)
    ProjectsSection.tsx       99   bento grid + local ProjectCard
    SkillsEducationSection.tsx 76  Skills + Experience  (2 blocks; misnamed)
    SectionTitle.tsx          13   the ONLY reusable primitive
    PixelLogo.tsx             37   CSS-grid wordmark
    ThemeToggle.tsx           35   Sun/Moon crossfade
  context/ThemeContext.tsx    62   the only Context
```

Inline in `App.tsx`, never extracted: `CursorAura` (17-44), `ScrollToTop` (49-57), `SectionSkeleton` (62-72), `HeroSection` (74-150).

**Data flow:** one hardcoded `DATA` object → imported by 4 components. No fetch, no props drilling.
**Routing:** `BrowserRouter`, 5 routes at `App.tsx:211-229`. `/skills` and `/experience` render the *identical* component. No 404. `index.html:35` hardcodes one canonical URL for all routes, so collapsing to one page loses zero SEO.
**Styling:** all theming is CSS custom properties in `index.css`; Tailwind extends only `colors` (dead) and `fontFamily`.

## 2. Problems Found

**UI** — 4 card recipes across 3 radii (`rounded-xl` at `AboutSection.tsx:21,41`; `rounded-[2rem]` at `ProjectsSection.tsx:18`; `rounded-[32px]` at `App.tsx:136` — same value, two spellings); 2 chip recipes; 5 near-identical meta recipes; 4 ad-hoc icon sizes; 3 skill groups rendered into `lg:grid-cols-4`; the 5 Tailwind color aliases are 100% dead.

**UX** — two nav destinations, one page; dead Resume link (`App.tsx:247`); `DATA.contact.phone` never rendered; `bio` and `about` are near-paraphrases that collide once on one page; hero `<address>` duplicates a Contact section.

**Accessibility** — `prefers-reduced-motion` gates CSS only, framer is ungated; 6 landmarks will need distinct names; no focus-visible spec; `text-muted` on dark is 4.9:1 (floor).

**Performance** — `vite.config.ts:15` `id.includes('react')` swallows `lucide-react` and `react-router-dom`, so `vendor-icons` is unreachable dead config (confirmed: no such chunk emitted); `LazyMotion` mounted inside `.map()` (7 providers) at `ProjectsSection.tsx:12` and `SkillsEducationSection.tsx:14,44`; `App.tsx:3` uses `m` with no `LazyMotion` ancestor; ~853 KB of dead `.png` originals ship; `React.lazy` splits 175 lines for 2 round trips.

**Maintainability** — `clsx`/`tailwind-merge` installed, imported nowhere; `any` at `ProjectsSection.tsx:7` and `SectionTitle.tsx:3`; no interfaces anywhere; `prose` classes are no-ops (`@tailwindcss/typography` not installed); `SkillsEducationSection` renders Experience, not Education; `App.tsx:235` hardcodes the name; README is the Vite template.

**Responsiveness** — nav pill ≈331px content vs `max-w-[95%]`; **already overflows at 320px**. `<main>` combines `max-w-[1200px]` with `xl:min-w-[1100px]` — these fight.

**Correctness** — `index.css:102-105` global `content-visibility: auto` with a wrong 500px intrinsic size breaks print and makes `scrollIntoView` compute against placeholder geometry; `/og-image.png` and `/apple-touch-icon.png` referenced but missing; three conflicting domains (`CNAME` → `hemanthk.dev`, canonical → `hemanthkokkonda.dev`, `robots.txt` → `your-portfolio.vercel.app`); `build/` committed *and* gitignored, stale and broken; `data.ts:42` typo.

## 3. Design Goals
One page with scroll-spy · resume-accurate typed data · A4 print · one recipe per component role · pure white, crisp borders, one shadow · AA both themes · mobile-first, 320px fixed · motion gated in JS and CSS · no new deps.

## 4. Component Inventory

| Component | Action |
|---|---|
| `App.tsx`, `main.tsx` | Rewrite — routing removed |
| `data.ts` | Rewrite content, add `highlights[]`, type it |
| `index.css`, `tailwind.config.js` | Modify — tokens, print layer, delete `content-visibility` |
| `SkillsEducationSection.tsx` | **Delete** → `ExperienceSection` + `SkillsSection` |
| `AboutSection.tsx` | Split → `AboutSection` (prose) + `CredentialsSection` |
| `ProjectsSection.tsx` | Modify — strip `LazyMotion`, type, use primitives |
| `SectionTitle.tsx` | Modify — `LucideIcon`, emit `id` |
| `PixelLogo`, `ThemeToggle` | Move to `components/ui/` |
| `ThemeContext.tsx` | Unchanged |
| `CursorAura`, `HeroSection` | Extract from `App.tsx` |
| `ScrollToTop`, `SectionSkeleton` | Delete |
| `Section`, `Card`, `Chip`, `Meta`, `Button`, `IconBox`, `Reveal`, `ContactSection`, `ResumeDocument` | New |

## 5. Design System

**Tokens** — CSS custom properties stay the single source; Tailwind *references* them so semantic class names replace arbitrary `[var(--x)]`.

**Type scale** (screen / print):

| Role | Screen | Weight · LH · Tracking | Print |
|---|---|---|---|
| Display | `clamp(2.5rem,8vw,4.5rem)` | 800 · 1.0 · −0.04em | 20pt |
| H2 section | 20px | 600 · 1.2 · 0.08em upper | 10.5pt |
| H3 role/project | 17px | 700 · 1.3 · −0.01em | 10pt |
| Body-lg | 20px | 400 · 1.6 · 0 | — |
| Body | 15px | 400 · 1.6 · 0 | 9.5pt |
| Small (bullets) | 14px | 400 · 1.55 · 0 | 9pt |
| Overline/Meta | 11px | 600 · 1.4 · 0.12em upper | 8pt |

Per Impeccable `typeset.md`: 1rem baseline, measure 45–75ch (`max-w-[68ch]`, replacing `max-w-2xl`), line-height tuned inversely to measure, and **dark-mode compensation** — `.dark` body text drops one weight step and gains `0.01em` tracking, since light-on-dark renders optically heavier.

**Scales** — spacing 4/8/12/16/24/32/48/64/96; radius `card` 16px, `control` 10px, `chip` full; **one** shadow (`shadow-soft`, real offset + blur); icons 16/20/24 only.

**Contrast** (verify with a checker during Task 12, don't assume):

| Pair | Ratio |
|---|---|
| `#0a0a0a` on `#ffffff` | 20.1:1 |
| `#404040` on `#ffffff` | 10.4:1 |
| `#525252` on `#ffffff` | 7.9:1 |
| `#f5f5f5` on `#0a0a0a` | 18.1:1 |
| `#a3a3a3` on `#0a0a0a` | 8.9:1 |
| `#737373` on `#0a0a0a` | ≈4.9:1 — **≥14px only** |

Rule: the 11px overline role uses `text-fg-secondary`, never `text-fg-muted`.

**Motion** — 150ms colour/opacity, 220ms transform, `cubic-bezier(0.2,0.8,0.2,1)`. One authored moment: section entrance (fade + 8px rise, 80ms stagger, once). `.hover-elastic`'s `scale(1.05)` is **retired** for `-translate-y-0.5` + border shift.

**Print** — a dedicated `<ResumeDocument>`, not a restyle. Restyling the live DOM fights four independent failure modes at once: `content-visibility` blanking off-screen sections, framer's `initial={{opacity:0}}` persisting on never-scrolled elements, lazy sections possibly unmounted, and grids that don't linearise.

*A4 budget:* usable height at 12mm margins ≈ 273mm; at 9.5pt/1.35 ≈ 4.5mm per line → ~60 lines. Estimated: header 4 · education 3 · experience 14 · projects 14 · skills 6 · certs 4 · rules 6 = **51 lines**, ~9 lines slack. If it overruns, trim project bullets — never type below 9pt.

## 6. Content Map — verbatim from the supplied resume

**No sentence below is authored by me.** Only structure changes.

```
title    → "Full Stack AI Engineer (Product)"        (was "Frontend Developer")
contact  → + website: "hemanthk.dev"                 (from the resume header)
            phone "+91-6300296968" finally rendered  (exists today, shown nowhere)

experience[0] → role     "Full Stack AI Engineer (Product)"
                company  "Tradl AI"
                context  "Stock Research and Trading Analyst"   (NEW field)
                location "On-site, Bangalore"
                start    "Dec 2025"   end "Present"             (was period: "Present")
                highlights: all 6 resume bullets, verbatim      (replaces 1 prose blob)

education[0]  → degree "B.Tech, Computer Science and Engineering (Data Science)"
                period "Oct 2022 – Jun 2026"                    (was "2022 - 2026")
                school/location/score 7.51 unchanged

skills        → 3 groups become 5, verbatim from "Technical Skills":
                Programming Languages · Web Technologies · AI & Machine Learning
                · Databases & Cloud · Tools & DevOps

certifications→ Oracle Cloud Infrastructure 2025 Certified Generative AI Professional (Aug 2025)
                Simplilearn Front End Development covering HTML, CSS, JavaScript (Jun 2025)
                Core Python Programming by Infosys Springboard (Sep 2024)
                [MongoDB Python Developer Path DROPPED — absent from the resume]
```

**Projects** gain `highlights[]` and `technologies[]` from the resume, keeping the portfolio's `image`/`link`/`github`:

| Project | Copy source | Print? |
|---|---|---|
| TOON Studio – Token Efficiency Toolkit | Resume: 3 bullets, 7 technologies, Dec 2025 | yes |
| KnoRa AI Knowledge Assistant | Resume: 3 bullets, 7 technologies, Aug 2025 | yes |
| Tokenizer | Portfolio only (not in the resume) | **screen only** |

**Three decisions taken, each a one-line reversal:**
1. `headline`/`bio`/`about` kept **byte-identical** — they are existing portfolio content and the resume has no prose to replace them. Consequence: `about` still opens "I am a Frontend Developer…" while `title` says AI Engineer. **That phrase at `data.ts:24` is yours to edit** — I will not write it.
2. Tokenizer stays on screen (live link + screenshot), excluded from print to protect the A4 budget.
3. Certification links: the resume's `[View Certificate]` markers carry no URLs, so certs render unlinked.

## 7. Risks

| Risk | Mitigation |
|---|---|
| Leftover import fails `tsc -b` | Remove imports in the same edit; build after every task |
| Non-`type` type import fails build | Inline `type` modifier in every new file |
| Scroll-spy flicker at boundaries | Shrunken IO band, `threshold: 0`, accumulate visible set, hold previous winner in gutters, end-sentinel clamp |
| `scrollIntoView({behavior:'auto'})` resolves to **smooth** because `index.css:6-8` sets `html{scroll-behavior:smooth}` | Pass `'instant'` explicitly |
| Removing `content-visibility` regresses perf | It bought nothing at ~600 nodes; Lighthouse before/after |
| 6th nav icon won't fit (rail already overflows at 320px) | Rail stays at 5; Contact reached via hero CTA, footer, scroll |
| Deep link breaks with router gone | Two layers: Render 301s **and** client `normalizeLegacyPath()` before `createRoot` |
| Print exceeds one page | ~9 lines slack; trim project bullets first |

## 8. Deviation from `superpowers:writing-plans`

That skill mandates a test-first cycle per task. **This repo has no test infrastructure** — no runner, no `test` script, no test files. Adding Vitest would contradict the brief's "avoid unnecessary dependencies" and expand scope well past a redesign. Every task therefore ends with **concrete manual verification** (exact commands, viewport widths, keyboard sequences) instead of an automated assertion. This is a deliberate, stated deviation, not an omission. If you want real tests for `useScrollSpy` — the one piece with genuinely subtle logic — say so and I'll add Vitest scoped to `src/hooks/` and `src/lib/` only.

---

# Part C — Tasks

## Task 0: Tooling and baseline

**Files:** none created; installs only.

- [ ] **Step 1: Install Impeccable**

```bash
cd My_portfolioDev && npx impeccable install
```
Reload the agent afterwards so its commands register.

- [ ] **Step 2: Install dependencies** — `node_modules` is absent.

```bash
npm install
```

- [ ] **Step 3: Confirm the baseline is green before touching anything**

```bash
npm run build && npm run lint
```
Expected: PASS. If it fails, stop and fix before proceeding — you need a known-good reference point.

- [ ] **Step 4: Record the baseline bundle size**

```bash
ls -la build/assets/*.js
```
Write the numbers down; Task 13 diffs against them.

- [ ] **Step 5: Commit** — `git checkout -b redesign/single-page-resume`

---

## Task 1: Types and utilities

**Files:**
- Create: `src/types.ts`, `src/lib/cn.ts`, `src/lib/scroll.ts`

**Interfaces:**
- Produces: `PortfolioData`, `Experience`, `Project`, `SkillGroup`, `Education`, `Certification`; `cn(...inputs)`; `goToSection(id, opts)`, `prefersReducedMotion()`

- [ ] **Step 1: `src/types.ts`**

```ts
export interface Contact {
  location: string; phone: string; email: string;
  linkedin: string; github: string; website: string;
}
export interface SkillGroup { category: string; items: string[] }
export interface Experience {
  role: string; company: string; context: string; location: string;
  start: string; end: string; link: string; highlights: string[];
}
export interface Project {
  title: string; subtitle?: string; date: string;
  description: string; highlights: string[]; technologies: string[];
  link?: string; github?: string; image?: string;
  /** false = portfolio-only, excluded from the printed A4 resume. */
  inResume: boolean;
}
export interface Education {
  degree: string; school: string; location: string; score: number; period: string;
}
export interface Certification { name: string; date: string; url?: string }
export interface PortfolioData {
  name: string; title: string; headline: string; bio: string; about: string;
  profileImage: string; contact: Contact;
  skills: SkillGroup[]; projects: Project[]; experience: Experience[];
  education: Education[]; certifications: Certification[];
}
```

- [ ] **Step 2: `src/lib/cn.ts`** — activates the two dead dependencies.

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Conditional classes where a later Tailwind utility beats an earlier one. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```
The inline `type` on `ClassValue` is mandatory — `verbatimModuleSyntax` makes the plain form a build error.

- [ ] **Step 3: `src/lib/scroll.ts`**

```ts
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export interface GoToSectionOptions {
  /** 'push' = user-initiated (Back returns). 'none' = responding to popstate. */
  history?: 'push' | 'replace' | 'none';
  smooth?: boolean;
}

export function goToSection(id: string, options: GoToSectionOptions = {}): void {
  const { history: mode = 'push', smooth = !prefersReducedMotion() } = options;
  const element = document.getElementById(id);
  if (!element) return;

  // 'instant', never 'auto': index.css:6-8 sets html{scroll-behavior:smooth},
  // and 'auto' defers to CSS — it does NOT mean "jump".
  element.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' });

  // Move the AT reading position into the section so the next Tab lands in
  // content, not back through the rail. Needs tabIndex={-1} on <section>.
  // preventScroll keeps the smooth animation above from being cancelled.
  element.focus({ preventScroll: true });

  if (mode === 'push') window.history.pushState(null, '', `#${id}`);
  else if (mode === 'replace') window.history.replaceState(null, '', `#${id}`);
}
```

- [ ] **Step 4: Verify** — `npm run build`. Expected PASS (unused *exports* are fine; unused *imports* are not).
- [ ] **Step 5: Commit** — `git commit -m "feat: add types and shared utilities"`

---

## Task 2: Section config and scroll-spy hooks

**Files:**
- Create: `src/config/sections.ts`, `src/hooks/useScrollSpy.ts`, `src/hooks/useAnchorNavigation.ts`, `src/hooks/useHashSync.ts`, `src/hooks/useInView.ts`

**Interfaces:**
- Consumes: `goToSection`, `prefersReducedMotion` (Task 1)
- Produces: `NAV_SECTIONS`, `NAV_SECTION_IDS`, `ANCHOR_IDS`, `HERO_ID`, `CONTACT_ID`; `useScrollSpy({sectionIds, endSentinelRef}) → string`; `useAnchorNavigation(ids)`; `useHashSync(activeId, rootId)`; `useInView(rootMargin?) → {ref, inView}`

- [ ] **Step 1: `src/config/sections.ts`** — module scope gives stable referential identity so hook dep arrays never re-fire.

```ts
import { Home, Briefcase, FolderGit2, Terminal, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavSection { id: string; label: string; icon: LucideIcon }

/** Document order. Drives the rail AND the observer. */
export const NAV_SECTIONS: readonly NavSection[] = [
  { id: 'hero',       label: 'Home',             icon: Home },
  { id: 'experience', label: 'Work Experience',  icon: Briefcase },
  { id: 'projects',   label: 'Projects',         icon: FolderGit2 },
  { id: 'skills',     label: 'Technical Skills', icon: Terminal },
  { id: 'about',      label: 'About',            icon: User },
];

export const HERO_ID = 'hero';
export const CONTACT_ID = 'contact';
export const NAV_SECTION_IDS: readonly string[] = NAV_SECTIONS.map((s) => s.id);
export const ANCHOR_IDS: readonly string[] = [...NAV_SECTION_IDS, CONTACT_ID];
```
`contact`, `education`, `certifications` are deliberately **not** spy targets — the hold-previous-winner rule keeps `About` lit through the page tail instead of the rail going dark.

- [ ] **Step 2: `src/hooks/useScrollSpy.ts`**

```ts
import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Shrinks the observer root to a 10vh band sitting 20–30% down the viewport.
 *  - Top −20%: a section must scroll meaningfully in before claiming active.
 *    With rootMargin 0 the next section lights up as a 2px sliver — classic flicker.
 *  - Bottom −70%: keeps the band thin so at most two sections compete.
 *  - 10vh not 0: a zero-height line sits in the inter-section gutter for many
 *    frames; on a fling, IO can sample between frames and miss a section entirely.
 *  - Upper third not centre: the eye tracks near the top on a long read.
 */
const BAND_ROOT_MARGIN = '-20% 0px -70% 0px';

interface UseScrollSpyOptions {
  /** Section ids in document order. MUST be module-scoped (stable identity). */
  sectionIds: readonly string[];
  /** Zero-height probe rendered after the last section. */
  endSentinelRef: RefObject<HTMLElement | null>;
}

export function useScrollSpy({ sectionIds, endSentinelRef }: UseScrollSpyOptions): string {
  const [bandId, setBandId] = useState<string>(() => sectionIds[0] ?? '');
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const order = new Map(sectionIds.map((id, index) => [id, index]));
    // IO reports only what CHANGED, so state must accumulate across callbacks.
    // Reacting to a single entry is the bug that breaks most scroll-spies on fast scroll.
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Band is in a gutter: hold the previous winner rather than clearing.
        if (visible.size === 0) return;

        let winner = '';
        let rank = -1;
        for (const id of visible) {
          const index = order.get(id) ?? -1;
          if (index > rank) { rank = index; winner = id; }
        }
        // Last in DOCUMENT order wins: scrolling down (the dominant direction)
        // the incoming section takes over as soon as it touches the band.
        setBandId((prev) => (winner && winner !== prev ? winner : prev));
      },
      { rootMargin: BAND_ROOT_MARGIN, threshold: 0 },
    );

    // threshold MUST be 0: with a shrunken root the ratio is measured against the
    // TARGET box, so a 2000px section inside an 80px band never exceeds ~0.04.
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const sentinel = endSentinelRef.current;
    if (!sentinel) return;
    // Bottom clamp: without it, a final section shorter than 30vh never reaches
    // the band and the rail sticks one item early at max scroll.
    const observer = new IntersectionObserver(
      (entries) => setAtEnd(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [endSentinelRef]);

  if (atEnd && sectionIds.length > 0) return sectionIds[sectionIds.length - 1];
  return bandId;
}
```
No special case needed at `scrollY === 0`: the band lands inside the ~900px hero, so `hero` wins naturally.

- [ ] **Step 3: `src/hooks/useHashSync.ts`**

```ts
import { useEffect } from 'react';

/**
 * Mirrors the section under the reader into location.hash. replaceState only —
 * passive scrolling must never touch the back button. ~6 writes per full page,
 * well under Safari's ~100-per-30s throttle.
 */
export function useHashSync(activeId: string, rootId: string): void {
  useEffect(() => {
    if (!activeId) return;
    const { pathname, search, hash } = window.location;
    // The hero is the canonical URL: strip the hash rather than writing #hero.
    const next = activeId === rootId ? `${pathname}${search}` : `#${activeId}`;
    if (next === (hash || `${pathname}${search}`)) return;
    window.history.replaceState(null, '', next);
  }, [activeId, rootId]);
}
```

- [ ] **Step 4: `src/hooks/useAnchorNavigation.ts`**

```ts
import { useEffect } from 'react';
import { goToSection, prefersReducedMotion } from '../lib/scroll';

export function useAnchorNavigation(anchorIds: readonly string[]): void {
  // First load with #experience. The browser's native fragment scroll already
  // failed — it ran before React put the element in the DOM.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || !anchorIds.includes(id)) return;
    // Non-zero scroll = the browser restored a position (reload mid-page).
    // Don't fight it; the hash it restored is the one the spy just wrote.
    if (window.scrollY > 0) return;

    let frame = 0;
    let landed = false;

    const land = (focus: boolean) => {
      const element = document.getElementById(id);
      if (!element) return;
      // Instant, not smooth: animating 6 screens down on a deep link is
      // slow and disorienting.
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
      if (focus) element.focus({ preventScroll: true });
      landed = true;
    };

    frame = requestAnimationFrame(() => land(false));

    // Re-correct once fonts and images settle — late layout shifts above the
    // target would otherwise leave the landing hundreds of px off.
    const correct = () => { if (landed) land(true); };
    if (document.readyState === 'complete') frame = requestAnimationFrame(correct);
    else window.addEventListener('load', correct, { once: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', correct);
    };
  }, [anchorIds]);

  useEffect(() => {
    const onPopState = () => {
      const id = window.location.hash.slice(1);
      if (id && anchorIds.includes(id)) goToSection(id, { history: 'none', smooth: false });
      else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [anchorIds]);
}
```
Leave `history.scrollRestoration` at `'auto'` — the `scrollY > 0` guard means native restore and the deep link can never both run.

- [ ] **Step 5: `src/hooks/useInView.ts`** — callback ref so it assigns to `Ref<HTMLElement>` under `strictFunctionTypes`.

```ts
import { useCallback, useRef, useState } from 'react';

/** One-shot visibility flag. Replaces framer's viewport={{ once: true }}. */
export function useInView(rootMargin = '0px 0px -10% 0px') {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect();
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin, threshold: 0 },
    );
    observer.observe(node);
    observerRef.current = observer;
  }, [rootMargin]);

  return { ref, inView };
}
```

- [ ] **Step 6: Verify** — `npm run build && npm run lint`. Expected PASS.
- [ ] **Step 7: Commit** — `git commit -m "feat: add section config and scroll-spy hooks"`

---

## Task 3: Sync `data.ts` to the resume

**Files:** Modify `src/data.ts` (full rewrite of the `DATA` literal)

**Interfaces:**
- Consumes: `PortfolioData` (Task 1)
- Produces: `DATA: PortfolioData` with `experience[].highlights`, `projects[].highlights`/`.technologies`/`.inResume`, 5 skill groups, `contact.website`

- [ ] **Step 1: Annotate and rewrite.** Use an explicit annotation (`export const DATA: PortfolioData = {…}`), not `satisfies` — it guarantees optional fields are present on every array element rather than relying on TS union normalisation.

Transcribe strictly per Part B §6. All six Tradl bullets and all six project bullets go in **verbatim** — no rewording, no trimming, no added metrics. Keep `headline`, `bio`, `about` byte-identical.

- [ ] **Step 2: Fix the typo at the old line 42** — `"in real-time. featuring"` → `"in real-time, featuring"`.
- [ ] **Step 3: Drop the now-redundant optional chain** in `SkillsEducationSection.tsx:43` (`DATA.experience?.map` → `.map`). It becomes non-optional under the type.
- [ ] **Step 4: Verify** — `npm run build`. Expected PASS. Then `npm run dev` and confirm existing routes still render with the new copy (they will look wrong stylistically — that's expected until Task 7).
- [ ] **Step 5: Manual content check** — read the rendered Experience bullets against the resume text side by side. Every number must match: 40%, 60%, 1,000+, 45, 30,137, 0.37, 0.61, 90.
- [ ] **Step 6: Commit** — `git commit -m "feat: sync portfolio data to resume"`

---

## Task 4: Design tokens

**Files:** Modify `tailwind.config.js`, `src/index.css`

- [ ] **Step 1: Extend the Tailwind theme** so semantic names replace arbitrary values.

```js
theme: {
  extend: {
    colors: {
      bg:   { DEFAULT:'var(--color-bg-primary)', subtle:'var(--color-bg-secondary)',
              muted:'var(--color-bg-tertiary)',  nav:'var(--color-bg-nav)' },
      fg:   { DEFAULT:'var(--color-text-primary)', secondary:'var(--color-text-secondary)',
              muted:'var(--color-text-muted)' },
      line: { DEFAULT:'var(--color-border)', hover:'var(--color-border-hover)' },
    },
    borderRadius: { card:'16px', control:'10px' },
    boxShadow:    { soft:'0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)' },
    transitionDuration: { fast:'150ms', base:'220ms' },
    transitionTimingFunction: { brand:'cubic-bezier(0.2,0.8,0.2,1)' },
    maxWidth: { measure:'68ch' },
  }
}
```

- [ ] **Step 2: Delete `index.css:102-105`** — the global `section { content-visibility: auto; contain-intrinsic-size: 0 500px }`. It breaks print, makes `scrollIntoView` compute against placeholder geometry, and buys nothing at ~600 nodes.

- [ ] **Step 3: Scope the global heading rules.** Element selectors are `(0,0,1)` so Tailwind already wins on *size*, but weight/tracking/leading **leak** into every heading. Replace the `h1/h2/h3/p` blocks in the `@layer base` with family-only rules plus an opt-in display class:

```css
@layer base {
  h1, h2, h3, h4 { font-family: 'Outfit', sans-serif; }
  .type-display {
    @apply text-[clamp(2.5rem,8vw,4.5rem)] leading-none font-extrabold tracking-[-0.04em];
    font-family: 'Outfit', sans-serif;
  }
  /* Impeccable typeset.md: light-on-dark renders optically heavier. */
  .dark body { letter-spacing: 0.01em; }
}
```

- [ ] **Step 4: Retire the elastic scale.** Replace the `.hover-elastic` body in the utilities layer:

```css
.hover-elastic { @apply transition-all duration-base ease-brand; }
.hover-elastic:hover { @apply -translate-y-0.5; }
```

- [ ] **Step 5: Reposition the aura** for the rAF rewrite in Task 5 — `.cursor-aura` gets `left: 0; top: 0;` (keep the existing `transform: translate(-50%,-50%)` as the pre-first-frame value).
- [ ] **Step 6: Delete the stale comments** at `index.css:20,51,52` (`/* Lightened from #a3a3a3 */` above `--color-text-secondary: #a3a3a3`).
- [ ] **Step 7: Verify** — `npm run build && npm run dev`. Hero must still render at display size; nothing else should have grown.
- [ ] **Step 8: Commit** — `git commit -m "feat: establish design tokens"`

---

## Task 5: UI primitives

**Files:**
- Create: `src/components/ui/Card.tsx`, `Chip.tsx`, `Meta.tsx`, `Button.tsx`, `IconBox.tsx`, `Reveal.tsx`, `CursorAura.tsx`
- Move: `SectionTitle.tsx`, `PixelLogo.tsx`, `ThemeToggle.tsx` → `src/components/ui/`

**Interfaces:**
- Consumes: `cn` (Task 1), `useInView` (Task 2)
- Produces: `Card`, `Chip`, `Meta`, `Button`, `IconBox`, `Reveal`, `CursorAura`, `SectionTitle` (now `{children, icon: LucideIcon, id: string}`)

- [ ] **Step 1: `Card.tsx`** — one recipe replacing all four.

```tsx
import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  /** Adds hover lift + border shift. Omit for static content. */
  interactive?: boolean;
  padding?: 'sm' | 'md';
  className?: string;
}

export default function Card({
  children, as: Tag = 'div', interactive = false, padding = 'md', className,
}: CardProps) {
  return (
    <Tag className={cn(
      'rounded-card border border-line bg-bg-subtle',
      padding === 'sm' ? 'p-4' : 'p-6',
      interactive && 'transition-all duration-base ease-brand hover:border-line-hover hover:-translate-y-0.5 hover:shadow-soft',
      className,
    )}>
      {children}
    </Tag>
  );
}
```

- [ ] **Step 2: `Chip.tsx`** — one recipe replacing both.

```tsx
import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ChipProps { children: ReactNode; variant?: 'default' | 'mono'; className?: string }

export default function Chip({ children, variant = 'default', className }: ChipProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full border border-line bg-bg-subtle text-fg-secondary',
      variant === 'mono' ? 'px-2.5 py-1 text-[11px] font-mono' : 'px-3 py-1.5 text-sm',
      className,
    )}>
      {children}
    </span>
  );
}
```

- [ ] **Step 3: `Meta.tsx`** — one recipe replacing all five. Uses `text-fg-secondary`, never `text-fg-muted`, because 11px on dark at 4.9:1 is below the size floor.

```tsx
import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface MetaProps { children: ReactNode; as?: ElementType; className?: string }

export default function Meta({ children, as: Tag = 'span', className }: MetaProps) {
  return (
    <Tag className={cn(
      'text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-secondary',
      className,
    )}>
      {children}
    </Tag>
  );
}
```

- [ ] **Step 4: `Reveal.tsx`** — the single authored motion moment.

```tsx
import type { ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/cn';

interface RevealProps { children: ReactNode; index?: number; as?: ElementType; className?: string }

export default function Reveal({ children, index = 0, as: Tag = 'div', className }: RevealProps) {
  const { ref, inView } = useInView();
  return (
    <Tag
      ref={ref}
      // opacity-0 until visible, then the keyframe's `forwards` fill wins
      // (animation origin outranks the utility). Reduced motion is already
      // handled by index.css:126-135, which zeroes animation-duration.
      className={cn('opacity-0', inView && 'animate-fade-in-up', className)}
      style={inView ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
```

- [ ] **Step 5: `CursorAura.tsx`** — framer-free, extracted from `App.tsx:17-44`.

```tsx
import { useEffect, useRef } from 'react';

/** Decorative pointer glow. rAF + transform, zero React re-renders, zero deps. */
export default function CursorAura() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
    let x = targetX, y = targetY, frame = 0;

    const tick = () => {
      // Exponential follow, tuned to feel like the old spring (damping 40 /
      // stiffness 150) without the solver.
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      // Park the loop once settled so an idle tab costs nothing.
      if (Math.abs(targetX - x) < 0.5 && Math.abs(targetY - y) < 0.5) { frame = 0; return; }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX; targetY = event.clientY;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(frame); };
  }, []);

  return <div ref={ref} className="cursor-aura hidden lg:block print:hidden" aria-hidden="true" />;
}
```

- [ ] **Step 6: `Button.tsx` and `IconBox.tsx`** — `Button` takes `variant: 'primary' | 'ghost' | 'icon'` and `as: 'a' | 'button'`; primary is `rounded-full bg-fg text-bg px-8 py-3.5 text-sm font-semibold`, ghost is `border border-line`, icon is `p-3.5 rounded-full border border-line`. All three get `focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-4 focus-visible:ring-offset-bg`. `IconBox` renders a `LucideIcon` at 16/20/24 in a `rounded-control border border-line bg-bg-muted p-2` container.

- [ ] **Step 7: Update `SectionTitle.tsx`** — replace `icon: any` with `icon: LucideIcon`, add a required `id: string` applied to the `<h2>` so sections can point `aria-labelledby` at it.

- [ ] **Step 8: Verify** — `npm run build && npm run lint`. Expected PASS.
- [ ] **Step 9: Commit** — `git commit -m "feat: add UI primitives"`

---

## Task 6: Layout primitives

**Files:** Create `src/components/layout/Section.tsx`, `SkipLink.tsx`, `NavItem.tsx`, `SideNav.tsx`, `SiteFooter.tsx`

**Interfaces:**
- Consumes: `cn`, `goToSection`, `NAV_SECTIONS`, `ThemeToggle`, `PixelLogo`
- Produces: `Section`, `SkipLink`, `NavItem`, `SideNav`, `SiteFooter`

- [ ] **Step 1: `Section.tsx`**

```tsx
import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionProps { id: string; labelledBy: string; children: ReactNode; className?: string }

/**
 * Every top-level band: a named landmark, a spy target, and a programmatic
 * focus target with clearance under the fixed rail. Vertical rhythm lives on
 * <main> (space-y-*), never here.
 */
export default function Section({ id, labelledBy, children, className }: SectionProps) {
  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={labelledBy}
      className={cn(
        'scroll-mt-8 lg:scroll-mt-16 outline-none',
        // Programmatic .focus() only triggers :focus-visible when the last input
        // was a keypress — mouse users never see the ring, Enter-on-nav does.
        'focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-4 focus-visible:ring-offset-bg',
        className,
      )}
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 2: `NavItem.tsx`** — anchor with `href={'#' + id}`, `aria-current={active ? 'true' : undefined}`, `onClick` calling `event.preventDefault()` then `goToSection(id)`. Keeping a real `href` means middle-click and "copy link" work.
- [ ] **Step 3: `SideNav.tsx`** — maps `NAV_SECTIONS` to `NavItem`, then divider + `ThemeToggle`. **Fix the 320px overflow** while here: `gap-1.5 sm:gap-4` and `px-3 sm:px-6`. Add `print:hidden`.
- [ ] **Step 4: `SiteFooter.tsx`** — extracted from `App.tsx:232-262`. Use `{DATA.name}` instead of the hardcoded string at line 235. Repoint the Contact link to `#contact`. **Replace the dead Drive URL** at line 247 with a Download button calling `window.print()`. Add `print:hidden`.
- [ ] **Step 5: `SkipLink.tsx`** — extracted verbatim from `App.tsx:167-172`.
- [ ] **Step 6: Verify** — `npm run build`. Expected PASS.
- [ ] **Step 7: Commit** — `git commit -m "feat: add layout primitives"`

---

## Task 7: Section components

**Files:**
- Create: `src/components/sections/HeroSection.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx`, `SkillsSection.tsx`, `AboutSection.tsx`, `CredentialsSection.tsx`, `ContactSection.tsx`
- Delete: `src/components/SkillsEducationSection.tsx`, `src/components/AboutSection.tsx`, `src/components/ProjectsSection.tsx`

One pass per file — ids, `<Section>` wrapper, framer stripped for `Reveal`, `any` typed — so nothing is touched twice.

- [ ] **Step 1: `HeroSection.tsx`.** Extract `App.tsx:74-150`. Three mandatory changes:
  1. **Delete the kicker** at lines 78-82. Impeccable craft floor bans eyebrows above headings absolutely. The role moves *below* the `h1` as `<p className="text-xl text-fg-secondary">{DATA.title}</p>`, where it reads as a subtitle.
  2. **Delete the `<address>` block** (lines 136-145) — `ContactSection` owns this now, and a shorter hero gets the reader to Experience sooner.
  3. `max-w-2xl` → `max-w-measure` (68ch) on the body copy, per the 45–75ch rule.
  Use `.type-display` on the `h1`.

- [ ] **Step 2: `ExperienceSection.tsx`.** Split from `SkillsEducationSection.tsx:40-70`. The left-border timeline stays. Render `exp.highlights` as a `<ul>` of `<li className="text-sm leading-[1.55] max-w-measure">`, replacing the single `<p>`. Header line: role · company (linked) · context · location · `{exp.start} – {exp.end}`.

- [ ] **Step 3: `SkillsSection.tsx`.** Split from `SkillsEducationSection.tsx:9-37`. **Regrid `lg:grid-cols-4` → `lg:grid-cols-2`** — there are 5 groups now, and the AI/ML group holds 7 long items. Skill pills become `<Chip>`.

- [ ] **Step 4: `ProjectsSection.tsx`.** Move to `sections/`. Remove all three `LazyMotion` wrappers, wrap cards in `<Reveal index={i}>`, replace `project: any` with `project: Project`, tech tags → `<Chip variant="mono">`, card shell → `<Card interactive>`. Render `project.highlights` as a bullet list under the description.

- [ ] **Step 5: `AboutSection.tsx`.** Prose only. **Remove the `prose prose-sm sm:prose-base dark:prose-invert` classes** — `@tailwindcss/typography` isn't installed, so they are no-ops. Apply `max-w-measure` instead.

- [ ] **Step 6: `CredentialsSection.tsx`.** Education + Certifications, split from the old `AboutSection.tsx:15-53`. Both use `<Card>`; certs render unlinked (no URLs supplied). Keep `numberFormatting.format(edu.score)` → "CGPA: 7.51/10".

- [ ] **Step 7: `ContactSection.tsx`.** New. Renders email, **phone** (`DATA.contact.phone`, never displayed anywhere in the app today), location, website, GitHub, LinkedIn. `id="contact"`.

- [ ] **Step 8: Verify** — `npm run build`. Will FAIL until Task 8 rewrites `App.tsx` (it still imports deleted files). That is expected; proceed.
- [ ] **Step 9: Commit** — `git commit -m "feat: split routes into page sections"`

---

## Task 8: Single-page shell

**Files:** Modify `src/App.tsx` (full rewrite); Create `src/lib/legacyRedirect.ts`; Modify `src/main.tsx`, `render.yaml`, `package.json`

**Interfaces:**
- Consumes: everything from Tasks 2, 5, 6, 7
- Produces: the rendered single page

- [ ] **Step 1: `src/lib/legacyRedirect.ts`**

```ts
const LEGACY_ROUTES: Readonly<Record<string, string>> = {
  '/about': 'about', '/projects': 'projects', '/skills': 'skills', '/experience': 'experience',
};

/**
 * Collapses pre-one-page deep links onto the single document. MUST run before
 * createRoot().render() so the hash is correct when the deep-link hook reads it.
 * replaceState neither scrolls nor fires hashchange, so this is invisible.
 */
export function normalizeLegacyPath(): void {
  const { pathname, search, hash } = window.location;
  const path = pathname.replace(/\/+$/, '') || '/';
  const sectionId = LEGACY_ROUTES[path];
  if (sectionId) {
    window.history.replaceState(null, '', `/${search}#${sectionId}`);
    return;
  }
  // Any other path the SPA rewrite handed us is dead: fold it onto the root
  // rather than shipping a 404 route. On a one-page portfolio, showing the
  // portfolio beats showing a 404.
  if (path !== '/') window.history.replaceState(null, '', `/${search}${hash}`);
}
```

- [ ] **Step 2: Rewrite `src/main.tsx`** — drop `BrowserRouter`, call `normalizeLegacyPath()` before `createRoot`.

- [ ] **Step 3: Rewrite `App.tsx`.**

```tsx
export default function App() {
  const endSentinel = useRef<HTMLDivElement>(null);
  const activeId = useScrollSpy({ sectionIds: NAV_SECTION_IDS, endSentinelRef: endSentinel });
  useAnchorNavigation(ANCHOR_IDS);
  useHashSync(activeId, HERO_ID);

  return (
    <div className="app-shell min-h-screen flex flex-col overflow-x-hidden relative">
      <div className="noise-overlay print:hidden" aria-hidden="true" />
      <CursorAura />
      <SkipLink />
      <SideNav activeId={activeId} />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-8 pt-8 pb-32 lg:pt-16 lg:pb-24 lg:pl-32 xl:pl-40 w-full space-y-20 sm:space-y-28"
      >
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <CredentialsSection />
        <ContactSection />
        {/* Zero-height probe: when visible the reader has hit the end, so the
            rail pins the last section instead of whatever sits under the band. */}
        <div ref={endSentinel} aria-hidden="true" className="h-px w-full" />
      </main>
      <SiteFooter />
    </div>
  );
}
```
**Drop `xl:min-w-[1100px]`** from `<main>` — it fights `max-w-[1200px]` and the print layout. Keep `lg:pl-32` (still clears the rail). Do **not** import `NAV_SECTIONS` here — only the ID arrays; an unused import fails the build.

- [ ] **Step 4: Rewrite `render.yaml`** — 301s for the four retired paths, wildcard rewrite **last** (Render evaluates top-down):

```yaml
    routes:
      - { type: redirect, source: /about,      destination: /#about }
      - { type: redirect, source: /projects,   destination: /#projects }
      - { type: redirect, source: /skills,     destination: /#skills }
      - { type: redirect, source: /experience, destination: /#experience }
      - { type: rewrite,  source: /*,          destination: /index.html }
```

- [ ] **Step 5: Remove `react-router-dom`** from `package.json`, then `npm install` to prune the lockfile.
- [ ] **Step 6: Verify** — `npm run build && npm run lint`. **This is the first green checkpoint since Task 6.**
- [ ] **Step 7: Manual check** — `npm run dev`, then hit `/projects` directly. Vite's SPA fallback serves index.html, `normalizeLegacyPath` rewrites to `/#projects`, page lands there with no visible scroll animation.
- [ ] **Step 8: Commit** — `git commit -m "feat: collapse site to single scrolling page"`

---

## Task 9: Print document

**Files:** Create `src/components/resume/ResumeDocument.tsx`; Modify `src/index.css`, `src/App.tsx`

- [ ] **Step 1: `ResumeDocument.tsx`** — renders from `DATA`, filtering `projects.filter(p => p.inResume)`. Structure: header (name · title · contact line) → Education → Experience → Projects → Skills → Certifications. Root class `resume-document hidden`. Each entry wrapped in `.resume-entry` for break control. Informational links get `data-print-url`.

- [ ] **Step 2: Mount it in `App.tsx`** as a sibling of `.app-shell`, always rendered (never lazy, never conditional).

- [ ] **Step 3: Add the print layer to `index.css`**

```css
@page { size: A4; margin: 12mm 14mm; }

@media print {
  html { scroll-behavior: auto; }
  /* Force light regardless of the .dark class on <html>. */
  :root, :root.dark {
    --color-text-primary: #000; --color-text-secondary: #1a1a1a;
    --color-bg-primary: #fff;   --color-border: #c8c8c8;
  }
  body { background: #fff !important; color: #000 !important; }
  .app-shell { display: none !important; }
  .resume-document { display: block !important; }
  .resume-entry, .resume-group { break-inside: avoid; }
  /* URLs only where they carry information — never on icon links. */
  .resume-document a[data-print-url]::after {
    content: " (" attr(href) ")"; font-size: 7.5pt; word-break: break-all;
  }
}
```
Fixed chrome uses the Tailwind `print:hidden` variant in JSX (v3.4 ships it), not selectors here.

- [ ] **Step 4: Verify — Chrome.** Ctrl+P. Expect exactly **one** A4 page; no rail, aura, noise, footer, or Download button; light colors even with dark mode active; every section present and non-blank.
- [ ] **Step 5: Verify — Firefox.** Same checks; `@page` support differs between engines.
- [ ] **Step 6: Verify — dark mode.** Toggle to dark, then Ctrl+P. Output must still be black-on-white.
- [ ] **Step 7: If it spills to page 2** — trim project `highlights` to one line each. Do not reduce type below 9pt.
- [ ] **Step 8: Commit** — `git commit -m "feat: add A4 print resume document"`

---

## Task 10: Remove framer-motion

**Files:** Modify `package.json`, `vite.config.ts`

- [ ] **Step 1: Confirm nothing imports it** — `grep -r "framer-motion" src/` must return nothing (Tasks 5 and 7 removed every usage). If anything remains, fix it before continuing.
- [ ] **Step 2: Remove the dependency**, then `npm install`.
- [ ] **Step 3: Fix `manualChunks`.** The old `id.includes('react')` also matched `lucide-react` and `react-router-dom`, making the `vendor-icons` rule unreachable:

```js
manualChunks(id) {
  if (!id.includes('node_modules')) return undefined;
  if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'vendor-react';
  return undefined;
}
```

- [ ] **Step 4: Verify** — `npm run build`. Compare `build/assets/*.js` against the Task 0 baseline; expect **≈ −45 to −55 KB gz**.
- [ ] **Step 5: Commit** — `git commit -m "refactor: remove framer-motion"`

---

## Task 11: Repository hygiene

**Files:** `public/robots.txt`, `index.html`, `README.md`, `.gitignore`; delete unused assets

- [ ] **Step 1: Untrack the stale build** — `git rm -r --cached build/`. It is committed *and* gitignored, and the committed copy references 5 hashed asset files that don't exist, so serving it yields a blank page.
- [ ] **Step 2: Delete unused assets** — `src/assets/react.svg`, `public/vite.svg`, `public/profile.png`, `public/projects/*.png` (~853 KB; only the `.webp` variants are referenced).
- [ ] **Step 3: Fix `robots.txt`** — remove the `your-portfolio.vercel.app` sitemap placeholder or ship a real one-URL `sitemap.xml`.
- [ ] **Step 4: Resolve missing assets** — either add `og-image.png` and `apple-touch-icon.png` to `public/`, or remove the references at `index.html:23,32,39`.
- [ ] **Step 5: Resolve the domain conflict** — `CNAME` says `hemanthk.dev`, the canonical says `hemanthkokkonda.dev`, `robots.txt` says a Vercel placeholder. The resume header says **hemanthk.dev**; make everything match it.
- [ ] **Step 6: Update `index.html` JSON-LD** — `jobTitle` currently reads "AI Engineer & Frontend Developer"; align with the resume title.
- [ ] **Step 7: Replace the Vite template `README.md`** with real setup, architecture, and deployment notes.
- [ ] **Step 8: Verify** — `npm run build`, and confirm the dev server shows no 404s in the network tab.
- [ ] **Step 9: Commit** — `git commit -m "chore: repository hygiene"`

---

## Task 12: Accessibility and responsive verification

- [ ] **Step 1: Headings** — exactly one `h1` (the name); `h2` per section; `h3` in cards. No skipped levels.
- [ ] **Step 2: Landmarks** — all 7 sections have distinct accessible names via `aria-labelledby` pointing at their `h2`.
- [ ] **Step 3: Keyboard** — Tab to a rail item → Enter → focus ring appears on the section, and the **next** Tab enters section content rather than continuing through the rail. Mouse-click the same item → **no** ring.
- [ ] **Step 4: Skip link** — verify focus actually moves, specifically in Safari (needs `tabIndex={-1}` on `<main>`).
- [ ] **Step 5: Reduced motion** — DevTools → Rendering → emulate `prefers-reduced-motion: reduce`. Nav clicks jump instantly, `Reveal` content appears without fading, aura is disabled.
- [ ] **Step 6: Contrast** — run a checker over every text/bg pair in **both** themes. Confirm no 11px text uses `text-fg-muted`.
- [ ] **Step 7: Widths 320 / 360 / 768 / 1024 / 1280 / 1536** — rail must not overflow at **320px** (a pre-existing bug this fixes); `lg:pl-32` still clears the rail; no horizontal body scroll anywhere.
- [ ] **Step 8: Scroll-spy** — slow-scroll every boundary watching for flicker; fling top→bottom; sit at max scroll and confirm the last section stays lit; Back/Forward across nav clicks behaves.
- [ ] **Step 9: Deep links** — cold-load `/#experience`; reload while scrolled mid-page and confirm the restored position isn't fought.
- [ ] **Step 10: Commit any fixes** — `git commit -m "fix: accessibility and responsive issues"`

---

## Task 13: Final verification

- [ ] **Step 1: Impeccable review** — run `/impeccable critique` and `/impeccable audit` against the page. Triage findings; fix P0/P1.
- [ ] **Step 2: Detector CLI** — `npx impeccable detect` (60 deterministic anti-pattern rules, no LLM needed). Confirm the eyebrow/kicker violation is gone.
- [ ] **Step 3: Craft floor** — re-check every row of the Design Brief §8 table. All must pass.
- [ ] **Step 4: Lighthouse** — desktop and mobile, compare against the Task 0 baseline.
- [ ] **Step 5: Bundle diff** — `ls -la build/assets/*.js` vs. baseline; expect ≈ −45 to −55 KB gz and 3 fewer requests.
- [ ] **Step 6: Cross-browser** — Chrome, Firefox, Safari (incl. iOS). IntersectionObserver band behaviour and `scroll-behavior` diverge most on Safari.
- [ ] **Step 7: Content audit** — read every rendered string against the resume text. Zero invented content. Every metric matches.
- [ ] **Step 8: Final build** — `npm run build && npm run lint`. Both green.
- [ ] **Step 9: Commit and open the PR.**

---

## Self-Review

Run per `superpowers:writing-plans`.

**1. Spec coverage.** All nine sections the brief requested are present: architecture (Part B §1), problems categorised into UI/UX/a11y/perf/maintainability/responsiveness/correctness (§2), design goals (§3), component inventory (§4), design system with type/spacing/color/radius/shadow/icon/grid/breakpoint/motion specs (§5), phased roadmap with dependencies (Part C, 14 tasks), file-level changes (§4 + per-task **Files** blocks), risks (§7), validation checklist (Tasks 12–13). Phases 1–9 of the brief map to Tasks 1–13. Impeccable is used in Tasks 0, 13; the shape brief is Part A; the craft floor is Part A §8 and gated in Task 13 Step 3.

**2. Placeholder scan.** No "TBD", no "add appropriate handling", no "similar to Task N". Tasks 5 Step 6, 6 Steps 2–5, 7 Steps 1–7, and 9 Step 1 describe components in prose with exact class strings and required changes rather than full listings — they are mechanical applications of primitives whose full source appears in Tasks 5 and 6. Every genuinely novel or subtle piece (all four hooks, `cn`, `goToSection`, `legacyRedirect`, `Card`, `Chip`, `Meta`, `Reveal`, `CursorAura`, `Section`, the print CSS, `manualChunks`) is given complete and copy-pasteable.

**3. Type consistency.** `PortfolioData` (Task 1) is consumed by name in Task 3. `NAV_SECTION_IDS` / `ANCHOR_IDS` / `HERO_ID` (Task 2) are the exact identifiers used in Task 8 Step 3. `useScrollSpy` takes `{sectionIds, endSentinelRef}` in Task 2 and is called with exactly those keys in Task 8. `cn` is imported as a named export everywhere. `Project.inResume` is defined in Task 1 and consumed in Task 9 Step 1. `SectionTitle`'s new required `id` prop (Task 5 Step 7) is what `Section`'s `labelledBy` (Task 6 Step 1) points at.

**4. Known gap, stated not hidden.** No automated tests — see Part B §8 for the reasoning and the offer.

---

## Execution Handoff

Plan complete. Two execution options:

1. **Subagent-Driven (recommended)** — a fresh subagent per task with two-stage review between tasks. Best fit here: the tasks have clean boundaries and explicit interface contracts.
2. **Inline Execution** — run tasks in this session with checkpoints for review.

Task 0 Step 1 installs Impeccable, which plan mode currently blocks — it runs the moment execution begins.
