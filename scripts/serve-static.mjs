#!/usr/bin/env node
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(new URL("../out", import.meta.url)));
const PORT = Number.parseInt(process.env.PORT ?? "4173", 10);

const CONTENT_TYPES = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".mdx": "text/markdown; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".wasm": "application/wasm",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65_535) {
  console.error("PORT must be an integer between 1 and 65535.");
  process.exit(1);
}

async function getFile(filePath) {
  try {
    const info = await stat(filePath);
    return info.isFile() ? { filePath, size: info.size } : null;
  } catch {
    return null;
  }
}

async function isDirectory(filePath) {
  try {
    return (await stat(filePath)).isDirectory();
  } catch {
    return false;
  }
}

function decodePathname(pathname) {
  try {
    const decoded = decodeURIComponent(pathname);

    if (decoded.includes("\0")) {
      return null;
    }

    // Reject traversal before normalizing the path.
    if (decoded.split(/[\\/]/).includes("..")) {
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
}

function cacheControl(relativePath) {
  if (relativePath.startsWith("_next/static/")) {
    return "public, max-age=31536000, immutable";
  }

  if (relativePath.endsWith(".html")) {
    return "no-cache";
  }

  return "public, max-age=3600";
}

function contentType(filePath, relativePath) {
  if (relativePath.startsWith("doc.mdx/") && path.extname(filePath) === "") {
    return "text/markdown; charset=utf-8";
  }

  return (
    CONTENT_TYPES[path.extname(filePath).toLowerCase()] ??
    "application/octet-stream"
  );
}

function sendFile(req, res, file, status = 200) {
  const relativePath = path
    .relative(ROOT, file.filePath)
    .split(path.sep)
    .join("/");

  res.writeHead(status, {
    "Cache-Control": cacheControl(relativePath),
    "Content-Length": file.size,
    "Content-Type": contentType(file.filePath, relativePath),
    "X-Content-Type-Options": "nosniff",
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  const stream = createReadStream(file.filePath);
  stream.on("error", () => res.destroy());
  stream.pipe(res);
}

async function sendNotFound(req, res) {
  const page = await getFile(path.join(ROOT, "404.html"));

  if (page) {
    sendFile(req, res, page, 404);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(req.method === "HEAD" ? undefined : "404 Not Found\n");
}

async function handleRequest(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, {
      Allow: "GET, HEAD",
      "Content-Type": "text/plain; charset=utf-8",
    });
    res.end("Method Not Allowed\n");
    return;
  }

  let url;

  try {
    url = new URL(req.url ?? "/", "http://localhost");
  } catch {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad Request\n");
    return;
  }

  const pathname = decodePathname(url.pathname);

  if (pathname === null) {
    await sendNotFound(req, res);
    return;
  }

  const target = path.join(ROOT, pathname.replace(/^\/+/, ""));
  const relativeTarget = path.relative(ROOT, target);

  // Keep every request inside the export directory.
  if (relativeTarget.startsWith("..") || path.isAbsolute(relativeTarget)) {
    await sendNotFound(req, res);
    return;
  }

  let file;

  if (pathname.endsWith("/")) {
    file = await getFile(path.join(target, "index.html"));
  } else {
    file = await getFile(target);

    if (!file && (await isDirectory(target))) {
      res.writeHead(301, { Location: `${url.pathname}/${url.search}` });
      res.end();
      return;
    }

    file ??= await getFile(`${target}.html`);
  }

  if (!file) {
    await sendNotFound(req, res);
    return;
  }

  sendFile(req, res, file);
}

const server = createServer((req, res) => {
  handleRequest(req, res).catch((error) => {
    console.error(error);

    if (res.headersSent) {
      res.destroy();
      return;
    }

    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error\n");
  });
});

server.listen(PORT, () => {
  console.log(`Serving ${ROOT} at http://localhost:${PORT}`);
});
