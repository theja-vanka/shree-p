"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { categoryColors, categoryOrder } from "@/lib/categoryColors";
import { TrendingDownIcon, ShieldCheckIcon, ZapIcon, LayersIcon } from "./icons";

const icons = [TrendingDownIcon, ShieldCheckIcon, ZapIcon, LayersIcon];

export default function Stats() {
  const { content } = useLanguage();

  return (
    <section className="mx-auto max-w-content px-6 pb-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {content.stats.map((stat, i) => {
          const Icon = icons[i % icons.length];
          const key = categoryOrder[i % categoryOrder.length];
          const style = categoryColors[key];
          return (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/60 p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] md:text-left"
            >
              <span className={`absolute inset-x-0 top-0 h-1 ${style.stripe}`} />
              <span
                className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl text-white md:mx-0 ${style.stripe}`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-ink/60 sm:text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
