"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { CommandMenu } from "@/components/command-menu";
import { SoundToggle } from "@/components/sound-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ME, PAGES } from "@/lib/config";
import { cn } from "@/lib/cn";

const DROPDOWN_CONTENT_CLASS =
  "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md w-48";

const DROPDOWN_ITEM_CLASS =
  "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Open command menu"
      onClick={onClick}
      className="text-muted-foreground hover:text-foreground hover:border-foreground/20 focus-visible:ring-ring/50 border-border bg-background inline-flex h-7 items-center gap-2 rounded-full border px-2.5 text-xs transition-colors outline-none focus-visible:ring-[3px]"
    >
      <Search className="size-3.5" aria-hidden />
      <span>Search</span>
      <kbd className="bg-muted text-muted-foreground rounded px-1 py-px font-mono text-[10px] leading-4">
        ⌘K
      </kbd>
    </button>
  );
}

function MobileMenu({ onSearch }: { onSearch: () => void }) {
  return (
    <DropdownMenuPrimitive.Root modal={false}>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 rounded-full"
          aria-label="Open menu"
        >
          <Menu className="size-[18px]" aria-hidden />
        </Button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={8}
          className={DROPDOWN_CONTENT_CLASS}
        >
          <DropdownMenuPrimitive.Item
            asChild
            className={DROPDOWN_ITEM_CLASS}
          >
            <Link href="/" className="w-full cursor-pointer">
              Home
            </Link>
          </DropdownMenuPrimitive.Item>
          {PAGES.map((page) => (
            <DropdownMenuPrimitive.Item
              asChild
              key={page.name}
              className={DROPDOWN_ITEM_CLASS}
            >
              <Link href={page.href} className="w-full cursor-pointer">
                {page.name}
              </Link>
            </DropdownMenuPrimitive.Item>
          ))}
          <DropdownMenuPrimitive.Separator className="bg-border -mx-1 my-1 h-px" />
          <DropdownMenuPrimitive.Item
            className={DROPDOWN_ITEM_CLASS}
            onSelect={() => onSearch()}
          >
            <Search className="size-4" aria-hidden />
            Search
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export function Navbar() {
  const pathname = usePathname();
  // Static export is configured with trailingSlash, so `/contact/` must be
  // treated exactly like `/contact` for active-link and pill logic.
  const normalizedPathname = (pathname || "/").replace(/\/+$/, "") || "/";
  const [commandOpen, setCommandOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement | null>(null);
  const [pillHidden, setPillHidden] = useState(normalizedPathname === "/contact");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "k" &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Keep the floating mobile search trigger from sitting on top of links,
  // buttons or form fields. If the pill would cover something interactive at
  // its current position it fades out; it comes back once the area is clear.
  // On /contact it stays hidden (the form CTA sits there at common heights).
  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    let frame = 0;
    let showTimer: number | undefined;
    const INTERACTIVE =
      'a, button, input, textarea, select, [role="button"], [role="menuitem"]';

    const isObstructed = () => {
      const rect = pill.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      for (const fx of [0.1, 0.3, 0.5, 0.7, 0.9]) {
        for (const fy of [0.2, 0.5, 0.8]) {
          const stack = document.elementsFromPoint(
            rect.left + rect.width * fx,
            rect.top + rect.height * fy,
          );
          for (const el of stack) {
            if (pill.contains(el)) continue;
            if (el.closest(INTERACTIVE)) return true;
          }
        }
      }
      return false;
    };

    const evaluate = () => {
      frame = 0;
      if (normalizedPathname === "/contact") {
        setPillHidden(true);
        return;
      }
      if (isObstructed()) {
        if (showTimer) window.clearTimeout(showTimer);
        setPillHidden(true);
      } else {
        if (showTimer) window.clearTimeout(showTimer);
        showTimer = window.setTimeout(() => setPillHidden(false), 200);
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (showTimer) window.clearTimeout(showTimer);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [normalizedPathname]);

  return (
    <>
      <div className="bg-background sticky top-0 isolate z-50 w-full pt-1">
        <div className="mx-auto w-full px-4 md:max-w-[715px] md:px-0">
          <div className="screen-line-top screen-line-bottom relative mt-1 flex w-full items-center justify-between gap-2 px-4 py-1.5">
            <Link
              href="/"
              className="focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
            >
              <span className="font-pixel text-2xl leading-none tracking-wide uppercase">
                {ME.wordmark}
              </span>
              <span className="sr-only">- home</span>
            </Link>
            <div className="flex items-center gap-2 md:gap-4">
              <nav
                aria-label="Main"
                className="hidden items-center gap-4 md:flex"
              >
                {PAGES.map((page) => {
                  const isActive =
                    page.href.replace(/\/+$/, "") === normalizedPathname;
                  return (
                    <Link
                      key={page.name}
                      href={page.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "focus-visible:ring-ring/50 rounded-sm text-sm font-light underline-offset-[5px] outline-none hover:underline focus-visible:ring-[3px]",
                        isActive && "underline",
                      )}
                    >
                      {page.name}
                    </Link>
                  );
                })}
                <SearchButton onClick={() => setCommandOpen(true)} />
              </nav>
              <span className="bg-border hidden h-4 w-px md:block" aria-hidden />
              <div className="flex h-8 items-center gap-0.5 rounded-full bg-black/5 p-0.5 dark:bg-neutral-800">
                <SoundToggle />
                <ThemeToggle className="size-7" />
              </div>
              <div className="border-border border-l pl-1 md:hidden">
                <MobileMenu onSearch={() => setCommandOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={pillRef}
        aria-hidden={pillHidden || undefined}
        className={cn(
          "fixed inset-x-0 bottom-6 z-50 mx-auto w-fit transition-all duration-200 ease-out md:hidden",
          pillHidden && "pointer-events-none opacity-0",
        )}
      >
        <Button
          variant="outline"
          onClick={() => setCommandOpen(true)}
          tabIndex={pillHidden ? -1 : undefined}
          className="bg-background/95 gap-2 rounded-full border px-5 shadow-lg backdrop-blur-md transition-transform active:scale-95"
        >
          <Search className="size-4" aria-hidden />
          <span>Search</span>
        </Button>
      </div>

      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
