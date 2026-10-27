import type { Metadata, Viewport } from "next";

import "./globals.css";

import { Navbar } from "@/components/navbar";
import { PageFooter } from "@/components/page-footer";
import { Providers } from "@/components/providers";
import { EDUCATION, EXPERIENCE, ME, PROJECTS, SKILLS } from "@/lib/config";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Naveen Hemanth - AI Engineer",
    template: "%s | Naveen Hemanth",
  },
  description:
    "Naveen Hemanth Kokkonda is a software engineer building AI products end to end: retrieval, agent workflows, APIs and the interfaces that make them usable.",
  applicationName: SITE_NAME,
  authors: [{ name: ME.fullName }],
  creator: ME.fullName,
  publisher: ME.fullName,
  generator: "Next.js",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "Retrieval",
    "RAG",
    "LangGraph",
    "Observability",
    "Langfuse",
    "Structured Logging",
    "Amazon CloudWatch",
    "AWS",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Hyderabad",
    "Naveen Hemanth",
  ],
  referrer: "origin-when-cross-origin",
  robots: { index: true, follow: true },
  category: "technology",
  classification: "Portfolio Website",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: "Naveen Hemanth - AI Engineer",
    description:
      "Software engineer building AI products end to end: retrieval, agent workflows, APIs and the interfaces that make them usable.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Hemanth - AI Engineer",
    description:
      "Software engineer building AI products end to end: retrieval, agent workflows, APIs and the interfaces that make them usable.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="__variable_f910ec __variable_9a4aa5"
    >
      <head>
        <link
          rel="preload"
          href="/fonts/Satoshi-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMono-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PixelifySans-Latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#person`,
                  name: ME.fullName,
                  jobTitle: ME.title,
                  description:
                    "Software engineer building AI products end to end: retrieval, agent workflows, APIs and the interfaces that make them usable.",
                  url: SITE_URL,
                  image: `${SITE_URL}${ME.avatarPhoto}`,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: ME.location.split(",")[0]?.trim(),
                    addressCountry: "IN",
                  },
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Sreyas Institute of Engineering and Technology",
                  },
                  knowsAbout: SKILLS.map((skill) => skill.label),
                  hasOccupation: EXPERIENCE.map((entry) => ({
                    "@type": "Role",
                    roleName: entry.role,
                    startDate: entry.start,
                    endDate: entry.end,
                    worksFor: { "@type": "Organization", name: entry.company },
                  })),
                  subjectOf: PROJECTS.map((project) => ({
                    "@type": "CreativeWork",
                    name: project.title,
                    description: project.description,
                  })),
                  award: EDUCATION.map((item) => item.title),
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: SITE_NAME,
                  description:
                    "Portfolio, projects and experience of Naveen Hemanth - AI Engineer.",
                  publisher: { "@id": `${SITE_URL}/#person` },
                },
              ],
            }),
          }}
        />
        <Providers>
          <div className="min-h-dvh">
            <a
              href="#main"
              className="focus:bg-background focus:ring-ring/50 sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:px-3 focus:py-2 focus:text-sm focus:ring-[3px]"
            >
              Skip to content
            </a>
            <Navbar />
            <div className="mx-auto w-full px-4 md:max-w-[715px] md:px-0">
              <div className="relative">
                <div
                  aria-hidden
                  className="border-border pointer-events-none absolute top-0 bottom-0 z-0 hidden border-r md:-left-6 md:block md:w-6 dark:opacity-60"
                />
                <div
                  aria-hidden
                  className="border-border pointer-events-none absolute top-0 bottom-0 z-0 hidden border-l md:-right-6 md:block md:w-6 dark:opacity-60"
                />
                <div id="main" className="relative z-10">
                  {children}
                  <PageFooter />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent backdrop-blur-[5px] select-none [mask-image:linear-gradient(to_top,black_10%,transparent)] dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]"
          />
        </Providers>
      </body>
    </html>
  );
}
