import Image from "next/image";

import type { Project } from "@/features/portfolio/types/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title}`}
      className="group/post relative flex h-full flex-col border border-dashed transition-colors hover:border-accent-foreground/20 hover:bg-accent-muted/80"
    >
      <article itemScope itemType="https://schema.org/SoftwareApplication">
        <div className="absolute -top-px -left-px h-2 w-2 border-t border-l border-foreground/90" />
        <div className="absolute -top-px -right-px h-2 w-2 border-t border-r border-foreground/90" />
        <div className="absolute -right-px -bottom-px h-2 w-2 border-r border-b border-foreground/90" />
        <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-foreground/90" />
        <div className="relative p-2 select-none">
          <Image
            className="aspect-1200/630 rounded-xs"
            src={project.coverImage}
            alt={`${project.title} cover`}
            width={1200}
            height={630}
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2 px-3 py-2">
          <h3
            className="truncate font-geist-sans text-sm font-medium text-foreground"
            itemProp="name"
          >
            {project.title}
          </h3>
          <p
            className="font-geist-mono text-[13px] font-light text-muted-foreground"
            itemProp="description"
          >
            {project.description}
          </p>
        </div>
      </article>
    </a>
  );
}
