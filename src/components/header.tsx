"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CommandMenu } from "@/components/command-menu";
import { PROFILE } from "@/content/profile";
import { NAV_ITEMS } from "@/content/social";
import { SoundToggle } from "@/components/sound-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "k" &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

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
                {PROFILE.wordmark}
              </span>
              <span className="sr-only">- home</span>
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
              <nav
                aria-label="Main"
                className="hidden items-center gap-4 md:flex"
              >
                {NAV_ITEMS.map((item) => {
                  const active = item.href === pathname;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "focus-visible:ring-ring/50 rounded-sm text-sm font-light underline-offset-[5px] outline-none hover:underline focus-visible:ring-[3px]",
                        active && "underline"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <button
                  type="button"
                  aria-label="Open command menu"
                  onClick={() => setCommandOpen(true)}
                  className="text-muted-foreground hover:text-foreground hover:border-foreground/20 focus-visible:ring-ring/50 border-border bg-background inline-flex h-7 items-center gap-2 rounded-full border px-2.5 text-xs transition-colors outline-none focus-visible:ring-[3px]"
                >
                  <Search className="size-3.5" aria-hidden />
                  <span>Search</span>
                  <kbd className="bg-muted text-muted-foreground rounded px-1 py-px font-mono text-[10px] leading-4">
                    ⌘K
                  </kbd>
                </button>
              </nav>

              <span
                className="bg-border hidden h-4 w-px md:block"
                aria-hidden
              />

              <div className="flex h-8 items-center gap-0.5 rounded-full bg-black/5 p-0.5 dark:bg-neutral-800">
                <SoundToggle />
                <ThemeToggle className="size-7" />
              </div>

              <div className="border-border border-l pl-1 md:hidden">
                <DropdownMenu.Root modal={false}>
                  <DropdownMenu.Trigger asChild>
                    <button
                      type="button"
                      aria-label="Open menu"
                      className="inline-flex size-8 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 focus-visible:ring-[3px] dark:hover:bg-accent/50"
                    >
                      <Menu className="size-[18px]" aria-hidden />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      align="end"
                      sideOffset={8}
                      className="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md w-48"
                    >
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/"
                          className="focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none"
                        >
                          Home
                        </Link>
                      </DropdownMenu.Item>
                      {NAV_ITEMS.map((item) => (
                        <DropdownMenu.Item asChild key={item.name}>
                          <Link
                            href={item.href}
                            className="focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none"
                          >
                            {item.name}
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-6 z-50 mx-auto w-fit md:hidden">
        <button
          type="button"
          onClick={() => setCommandOpen(true)}
          className="bg-background/95 gap-2 rounded-full border px-5 shadow-lg backdrop-blur-md transition-transform active:scale-95 inline-flex h-9 items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] py-2"
        >
          <Search className="size-4" aria-hidden />
          <span>Search</span>
        </button>
      </div>

      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
