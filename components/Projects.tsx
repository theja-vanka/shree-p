"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { categoryColors } from "@/lib/categoryColors";
import { FolderIcon } from "./icons";
import ProjectArt from "./ProjectArt";

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="section mx-auto max-w-content px-6 py-20">
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
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/60 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className={`relative flex h-28 items-center justify-center overflow-hidden ${style.chipBg} ${style.text}`}
                  >
                    <ProjectArt slug={project.slug} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-sm font-semibold text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{project.description}</p>
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
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      {content.ui.project.viewDashboard} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
