import {
  Activity as ActivityIcon,
  ArrowUpDown as RerankIcon,
  ChartLine as ChartLineIcon,
  Cloud as CloudIcon,
  Database as DatabaseIcon,
  DatabaseZap as DatabaseZapIcon,
  FileText,
  Layers as LayersIcon,
  Mail,
  MoveRight,
  Plus,
  Radar as RadarIcon,
  ScrollText as ScrollTextIcon,
  Waypoints as WaypointsIcon,
  Search as SearchIcon,
  Send,
  Sparkles as SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

import { AvatarSwitch } from "@/components/avatar-switch";
import { BrandIcon } from "@/components/brand-icon";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/social-icons";
import { GitHubActivity } from "@/components/github-activity";
import { InteractiveDots } from "@/components/interactive-dots";
import { MagneticButton } from "@/components/magnetic-button";
import { ProjectCard } from "@/components/project-card";
import { RoleCycle } from "@/components/role-cycle";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  FOCUS_AREAS,
  ME,
  PROJECTS,
  SECTION_IDS,
  SKILLS,
} from "@/lib/config";
import type { AchievementEntry, SkillIcon } from "@/lib/config";

const BOLD_CLASS =
  "font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100";

const CONNECT_LINKS = [
  {
    label: "Resume",
    href: ME.resumeUrl,
    external: true,
    icon: <FileText className="size-3.5 shrink-0" aria-hidden />,
  },
  {
    label: "Contact",
    href: "/contact/",
    external: false,
    icon: <Send className="size-3.5 shrink-0" aria-hidden />,
  },
  {
    label: "GitHub",
    href: ME.socials.github,
    external: true,
    icon: <GitHubIcon className="size-3.5 shrink-0" />,
  },
  {
    label: "LinkedIn",
    href: ME.socials.linkedin,
    external: true,
    icon: <LinkedInIcon className="size-3.5 shrink-0" />,
  },
  {
    label: "X (Twitter)",
    href: ME.socials.x,
    external: true,
    icon: <XIcon className="size-3.5 shrink-0" />,
  },
  {
    label: "Email",
    href: `mailto:${ME.email}`,
    external: false,
    icon: <Mail className="size-3.5 shrink-0" aria-hidden />,
  },
];

const CONNECT_BUTTON_CLASS =
  "focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px] w-full";

const CHIP_CLASS =
  "focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600 cursor-pointer";

const SCHOOL_ROW_CLASS =
  "flex gap-3 p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40";

