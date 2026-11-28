import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          The link may be out of date. Everything lives on the home page - start
          there, or search with ⌘K.
        </p>
        <Link
          href="/"
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2 has-[>svg]:px-3 mt-2"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back home
        </Link>
      </div>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
    </main>
  );
}
