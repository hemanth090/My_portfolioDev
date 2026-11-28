import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { XIcon } from "@/components/icons";
import { PageLabel, SectionHeader } from "@/components/section-header";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Naveen Hemanth.",
};

export default function ContactPage() {
  return (
    <main>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <PageLabel>Contact</PageLabel>
      <h1 className="screen-line-bottom relative px-4 py-1.5 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
        Let&apos;s talk about what you&apos;re building
      </h1>
      <div className="screen-line-bottom relative flex items-center justify-between gap-3 p-2">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-7 shrink-0 items-center gap-2 rounded-md px-1 text-sm font-medium outline-none transition-colors focus-visible:ring-[3px]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Home
        </Link>
        <span className="border-border bg-muted/30 text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium sm:text-sm">
          {PROFILE.availability}
        </span>
      </div>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <SectionHeader>Fastest routes</SectionHeader>
      <div className="grid grid-cols-1 gap-2 px-4 py-5 sm:grid-cols-2 sm:px-6">
        <a
          href={`mailto:${PROFILE.email}`}
          className="group focus-visible:ring-ring/50 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left outline-none transition-all focus-visible:ring-[3px] bg-foreground text-background hover:opacity-90"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-background/15">
            <Mail className="size-4" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">
              Send an email
            </span>
            <span className="block truncate text-xs text-background/70">
              {PROFILE.email}
            </span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href={PROFILE.x}
          target="_blank"
          rel="noopener noreferrer"
          className="group focus-visible:ring-ring/50 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left outline-none transition-all focus-visible:ring-[3px] border-border bg-background border hover:border-neutral-400 dark:hover:border-neutral-600"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
            <XIcon className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">
              DM me on X
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {PROFILE.xHandle}
            </span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <SectionHeader>Send a message</SectionHeader>
      <div className="px-4 py-5 sm:px-6">
        <p className="text-muted-foreground mb-5 max-w-prose text-sm leading-relaxed">
          Write here and it lands in my inbox. Roles, freelance work, or a
          question about something I&apos;ve built - all welcome.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
