import { Metadata } from "next";

import { generateWebsiteMetadata } from "@/config/metadata";
import { ProjectGrid } from "@/components/portfolio/projects";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Projects",
  description:
    "AI systems by Naveen Hemanth: open data, retrieval, agent memory, and developer tooling.",
  keywords: ["Naveen projects", "AI projects", "open data", "retrieval", "agent memory"],
  image: "/images/opengraph-image.png",
  url: "/projects",
});

export default function ProjectsPage() {
  return (
    <section
      className="space-y-12 pt-8"
      aria-labelledby="projects-page-heading"
    >
      <header className="flex flex-col gap-3">
        <h1
          id="projects-page-heading"
          className="font-geist-pixel-square text-xl"
        >
          Projects
        </h1>
        <p className="font-geist-sans text-muted-foreground">
          Five systems: open data for agents, research reading, shared agent
          memory, an autonomous research agent, and a live view of the work.
        </p>
      </header>
      <h2 className="sr-only">Selected projects</h2>
      <ProjectGrid />
    </section>
  );
}
