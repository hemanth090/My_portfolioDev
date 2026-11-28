export type Achievement = {
  title: string;
  description: string;
  meta: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Won 2 college-level hackathons",
    description: "College level",
    meta: "2 wins",
  },
  {
    title: "Solved 50+ LeetCode problems",
    description: "Data structures and algorithms",
    meta: "50+ solved",
  },
  {
    title: "Mentored junior developers in Python",
    description: "Python fundamentals and problem solving",
    meta: "Mentoring",
  },
];

export type Credential = {
  title: string;
  description: string;
  year: number;
  type: "education" | "certification";
  href?: string;
};

export const CREDENTIALS: Credential[] = [
  {
    title: "B.Tech, Computer Science and Engineering (Data Science)",
    description: "Sreyas Institute of Engineering and Technology · CGPA 7.51/10",
    year: 2026,
    type: "education",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    description: "Oracle",
    year: 2025,
    type: "certification",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=81034BC30FB8FB9BCFFA50850CD90CEE39A68273FC578036A644D05D0AC4B58E",
  },
  {
    title: "Front End Development: HTML, CSS, JavaScript",
    description: "Simplilearn",
    year: 2025,
    type: "certification",
    href: "https://simpli-web.app.link/e/ZJlHPvGvzUb",
  },
  {
    title: "Core Python Programming",
    description: "Infosys Springboard",
    year: 2024,
    type: "certification",
    href: "https://drive.google.com/file/d/1__zeHC_absJ7RJwqqvlKouD0E-UlJduV/view",
  },
];
