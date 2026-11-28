import { MoveRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { FEATURED_PROJECTS } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects">
      <SectionHeader id="projects">Projects</SectionHeader>

      <div className="relative">
        <div
          aria-hidden
          className="bg-border pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px sm:block"
        />
        <div className="relative grid grid-cols-1 sm:grid-cols-2">
          {FEATURED_PROJECTS.map((project, index) => {
            const last = index === FEATURED_PROJECTS.length - 1;
            return (
              <div key={project.slug} className="contents">
                <div className="relative flex flex-col p-4">
                  <ProjectCard project={project} />
                </div>
                {!last ? (
                  <div
                    aria-hidden
                    className="screen-line-top screen-line-bottom block h-3 sm:hidden"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="screen-line-top screen-line-bottom relative mt-1 flex w-full items-center justify-center gap-2 px-4 py-2">
        <Link
          href="/projects"
          data-slot="button"
          className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium transition-all outline-none bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:ring-ring/50 focus-visible:ring-[3px] h-8 rounded-md px-3 has-[>svg]:px-2.5"
        >
          See all projects
          <MoveRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
