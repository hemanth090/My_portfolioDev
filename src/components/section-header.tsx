import { cn } from "@/lib/utils";

export function SectionHeader({
  id,
  children,
  className,
  action,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1",
        className
      )}
    >
      <h2
        id={id}
        className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl"
      >
        {children}
      </h2>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function PageLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="screen-line-bottom relative w-full px-4 py-1">
      <p className="font-heading text-xl font-medium text-neutral-400 sm:text-2xl dark:text-neutral-500">
        {children}
      </p>
    </div>
  );
}
