import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Container,
  DatabaseZap,
  FileText,
  Radio,
  Search,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { BrandIcon } from "@/components/brand-icon";
import { GitHubIcon } from "@/components/social-icons";
import type { BrandSlug } from "@/lib/brand-icons";
import type { Project } from "@/lib/config";

const BRAND_BY_TECH: Record<string, BrandSlug> = {
  python: "python",
  typescript: "typescript",
  react: "react",
  "next.js 15": "nextdotjs",
  "next.js": "nextdotjs",
  fastapi: "fastapi",
  tailwindcss: "tailwindcss",
  "tailwind css": "tailwindcss",
  vite: "vite",
  langgraph: "langgraph",
  mongodb: "mongodb",
  redis: "redis",
  postgresql: "postgresql",
  vercel: "vercel",
};

const LUCIDE_BY_TECH: Record<string, LucideIcon> = {
  groq: Zap,
  "vercel ai sdk": Sparkles,
  "arxiv api": FileText,
  openrouter: Braces,
  supabase: Cloud,
  gemini: Sparkles,
  langsmith: Code2,
  qdrant: DatabaseZap,
  docker: Container,
  bun: Zap,
  websocket: Radio,
  opencode: Terminal,
};

function TechIcon({ label }: { label: string }) {
  const key = label.toLowerCase().replace(/[^a-z0-9.]/g, "");
  const brand = BRAND_BY_TECH[key] ?? BRAND_BY_TECH[label.toLowerCase()];
  if (brand) {
    return <BrandIcon slug={brand} className="size-3 shrink-0" />;
  }

  const lucide = LUCIDE_BY_TECH[label.toLowerCase()];
  if (lucide) {
    const Icon = lucide;
    return (
      <Icon className="text-muted-foreground size-3 shrink-0" aria-hidden />
    );
  }

  return <Search className="text-muted-foreground size-3 shrink-0" aria-hidden />;
}

const TAG_CLASS =
  "focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center rounded-md border font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600 gap-1 px-1.5 py-0.5 text-[11px]";

const CARD_LINK_CLASS =
  "text-muted-foreground hover:text-foreground hover:bg-accent focus-visible:ring-ring/50 inline-flex h-6 items-center gap-1 rounded-md px-1.5 text-xs font-medium whitespace-nowrap outline-none transition-colors focus-visible:ring-[3px]";

const IMAGE_CLASS =
  "h-44 w-full object-cover object-top transition-transform duration-500 ease-out group-hover/media:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/media:scale-100 sm:h-48";

export function ProjectCard({ project }: { project: Project }) {
  const primaryLink = project.links.website ?? project.links.github;

  const media = (
    <img
      alt=""
      loading="lazy"
      width={1200}
      height={630}
      decoding="async"
      className={IMAGE_CLASS}
      src={project.image}
    />
  );

  return (
    <div className="group/card relative flex flex-1 flex-col gap-2">
      {primaryLink ? (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} - ${project.subheading}`}
          className="group/media border-border block overflow-hidden rounded-md border"
        >
          {media}
        </a>
      ) : (
        <div className="group/media border-border block overflow-hidden rounded-md border">
          {media}
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        <h3 className="min-w-0 truncate text-[15px] leading-snug font-semibold">
          {primaryLink ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <div className="flex shrink-0 items-center gap-1">
          <span className="text-muted-foreground font-mono text-xs tabular-nums">
            {project.year}
          </span>
          {project.links.website ? (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className={CARD_LINK_CLASS}
            >
              Live
              <ArrowUpRight className="size-3" aria-hidden />
            </a>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={CARD_LINK_CLASS}
            >
              <GitHubIcon className="size-3" aria-hidden />
              Code
            </a>
          ) : null}
        </div>
      </div>

      <p className="text-muted-foreground truncate text-[13px] leading-snug">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <li className="flex" key={tech}>
            <span className={TAG_CLASS}>
              <TechIcon label={tech} />
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
