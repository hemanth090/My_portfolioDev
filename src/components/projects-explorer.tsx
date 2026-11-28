"use client";

import { ArrowLeft, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { PageLabel } from "@/components/section-header";
import { PROJECTS } from "@/content/projects";

export function ProjectsExplorer() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return PROJECTS;
    return PROJECTS.filter((project) =>
      [
        project.title,
        project.subheading,
        project.description,
        ...project.technologies.map((technology) => technology.name),
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [query]);

  return (
    <main>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <PageLabel>Projects</PageLabel>
      <h1 className="screen-line-bottom relative px-4 py-1.5 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
        Everything I&apos;ve shipped
      </h1>
      <div className="screen-line-bottom relative flex items-center justify-between gap-3 p-2">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-7 shrink-0 items-center gap-2 rounded-md px-1 text-sm font-medium outline-none transition-colors focus-visible:ring-[3px]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Home
        </Link>

        <div className="border-input focus-within:border-ring focus-within:ring-ring/50 relative flex h-9 w-44 items-center rounded-lg border transition-[border-color,box-shadow] focus-within:ring-[3px] sm:w-64">
          <Search
            className="text-muted-foreground ml-2.5 size-4 shrink-0"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="placeholder:text-muted-foreground h-9 w-full min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="hover:bg-muted hover:text-foreground text-muted-foreground mr-1.5 flex size-6 shrink-0 items-center justify-center rounded-sm transition-colors active:scale-95"
            >
              <X className="size-4" aria-hidden />
            </button>
          ) : null}
        </div>
      </div>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      {filtered.length === 0 ? (
        <p className="text-muted-foreground px-4 py-12 text-center text-sm">
          No projects match that search.
        </p>
      ) : (
        <div className="relative">
          <div
            aria-hidden
            className="bg-border pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px sm:block"
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2">
            {filtered.map((project, index) => {
              const last = index === filtered.length - 1;
              return (
                <div key={project.slug} className="contents">
                  <div className="relative flex flex-col p-4">
                    <ProjectCard project={project} />
                  </div>
                  {index % 2 === 1 && !last ? (
                    <div
                      aria-hidden
                      className="screen-line-top screen-line-bottom col-span-2 hidden h-3 sm:block"
                    />
                  ) : null}
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
      )}
    </main>
  );
}
