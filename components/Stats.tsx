"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { TrendingDownIcon, ShieldCheckIcon, ZapIcon, LayersIcon } from "./icons";

const icons = [TrendingDownIcon, ShieldCheckIcon, ZapIcon, LayersIcon];

export default function Stats() {
  const { content } = useLanguage();

  return (
    <section className="mx-auto max-w-content px-6 pb-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {content.stats.map((stat, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white/60 p-5 text-center shadow-sm md:text-left"
            >
              <Icon className="mx-auto h-5 w-5 text-accent md:mx-0" />
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
