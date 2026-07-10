"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TargetIcon } from "./icons";

export default function About() {
  const { content } = useLanguage();

  return (
    <section id="about" className="section mx-auto max-w-content px-6 py-20">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <SectionHeading
            icon={<TargetIcon className="h-5 w-5" />}
            eyebrow="01"
            title={content.ui.sectionTitles.about}
          />
          <div className="max-w-2xl space-y-5 border-l-2 border-accent/15 pl-6 text-base leading-relaxed text-ink/70">
            {content.about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-lg font-medium text-ink/85" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
