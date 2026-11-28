import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "@/styles/globals.css";

import { defaultWebsiteMetadata } from "@/config/metadata";
import { Providers } from "@/components/providers";

export const metadata: Metadata = defaultWebsiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased selection:bg-foreground selection:text-primary-foreground`}
      >
        <Providers>
          <div className="container mx-auto md:max-w-161">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
