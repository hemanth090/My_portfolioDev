import { Project } from "@/features/portfolio/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "telangana-open-data",
    title: "Telangana Open Data",
    coverImage: "/images/project-covers/telangana.webp",
    description:
      "A citation-ready index of 364 Telangana datasets, packaged as an installable agent skill.",
    link: "https://hemanth090.github.io/telangana-open-data-catalog/",
    githubRepo: "hemanth090/telangana-open-data-catalog",
  },
  {
    id: "articulate",
    title: "Articulate",
    coverImage: "/images/project-covers/articulate.webp",
    description:
      "An arXiv reader that ranks twenty papers, then briefs the ones worth reading.",
    link: "https://articulate-three-blue.vercel.app",
    githubRepo: "hemanth090/articulate",
  },
  {
    id: "agent-mem",
    title: "agent-mem",
    coverImage: "/images/project-covers/agent-mem.webp",
    description:
      "A local memory server shared by Claude Code, OpenCode, Codex, and Antigravity.",
    link: "https://hemanth090.github.io/agent-mem/",
    githubRepo: "hemanth090/agent-mem",
  },
  {
    id: "scout",
    title: "Scout",
    coverImage: "/images/project-covers/scout.webp",
    description:
      "A research agent with a writer–critic loop, budgets, and a human confidence gate.",
    link: "https://github.com/hemanth090/Scout",
    githubRepo: "hemanth090/Scout",
  },
  {
    id: "agent-cam",
    title: "AgentCam",
    coverImage: "/images/project-covers/agent-cam.webp",
    description:
      "A local dashboard that mirrors your OpenCode agent's file, command, and plan.",
    link: "https://github.com/hemanth090/agent-cam",
    githubRepo: "hemanth090/agent-cam",
  },
];
