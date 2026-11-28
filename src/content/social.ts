export type SocialLink = {
  title: string;
  href: string;
  icon: "file" | "send" | "github" | "linkedin" | "x" | "mail";
  external: boolean;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    title: "Resume",
    href: "/resume-hemanth.pdf",
    icon: "file",
    external: true,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: "send",
    external: false,
  },
  {
    title: "GitHub",
    href: "https://github.com/hemanth090",
    icon: "github",
    external: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/hemanthkokkonda",
    icon: "linkedin",
    external: true,
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/HemanthKokkonda",
    icon: "x",
    external: true,
  },
  {
    title: "Email",
    href: "mailto:naveenhemanth4@gmail.com",
    icon: "mail",
    external: true,
  },
];

export const NAV_ITEMS = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const CONTACT_TITLES = ["Email", "GitHub", "LinkedIn", "X (Twitter)"];

export const CONTACT_LINKS = CONTACT_TITLES.map((title) =>
  SOCIAL_LINKS.find((link) => link.title === title)
).filter((link): link is SocialLink => Boolean(link));
