function parsePercent(value: string): number | null {
  const match = value.match(/^(\d+(?:\.\d+)?)\s*%$/);
  if (!match) return null;
  return Math.min(100, parseFloat(match[1]));
}

export default function MetricTile({
  value,
  label,
  fillClass,
  trackClass,
}: {
  value: string;
  label: string;
  fillClass: string;
  trackClass: string;
}) {
  const pct = parsePercent(value);

  return (
    <div className="rounded-2xl border border-black/5 bg-white/60 p-5">
      <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs leading-snug text-ink/60 sm:text-sm">{label}</p>
      {pct !== null && (
        <div className={`mt-3 h-1.5 w-full overflow-hidden rounded-full ${trackClass}`}>
          <div className={`h-full rounded-full ${fillClass}`} style={{ width: `${pct}%` }} />
        </div>
      )}
    </div>
  );
}
