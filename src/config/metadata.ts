import type { Metadata } from "next";

import { SITE_CONFIG, X_USERNAME } from "./site";

export const defaultWebsiteMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} \u2013 AI Engineer`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  ],
  creator: SITE_CONFIG.author,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} \u2013 AI Engineer`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} \u2013 AI Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} \u2013 AI Engineer`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: X_USERNAME,
  },
  icons: {
    icon: "/images/avatar.jpg",
  },
};

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateWebsiteMetadata({
  title,
  description,
  image,
  url,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: GenerateMetadataParams = {}): Metadata {
  const finalTitle = title || `${SITE_CONFIG.name} \u2013 AI Engineer`;
  const finalDescription = description || SITE_CONFIG.description;
  const finalImage = image || SITE_CONFIG.ogImage;
  const finalUrl = url || "/";
  const finalKeywords = keywords
    ? [...new Set([...SITE_CONFIG.keywords, ...keywords])]
    : SITE_CONFIG.keywords;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      url: finalUrl,
      type,
      locale: "en_IN",
      siteName: SITE_CONFIG.name,
      title: finalTitle,
      description: finalDescription,
      publishedTime,
      modifiedTime,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
      creator: X_USERNAME,
    },
  };
}
