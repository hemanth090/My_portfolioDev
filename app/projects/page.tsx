import type { Metadata } from "next";

import { ProjectList } from "@/components/project-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Naveen Hemanth: research agents, page-level PDF retrieval, token-efficiency tooling and developer dashboards.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return <ProjectList />;
}
