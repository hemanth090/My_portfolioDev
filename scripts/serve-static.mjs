import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

// Tiny static file server used for local previews (`npm start`) and as a
// fallback if the Render service is ever configured as a Node web service.
const root = resolve(fileURLToPath(new URL("../build/", import.meta.url)));
const port = Number(process.env.PORT ?? 3000);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".mp3": "audio/mpeg",
  ".pdf": "application/pdf",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const resolved = resolve(join(root, normalize(decoded)));
  return resolved === root || resolved.startsWith(root + sep) ? resolved : null;
}

function pickFile(pathname) {
  const candidate = safePath(pathname);
  if (!candidate) return null;
  if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    const index = join(candidate, "index.html");
    if (existsSync(index)) return index;
  }
  if (!extname(candidate)) {
    const html = `${candidate}.html`;
    if (existsSync(html)) return html;
    const index = join(candidate, "index.html");
    if (existsSync(index)) return index;
  }
  return null;
}

createServer((req, res) => {
  const url = req.url ?? "/";
  let file = pickFile(url);
  let status = 200;

  if (!file) {
    status = 404;
    file = join(root, "404.html");
    if (!existsSync(file)) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }
  }

  const ext = extname(file);
  const headers = { "Content-Type": MIME[ext] ?? "application/octet-stream" };
  if (url.startsWith("/_next/static/")) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  }

  res.writeHead(status, headers);
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Static preview running on http://localhost:${port}`);
});
