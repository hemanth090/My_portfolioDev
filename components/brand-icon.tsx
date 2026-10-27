import type { CSSProperties } from "react";

import { BRAND_ICONS, type BrandSlug } from "@/lib/brand-icons";
import { cn } from "@/lib/cn";

function brandDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map(
    (index) => parseInt(hex.slice(index, index + 2), 16) / 255,
  );
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.22 ? "#E1E3E5" : `#${hex}`;
}

export function BrandIcon({
  slug,
  className = "size-3.5",
}: {
  slug: BrandSlug;
  className?: string;
}) {
  const icon = BRAND_ICONS[slug];
  const hex = `#${icon.hex}`;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn(
        "shrink-0 fill-[var(--brand)] dark:fill-[var(--brand-dark)]",
        className,
      )}
      style={
        {
          "--brand": hex,
          "--brand-dark": brandDark(icon.hex),
        } as CSSProperties
      }
    >
      <path d={icon.path} />
    </svg>
  );
}
