import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";

import { Providers } from "@/components/providers";
import { SmoothScroll } from "@/components/smooth-scroll";
import { UserCursor } from "@/components/user-cursor";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE } from "@/content/profile";

import "./reference.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: "Naveen Hemanth Portfolio",
  title: {
    default: SITE.title,
    template: `%s | Naveen Hemanth`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  alternates: { canonical: "/" },
  authors: [{ name: "Naveen Hemanth", url: SITE.url }],
  creator: "Naveen Hemanth",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: SITE.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/opengraph-image.png"],
    creator: "@HemanthKokkonda",
  },
  icons: {
    icon: "/images/avatar.jpg",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  preload("/fonts/Geist-var.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload("/fonts/Satoshi-Variable.woff2?v=2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload("/fonts/PixelifySans-3.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload("/images/hero-dot-field.webp", {
    as: "image",
    type: "image/webp",
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh font-sans antialiased">
        <Providers>
          <SmoothScroll />
          <UserCursor />
          <div className="min-h-dvh">
            <a
              href="#main"
              className="focus:bg-background focus:ring-ring/50 sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:px-3 focus:py-2 focus:text-sm focus:ring-[3px]"
            >
              Skip to content
            </a>

            <Header />

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
                  <Footer />
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent backdrop-blur-[5px] select-none [mask-image:linear-gradient(to_top,black_10%,transparent)] dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]"
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
