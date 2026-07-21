import type { CategoryKey } from "@/data/types";

export const categoryOrder: CategoryKey[] = ["blue", "aqua", "yellow", "green", "violet"];

type CategoryStyle = {
  chipBg: string;
  stripe: string;
  track: string;
  text: string;
};

// Identity lives in the dot/stripe/bar-fill mark only — chip and label text
// always stay in the ink token. Two of these hues (yellow, aqua) fall under
// 3:1 contrast on the light surface and are illegible as text color (see
// dataviz color-formula.md). `text` below is used only in dark-surface
// contexts (e.g. the contact card) where the tint sits on a dark background.
export const categoryColors: Record<CategoryKey, CategoryStyle> = {
  blue: { chipBg: "bg-series-blue/10", stripe: "bg-series-blue", track: "bg-series-blue/15", text: "text-series-blue" },
  aqua: { chipBg: "bg-series-aqua/10", stripe: "bg-series-aqua", track: "bg-series-aqua/15", text: "text-series-aqua" },
  yellow: { chipBg: "bg-series-yellow/10", stripe: "bg-series-yellow", track: "bg-series-yellow/15", text: "text-series-yellow" },
  green: { chipBg: "bg-series-green/10", stripe: "bg-series-green", track: "bg-series-green/15", text: "text-series-green" },
  violet: { chipBg: "bg-series-violet/10", stripe: "bg-series-violet", track: "bg-series-violet/15", text: "text-series-violet" },
};
