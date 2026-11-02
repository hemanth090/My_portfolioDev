import { Metadata } from "next";

import { generateWebsiteMetadata } from "@/config/metadata";
import CollectionContainer from "@/components/collection/collection-container";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Credentials",
  description:
    "The certifications, education, and milestones behind the work.",
  keywords: [
    "credentials",
    "Naveen",
    "Naveen certifications",
    "certifications",
    "education",
    "credentials",
  ],
  image: "/images/opengraph-image.png",
  url: "/credentials",
});

export default function CredentialsPage() {
  return (
    <section className="space-y-12 pt-8" aria-labelledby="credentials-heading">
      <header className="flex flex-col gap-3">
        <h1 id="credentials-heading" className="font-geist-pixel-square text-xl">
          Credentials
        </h1>
        <p className="font-geist-sans text-muted-foreground">
          The certifications, education, and milestones behind the work.
        </p>
      </header>
      <CollectionContainer />
    </section>
  );
}
