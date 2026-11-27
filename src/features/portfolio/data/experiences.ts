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
        skills: ["Python", "TypeScript", "React.js", "RAG", "Qdrant", "AWS"],
      },
    ],
  },
];
