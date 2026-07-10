"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { LinkedinIcon, GithubIcon, MailIcon } from "./icons";

export default function Footer() {
  const { content } = useLanguage();
  const { profile, ui } = content;

  return (
    <footer className="border-t border-black/5">
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
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink/40 transition-all hover:scale-110 hover:bg-ink/5 hover:text-ink"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label={ui.hero.github}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink/40 transition-all hover:scale-110 hover:bg-ink/5 hover:text-ink"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={ui.hero.email}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink/40 transition-all hover:scale-110 hover:bg-ink/5 hover:text-ink"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
