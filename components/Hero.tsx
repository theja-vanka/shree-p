"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { assetPath } from "@/lib/basePath";
import { ArrowDownIcon, BarChartIcon, LinkedinIcon, GithubIcon, MailIcon } from "./icons";

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
              href="#projects"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              {ui.hero.viewProjects}
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 md:justify-start">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={ui.hero.linkedin}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-all hover:scale-110 hover:bg-accent hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label={ui.hero.github}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-all hover:scale-110 hover:bg-accent hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={ui.hero.email}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-all hover:scale-110 hover:bg-accent hover:text-white"
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
