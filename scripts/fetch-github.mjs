import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const USER = "hemanth090";
const OUT = fileURLToPath(new URL("../public/data/github.json", import.meta.url));
const LEVELS = [
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
];

const dateKey = (date) => date.toISOString().slice(0, 10);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getYear(year) {
  const url = `https://github-contributions-api.jogruber.de/v4/${USER}?y=${year}`;
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < 3) await wait(attempt * 500);
    }
  }

  throw lastError;
}

async function main() {
  const now = new Date();
  const year = now.getFullYear();
  const years = [year - 1, year];

  try {
    const responses = await Promise.all(years.map(getYear));
    const counts = new Map();

    for (const response of responses) {
      for (const contribution of response.contributions ?? []) {
        counts.set(contribution.date, contribution.count);
      }
    }

    const end = new Date(now);
    end.setHours(12, 0, 0, 0);
    end.setDate(end.getDate() + (6 - end.getDay()));

    const start = new Date(end);
    start.setDate(start.getDate() - (53 * 7 - 1));

    const days = [];
    const cursor = new Date(start);
    while (cursor <= end) {
      const key = dateKey(cursor);
      days.push({ date: key, count: counts.get(key) ?? 0 });
      cursor.setDate(cursor.getDate() + 1);
    }

    const positive = days
      .map((day) => day.count)
      .filter((count) => count > 0)
      .sort((a, b) => a - b);

    const quantile = (value) => {
      if (positive.length === 0) return 0;
      return positive[Math.min(positive.length - 1, Math.floor(positive.length * value))];
    };

    const q1 = quantile(0.25);
    const q2 = quantile(0.5);
    const q3 = quantile(0.75);
    const levelFor = (count) => {
      if (count === 0) return 0;
      if (count <= q1) return 1;
      if (count <= q2) return 2;
      if (count <= q3) return 3;
      return 4;
    };

    const weeks = [];
    for (let index = 0; index < days.length; index += 7) {
      weeks.push({
        contributionDays: days.slice(index, index + 7).map((day) => ({
          date: day.date,
          contributionCount: day.count,
          contributionLevel: LEVELS[levelFor(day.count)],
        })),
      });
    }

    const totalContributions = days.reduce((sum, day) => sum + day.count, 0);

    await mkdir(new URL("../public/data/", import.meta.url), { recursive: true });
    await writeFile(
      OUT,
      `${JSON.stringify({ totalContributions, weeks }, null, 2)}\n`,
      "utf8"
    );
    console.log(`Wrote ${OUT}`);
  } catch (error) {
    console.error("GitHub contributions were not available at build time.", error);
    await mkdir(new URL("../public/data/", import.meta.url), { recursive: true });
    await writeFile(OUT, `${JSON.stringify({ error: true, weeks: [] }, null, 2)}\n`, "utf8");
  }
}

main();
