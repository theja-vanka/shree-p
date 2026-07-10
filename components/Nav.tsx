"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { BarChartIcon } from "./icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, toggle, content } = useLanguage();
  const { profile, ui } = content;
  const pathname = usePathname();
  const homePrefix = pathname === "/" ? "" : "/";

  const links = [
    { href: `${homePrefix}#about`, label: ui.nav.about },
    { href: `${homePrefix}#skills`, label: ui.nav.skills },
    { href: `${homePrefix}#projects`, label: ui.nav.projects },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a href={`${homePrefix}#top`} className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent2 text-white">
            <BarChartIcon className="h-4 w-4" />
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <a
            href={`${homePrefix}#contact`}
            className="rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2 text-sm font-medium text-white shadow-md shadow-accent/20 transition-transform hover:scale-[1.03]"
          >
            {ui.nav.hireMe}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-full border border-ink/15 px-2.5 py-1 text-xs font-medium text-ink/70"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            type="button"
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-6 bg-ink" />
            <span className="h-0.5 w-6 bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/5 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm text-ink/70"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${homePrefix}#contact`}
              className="mt-2 inline-block rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              {ui.nav.hireMe}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
