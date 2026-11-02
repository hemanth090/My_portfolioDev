import { Experience } from "@/features/portfolio/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "tradl-ai",
    companyName: "Tradl AI",
    companyLogo: "/images/company-logos/tradl-ai.png",
    companyWebsite: "https://tradl.ai",
    positions: [
      {
        id: "1",
        title: "AI Engineer (Full Stack)",
        employmentPeriod: {
          start: "Dec 2025",
          end: "Aug 2026",
        },
        employmentType: "Full-time",
        description: [
          "Rebuilt the RAG pipeline behind a live stock research platform: hybrid dense + sparse retrieval, a Qwen3 reranker, and page-level citations over 45 filings.",
          "Moved retrieval recall from 0.37 to 0.61 on the same 90 questions, a 65% relative improvement measured at the retrieval layer.",
          "Virtualized a 1,000+ row live ticker table with TanStack Virtual: 40% faster first paint and 60% less memory.",
          "Shipped MarketBuzz, a streaming news page merging live data and RSS, plus the platform home page.",
          "Built the Pattern Detection frontend for showing detected,failed,live patterns i.e rounding bottom etc, and added a whitelisting gate so beta users could access the feature.",
          "Added structured logs, metrics, and CloudWatch alarms, and benchmarked embeddings, rerankers, and VLM models on accuracy and cost.",
        ],
        skills: ["Python", "TypeScript", "React.js", "RAG", "Qdrant", "AWS"],
        isExpanded: true,
      },
    ],
  },
];
