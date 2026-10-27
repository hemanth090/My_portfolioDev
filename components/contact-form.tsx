"use client";

import { Send } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";

import { ME } from "@/lib/config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "success";

const LABEL_CLASS =
  "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50";

const INPUT_CLASS =
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

const TEXTAREA_CLASS =
  "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-32 resize-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const feedbackRef = useRef<HTMLParagraphElement | null>(null);

  // The form sits near the bottom of the page; make sure the status line is
  // actually visible after submitting instead of rendering below the fold.
  useEffect(() => {
    if (!feedback) return;
    feedbackRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [feedback]);

  const isValid = useMemo(
    () => EMAIL_PATTERN.test(email.trim()) && message.trim().length >= 10,
    [email, message],
  );

  // The site is a static export (no API routes), so hand the message off to
  // the visitor's mail app; the draft is pre-filled and stays in their control.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "success" || !isValid) return;

    const sender = email.trim();
    const body = message.trim();
    const subject = `Portfolio message from ${sender}`;
    const mailto = `mailto:${ME.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`${body}\n\nFrom: ${sender}`)}`;

    setStatus("success");
    setEmail("");
    setMessage("");
    setFeedback("Opening your email app. Press send there.");
    window.location.href = mailto;
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="space-y-2">
        <label htmlFor="contact-email" className={LABEL_CLASS}>
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
          className={INPUT_CLASS}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className={LABEL_CLASS}>
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
          className={TEXTAREA_CLASS}
        />
        <p className="text-muted-foreground text-xs">
          At least 10 characters so I know what you need.
        </p>
      </div>
      <div className="space-y-2 pt-1">
        <button
          type="submit"
          disabled={status === "success" || !isValid}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-xs transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-45 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none bg-foreground text-background h-11 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        >
          <Send aria-hidden />
          Send message
        </button>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
          {feedback ? (
            <p
              ref={feedbackRef}
              role="status"
              aria-live="polite"
              className={
                status === "success"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-destructive"
              }
            >
              {feedback}
            </p>
          ) : null}
          <p className="text-muted-foreground ml-auto">
            Goes straight to{" "}
            <a
              href={`mailto:${ME.email}`}
              className="text-foreground link-underline font-medium"
            >
              {ME.email}
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}
