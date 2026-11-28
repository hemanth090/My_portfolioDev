"use client";

import { LoaderCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { SectionHeader } from "@/components/section-header";

type ActivityDay = {
  date: string;
  count: number;
  level: number;
};

type TooltipState = {
  count: number;
  label: string;
  x: number;
  y: number;
};

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

const BLOCK_SIZE = 9;
const BLOCK_MARGIN = 3;
const LABEL_HEIGHT = 19;
const STEP = BLOCK_SIZE + BLOCK_MARGIN;

function chunk<T>(items: T[], size: number) {
  const result: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

function buildMonthLabels(weeks: ActivityDay[][]) {
  const labels: { weekIndex: number; label: string }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const first = week[0];
    if (!first) return;
    const month = new Date(`${first.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      labels.push({ weekIndex, label: MONTHS[month] });
      lastMonth = month;
    }
  });

  return labels.filter((label, index) => {
    if (index === 0) {
      return (
        labels[1] !== undefined &&
        labels[1].weekIndex - label.weekIndex >= 3
      );
    }
    if (index === labels.length - 1) {
      return weeks.length - label.weekIndex >= 3;
    }
    return true;
  });
}

export function GitHubActivity() {
  const [days, setDays] = useState<ActivityDay[] | null>(null);
  const [total, setTotal] = useState(0);
  const [failed, setFailed] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch("/data/github.json");
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        if (!Array.isArray(data.weeks) || data.weeks.length === 0) {
          throw new Error("No contribution data");
        }

        const levelMap: Record<string, number> = {
          NONE: 0,
          FIRST_QUARTILE: 1,
          SECOND_QUARTILE: 2,
          THIRD_QUARTILE: 3,
          FOURTH_QUARTILE: 4,
        };

        const flattened: ActivityDay[] = data.weeks.flatMap(
          (week: {
            contributionDays: {
              date: string;
              contributionCount: number;
              contributionLevel: string;
            }[];
          }) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
              level: levelMap[day.contributionLevel] ?? 0,
            }))
        );

        if (!cancelled) {
          setDays(flattened);
          setTotal(data.totalContributions ?? 0);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(() => (days ? chunk(days, 7) : []), [days]);
  const monthLabels = useMemo(() => buildMonthLabels(weeks), [weeks]);

  const width = weeks.length * STEP - BLOCK_MARGIN;
  const height = LABEL_HEIGHT + STEP * 7 - BLOCK_MARGIN;

  const yearLabel = useMemo(() => {
    if (!days?.length) return String(new Date().getFullYear());
    const first = days[0]?.date.slice(0, 4);
    const last = days.at(-1)?.date.slice(0, 4);
    if (!first || !last) return String(new Date().getFullYear());
    return first === last ? first : `${first}-${last.slice(2)}`;
  }, [days]);

  const onCellEnter = (event: React.MouseEvent<SVGRectElement>, day: ActivityDay) => {
    const section = event.currentTarget.closest("section");
    if (!section) return;
    const cell = event.currentTarget.getBoundingClientRect();
    const bounds = section.getBoundingClientRect();
    setTooltip({
      count: day.count,
      label: new Date(`${day.date}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      x: cell.left + cell.width / 2 - bounds.left,
      y: cell.top - bounds.top,
    });
  };

  if (failed) {
    return (
      <section aria-labelledby="activity">
        <SectionHeader id="activity">Activity</SectionHeader>
        <div className="relative px-4 py-5">
          <div className="activity-graph-placeholder text-muted-foreground flex items-center justify-center text-sm">
            Unable to load activity right now.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="activity">
      <SectionHeader id="activity">Activity</SectionHeader>
      <div
        className="relative px-4 py-5"
        onMouseLeave={() => setTooltip(null)}
      >
        {tooltip ? (
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
        ) : null}

        {days ? (
          <div className="mx-auto flex w-max max-w-full flex-col gap-2 font-mono text-[11px]">
            <div className="contribution-scroll max-w-full overflow-x-auto overflow-y-hidden">
              <svg
                className="block overflow-visible"
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                role="img"
                aria-label={`Contribution graph for ${yearLabel}`}
              >
                <title>Contribution Graph</title>
                <g className="fill-current">
                  {monthLabels.map((month) => (
                    <text
                      key={`${month.label}-${month.weekIndex}`}
                      dominantBaseline="hanging"
                      x={STEP * month.weekIndex}
                    >
                      {month.label}
                    </text>
                  ))}
                </g>
                {weeks.map((week, weekIndex) =>
                  week.map((day, dayIndex) => (
                    <rect
                      key={day.date}
                      x={STEP * weekIndex}
                      y={LABEL_HEIGHT + STEP * dayIndex}
                      width={BLOCK_SIZE}
                      height={BLOCK_SIZE}
                      rx={2}
                      ry={2}
                      data-count={day.count}
                      data-date={day.date}
                      data-level={day.level}
                      style={{ fill: `var(--contrib-${day.level})` }}
                      onMouseOver={(event) => onCellEnter(event, day)}
                    />
                  ))
                )}
              </svg>
            </div>

            <div className="flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4">
              <div className="text-muted-foreground">
                {total} contributions in {yearLabel}
              </div>
              <div className="ml-auto flex items-center gap-[3px]">
                <span className="mr-1 text-muted-foreground">Less</span>
                {Array.from({ length: 5 }).map((_, level) => (
                  <svg key={level} height={BLOCK_SIZE} width={BLOCK_SIZE}>
                    <title>{level} contributions</title>
                    <rect
                      width={BLOCK_SIZE}
                      height={BLOCK_SIZE}
                      rx={2}
                      ry={2}
                      style={{ fill: `var(--contrib-${level})` }}
                    />
                  </svg>
                ))}
                <span className="ml-1 text-muted-foreground">More</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="activity-graph-placeholder flex items-center justify-center">
            <LoaderCircle
              className="text-foreground animate-spin"
              aria-label="Loading contributions"
            />
          </div>
        )}
      </div>
    </section>
  );
}
