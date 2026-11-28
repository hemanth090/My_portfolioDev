"use client";

import { Send } from "lucide-react";
import { useMemo, useState } from "react";

import { PROFILE } from "@/content/profile";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const valid = useMemo(
    () => EMAIL_PATTERN.test(email.trim()) && message.trim().length >= 10,
    [email, message]
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid) return;

    const subject = `Portfolio contact from ${email.trim()}`;
    const body = `${message.trim()}\n\nFrom: ${email.trim()}`;
    const href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email app…");
    window.location.href = href;
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none"
        >
          Your email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none"
        >
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="What are you building, and where do you want help?"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 contact-message-height flex w-full resize-none rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] md:text-sm"
        />
        <p className="text-muted-foreground text-xs">
          At least 10 characters so I know what you need.
        </p>
      </div>

      <div className="space-y-2 pt-1">
        <button
          type="submit"
          disabled={!valid}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] shadow-xs hover:bg-primary/90 px-4 py-2 has-[>svg]:px-3 bg-foreground text-background h-11 w-full rounded-md text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-45"
        >
          <Send aria-hidden />
          Send message
        </button>

        <div className="contact-status-row flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
          {status ? (
            <p
              role="status"
              aria-live="polite"
              className="text-muted-foreground"
            >
              {status}
            </p>
          ) : null}
          <p className="text-muted-foreground ml-auto">
            Goes straight to{" "}
            <span className="text-foreground font-medium">
              {PROFILE.email}
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}
