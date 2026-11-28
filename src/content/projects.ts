export type ProjectTechnology = {
  name: string;
  icon: string;
};

export type Project = {
  slug: string;
  title: string;
  subheading: string;
  description: string;
  image: string;
  links: {
    website?: string;
    github?: string;
  };
  technologies: ProjectTechnology[];
};

export const PROJECTS: Project[] = [
  {
    slug: "telangana-open-data",
    title: "Telangana Open Data",
    subheading: "Open data for agents",
    description:
      "A citation-ready index of 364 Telangana datasets, packaged as an installable agent skill.",
    image: "/images/project-covers/telangana.webp",
    links: {
      website: "https://hemanth090.github.io/telangana-open-data-catalog/",
      github: "https://github.com/hemanth090/telangana-open-data-catalog",
    },
    technologies: [
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Vite", icon: "vite" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    slug: "agent-mem",
    title: "agent-mem",
    subheading: "Shared agent memory",
    description:
      "A local memory server shared by Claude Code, OpenCode, Codex, and Antigravity.",
    image: "/images/project-covers/agent-mem.webp",
    links: {
      website: "https://hemanth090.github.io/agent-mem/",
      github: "https://github.com/hemanth090/agent-mem",
    },
    technologies: [
      { name: "Rust", icon: "rust" },
      { name: "SQLite", icon: "sqlite" },
      { name: "HNSW", icon: "hnsw" },
      { name: "MCP", icon: "mcp" },
    ],
  },
  {
    slug: "articulate",
    title: "Articulate",
    subheading: "Research reading",
    description:
      "An arXiv reader that ranks twenty papers, then briefs the ones worth reading.",
    image: "/images/project-covers/articulate.webp",
    links: {
      website: "https://articulate-three-blue.vercel.app",
      github: "https://github.com/hemanth090/articulate",
    },
    technologies: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "AI SDK", icon: "vercel-ai-sdk" },
    ],
  },
  {
    slug: "scout",
    title: "Scout",
    subheading: "Autonomous research",
    description:
      "A research agent with a writer–critic loop, budgets, and a human confidence gate.",
    image: "/images/project-covers/scout.webp",
    links: {
      github: "https://github.com/hemanth090/Scout",
    },
    technologies: [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "React", icon: "react" },
    ],
  },
];

export const FEATURED_PROJECTS = PROJECTS.slice(0, 2);
