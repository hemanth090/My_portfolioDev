"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  FileText,
  Folder,
  Home,
  Mail,
  Moon,
  Search,
  Send,
  Sun,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback } from "react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { useSound } from "@/components/sound-provider";
import { PROJECTS } from "@/content/projects";
import { PROFILE } from "@/content/profile";
import { cn } from "@/lib/utils";

const PAGES = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: Send },
];

const LINKS = [
  { name: "GitHub", href: PROFILE.github, icon: GitHubIcon },
  { name: "LinkedIn", href: PROFILE.linkedin, icon: LinkedInIcon },
  { name: "Resume", href: PROFILE.resumeUrl, icon: FileText },
  { name: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
];

export function CommandMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const { soundEnabled, toggleSound } = useSound();
  const isDark = resolvedTheme === "dark";

  const run = useCallback(
    (action: () => void) => {
      onOpenChange(false);
      action();
    },
    [onOpenChange]
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content
          className={cn(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            "bg-popover border-border/80 gap-0 overflow-hidden p-0 shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
          )}
        >
          <Dialog.Title className="sr-only">Command menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            Jump to a page, open a link, or change a setting.
          </Dialog.Description>

          <Command className="bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md">
            <div className="flex h-12 items-center gap-2 border-b px-3">
              <Search className="size-4 shrink-0 opacity-50" aria-hidden />
              <Command.Input
                autoFocus
                placeholder="Jump to a page or link…"
                className="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <Command.List
              data-lenis-prevent
              className="command-list-height scroll-py-1 overflow-x-hidden overflow-y-auto overscroll-contain"
            >
              <Command.Empty className="flex h-full items-center justify-center text-sm">
                Nothing matches that.
              </Command.Empty>

              <Command.Group
                heading="Pages"
                className="text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium"
              >
                {PAGES.map((page) => {
                  const Icon = page.icon;
                  return (
                    <Command.Item
                      key={page.href}
                      value={`page ${page.name}`}
                      onSelect={() => run(() => router.push(page.href))}
                      className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                      <Icon className="text-muted-foreground" />
                      {page.name}
                    </Command.Item>
                  );
                })}
              </Command.Group>

              <Command.Separator className="bg-border -mx-1 h-px" />

              <Command.Group
                heading="Projects"
                className="text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium"
              >
                {PROJECTS.map((project) => (
                  <Command.Item
                    key={project.slug}
                    value={`project ${project.title} ${project.technologies
                      .map((tech) => tech.name)
                      .join(" ")}`}
                    onSelect={() =>
                      run(() => {
                        const url =
                          project.links.website ?? project.links.github;
                        if (url) {
                          window.open(url, "_blank", "noopener,noreferrer");
                        }
                      })
                    }
                    className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                  >
                    <ArrowUpRight className="text-muted-foreground" />
                    {project.title}
                    <span className="text-muted-foreground ml-auto text-xs">
                      {project.subheading}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Separator className="bg-border -mx-1 h-px" />

              <Command.Group
                heading="Links"
                className="text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium"
              >
                {LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Command.Item
                      key={link.name}
                      value={`link ${link.name}`}
                      onSelect={() =>
                        run(() =>
                          window.open(
                            link.href,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        )
                      }
                      className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                      <Icon className="text-muted-foreground" />
                      {link.name}
                    </Command.Item>
                  );
                })}
              </Command.Group>

              <Command.Separator className="bg-border -mx-1 h-px" />

              <Command.Group
                heading="Settings"
                className="text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium"
              >
                <Command.Item
                  value="setting theme appearance dark light"
                  onSelect={() =>
                    run(() => setTheme(isDark ? "light" : "dark"))
                  }
                  className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  {isDark ? (
                    <Sun className="text-muted-foreground" />
                  ) : (
                    <Moon className="text-muted-foreground" />
                  )}
                  Switch to {isDark ? "light" : "dark"} theme
                  <span className="text-muted-foreground ml-auto text-xs tracking-widest">
                    D
                  </span>
                </Command.Item>

                <Command.Item
                  value="setting sound audio feedback"
                  onSelect={() => run(() => toggleSound())}
                  className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  {soundEnabled ? (
                    <Volume2 className="text-muted-foreground" />
                  ) : (
                    <VolumeX className="text-muted-foreground" />
                  )}
                  {soundEnabled
                    ? "Turn off interface sound"
                    : "Turn on interface sound"}
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>

          <Dialog.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <X />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
