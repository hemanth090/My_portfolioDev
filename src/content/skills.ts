export type Skill = {
  title: string;
  href: string;
  icon: string;
  darkIcon?: string;
  categories: string[];
};

export const SKILLS: Skill[] = [
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: "python.svg",
    categories: ["Language"],
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: "typescript.svg",
    categories: ["Language"],
  },
  {
    title: "React",
    href: "https://react.dev/",
    icon: "react.svg",
    categories: ["Library", "UI Library"],
  },
  {
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: "nextjs-light.svg",
    darkIcon: "nextjs-dark.svg",
    categories: ["Framework"],
  },
  {
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    icon: "fastapi.svg",
    categories: ["Framework", "Backend"],
  },
  {
    title: "TailwindCSS",
    href: "https://tailwindcss.com/",
    icon: "tailwindcss.svg",
    categories: ["Framework"],
  },
  {
    title: "LangGraph",
    href: "https://www.langchain.com/langgraph",
    icon: "langgraph.svg",
    categories: ["Framework", "AI"],
  },
  {
    title: "Vercel AI SDK",
    href: "https://ai-sdk.dev/",
    icon: "vercel-ai-sdk.svg",
    categories: ["Library", "AI"],
  },
  {
    title: "LangSmith",
    href: "https://www.langchain.com/langsmith",
    icon: "langsmith.svg",
    categories: ["Tools", "Observability"],
  },
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: "postgresql.svg",
    categories: ["Database", "SQL"],
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: "mongodb.svg",
    categories: ["Database"],
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: "redis.svg",
    categories: ["Database", "Cache"],
  },
  {
    title: "Qdrant",
    href: "https://qdrant.tech/",
    icon: "qdrant.svg",
    categories: ["Database", "Vector Database"],
  },
  {
    title: "AWS",
    href: "https://aws.amazon.com/",
    icon: "aws.svg",
    categories: ["Cloud"],
  },
  {
    title: "CloudWatch",
    href: "https://aws.amazon.com/cloudwatch/",
    icon: "cloudwatch.svg",
    categories: ["Tools", "Observability"],
  },
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: "docker.svg",
    categories: ["Tools", "DevOps"],
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: "git.svg",
    categories: ["Version Control"],
  },
  {
    title: "Vercel",
    href: "https://vercel.com/",
    icon: "vercel-light.svg",
    darkIcon: "vercel-dark.svg",
    categories: ["Platform", "Deployment"],
  },
];
