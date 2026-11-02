"use client";

import * as React from "react";

import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function FooterDateTime() {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const timeZone = "Asia/Kolkata";
  const isoString = now.toISOString();

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone,
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  });

  const dateLabel = dateFormatter.format(now);
  const timeLabel = timeFormatter.format(now);

  return (
    <div className="flex items-center justify-center gap-3 text-center font-geist-mono text-sm tracking-tight text-muted-foreground">
      <time
        suppressHydrationWarning
        dateTime={isoString}
        aria-label={dateLabel}
        className="leading-none"
      >
        {dateLabel}
      </time>
      <Separator
        orientation="vertical"
        className="h-4 self-center"
        aria-hidden="true"
      />
      <Tooltip>
        <TooltipTrigger
          render={
            <time
              suppressHydrationWarning
              dateTime={isoString}
              className="cursor-default"
              aria-label={`${timeLabel} ${timeZone}`}
            />
          }
        >
          <span suppressHydrationWarning>{timeLabel} GMT+5:30</span>
        </TooltipTrigger>
        <TooltipContent sideOffset={10}>{timeZone}</TooltipContent>
      </Tooltip>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="mt-10 mb-15 w-full px-5">
      <div className="flex flex-col items-center gap-3 border-t py-8">
        <div className="flex items-center text-center text-sm">
          <span className="tracking-tight text-muted-foreground">
            Open to{" "}
            <span className="font-geist-mono text-foreground">AI and full-stack roles</span>.
          </span>
        </div>
        <FooterDateTime />
      </div>
    </footer>
  );
}
