import { Network, Plug } from "lucide-react";

import { cn } from "@/lib/utils";

const TECH_ICONS: Record<string, { light: string; dark?: string }> = {
  typescript: { light: "typescript.svg" },
  react: { light: "react.svg" },
  vite: { light: "vite.svg" },
  python: { light: "python.svg" },
  nextjs: { light: "nextjs-light.svg", dark: "nextjs-dark.svg" },
  tailwindcss: { light: "tailwindcss.svg" },
  "vercel-ai-sdk": { light: "vercel-ai-sdk.svg" },
  rust: { light: "rust.svg", dark: "rust-dark.svg" },
  sqlite: { light: "sqlite.svg", dark: "sqlite-dark.svg" },
  fastapi: { light: "fastapi.svg" },
  langgraph: { light: "langgraph.svg" },
};

export function TechIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  if (slug === "mcp") {
    return (
      <Plug
        aria-hidden
        className={cn("shrink-0 text-muted-foreground", className)}
      />
    );
  }
  if (slug === "hnsw") {
    return (
      <Network
        aria-hidden
        className={cn("shrink-0 text-muted-foreground", className)}
      />
    );
  }

  const icon = TECH_ICONS[slug];
  if (!icon) {
    return (
      <Network
        aria-hidden
        className={cn("shrink-0 text-muted-foreground", className)}
      />
    );
  }

  return (
    <SkillIcon
      icon={icon.light}
      darkIcon={icon.dark}
      className={className}
    />
  );
}

export function SkillIcon({
  icon,
  darkIcon,
  className,
}: {
  icon: string;
  darkIcon?: string;
  className?: string;
}) {
  if (darkIcon) {
    return (
      <span className={cn("relative inline-block shrink-0", className)}>
        <img
          src={`/images/tech-stack-icons/${icon}`}
          alt=""
          aria-hidden
          draggable={false}
          className="theme-icon-light size-full object-contain"
        />
        <img
          src={`/images/tech-stack-icons/${darkIcon}`}
          alt=""
          aria-hidden
          draggable={false}
          className="theme-icon-dark size-full object-contain"
        />
      </span>
    );
  }

  return (
    <img
      src={`/images/tech-stack-icons/${icon}`}
      alt=""
      aria-hidden
      draggable={false}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
