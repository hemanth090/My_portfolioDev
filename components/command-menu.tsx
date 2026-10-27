"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
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
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/social-icons";
import { useUiFeedback } from "@/components/ui-feedback";
import { COMMAND_PAGES, ME, PROJECTS } from "@/lib/config";

const OVERLAY_CLASS =
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50";

const CONTENT_CLASS =
  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border shadow-lg duration-200 sm:max-w-lg bg-popover border-border/80 gap-0 p-0 shadow-2xl ring-1 ring-black/5 sm:max-w-lg dark:ring-white/10 overflow-hidden p-0";

const COMMAND_CLASS =
  "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md [&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5";

const ITEM_CLASS =
  "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const GROUP_CLASS =
  "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium";

export function CommandMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const { soundEnabled, toggleSound } = useUiFeedback();
  const [search, setSearch] = useState("");

  const isDark = resolvedTheme === "dark";

  const select = (action: () => void) => {
    onOpenChange(false);
    action();
  };

  const links = [
    {
      name: "GitHub",
      href: ME.socials.github,
      icon: <GitHubIcon className="size-4" />,
    },
    {
      name: "LinkedIn",
      href: ME.socials.linkedin,
      icon: <LinkedInIcon className="size-4" />,
    },
    {
      name: "X",
      href: ME.socials.x,
      icon: <XIcon className="size-4" />,
    },
    {
      name: "Resume",
      href: ME.resumeUrl,
      icon: <FileText className="size-4" />,
    },
    {
      name: "Email",
      href: `mailto:${ME.email}`,
      icon: <Mail className="size-4" />,
    },
  ];

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={OVERLAY_CLASS} />
        <DialogPrimitive.Content className={CONTENT_CLASS}>
          <DialogPrimitive.Title className="sr-only">
            Command menu
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Jump to a page, open a link, or change a setting.
          </DialogPrimitive.Description>
          <Command className={COMMAND_CLASS} loop>
            <div
              data-slot="command-input-wrapper"
              className="flex h-9 items-center gap-2 border-b px-3"
            >
              <Search className="size-4 shrink-0 opacity-50" />
              <Command.Input
                value={search}
                onValueChange={setSearch}
                placeholder="Jump to a page or link…"
                className="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Command.List
              data-lenis-prevent
              className="max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto overscroll-contain max-h-[min(65vh,26rem)]"
            >
              <Command.Empty className="py-6 text-center text-sm">
                Nothing matches that.
              </Command.Empty>

              <Command.Group heading="Pages" className={GROUP_CLASS}>
                {COMMAND_PAGES.map((page) => (
                  <Command.Item
                    key={page.href}
                    value={`page ${page.name}`}
                    onSelect={() => select(() => router.push(page.href))}
                    className={ITEM_CLASS}
                  >
                    {page.href === "/" ? (
                      <Home className="text-muted-foreground" />
                    ) : page.href === "/projects" ? (
                      <Folder className="text-muted-foreground" />
                    ) : (
                      <Send className="text-muted-foreground" />
                    )}
                    {page.name}
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Separator className="bg-border -mx-1 h-px" />

              <Command.Group heading="Projects" className={GROUP_CLASS}>
                {PROJECTS.map((project) => (
                  <Command.Item
                    key={project.slug}
                    value={`project ${project.title} ${project.technologies.join(" ")}`}
                    onSelect={() =>
                      select(() => {
                        const url =
                          project.links.website ?? project.links.github;
                        if (url) {
                          window.open(url, "_blank", "noopener,noreferrer");
                        }
                      })
                    }
                    className={ITEM_CLASS}
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

              <Command.Group heading="Links" className={GROUP_CLASS}>
                {links.map((link) => (
                  <Command.Item
                    key={link.name}
                    value={`link ${link.name}`}
                    onSelect={() =>
                      select(() =>
                        window.open(
                          link.href,
                          "_blank",
                          "noopener,noreferrer",
                        ),
                      )
                    }
                    className={ITEM_CLASS}
                  >
                    <span className="text-muted-foreground">{link.icon}</span>
                    {link.name}
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Separator className="bg-border -mx-1 h-px" />

              <Command.Group heading="Settings" className={GROUP_CLASS}>
                <Command.Item
                  value="setting theme appearance dark light"
                  onSelect={() =>
                    select(() => setTheme(isDark ? "light" : "dark"))
                  }
                  className={ITEM_CLASS}
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
                  onSelect={() => {
                    toggleSound();
                    onOpenChange(false);
                  }}
                  className={ITEM_CLASS}
                >
                  {soundEnabled ? (
                    <VolumeX className="text-muted-foreground" />
                  ) : (
                    <Volume2 className="text-muted-foreground" />
                  )}
                  {soundEnabled
                    ? "Turn off interface sound"
                    : "Turn on interface sound"}
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
          <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <X />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
