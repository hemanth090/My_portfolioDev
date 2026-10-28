/**
 * Content for the /story motion experience.
 *
 * Everything here is derived from the same records used by the rest of the
 * portfolio (`lib/config.ts`) and the project descriptions. No invented
 * milestones, employers, numbers or mechanisms.
 */

import {
  CERTIFICATIONS,
  EXPERIENCE,
  FOCUS_AREAS,
  ME,
  PROJECTS,
} from "@/lib/config";

export type StoryStat = {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
};

export type StoryMilestone = {
  date: string;
  title: string;
  detail: string;
  href?: string;
};

export type StoryProject = {
  slug: string;
  title: string;
  subheading: string;
  year: string;
  meta: string;
  detail: string;
  href?: string;
};

export const STORY_META = {
  kicker: "Story · 2022 to 2026",
  titleLines: ["Retrieval, agents,", "and interfaces."],
  deck: "A B.Tech in Hyderabad, nine months on a live stock research platform, a retrieval rebuild from 0.37 to 0.61 recall, and six AI systems in retrieval, agents and tooling.",
  location: ME.location,
} as const;

export const CHAPTERS = [
  { id: "start", label: "Start" },
  { id: "foundation", label: "Foundation" },
  { id: "work", label: "Work" },
  { id: "retrieval", label: "Retrieval" },
  { id: "projects", label: "Projects" },
  { id: "now", label: "Now" },
] as const;

/* -------------------------------------------------------------------------- */
/*  01 Foundation                                                              */
/* -------------------------------------------------------------------------- */

const certByDate = new Map(CERTIFICATIONS.map((entry) => [entry.date, entry]));

const pythonCert = certByDate.get("Sep 2024");
const frontEndCert = certByDate.get("Jun 2025");
const oracleCert = certByDate.get("Aug 2025");

export const FOUNDATION_COPY = {
  index: "01",
  label: "Foundation",
  years: "2022 to 2026",
  title: "Python, the browser, and the model layer.",
  body: "B.Tech in Computer Science and Engineering (Data Science) at Sreyas Institute of Engineering and Technology, Hyderabad. October 2022 to June 2026.",
  detail:
    "The certifications covered the three layers I wanted to work in: Core Python, front-end development, and generative AI on Oracle Cloud Infrastructure.",
  stack: [
    "Python",
    "TypeScript",
    "React",
    "FastAPI",
    "PostgreSQL / pgvector",
    "Qdrant",
    "LangGraph",
    "LangSmith",
  ],
} as const;

export const FOUNDATION: StoryMilestone[] = [
  {
    date: "Oct 2022",
    title: "B.Tech, Computer Science (Data Science)",
    detail: "Sreyas Institute of Engineering and Technology, Hyderabad",
  },
  {
    date: "Sep 2024",
    title: "Core Python Programming",
    detail: "Infosys Springboard",
    href: pythonCert?.href,
  },
  {
    date: "Jun 2025",
    title: "Front End Development: HTML, CSS, JavaScript",
    detail: "Simplilearn",
    href: frontEndCert?.href,
  },
  {
    date: "Aug 2025",
    title: "Oracle OCI 2025 Certified Generative AI Professional",
    detail: "Oracle University",
    href: oracleCert?.href,
  },
  {
    date: "Jun 2026",
    title: "Graduated",
    detail: "B.Tech, Computer Science and Engineering (Data Science)",
  },
];

/* -------------------------------------------------------------------------- */
/*  02 Work                                                                    */
/* -------------------------------------------------------------------------- */

export const WORK = EXPERIENCE[0];

export const WORK_COPY = {
  index: "02",
  label: "Work",
  years: "Dec 2025 to Aug 2026",
  title: "The live trading table.",
  body: "A stock research and trading platform. My work covered a table of 1,000+ ticking rows, a streaming news page, observability, and experiments with OCR and vision-language models.",
  blocks: [
    {
      label: "Live table",
      body: "Rows updated continuously. I virtualized the table so only visible rows mounted: 40% faster first paint and 60% less memory.",
    },
    {
      label: "MarketBuzz",
      body: "News page that streams live backend data and merges RSS feeds into the same view.",
    },
    {
      label: "Observability",
      body: "Structured logs, metrics and Amazon CloudWatch alarms on the services I worked on, so failures had logs behind them.",
    },
    {
      label: "Models and vision",
      body: "Experimented with Claude's open SDKs, OCR models and vision-language models. Evaluated open-source Hugging Face models, including Chinese models, for cost, accuracy and scale.",
    },
  ],
  constraint:
    "The constraint was memory and paint time: every mounted row costs something while the data keeps moving.",
} as const;

export const WORK_STATS: StoryStat[] = [
  {
    value: 1000,
    suffix: "+",
    label: "ticking rows",
    detail: "Windowed rendering",
  },
  {
    value: 40,
    suffix: "%",
    label: "faster first paint",
    detail: "After virtualization",
  },
  {
    value: 60,
    suffix: "%",
    label: "less memory",
    detail: "Same table, same session",
  },
];

