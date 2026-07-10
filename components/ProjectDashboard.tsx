"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { projectDetails as projectDetailsEn } from "@/data/projectDetails.en";
import { projectDetails as projectDetailsFr } from "@/data/projectDetails.fr";
import { categoryColors } from "@/lib/categoryColors";
import MetricTile from "./MetricTile";
import {
  ArrowDownIcon,
  TargetIcon,
  LayersIcon,
  SparkleIcon,
  FileTextIcon,
} from "./icons";

export default function ProjectDashboard({ slug }: { slug: string }) {
  const { lang, content } = useLanguage();
  const index = content.projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;

  const project = content.projects[index];
  const detail = (lang === "fr" ? projectDetailsFr : projectDetailsEn)[index];
  const style = categoryColors[project.category];
  const { ui } = content;

  return (
    <main className="mx-auto max-w-content px-6 py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-ink"
      >
        <ArrowDownIcon className="h-3.5 w-3.5 rotate-90" />
        {ui.project.back}
      </Link>

      <div className="mt-6 flex items-center gap-2.5">
        <span className={`h-2.5 w-2.5 rounded-full ${style.stripe}`} />
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-ink/5 px-2.5 py-1 text-xs text-ink/60">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/60">{project.description}</p>

      {detail.metrics.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {detail.metrics.map((metric) => (
            <MetricTile
              key={metric.label}
              value={metric.value}
              label={metric.label}
              fillClass={style.stripe}
              trackClass={style.track}
            />
          ))}
        </div>
      )}

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_260px]">
        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-2.5">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.chipBg} ${style.text}`}>
                <FileTextIcon className="h-4 w-4" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-ink/60">
                {ui.project.overview}
              </h2>
            </div>
            <p className="mt-3 text-base leading-relaxed text-ink/70">{detail.overview}</p>
          </section>

          {detail.methodology.length > 0 && (
            <section>
              <div className="flex items-center gap-2.5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.chipBg} ${style.text}`}>
                  <LayersIcon className="h-4 w-4" />
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-ink/60">
                  {ui.project.approach}
                </h2>
              </div>
              <ol className="mt-3 space-y-2.5">
                {detail.methodology.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/5 text-xs font-medium text-ink/50">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {detail.findings.length > 0 && (
            <section>
              <div className="flex items-center gap-2.5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.chipBg} ${style.text}`}>
                  <TargetIcon className="h-4 w-4" />
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-ink/60">
                  {ui.project.findings}
                </h2>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70">
                {detail.findings.map((finding, i) => (
                  <li key={i}>{finding}</li>
                ))}
              </ul>
            </section>
          )}

          {detail.recommendations.length > 0 && (
            <section>
              <div className="flex items-center gap-2.5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.chipBg} ${style.text}`}>
                  <SparkleIcon className="h-4 w-4" />
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-ink/60">
                  {ui.project.recommendations}
                </h2>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70">
                {detail.recommendations.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-6 lg:border-l lg:border-black/5 lg:pl-8">
          {detail.technologies.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                {ui.project.technologies}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {detail.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium text-ink/70 ${style.chipBg}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-gradient-to-br from-ink to-accent2 p-6 text-paper">
            <h2 className="text-base font-semibold">{ui.project.ctaHeading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">{ui.project.ctaMessage}</p>
            <a
              href={`/#contact`}
              className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              {ui.project.ctaButton}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
