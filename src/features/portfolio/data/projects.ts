import { Project } from "@/features/portfolio/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "articulate",
    title: "Articulate",
    coverImage: "/images/project-covers/articulate.webp",
    description:
      "An arXiv summarizer that ranks twenty papers, then briefs the ones worth reading.",
    link: "https://articulate-three-blue.vercel.app",
    githubRepo: "hemanth090/articulate",
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
