"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { categoryColors } from "@/lib/categoryColors";
import { FolderIcon } from "./icons";
import ProjectArt from "./ProjectArt";
import { assetPath } from "@/lib/basePath";

function ProjectThumb({ slug }: { slug: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) return <ProjectArt slug={slug} />;

  return (
    <img
      src={assetPath(`/projects/${slug}.png`)}
      alt=""
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      onError={() => setErrored(true)}
    />
  );
}

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="section relative w-full overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-accent2/[0.05] dark:to-accent2/[0.1]" />
      <div className="mx-auto max-w-content px-6">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <SectionHeading
            icon={<FolderIcon className="h-5 w-5" />}
            eyebrow="03"
            title={content.ui.sectionTitles.projects}
          />
          <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
            {content.projects.map((project) => {
              const style = categoryColors[project.category];
              return (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/60 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div
                    className={`relative flex aspect-video items-center justify-center overflow-hidden ${style.chipBg} ${style.text}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
                    <ProjectThumb slug={project.slug} />
                    <div className="pointer-events-none absolute inset-0 dark:bg-black/15" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/15 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-sm font-semibold text-ink">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{project.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent">
                      {content.ui.project.viewDashboard} →
                    </span>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-ink/5 px-2.5 py-1 text-xs text-ink/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
