"use client";

import { Loader } from "lucide-react";
import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";

import { SectionHeading } from "@/components/section-heading";
import { SECTION_IDS } from "@/lib/config";
import { fetchGitHubContributions } from "@/lib/github-contributions";
import { cn } from "@/lib/cn";

type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

type Activity = { date: string; count: number; level: number };

type TooltipState = { count: number; label: string; x: number; y: number };

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LEVELS: Record<ContributionLevel, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const BLOCK_SIZE = 9;
const BLOCK_MARGIN = 3;
const BLOCK_RADIUS = 2;
const FONT_SIZE = 11;
const LABEL_HEIGHT = FONT_SIZE + 8;
const WIDTH_STEP = BLOCK_SIZE + BLOCK_MARGIN;

const LEVEL_CLASS =
  'data-[level="0"]:fill-contrib-0 data-[level="1"]:fill-contrib-1 data-[level="2"]:fill-contrib-2 data-[level="3"]:fill-contrib-3 data-[level="4"]:fill-contrib-4';

function toUtcDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function groupWeeks(activities: Activity[]) {
  if (activities.length === 0) return [] as (Activity | undefined)[][];

  const sorted = [...activities].sort((a, b) => a.date.localeCompare(b.date));
  const byDate = new Map(sorted.map((item) => [item.date, item]));
  const start = toUtcDate(sorted[0].date);
  const end = toUtcDate(sorted[sorted.length - 1].date);

  const firstSunday = new Date(start);
  firstSunday.setUTCDate(firstSunday.getUTCDate() - firstSunday.getUTCDay());

  const days: (Activity | undefined)[] = [];
  for (
    let cursor = new Date(firstSunday);
    cursor <= end;
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  ) {
    const key = formatDate(cursor);
    days.push(byDate.get(key));
  }

  const weeks: (Activity | undefined)[][] = [];
  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7));
  }
  return weeks;
}

function getMonthLabels(weeks: (Activity | undefined)[][]) {
  const labels = weeks.reduce<{ weekIndex: number; label: string }[]>(
    (acc, week, weekIndex) => {
      const first = week.find((day): day is Activity => Boolean(day));
      if (!first) return acc;
      const label = MONTHS[toUtcDate(first.date).getUTCMonth()];
      const previous = acc[acc.length - 1];
      if (weekIndex !== 0 && previous && previous.label === label) return acc;
      return [...acc, { weekIndex, label }];
    },
    [],
  );

  return labels.filter((entry, index, all) => {
    const { weekIndex } = entry;
    if (index === 0) {
      return Boolean(all[1] && all[1].weekIndex - weekIndex >= 3);
    }
    if (index !== all.length - 1) return true;
    return weeks.slice(weekIndex).length >= 3;
  });
}

function getYearLabel(activities: Activity[]) {
  if (activities.length === 0) return String(new Date().getFullYear());
  const first = activities[0]?.date.slice(0, 4);
  const last = activities[activities.length - 1]?.date.slice(0, 4);
  if (!first || !last) return String(new Date().getFullYear());
  return first === last ? first : `${first}-${last.slice(2)}`;
}

export function GitHubActivity() {
  const [activities, setActivities] = useState<Activity[] | null>(null);
  const [total, setTotal] = useState(0);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const data = await fetchGitHubContributions();
        if (cancelled) return;

        setActivities(
          data.weeks.flatMap((week) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
              level: LEVELS[day.contributionLevel] ?? 0,
            })),
          ),
        );
        setTotal(data.totalContributions);
      } catch {
        if (!cancelled) setActivities([]);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(() => groupWeeks(activities ?? []), [activities]);
  const labels = useMemo(() => getMonthLabels(weeks), [weeks]);
  const year = useMemo(
    () => getYearLabel(activities ?? []),
    [activities],
  );

  const width = Math.max(1, weeks.length * WIDTH_STEP - BLOCK_MARGIN);
  const height =
    LABEL_HEIGHT + (BLOCK_SIZE + BLOCK_MARGIN) * 7 - BLOCK_MARGIN;

  const handleMouseOver = useCallback((event: MouseEvent<SVGSVGElement>) => {
    const target = event.target as SVGElement;
    const { date, count } = target.dataset;
    if (!date || count === undefined) {
      setTooltip(null);
      return;
    }
    const section = event.currentTarget.closest("section");
    if (!section) return;

    const cell = target.getBoundingClientRect();
    const sectionBounds = section.getBoundingClientRect();
    setTooltip({
      count: Number(count),
      label: new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      x: cell.left + cell.width / 2 - sectionBounds.left,
      y: cell.top - sectionBounds.top,
    });
  }, []);

  return (
    <section aria-labelledby={SECTION_IDS.activity}>
      <SectionHeading id={SECTION_IDS.activity}>Activity</SectionHeading>
      <div
        className="relative px-4 py-5"
        onMouseLeave={() => setTooltip(null)}
      >
        {tooltip && (
          <div
            role="status"
            className="bg-foreground text-background pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap shadow-md"
            style={{ left: tooltip.x, top: tooltip.y - 6 }}
          >
            {tooltip.count === 1
              ? "1 contribution"
              : `${tooltip.count} contributions`}{" "}
            on {tooltip.label}
          </div>
        )}

        {activities ? (
          <div
            className="mx-auto flex w-max max-w-full flex-col gap-2 font-mono"
            style={{ fontSize: FONT_SIZE }}
          >
            <div className="no-scrollbar max-w-full overflow-x-auto overflow-y-hidden">
              <svg
                className="block overflow-visible"
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                onMouseOver={handleMouseOver}
              >
                <title>Contribution Graph</title>
                <g className="fill-current">
                  {labels.map((entry) => (
                    <text
                      key={entry.weekIndex}
                      dominantBaseline="hanging"
                      x={WIDTH_STEP * entry.weekIndex}
                    >
                      {entry.label}
                    </text>
                  ))}
                </g>
                {weeks.map((week, weekIndex) =>
                  week.map((day, dayIndex) =>
                    day ? (
                      <rect
                        key={`${weekIndex}-${dayIndex}`}
                        className={LEVEL_CLASS}
                        data-count={day.count}
                        data-date={day.date}
                        data-level={day.level}
                        height={BLOCK_SIZE}
                        rx={BLOCK_RADIUS}
                        ry={BLOCK_RADIUS}
                        width={BLOCK_SIZE}
                        x={WIDTH_STEP * weekIndex}
                        y={LABEL_HEIGHT + WIDTH_STEP * dayIndex}
                      />
                    ) : null,
                  ),
                )}
              </svg>
            </div>
            <div className="flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4">
              <div className="text-muted-foreground text-foreground">
                {total} contributions in {year}
              </div>
              <div className="ml-auto flex items-center gap-[3px]">
                <span className="text-muted-foreground mr-1">Less</span>
                {Array.from({ length: 5 }, (_, level) => (
                  <svg height={BLOCK_SIZE} width={BLOCK_SIZE} key={level}>
                    <rect
                      className={LEVEL_CLASS}
                      data-level={level}
                      height={BLOCK_SIZE}
                      rx={BLOCK_RADIUS}
                      ry={BLOCK_RADIUS}
                      width={BLOCK_SIZE}
                    />
                  </svg>
                ))}
                <span className="text-muted-foreground ml-1">More</span>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center"
            style={{ height: 124.5 }}
          >
            <Loader
              className="text-foreground animate-spin"
              aria-label="Loading contributions"
            />
          </div>
        )}
      </div>
    </section>
  );
}
