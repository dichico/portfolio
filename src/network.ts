import { siteConfig, type LineId } from "./config";

export interface Line {
  id: LineId;
  letter: string;
  label: string;
  color: string;
  ink: string;
}

// Route lines in lane order, left to right.
export const lines: Line[] = [
  { id: "cloud", letter: "A", label: "Cloud", color: "var(--color-cloud)", ink: "#ffffff" },
  { id: "k8s", letter: "K", label: "K8s", color: "var(--color-k8s)", ink: "#ffffff" },
  { id: "cicd", letter: "C", label: "CI/CD", color: "var(--color-cicd)", ink: "#111111" },
  { id: "data", letter: "D", label: "Data", color: "var(--color-data)", ink: "#111111" },
];

export const lineById = Object.fromEntries(lines.map((l) => [l.id, l])) as Record<LineId, Line>;

export const laneIndex = (id: LineId) => lines.findIndex((l) => l.id === id);

export function laneSpan(ids: LineId[]): { from: number; to: number } | null {
  if (!ids.length) return null;
  const idx = ids.map(laneIndex).sort((a, b) => a - b);
  return { from: idx[0], to: idx[idx.length - 1] };
}

// Which line each skill rides on in the About legend; unlisted skills have no line.
export const skillLine: Record<string, LineId> = {
  AWS: "cloud",
  Azure: "cloud",
  Terraform: "cloud",
  Kubernetes: "k8s",
  "GitHub Actions": "cicd",
  "CI/CD": "cicd",
  SQL: "data",
  "MongoDB Atlas": "data",
  Databricks: "data",
};

export const formatRange = (range: string) => range.replace(/\s+-\s+/g, " – ");

export type LaneState = "off" | "full" | "upper" | "lower";

/*
 * Page rows top to bottom. Stops carry lines; signs and prose rows only let lines pass.
 * Keep this order in sync with src/pages/index.astro.
 */
const rowOrder: { key: string; lines?: LineId[] }[] = [
  { key: "sign:experience" },
  ...(siteConfig.experience ?? []).map((e, i) => ({ key: `exp:${i}`, lines: e.lines })),
  { key: "sign:projects" },
  ...(siteConfig.projects ?? []).map((p, i) => ({ key: `proj:${i}`, lines: p.lines })),
  { key: "sign:about" },
  { key: "about" },
  { key: "sign:education" },
  ...(siteConfig.education ?? []).map((e, i) => ({ key: `edu:${i}`, lines: e.lines })),
];

const firstStop = rowOrder.findIndex((r) => r.lines !== undefined);

/*
 * A line runs from the sign band (when it serves the first station) or from its first
 * stop, down to its last stop. Between those it passes every row, like an express.
 */
const routes = Object.fromEntries(
  lines.map((line) => {
    const served = rowOrder.flatMap((r, i) => (r.lines?.includes(line.id) ? [i] : []));
    if (!served.length) return [line.id, null];
    const fromBand = served[0] === firstStop;
    return [line.id, { start: fromBand ? -1 : served[0], end: served[served.length - 1] }];
  }),
) as Record<LineId, { start: number; end: number } | null>;

export function laneStates(rowKey: string): LaneState[] {
  const i = rowOrder.findIndex((r) => r.key === rowKey);
  return lines.map((line) => {
    const r = routes[line.id];
    if (!r || i < 0) return "off";
    if (i === r.start && i === r.end) return "off";
    if (i === r.start) return "lower";
    if (i === r.end) return "upper";
    return i > r.start && i < r.end ? "full" : "off";
  });
}

/** Runs of adjacent served lanes, so a stop never covers a line it does not serve. */
export function laneGroups(ids: LineId[]): { from: number; to: number }[] {
  const idx = ids.map(laneIndex).sort((a, b) => a - b);
  const groups: { from: number; to: number }[] = [];
  for (const i of idx) {
    const last = groups[groups.length - 1];
    if (last && i === last.to + 1) last.to = i;
    else groups.push({ from: i, to: i });
  }
  return groups;
}
