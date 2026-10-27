import { ME } from "@/lib/config";

export function PageFooter() {
  return (
    <footer>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <div className="flex flex-col items-center justify-center py-6">
        <p className="text-foreground/70 text-center text-sm">
          Designed and developed by{" "}
          <a
            href={ME.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 link-underline font-semibold"
          >
            {ME.fullName}
          </a>
          <br />© 2026. Built in the open.
        </p>
      </div>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <div className="screen-line-bottom relative w-full py-2">
        <div className="flex w-full items-center justify-center bg-center bg-[length:10px_10px] px-1.5 bg-[radial-gradient(var(--dot)_1px,transparent_0)] [--dot:color-mix(in_oklab,var(--color-zinc-400)_60%,transparent)] dark:[--dot:color-mix(in_oklab,var(--color-zinc-600)_60%,transparent)] mask-x-from-95% mask-y-from-90% h-28 min-h-20 sm:h-32" />
      </div>
    </footer>
  );
}
