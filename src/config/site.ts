import { NavItem } from "@/types/nav";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://hemanthk.xyz";

export const SITE_CONFIG = {
  name: "Naveen",
  description:
    "Naveen Hemanth is an AI engineer in Hyderabad. He builds search and research tools, and cares whether they actually find the right answer.",
  url: baseUrl,
  ogImage: `${baseUrl}/images/opengraph-image.png`,
  links: {
    twitter: "https://x.com/HemanthKokkonda",
    github: "https://github.com/hemanth090",
  },
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
  author: "Naveen Hemanth",
};

export type SiteConfig = typeof SITE_CONFIG;

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Credentials",
    href: "/credentials",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const X_USERNAME = "@HemanthKokkonda";
export const GITHUB_USERNAME = "hemanth090";
export const SOURCE_CODE_GITHUB_REPO = "hemanth090/My_portfolioDev";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/hemanth090/My_portfolioDev";

export const UTM_PARAMS = {
  utm_source: "hemanthk.xyz",
};
