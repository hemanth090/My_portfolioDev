import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  // Render hosts this repository as a static site (see render.yaml).
  // `next build` emits `out/`, and scripts/export-to-build.mjs copies it to
  // `build/`, the publish directory configured for the Render service.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
