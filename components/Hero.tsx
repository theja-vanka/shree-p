"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { assetPath } from "@/lib/basePath";
import { ArrowDownIcon, BarChartIcon, LinkedinIcon, GithubIcon, MailIcon, FileTextIcon, AwardIcon } from "./icons";

export default function Hero() {
  const { content } = useLanguage();
  const { profile, ui } = content;

  return (
    <section
      id="top"
      className="section relative flex min-h-[calc(100svh-4rem)] w-full flex-col overflow-hidden px-6 py-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div
          className="absolute top-10 right-0 h-80 w-80 rounded-full bg-accent2/15 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute inset-0 bg-dot-grid text-ink/[0.05] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto flex w-full max-w-content flex-1 flex-col-reverse items-center justify-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
            <BarChartIcon className="h-3.5 w-3.5" />
            {profile.location}
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {ui.hero.greeting} <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-ink/80">{profile.headline}</p>
          <p className="mt-3 text-base leading-relaxed text-ink/60">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
            >
              {ui.hero.getInTouch}
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              download
              className="group inline-flex items-center gap-2.5 rounded-full bg-white/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-ink shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-accent/30 dark:bg-white/[0.06] dark:ring-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <FileTextIcon className="h-3.5 w-3.5" />
              </span>
              {ui.hero.viewResume}
            </a>
            <a
              href={profile.certifications}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-ink shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-accent2/30 dark:bg-white/[0.06] dark:ring-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent2/10 text-accent2 transition-colors group-hover:bg-accent2 group-hover:text-white">
                <AwardIcon className="h-3.5 w-3.5" />
              </span>
              {ui.hero.viewCertifications}
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 md:justify-start">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={ui.hero.linkedin}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink/60 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white hover:shadow-lg hover:ring-[#0A66C2] dark:bg-white/[0.06] dark:ring-white/10"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label={ui.hero.github}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink/60 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-[#161b22] hover:text-white hover:shadow-lg hover:ring-[#161b22] dark:bg-white/[0.06] dark:ring-white/10"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={ui.hero.email}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink/60 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-accent hover:to-accent2 hover:text-white hover:shadow-lg hover:ring-accent/40 dark:bg-white/[0.06] dark:ring-white/10"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent to-accent2 opacity-25 blur-2xl" />
          <img
            src={assetPath(`/${profile.photo}`)}
            alt={profile.name}
            className="h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-48 sm:w-48 md:h-56 md:w-56"
          />
        </div>
      </div>

      <div className="flex justify-center pt-6 md:pt-8">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="text-ink/30 transition-colors hover:text-ink/60"
        >
          <ArrowDownIcon className="h-10 w-10 animate-bounce-y md:h-12 md:w-12" />
        </a>
      </div>
    </section>
  );
}
