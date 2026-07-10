import type { ReactNode } from "react";

export default function SectionHeading({
  icon,
  eyebrow,
  title,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-3 md:block md:gap-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent md:mb-3">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-ink/40">{eyebrow}</p>
        <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink md:text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
