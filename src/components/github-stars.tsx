"use client";

import { UTM_PARAMS } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { addQueryParams } from "@/utils/url";

import { Icons } from "./icons";

type GitHubStarsProps = {
  href: string;
};

export default function GithubStars({ href }: GitHubStarsProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a
            href={addQueryParams(href, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
          />
        }
        aria-label="GitHub profile"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "gap-2 rounded-md py-4 hover:bg-muted"
        )}
      >
        <Icons.github className="size-4" />
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        sideOffset={10}
        className="py-2 text-[0.85rem]"
      >
        GitHub profile
      </TooltipContent>
    </Tooltip>
  );
}