/* -------------------------------------------------------------------------- */
/*  03 Retrieval                                                               */
/* -------------------------------------------------------------------------- */

export const RETRIEVAL_COPY = {
  index: "03",
  label: "Retrieval",
  years: "2026",
  title: "Recall: 0.37 to 0.61.",
  body: "At Tradl AI, I worked on the RAG pipeline behind the platform's stock research answers. The documents were financial reports, and the path ran from ingestion and cleaning to hybrid retrieval, ranking and evaluation. When retrieval missed the right page, the model had nothing useful to answer from.",
  pipeline: [
    "Extraction",
    "Cleaning",
    "Indexing",
    "Hybrid retrieval",
    "Ranking",
    "Answer",
  ],
  details: [
    {
      label: "Extraction",
      body: "Docling and MinerU for clean extraction from financial reports, then data cleaners before anything reached the index.",
    },
    {
      label: "End to end",
      body: "Handled the RAG path over financial reports: extraction, cleaning, indexing, hybrid retrieval, ranking and the benchmark.",
    },
    {
      label: "Vision experiments",
      body: "RAG experiments with OCR and vision-language models for document extraction and retrieval.",
    },
    {
      label: "Benchmark",
      body: "90 questions. Recall measured on the retrieval layer, separately from the model, before and after the rebuild.",
    },
    {
      label: "Result",
      body: "0.37 to 0.61 on the same 90 questions: plus 0.24 absolute, about 1.65 times the recall.",
    },
  ],
  challenge:
    "The failure is silent: a missing page shows up as a worse answer, not an error. Extraction quality sets the ceiling, so cleaning came before ranking.",
} as const;

export const RETRIEVAL = {
  metric: "recall",
  benchmark: "90-question benchmark",
  before: 0.37,
  after: 0.61,
  delta: "+0.24",
  multiple: "1.65x",
  beforeDetail: "Ingestion + retrieval, before",
  afterDetail: "Rebuilt ingestion + hybrid retrieval",
} as const;

/* -------------------------------------------------------------------------- */
/*  04 Projects                                                                */
/* -------------------------------------------------------------------------- */

export const PROJECTS_COPY = {
  index: "04",
  label: "Projects",
  years: "Dec 2025 to Oct 2026",
  title: "Six systems I built.",
  body: "Token compression, page-level RAG, multi-agent research, arXiv summaries, an agent dashboard, and text-to-query. Each one targets a specific failure in AI products: cost, citations, confidence or visibility.",
  note: "Each has a failure path: a test suite, a critic, an ambiguity gate, a human checkpoint or a live event feed.",
} as const;

const projectOrder = [
  "articulate",
  "scout",
  "toon-studio",
  "ragpdf",
  "agent-cam",
  "llm-mongodb-query-api",
];

const projectDetails: Record<string, string> = {
  articulate:
    "arXiv API, 20 ranked papers, per-paper summaries. Groq and OpenRouter behind the Vercel AI SDK.",
  scout:
    "LangGraph supervisor, writer and critic loop. Low-confidence claims escalate to a human. Supabase and Redis.",
  "toon-studio":
    "JSON compression before the model call. LangSmith for token measurements. 33% fewer tokens on small objects, 52% on arrays.",
  ragpdf:
    "Dense plus BM25 fused with RRF in Qdrant. Vision model reads rendered pages. Page-level citations and an ambiguity gate.",
  "agent-cam":
    "Local WebSocket feed from OpenCode: current file, running command, plan, token usage.",
  "llm-mongodb-query-api":
    "Gemini 2.5 Flash turns natural-language questions into read-only Mongo queries. Writes blocked at the schema.",
};

export const STORY_PROJECTS: StoryProject[] = [...PROJECTS]
  .sort((a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug))
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    subheading: project.subheading,
    year: project.year,
    meta: project.technologies.slice(0, 3).join(" · "),
    detail: projectDetails[project.slug] ?? project.subheading,
    href: project.links.website ?? project.links.github,
  }));

/* -------------------------------------------------------------------------- */
/*  05 Now                                                                     */
/* -------------------------------------------------------------------------- */

export const NOW_COPY = {
  index: "05",
  label: "Now",
  years: "Open to new work",
  title: "Open to AI and full-stack roles.",
  body: "I work in Python and TypeScript: retrieval, evaluation, agent workflows, and the front end that shows what the system is doing. Based in Hyderabad, open to new work.",
} as const;

export const FOCUS = [
  FOCUS_AREAS.top,
  FOCUS_AREAS.left,
  FOCUS_AREAS.right,
  FOCUS_AREAS.bottom,
];

export const NOW = {
  availability: ME.availability,
  email: ME.email,
  resumeUrl: ME.resumeUrl,
  location: ME.location,
} as const;

export const CTA = {
  talk: { label: "Let's talk", href: "/contact/" },
  resume: { label: "Résumé", href: ME.resumeUrl },
} as const;
