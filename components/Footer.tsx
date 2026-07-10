"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { LinkedinIcon, GithubIcon, MailIcon } from "./icons";

export default function Footer() {
  const { content } = useLanguage();
  const { profile, ui } = content;

  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-ink/40 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.headline}
        </span>
        <div className="flex gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={ui.hero.linkedin}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink/50 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white hover:shadow-md hover:ring-[#0A66C2] dark:ring-white/10"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label={ui.hero.github}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink/50 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-[#161b22] hover:text-white hover:shadow-md hover:ring-[#161b22] dark:ring-white/10"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={ui.hero.email}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink/50 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-accent hover:to-accent2 hover:text-white hover:shadow-md hover:ring-accent/40 dark:ring-white/10"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
