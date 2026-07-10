"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { categoryColors, categoryOrder } from "@/lib/categoryColors";
import { LayersIcon } from "./icons";

export default function Skills() {
  const { content } = useLanguage();
  const maxCount = Math.max(...content.skills.map((g) => g.items.length));

  return (
    <section id="skills" className="section relative w-full overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/[0.05] via-transparent to-transparent dark:from-accent/[0.08]" />
      <div className="mx-auto max-w-content px-6">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <SectionHeading
            icon={<LayersIcon className="h-5 w-5" />}
            eyebrow="02"
            title={content.ui.sectionTitles.skills}
          />
          <div className="max-w-2xl rounded-2xl border border-black/5 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="space-y-6">
              {content.skills.map((group, i) => {
                const key = categoryOrder[i % categoryOrder.length];
                const style = categoryColors[key];
                const count = group.items.length;
                const widthPct = Math.max(8, (count / maxCount) * 100);
                const isTop = count === maxCount;

                return (
                  <div key={group.category}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${style.stripe}`} />
                        <h3 className={`font-semibold text-ink ${isTop ? "text-base" : "text-sm"}`}>
                          {group.category}
                        </h3>
                        {isTop && (
                          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                            {content.ui.skills.top}
                          </span>
                        )}
                      </div>
                      <span
                        className={`shrink-0 tabular-nums text-ink/40 ${
                          isTop ? "text-sm font-semibold text-ink/70" : "text-xs font-medium"
                        }`}
                      >
                        {count}
                      </span>
                    </div>

                    <div
                      className={`mt-2 w-full overflow-hidden rounded-full ${style.track} ${
                        isTop ? "h-2.5" : "h-2"
                      }`}
                    >
                      <div
                        className={`h-full rounded-full ${style.stripe}`}
                        style={{ width: `${widthPct}%` }}
                      />
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-ink/60 ${style.chipBg}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
