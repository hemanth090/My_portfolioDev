import { ME } from "@/lib/config";

export type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

export type ContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel: ContributionLevel;
};

export type ContributionWeek = { contributionDays: ContributionDay[] };

export type ContributionsResponse = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

type SourceDay = { date: string; count: number; level: number };

const LEVELS: ContributionLevel[] = [
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
];

const CONTRIBUTIONS_ENDPOINT = (username: string) =>
  `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

function toUtcDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function toDateString(date: Date) {
  return date.toISOString().slice(0, 10);
}

function groupIntoWeeks(days: SourceDay[]): ContributionWeek[] {
  if (days.length === 0) return [];

  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const byDate = new Map(sorted.map((day) => [day.date, day]));

  const start = toUtcDate(sorted[0].date);
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const end = toUtcDate(sorted[sorted.length - 1].date);

  const weeks: ContributionWeek[] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const contributionDays: ContributionDay[] = [];

    for (let index = 0; index < 7; index += 1) {
      if (cursor > end) break;
      const date = toDateString(cursor);
      const day = byDate.get(date);
      contributionDays.push({
        date,
        contributionCount: day?.count ?? 0,
        contributionLevel: LEVELS[day?.level ?? 0] ?? "NONE",
      });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }

    weeks.push({ contributionDays });
  }

  return weeks;
}

function emptyCalendar(): ContributionWeek[] {
  const now = new Date();
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - 365);
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());

  const weeks: ContributionWeek[] = [];
  const cursor = new Date(start);

  while (cursor <= today) {
    const contributionDays: ContributionDay[] = [];
    for (let index = 0; index < 7; index += 1) {
      if (cursor > today) break;
      contributionDays.push({
        date: toDateString(cursor),
        contributionCount: 0,
        contributionLevel: "NONE",
      });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
    weeks.push({ contributionDays });
  }

  return weeks;
}

/**
 * Fetch the public contribution calendar from GitHub's community API.
 * This runs in the browser because the site is deployed as a static export
 * (Render serves the `build/` directory, so there is no Next.js server).
 */
export async function fetchGitHubContributions(): Promise<ContributionsResponse> {
  try {
    const response = await fetch(CONTRIBUTIONS_ENDPOINT(ME.githubUsername), {
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      const data = (await response.json()) as {
        total?: { lastYear?: number };
        contributions?: SourceDay[];
      };

      const days = data.contributions ?? [];
      if (days.length > 0) {
        const total =
          data.total?.lastYear ??
          days.reduce((sum, day) => sum + day.count, 0);
        return { totalContributions: total, weeks: groupIntoWeeks(days) };
      }
    }
  } catch {
    // Fall through to the empty calendar below.
  }

  return { totalContributions: 0, weeks: emptyCalendar() };
}
