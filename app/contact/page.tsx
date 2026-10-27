import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Eyebrow, SectionHeading } from "@/components/section-heading";
import { XIcon } from "@/components/social-icons";
import { ME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Naveen Hemanth about AI engineering roles, freelance work, or anything he has built.",
  alternates: { canonical: "/contact/" },
};

const ROUTE_ICON_WRAPPER =
  "flex size-8 shrink-0 items-center justify-center rounded-md";

const ROUTE_ARROW_CLASS =
  "size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export default function ContactPage() {
  return (
    <main>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <Eyebrow>Contact</Eyebrow>
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
          {ME.availability}
        </span>
      </div>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <SectionHeading id="fastest-routes">Fastest routes</SectionHeading>
      <div className="grid grid-cols-1 gap-2 px-4 py-5 sm:grid-cols-2 sm:px-6">
        <a
          href={`mailto:${ME.email}`}
          className="group focus-visible:ring-ring/50 bg-foreground text-background flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left outline-none transition-all focus-visible:ring-[3px] hover:opacity-90"
        >
          <span className={`${ROUTE_ICON_WRAPPER} bg-background/15`}>
            <Mail className="size-4" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">
              Send an email
            </span>
            <span className="text-background/70 block truncate text-xs">
              {ME.email}
            </span>
          </span>
          <ArrowUpRight className={ROUTE_ARROW_CLASS} aria-hidden />
        </a>
        <a
          href={ME.socials.x}
          target="_blank"
          rel="noopener noreferrer"
          className="group focus-visible:ring-ring/50 border-border bg-background flex w-full items-center gap-3 rounded-md border px-3 py-2.5 text-left outline-none transition-all hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600"
        >
          <span
            className={`${ROUTE_ICON_WRAPPER} bg-muted text-muted-foreground`}
          >
            <XIcon className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">
              DM me on X
            </span>
            <span className="text-muted-foreground block truncate text-xs">
              @HemanthKokkonda
            </span>
          </span>
          <ArrowUpRight className={ROUTE_ARROW_CLASS} aria-hidden />
        </a>
      </div>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />

      <SectionHeading id="send-a-message">Send a message</SectionHeading>
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
