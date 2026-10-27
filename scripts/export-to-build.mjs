import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Next.js static export writes to `out/`. Render's static site (see
// render.yaml) publishes `build/`, which is what the previous Vite site used.
const outDir = fileURLToPath(new URL("../out/", import.meta.url));
const buildDir = fileURLToPath(new URL("../build/", import.meta.url));

await rm(buildDir, { recursive: true, force: true });
await mkdir(buildDir, { recursive: true });
await cp(outDir, buildDir, { recursive: true });

console.log("Static export copied from out/ to build/");
