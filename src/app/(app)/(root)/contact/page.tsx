import { Metadata } from "next";

import { generateWebsiteMetadata } from "@/config/metadata";
import Connect from "@/components/portfolio/connect";
import CTA from "@/components/portfolio/cta";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Contact",
  description: "Get in touch with Naveen Hemanth.",
  keywords: ["Naveen contact", "Naveen Hemanth email", "AI engineer"],
  image: "/images/opengraph-image.png",
  url: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pt-8" aria-labelledby="contact-page-heading">
      <header className="flex flex-col gap-3">
        <h1 id="contact-page-heading" className="font-geist-pixel-square text-xl">
          Contact
        </h1>
        <p className="font-geist-sans text-muted-foreground">
          Email, GitHub, LinkedIn, or a quick note about what you&apos;re
          building.
        </p>
      </header>
      <Connect />
      <CTA />
    </section>
  );
}
