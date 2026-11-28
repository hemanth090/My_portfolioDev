export const PROFILE = {
  name: "Naveen Hemanth",
  firstName: "Naveen",
  wordmark: "NAVEEN",
  title: "AI Engineer",
  roles: ["AI Engineer", "Full-Stack", "Open to work"],
  location: "Hyderabad, India",
  email: "naveenhemanth4@gmail.com",
  website: "https://hemanthk.xyz",
  avatar: "/images/avatar.jpg",
  avatarStylized: "/images/avatar-stylized.png",
  ogImage: "/images/opengraph-image.png",
  resumeUrl: "/resume-hemanth.pdf",
  github: "https://github.com/hemanth090",
  linkedin: "https://www.linkedin.com/in/hemanthkokkonda",
  x: "https://x.com/HemanthKokkonda",
  xHandle: "@HemanthKokkonda",
  availability: "Open to work",
} as const;

export const SITE = {
  name: "Naveen",
  title: "Naveen - AI Engineer",
  description:
    "Naveen Hemanth is an AI engineer in Hyderabad. He builds search and research tools, and cares whether they actually find the right answer.",
  url: "https://hemanthk.xyz",
  keywords: [
    "Naveen",
    "Naveen Hemanth",
    "naveen hemanth",
    "AI engineer",
    "AI engineer portfolio",
    "RAG",
    "retrieval augmented generation",
    "LangGraph",
    "agents",
    "portfolio",
    "Hyderabad",
  ],
} as const;

type AboutPart = { text: string; strong?: boolean };

export const ABOUT: AboutPart[][] = [
  [
    { text: "I'm 21, based in Hyderabad, an AI Engineer and Product Builder working across " },
    { text: "AI, backend, and full-stack development", strong: true },
    { text: "." },
  ],
];

export const ORBIT_LABELS = {
  top: "AI Engineering",
  left: "Full-Stack",
  right: "Search & Retrieval",
  bottom: "Agents & Research",
} as const;
