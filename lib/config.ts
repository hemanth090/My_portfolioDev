import type { BrandSlug } from "@/lib/brand-icons";

export type SocialKey = "github" | "linkedin" | "x";

export type SkillIcon =
  | { kind: "brand"; slug: BrandSlug }
  | { kind: "lucide"; name: string };

export type Project = {
  slug: string;
  title: string;
  subheading: string;
  year: string;
  description: string;
  image: string;
  links: {
    website?: string;
    github?: string;
  };
  technologies: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  description: string;
  start: string;
  end: string;
  href: string | null;
  logo: string;
};

export type AchievementEntry = {
  title: string;
  date: string;
  description?: string;
  href?: string;
};

export const ME = {
  name: "Naveen Hemanth",
  fullName: "Naveen Hemanth Kokkonda",
  handle: "hemanth090",
  githubUsername: "hemanth090",
  wordmark: "HEMANTH",
  title: "AI Engineer · Full-Stack",
  roles: ["AI Engineer", "Full-Stack"],
  meta: "Hyderabad, IND",
  location: "Hyderabad, India",
  timezone: "Asia/Kolkata",
  avatar: "/images/avatar-illustration.svg",
  avatarPhoto: "/images/avatar-photo.jpg",
  email: "naveenhemanth4@gmail.com",
  resumeUrl: "/resume/hemanth-resume.pdf",
  availability: "Open to new work",
  socials: {
    github: "https://github.com/hemanth090",
    linkedin: "https://www.linkedin.com/in/hemanthkokkonda",
    x: "https://x.com/HemanthKokkonda",
  } satisfies Record<SocialKey, string>,
} as const;

export const PAGES = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const COMMAND_PAGES = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const SECTION_IDS = {
  about: "about",
  connect: "connect",
  experience: "experience",
  projects: "projects",
  stack: "stack",
  activity: "activity",
  education: "education",
  certifications: "certifications",
  contact: "contact",
} as const;

export const ABOUT = [
  "Most of my work lives in the unglamorous middle: retrieval that finds the right page, agents that stay on budget, and an interface that makes it all feel simple.",
  "I'm Naveen, an AI engineer who likes the whole stack, not just the model. My days go into retrieval systems, agent workflows, and the front-end that ties them together so people never have to think about any of it. I finished my B.Tech in Computer Science (Data Science) in 2026, and spent the year before building inside a live financial platform.",
  "The parts I enjoy most are the ones nobody puts in a demo: whether it still finds the right answer on question ninety, how much memory it's quietly holding, what it costs to run all day. Fast is nice. Dependable and cheap is the actual job.",
] as const;

export const HERO_PARAGRAPH =
  "Most of my work lives in the unglamorous middle: retrieval that finds the right page, agents that stay on budget, and an interface that makes it all feel simple.";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Tradl AI",
    role: "AI Engineer (Full Stack)",
    location: "On-site, Bangalore",
    start: "Dec 2025",
    end: "Aug 2026",
    href: "https://tradl.ai",
    logo: "/images/tradl-logo.png",
    description: "Stock research and trading platform",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "articulate",
    title: "Articulate",
    subheading: "arXiv Research Summarizer",
    year: "Sep 2026",
    description:
      "Type in a topic and it pulls the twenty most relevant papers, ranks them, then writes you a tight summary of the ones worth reading: what they're about, the key ideas, the method, the results, and why any of it matters.",
    image: "/images/project-articulate.svg",
    links: {
      website: "https://articulate-three-blue.vercel.app",
      github: "https://github.com/hemanth090/articulate",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Groq",
      "Vercel AI SDK",
      "arXiv API",
      "OpenRouter",
    ],
  },
  {
    slug: "scout",
    title: "Scout",
    subheading: "Autonomous Research Agent",
    year: "Aug 2026",
    description:
      "Ask it a research question and it comes back with a properly cited report. A supervisor splits the work, a writer and a critic argue it into shape, and anything it isn't confident about gets handed to a human before it ships.",
    image: "/images/project-scout.svg",
    links: {
      github: "https://github.com/hemanth090/Scout",
    },
    technologies: ["Python", "FastAPI", "LangGraph", "React", "Supabase", "Redis"],
  },
  {
    slug: "toon-studio",
    title: "TOON Studio",
    subheading: "Token Efficiency Toolkit",
    year: "Dec 2025",
    description:
      "A small tool that shrinks JSON before it reaches a model. It measured about 33% fewer tokens on small objects and 52% on big arrays, with a live dashboard showing what you're actually spending.",
    image: "/images/project-toon.svg",
    links: {
      website: "https://toon-optimizer.vercel.app",
      github: "https://github.com/hemanth090/Toon-optimizer",
    },
    technologies: ["Python", "FastAPI", "React", "Gemini", "LangSmith", "Vite"],
  },
  {
    slug: "ragpdf",
    title: "ragpdf",
    subheading: "Ask any PDF, cite the page",
    year: "Oct 2026",
    description:
      "Page-level RAG over any PDF: dense + BM25 retrieval fused with RRF in Qdrant, a vision model reading rendered pages, and page-level citations, with an ambiguity gate that refuses instead of guessing.",
    image: "/images/project-ragpdf.svg",
    links: {
      github: "https://github.com/hemanth090/ragpdf",
    },
    technologies: ["Python", "Qdrant", "Gemini", "Docker"],
  },
  {
    slug: "agent-cam",
    title: "AgentCam",
    subheading: "Watch your agent work",
    year: "Oct 2026",
    description:
      "A local, live dashboard that mirrors what your OpenCode agent is doing: current file, running command, plan, token usage and a real-time event feed over a local WebSocket.",
    image: "/images/project-agentcam.svg",
    links: {
      github: "https://github.com/hemanth090/agent-cam",
    },
    technologies: ["TypeScript", "Bun", "WebSocket", "OpenCode"],
  },
  {
    slug: "llm-mongodb-query-api",
    title: "NL → MongoDB",
    subheading: "Natural language query API",
    year: "Dec 2025",
    description:
      "A FastAPI backend that turns natural-language questions into read-only MongoDB queries with Gemini 2.5 Flash, blocking delete/update/insert attempts at the schema level.",
    image: "/images/project-mongodb.svg",
    links: {
      github: "https://github.com/hemanth090/llm-mongodb-query-api",
    },
    technologies: ["Python", "FastAPI", "Gemini", "MongoDB"],
  },
];