export default function HomePage() {
  return (
    <main>
      <InteractiveDots className="screen-line-bottom h-24 w-full sm:h-32" />

      <header className="flex w-full items-start">
        <div className="p-3 sm:p-4">
          <AvatarSwitch />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0 pt-3 sm:pt-4">
          <h1 className="text-xl font-medium text-neutral-700 md:text-2xl dark:text-neutral-50">
            {ME.name}
          </h1>
          <p className="flex min-h-6 items-center text-sm font-medium text-neutral-500/80 md:text-base dark:text-neutral-400">
            <RoleCycle roles={[...ME.roles]} />
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <MagneticButton
              href="/contact/"
              label="Let's talk"
              external={false}
              icon={<Send className="size-3.5 shrink-0" aria-hidden />}
            />
            <MagneticButton
              href={`mailto:${ME.email}`}
              label="Send an email"
              external={false}
              icon={<Mail className="size-3.5 shrink-0" aria-hidden />}
            />
          </div>
        </div>
      </header>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <section aria-labelledby={SECTION_IDS.about}>
        <SectionHeading id={SECTION_IDS.about}>About</SectionHeading>
        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <ul className="list-disc space-y-2.5 pl-4 text-base leading-relaxed font-normal text-neutral-800 dark:text-neutral-300">
            <li>
              I&apos;m Hemanth, a software engineer who builds AI products end to
              end. That means the ingestion and{" "}
              <b className={BOLD_CLASS}>retrieval</b> layer, the{" "}
              <b className={BOLD_CLASS}>agent workflows</b>, the APIs, and the
              interface someone actually uses, not just a model call behind a
              text box.
            </li>
            <li>
              At Tradl AI, a live stock-research platform, I virtualized 1,000+
              ticking rows (40% faster first paint, 60% less memory), built a
              Claude-style loading animation that cycles playful status words
              while AI work is in flight, and shipped MarketBuzz, a news page
              streaming live backend data and RSS feeds. I also built the
              observability around these services: structured logging, metrics
              and Amazon CloudWatch alarms. Rebuilding ingestion and{" "}
              <b className={BOLD_CLASS}>hybrid retrieval</b> took recall from 0.37
              to 0.61 on a 90-question benchmark.
            </li>
            <li>
              My own projects follow the same rules: Scout hands low-confidence
              answers to a human instead of guessing, ragpdf cites the page and
              refuses to answer when the source is ambiguous, and TOON Studio cut
              tokens 33-52% with a test suite behind it. I like{" "}
              <b className={BOLD_CLASS}>boring engineering</b>: typed boundaries,
              retries, tracing and honest failure modes, because that&apos;s what
              makes AI useful after the demo.
            </li>
          </ul>
        </div>
      </section>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <section aria-labelledby={SECTION_IDS.connect}>
        <SectionHeading id={SECTION_IDS.connect}>Connect</SectionHeading>
        <ul className="connect-grid grid grid-cols-3 gap-2 px-4 py-5 sm:px-5 md:grid-cols-6">
          {CONNECT_LINKS.map((link) => (
            <li className="flex min-w-0" key={link.label}>
              <a
                href={link.href}
                data-ui-feedback="tap"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={CONNECT_BUTTON_CLASS}
              >
                {link.icon}
                <span className="truncate">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <section aria-labelledby={SECTION_IDS.experience}>
        <SectionHeading id={SECTION_IDS.experience} className="pb-2">
          Experience
        </SectionHeading>
        <ul className="space-y-5 px-4 py-5 sm:px-6">
          {EXPERIENCE.map((entry) => (
            <li className="flex items-center gap-3" key={entry.company}>
              <span className="flex size-10 shrink-0 items-center justify-center select-none">
                <img
                  alt=""
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  className="size-10 rounded-[10px] object-cover"
                  src={entry.logo}
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-foreground min-w-0 truncate text-[15px] leading-snug font-semibold">
                    {entry.href ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                      >
                        {entry.company}
                      </a>
                    ) : (
                      entry.company
                    )}
                  </h3>
                  <p className="text-muted-foreground shrink-0 text-xs tabular-nums">
                    {entry.start} - {entry.end}
                  </p>
                </div>
                <p className="text-muted-foreground text-[13px] leading-snug">
                  {entry.role} <span aria-hidden>•</span> {entry.location}
                </p>
                <p className="text-muted-foreground truncate text-[13px] leading-snug">
                  {entry.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <GitHubActivity />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <section aria-labelledby={SECTION_IDS.projects}>
        <SectionHeading id={SECTION_IDS.projects}>Projects</SectionHeading>
        <div className="relative">
          <div
            aria-hidden
            className="bg-border pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px sm:block"
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2">
            <div className="relative flex flex-col p-4">
              <ProjectCard project={PROJECTS[0]} />
            </div>
            <div
              aria-hidden
              className="screen-line-top screen-line-bottom block h-3 sm:hidden"
            />
            <div className="relative flex flex-col p-4">
              <ProjectCard project={PROJECTS[1]} />
            </div>
          </div>
        </div>
        <div className="screen-line-top screen-line-bottom relative mt-1 flex w-full items-center justify-center gap-2 px-4 py-2">
          <Button asChild size="sm">
            <Link href="/projects">
              See all projects
              <MoveRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <section aria-labelledby={SECTION_IDS.stack}>
        <SectionHeading id={SECTION_IDS.stack}>Skills</SectionHeading>
        <ul className="flex flex-wrap gap-2 px-4 py-5 sm:px-5">
          {SKILLS.map((skill) => (
            <li className="flex" key={skill.label}>
              <button type="button" className={CHIP_CLASS}>
                <SkillGlyph icon={skill.icon} />
                {skill.label}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <section aria-labelledby={SECTION_IDS.education}>
        <SectionHeading id={SECTION_IDS.education}>Education</SectionHeading>
        <ul className="pt-px">
          {EDUCATION.map((item) => (
            <EducationRow key={item.title} item={item} />
          ))}
        </ul>
      </section>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <section aria-labelledby={SECTION_IDS.certifications}>
        <SectionHeading id={SECTION_IDS.certifications}>
          Certificates
        </SectionHeading>
        <ul className="pt-px">
          {CERTIFICATIONS.map((item) => (
            <EducationRow key={item.title} item={item} />
          ))}
        </ul>
      </section>

      <div>
        <div aria-hidden className="bg-border h-px w-full shrink-0" />
        <section
          aria-label="Areas of focus"
          className="border-border screen-line-top screen-line-bottom relative border-x px-5 py-8"
        >
          <div className="relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg">
            <div className="relative aspect-square w-full">
              <div
                aria-hidden
                className="border-foreground/10 absolute top-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border"
              />
              <div
                aria-hidden
                className="border-foreground/10 absolute top-[22%] left-[2%] h-[55%] w-[55%] rounded-full border"
              />
              <div
                aria-hidden
                className="border-foreground/10 absolute top-[22%] right-[2%] h-[55%] w-[55%] rounded-full border"
              />
              <div
                aria-hidden
                className="border-foreground/10 absolute bottom-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border"
              />
              <span className="text-foreground/50 absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] whitespace-nowrap sm:text-xs md:text-sm">
                {FOCUS_AREAS.top}
              </span>
              <span className="text-foreground/50 absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm">
                {FOCUS_AREAS.left}
              </span>
              <span className="text-foreground/50 absolute top-1/2 right-[15%] translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm">
                {FOCUS_AREAS.right}
              </span>
              <span className="text-foreground/50 absolute bottom-[14%] left-1/2 translate-y-1/2 -translate-x-1/2 text-center text-[10px] leading-tight whitespace-pre-wrap sm:text-xs md:text-sm">
                {FOCUS_AREAS.bottom}
              </span>
              <div className="border-background absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 shadow-md sm:size-16 sm:border-4 md:size-20">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                  src={ME.avatarPhoto}
                />
              </div>
            </div>
          </div>
          <div
            id="contact"
            className="flex w-full flex-col items-center px-5 pt-2 pb-0 sm:px-10"
          >
            <p className="mb-5 text-center text-sm text-balance opacity-70 md:text-lg">
              Still reading? That means something clicked. Let&apos;s talk.
            </p>
            <Link
              href="/contact/"
              className="focus-visible:ring-ring/50 inset-shadow group inline-flex cursor-pointer items-center self-center rounded-md border border-black/10 bg-black/[0.03] px-2 py-1 text-sm text-black shadow-md outline-none focus-visible:ring-[3px] dark:border-white/15 dark:bg-white/15 dark:text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-20 flex items-center gap-2 transition-[gap] duration-300 group-hover:gap-8">
                <span className="size-5 shrink-0 overflow-hidden rounded-full">
                  <img
                    alt=""
                    loading="lazy"
                    width={20}
                    height={20}
                    decoding="async"
                    className="size-full object-cover"
                    src={ME.avatarPhoto}
                  />
                </span>
                <span
                  aria-hidden
                  className="absolute left-6 flex -translate-x-full items-center opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <Plus className="size-3" />
                  <span className="mr-2 ml-1 flex size-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">
                    You
                  </span>
                </span>
                <span className="relative ml-0 block text-sm font-bold whitespace-nowrap transition-[margin-left] duration-300 group-hover:ml-4">
                  Let&apos;s talk
                </span>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function EducationRow({ item }: { item: AchievementEntry }) {
  return (
    <li className="screen-line-bottom relative last:after:hidden">
      <div className={SCHOOL_ROW_CLASS}>
        <span
          aria-hidden
          className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300"
        />
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="min-w-0 text-base leading-snug font-medium text-balance">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
              {item.date}
            </span>
          </div>
          {item.description ? (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
}

const LUCIDE_SKILL_ICONS: Record<
  string,
  ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  database: DatabaseIcon,
  search: SearchIcon,
  "arrow-up-down": RerankIcon,
  layers: LayersIcon,
  sparkles: SparklesIcon,
  activity: ActivityIcon,
  "database-zap": DatabaseZapIcon,
  cloud: CloudIcon,
  radar: RadarIcon,
  "chart-line": ChartLineIcon,
  "scroll-text": ScrollTextIcon,
  waypoints: WaypointsIcon,
};

function SkillGlyph({ icon }: { icon: SkillIcon }) {
  if (icon.kind === "brand") {
    return <BrandIcon slug={icon.slug} className="size-3.5" />;
  }

  const Icon = LUCIDE_SKILL_ICONS[icon.name] ?? SearchIcon;
  return <Icon className="text-muted-foreground size-3.5 shrink-0" aria-hidden />;
}
