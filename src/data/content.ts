export type NavItem = { id: string; label: string }
export type SocialLink = { id: 'github' | 'linkedin' | 'x' | 'mail'; label: string; href: string }
export type Fact = { label: string; value: string }
export type Project = {
  name: string
  slug: string
  subtitle: string
  date: string
  description: string
  stack: string[]
  href: string
  featured?: boolean
}
export type Role = {
  title: string
  org: string
  date: string
  bullets: string[]
}
export type SkillGroup = { title: string; items: string[] }
export type Certification = { name: string; date: string }

export const EMAIL = 'naveenhemanth4@gmail.com'

export const profile = {
  name: 'Naveen Hemanth Kokkonda',
  shortName: 'Naveen Hemanth',
  availability: 'Open to new work',
  headline: ['I build AI products that ', 'hold up', ' when real people use them.'],
  role: 'AI Engineer · Full-Stack',
  lead: 'Most of my work lives in the unglamorous middle: retrieval that finds the right page, agents that stay on budget, and an interface that makes it all feel simple.',
  location: 'Hyderabad, India',
  monogram: 'NK',
}

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
]

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/hemanth090' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/hemanthkokkonda' },
  { id: 'x', label: 'X', href: 'https://x.com/HemanthKokkonda' },
  { id: 'mail', label: 'Email', href: `mailto:${EMAIL}` },
]

/** Socials shown as icon buttons (mail lives in the contact block, not the header). */
export const headerSocials = socials.filter((s) => s.id !== 'mail')

export const facts: Fact[] = [
  { label: 'Based in', value: 'Hyderabad, India' },
  { label: 'Happiest doing', value: 'Retrieval · Agents · Full-stack' },
  { label: 'Studied', value: 'B.Tech CSE, Data Science' },
]

export const about: string[] = [
  "I'm Naveen, an AI engineer who likes the whole stack, not just the model. My days go into retrieval systems, agent workflows, and the front-end that ties them together so people never have to think about any of it. I finished my B.Tech in Computer Science (Data Science) in 2026, and spent the year before building inside a live financial platform.",
  "The parts I enjoy most are the ones nobody puts in a demo: whether it still finds the right answer on question ninety, how much memory it's quietly holding, what it costs to run all day. Fast is nice. Dependable and cheap is the actual job.",
]

export const projects: Project[] = [
  {
    name: 'Articulate',
    slug: 'articulate',
    subtitle: 'arXiv Research Summarizer',
    date: 'Sep 2026',
    description:
      "Type in a topic and it pulls the twenty most relevant papers, ranks them, then writes you a tight summary of the ones worth reading: what they're about, the key ideas, the method, the results, and why any of it matters.",
    stack: ['Next.js 15', 'TypeScript', 'Groq', 'Vercel AI SDK', 'arXiv API', 'OpenRouter'],
    href: 'https://github.com/hemanth090',
    featured: true,
  },
  {
    name: 'Scout',
    slug: 'scout',
    subtitle: 'Autonomous Research Agent',
    date: 'Aug 2026',
    description:
      "Ask it a research question and it comes back with a properly cited report. A supervisor splits the work, a writer and a critic argue it into shape, and anything it isn't confident about gets handed to a human before it ships.",
    stack: ['Python', 'FastAPI', 'LangGraph', 'React', 'Supabase', 'Redis'],
    href: 'https://github.com/hemanth090',
  },
  {
    name: 'TOON Studio',
    slug: 'toon-studio',
    subtitle: 'Token Efficiency Toolkit',
    date: 'Dec 2025',
    description:
      "A small tool that shrinks JSON before it reaches a model. It measured about 33% fewer tokens on small objects and 52% on big arrays, with a live dashboard showing what you're actually spending.",
    stack: ['Python', 'FastAPI', 'React', 'Gemini', 'LangSmith', 'Vite'],
    href: 'https://github.com/hemanth090',
  },
]

export const experience: Role[] = [
  {
    title: 'AI Engineer (Full Stack)',
    org: 'Tradl AI, a stock research and trading platform · On-site, Bangalore',
    date: 'Dec 2025 – Aug 2026',
    bullets: [
      'Made the financial tables feel instant, cutting first paint by **40%** and memory by **60%** by virtualizing a thousand-plus live tickers, then reused the trick on two more screens.',
      'Shipped live pattern detection: a WebSocket-fed front end on AWS streaming ticker bars and last-traded price straight onto TradingView charts.',
      'Built a Q&A over 45 financial filings that answers with citations, using hybrid retrieval combining dense vectors with keyword search, then a cross-encoder to rerank.',
      'Got three models (Claude Sonnet, Claude Haiku, and Bedrock Qwen3-235B) working as one system, routing each task to whichever one fit best.',
      'Lifted retrieval recall by **65%** (0.37 → 0.61) on a 90-question benchmark by rebuilding how filings get ingested and indexed, so 45 documents became 30,137 searchable points.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Languages & Frameworks', items: ['Python', 'TypeScript', 'SQL', 'React', 'FastAPI', 'Tailwind CSS'] },
  {
    title: 'AI Systems',
    items: ['Hybrid Retrieval', 'Reranking', 'RAG Ingestion', 'LangGraph', 'Vercel AI SDK', 'LangSmith'],
  },
  {
    title: 'Cloud & Data',
    items: ['PostgreSQL / pgvector', 'MongoDB', 'Redis', 'FAISS / Qdrant', 'AWS Bedrock / EC2', 'Vercel'],
  },
]

export const education: Role = {
  title: 'B.Tech, Computer Science and Engineering (Data Science)',
  org: 'Sreyas Institute of Engineering and Technology, Hyderabad, India · CGPA 7.51/10',
  date: 'Oct 2022 – Jun 2026',
  bullets: [],
}

export const certifications: Certification[] = [
  { name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', date: 'Aug 2025' },
  { name: 'Simplilearn Front End Development: HTML, CSS, JavaScript', date: 'Jun 2025' },
  { name: 'Core Python Programming, Infosys Springboard', date: 'Sep 2024' },
]

export const sectionKeywords: Record<string, string> = {
  about: 'me bio intro profile',
  work: 'projects portfolio articulate scout toon studio',
  experience: 'work job tradl intern',
  skills: 'stack tech python react fastapi langgraph',
  background: 'degree btech university oracle simplilearn infosys education certificates',
  contact: 'contact hire reach email talk',
}
