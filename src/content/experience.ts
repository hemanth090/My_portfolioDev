export type ExperiencePosition = {
  title: string;
  employmentType: string;
  start: string;
  end: string;
  duration: string;
  skills: string[];
};

export type Experience = {
  company: string;
  logo: string;
  website: string;
  positions: ExperiencePosition[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Tradl AI",
    logo: "/images/company-logos/tradl-ai.png",
    website: "https://tradl.ai",
    positions: [
      {
        title: "AI Engineer (Full Stack)",
        employmentType: "Full-time",
        start: "Dec 2025",
        end: "Aug 2026",
        duration: "9 mos",
        skills: ["Python", "TypeScript", "React.js", "RAG", "Qdrant", "AWS"],
      },
    ],
  },
];
