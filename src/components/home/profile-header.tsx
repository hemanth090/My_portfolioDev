import { Mail, Send } from "lucide-react";
import Link from "next/link";

import { AvatarSwitch } from "@/components/avatar-switch";
import { RoleCycle } from "@/components/role-cycle";
import { PROFILE } from "@/content/profile";

export function ProfileHeader() {
  return (
    <header className="flex w-full items-start">
      <div className="p-3 sm:p-4">
        <AvatarSwitch />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0 pt-3 sm:pt-4">
        <h1 className="text-xl font-medium text-neutral-700 md:text-2xl dark:text-neutral-50">
          {PROFILE.name}
        </h1>
        <p className="font-heading flex min-h-6 items-center text-sm font-medium text-neutral-500/80 md:text-base dark:text-neutral-400">
          <RoleCycle roles={PROFILE.roles} />
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Link
            href="/contact"
            data-ui-feedback="tap"
            className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]"
          >
            <span className="pointer-events-none inline-flex items-center gap-[5px]">
              <Send
                className="size-3.5 shrink-0 text-yellow-400 dark:text-yellow-600"
                aria-hidden
              />
              Let&apos;s talk
            </span>
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            data-ui-feedback="tap"
            className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]"
          >
            <span className="pointer-events-none inline-flex items-center gap-[5px]">
              <Mail className="size-3.5 shrink-0" aria-hidden />
              Send an email
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
