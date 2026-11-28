import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-3 rounded-lg border border-border p-4 shadow-xs",
        className
      )}
      {...props}
    />
  );
}

export function Badge({
  className,
  variant = "secondary",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "secondary" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium whitespace-nowrap",
        variant === "secondary"
          ? "border-border bg-muted/30 text-muted-foreground"
          : "border-border bg-background text-foreground",
        className
      )}
      {...props}
    />
  );
}
