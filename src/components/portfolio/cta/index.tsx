import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { StarsTravel } from "@/components/stars-travel";

export default function CTA() {
  return (
    <section
      id="cta"
      className="mt-20 mb-5 scroll-mt-20"
      aria-labelledby="cta-heading"
    >
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-border">
        <StarsTravel
          className="pointer-events-none absolute inset-0 h-full"
          svgOptions={{ duration: 1.5 }}
        />
        <div className="relative z-10 flex h-60 flex-col items-center justify-center gap-5 p-6 text-center">
          <div className="flex flex-col gap-3">
            <h2
              id="cta-heading"
              className="font-geist-pixel-square text-3xl tracking-tight"
            >
              Let&apos;s talk
            </h2>
            <p className="font-geist-sans text-sm text-muted-foreground sm:text-base">
              What&apos;s the best way to start? <br /> A quick note about
              what you&apos;re building and see if we click.
            </p>
          </div>
          <Link
            href="mailto:naveenhemanth4@gmail.com?subject=Let%27s%20talk"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mx-auto w-fit bg-foreground font-geist-sans transition-colors hover:bg-foreground/90! active:scale-98"
            )}
          >
            Send an email
          </Link>
        </div>
      </div>
    </section>
  );
}
