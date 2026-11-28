import { FileText, Mail, Send } from "lucide-react";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { MagneticLink } from "@/components/magnetic-link";
import { SectionHeader } from "@/components/section-header";
import { CONTACT_LINKS } from "@/content/social";

function ContactIcon({ icon }: { icon: (typeof CONTACT_LINKS)[number]["icon"] }) {
  switch (icon) {
    case "file":
      return <FileText className="size-3.5 shrink-0" aria-hidden />;
    case "send":
      return <Send className="size-3.5 shrink-0" aria-hidden />;
    case "github":
      return <GitHubIcon className="size-3.5 shrink-0" />;
    case "linkedin":
      return <LinkedInIcon className="size-3.5 shrink-0" />;
    case "x":
      return <XIcon className="size-3.5 shrink-0" />;
    case "mail":
      return <Mail className="size-3.5 shrink-0" aria-hidden />;
  }
}

export function ContactSection() {
  return (
    <section aria-labelledby="contact-links">
      <SectionHeader id="contact-links">Contact</SectionHeader>
      <ul className="contact-links-grid gap-2 px-4 py-5 sm:px-5">
        {CONTACT_LINKS.map((link) => (
          <li key={link.title} className="flex min-w-0">
            <MagneticLink
              href={link.href}
              external={link.external}
              className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex w-full items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]"
            >
              <ContactIcon icon={link.icon} />
              <span className="truncate">
                {link.title === "X (Twitter)" ? "X" : link.title}
              </span>
            </MagneticLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