export const SKILLS: { label: string; icon: SkillIcon }[] = [
  { label: "Python", icon: { kind: "brand", slug: "python" } },
  { label: "TypeScript", icon: { kind: "brand", slug: "typescript" } },
  { label: "SQL", icon: { kind: "lucide", name: "database" } },
  { label: "React", icon: { kind: "brand", slug: "react" } },
  { label: "FastAPI", icon: { kind: "brand", slug: "fastapi" } },
  { label: "Tailwind CSS", icon: { kind: "brand", slug: "tailwindcss" } },
  { label: "Hybrid Retrieval", icon: { kind: "lucide", name: "search" } },
  { label: "Reranking", icon: { kind: "lucide", name: "arrow-up-down" } },
  { label: "RAG Ingestion", icon: { kind: "lucide", name: "layers" } },
  { label: "LangGraph", icon: { kind: "brand", slug: "langgraph" } },
  { label: "Vercel AI SDK", icon: { kind: "lucide", name: "sparkles" } },
  { label: "LangSmith", icon: { kind: "lucide", name: "activity" } },
  { label: "Langfuse", icon: { kind: "lucide", name: "waypoints" } },
  { label: "PostgreSQL / pgvector", icon: { kind: "brand", slug: "postgresql" } },
  { label: "MongoDB", icon: { kind: "brand", slug: "mongodb" } },
  { label: "Redis", icon: { kind: "brand", slug: "redis" } },
  { label: "FAISS / Qdrant", icon: { kind: "lucide", name: "database-zap" } },
  { label: "AWS Bedrock / EC2", icon: { kind: "lucide", name: "cloud" } },
  { label: "Amazon CloudWatch", icon: { kind: "lucide", name: "radar" } },
  { label: "Observability", icon: { kind: "lucide", name: "chart-line" } },
  { label: "Structured logging", icon: { kind: "lucide", name: "scroll-text" } },
  { label: "Vercel", icon: { kind: "brand", slug: "vercel" } },
];

export const EDUCATION: AchievementEntry[] = [
  {
    title: "B.Tech, Computer Science and Engineering (Data Science)",
    date: "Oct 2022 - Jun 2026",
    description:
      "Sreyas Institute of Engineering and Technology, Hyderabad, India · CGPA 7.51/10",
  },
];

export const CERTIFICATIONS: AchievementEntry[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    date: "Aug 2025",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=81034BC30FB8FB9BCFFA50850CD90CEE39A68273FC578036A644D05D0AC4B58E",
  },
  {
    title: "Simplilearn Front End Development: HTML, CSS, JavaScript",
    date: "Jun 2025",
    href: "https://simpli-web.app.link/e/ZJlHPvGvzUb",
  },
  {
    title: "Core Python Programming, Infosys Springboard",
    date: "Sep 2024",
    href: "https://drive.google.com/file/d/1__zeHC_absJ7RJwqqvlKouD0E-UlJduV/view",
  },
];

export const FOCUS_AREAS = {
  top: "Software engineering",
  left: "AI systems",
  right: "Product & UI",
  bottom: "Reliability & cost",
} as const;
