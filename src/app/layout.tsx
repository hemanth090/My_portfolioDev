import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { GeistMono } from "geist/font/mono";

import "@/styles/globals.css";

import { defaultWebsiteMetadata } from "@/config/metadata";
import { Providers } from "@/components/providers";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = defaultWebsiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${GeistMono.variable} antialiased selection:bg-foreground selection:text-primary-foreground`}
      >
        <Providers>
          <div className="container mx-auto md:max-w-161">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
