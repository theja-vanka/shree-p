"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import Reveal from "./Reveal";
import { MailIcon, LinkedinIcon, GithubIcon } from "./icons";

export default function Contact() {
  const { content } = useLanguage();
  const { profile, ui } = content;

  return (
    <section id="contact" className="section relative w-full overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-accent2/[0.06] via-transparent to-transparent dark:from-accent2/[0.14]" />
      <Reveal>
        <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d0e12] via-[#0d0e12] to-accent2 px-8 py-16 text-center text-white dark:ring-1 dark:ring-white/10">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent2/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-dot-grid text-white/[0.06]" />
          <div className="relative">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <MailIcon className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">{ui.contact.heading}</h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
              {ui.contact.message}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.03]"
              >
                <MailIcon className="h-4 w-4" />
                {ui.contact.mailButton}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/60">
              <span>{profile.location}</span>
            </div>

            <div className="mt-5 flex justify-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={ui.hero.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label={ui.hero.github}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
