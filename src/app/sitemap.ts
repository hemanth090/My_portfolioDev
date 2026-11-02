import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_APP_URL || "https://hemanthk.xyz"
  ).replace(/\/$/, "");

  const routes = ["", "/projects", "/credentials", "/contact"].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
  }));

  return routes;
}
