import { unstable_cache } from "next/cache";

import { GITHUB_USERNAME } from "@/config/site";
import type { Activity } from "@/components/kibo-ui/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

const DEFAULT_GITHUB_CONTRIBUTIONS_API_URL =
  "https://github-contributions-api.jogruber.de";

export function getGitHubContributions() {
  const apiUrl =
    process.env.GITHUB_CONTRIBUTIONS_API_URL ??
    DEFAULT_GITHUB_CONTRIBUTIONS_API_URL;
  const year = new Date().getFullYear();

  return unstable_cache(
    async () => {
      try {
        const res = await fetch(`${apiUrl}/v4/${GITHUB_USERNAME}?y=${year}`, {
          next: { revalidate: 86400 },
        });

        if (!res.ok) {
          console.error(`API error: ${res.status} ${res.statusText}`);
          return [] as Activity[];
        }

        const data = (await res.json()) as GitHubContributionsResponse;
        return data.contributions ?? ([] as Activity[]);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions", error);
        return [] as Activity[];
      }
    },
    ["github-contributions", apiUrl, GITHUB_USERNAME, String(year)],
    { revalidate: 86400 }
  )();
}
