import { Plus } from "lucide-react";
import Link from "next/link";

import { ORBIT_LABELS, PROFILE } from "@/content/profile";

export function FocusSection() {
  return (
    <section
      aria-label="Areas of focus"
      className="border-border screen-line-top screen-line-bottom relative border-x px-5 py-8"
    >
      <div className="relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg">
        <div className="relative aspect-square w-full">
          <div
            aria-hidden
            className="border-foreground/10 absolute top-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border"
          />
          <div
            aria-hidden
            className="border-foreground/10 absolute top-[22%] left-[2%] h-[55%] w-[55%] rounded-full border"
          />
          <div
            aria-hidden
            className="border-foreground/10 absolute top-[22%] right-[2%] h-[55%] w-[55%] rounded-full border"
          />
          <div
            aria-hidden
            className="border-foreground/10 absolute bottom-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border"
          />

          <span className="text-foreground/50 absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] whitespace-nowrap sm:text-xs md:text-sm">
            {ORBIT_LABELS.top}
          </span>
          <span className="text-foreground/50 absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm">
            {ORBIT_LABELS.left}
          </span>
          <span className="text-foreground/50 absolute top-1/2 right-[15%] translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm">
            {ORBIT_LABELS.right}
          </span>
          <span className="text-foreground/50 absolute bottom-[14%] left-1/2 translate-y-1/2 -translate-x-1/2 text-center text-[10px] leading-tight whitespace-pre-wrap sm:text-xs md:text-sm">
            {ORBIT_LABELS.bottom}
          </span>

          <div className="border-background absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 shadow-md sm:size-16 sm:border-4 md:size-20">
            <img
              src={PROFILE.avatar}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="flex w-full flex-col items-center px-5 pt-2 pb-0 sm:px-10"
      >
        <p className="mb-5 text-center text-sm text-balance opacity-70 md:text-lg">
          Have something interesting to build? Let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="focus-visible:ring-ring/50 inset-shadow group inline-flex cursor-pointer items-center self-center rounded-md border border-black/10 bg-black/[0.03] px-2 py-1 text-sm text-black shadow-md outline-none focus-visible:ring-[3px] dark:border-white/15 dark:bg-white/15 dark:text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.1)]"
        >
          <span className="relative z-20 flex items-center gap-2 transition-[gap] duration-300 group-hover:gap-8">
            <span className="size-5 shrink-0 overflow-hidden rounded-full">
              <img
                src={PROFILE.avatar}
                alt=""
                loading="lazy"
                width={20}
                height={20}
                className="size-full object-cover"
              />
            </span>
            <span
              aria-hidden
              className="absolute left-6 flex -translate-x-full items-center opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <Plus className="size-3" />
              <span className="mr-2 ml-1 flex size-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">
                You
              </span>
            </span>
            <span className="relative ml-0 block text-sm font-bold whitespace-nowrap transition-[margin-left] duration-300 group-hover:ml-4">
              Let&apos;s talk
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
