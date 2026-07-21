type ArtProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Blob({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <path d="M52,-62.9C66.7,-53.4,77.4,-37.6,80.6,-20.4C83.9,-3.2,79.7,15.4,70.5,30.6C61.3,45.8,47.1,57.6,31.1,64.9C15.1,72.2,-2.7,75,-19.9,71.6C-37.1,68.2,-53.7,58.6,-64.4,44.5C-75.1,30.4,-79.9,11.8,-77.8,-5.6C-75.7,-23,-66.7,-39.2,-53.7,-49.1C-40.7,-59,-23.7,-62.6,-5.6,-64.6C12.5,-66.6,37.3,-72.4,52,-62.9Z" transform="translate(100 100)" />
    </svg>
  );
}

function LlmArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <rect x="8" y="12" width="40" height="28" rx="6" />
      <path d="M18 24h20M18 30h14" />
      <path d="M14 40v7l7-7" />
      <path d="M50 8l2 4 4 2-4 2-2 4-2-4-4-2 4-2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CloudSenseArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <circle cx="20" cy="24" r="8" />
      <circle cx="30" cy="19" r="10" />
      <circle cx="41" cy="24" r="8" />
      <rect x="13" y="24" width="35" height="10" rx="5" />
      <path d="M22 40v8M31 40v10M40 40v8" />
      <circle cx="22" cy="50" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="31" cy="52" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="40" cy="50" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SplunkArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <path d="M32 8 50 15v13c0 12-8 20-18 25-10-5-18-13-18-25V15Z" />
      <path d="M18 32h8l4-9 4 17 4-8h8" />
    </svg>
  );
}

function PowerBiArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <rect x="8" y="10" width="44" height="38" rx="5" />
      <path d="M16 40V30M26 40V22M36 40V33M46 40V18" />
    </svg>
  );
}

function SqlAnalysisArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <ellipse cx="22" cy="14" rx="14" ry="5" />
      <path d="M8 14v18c0 2.8 6.3 5 14 5s14-2.2 14-5V14" />
      <path d="M8 23c0 2.8 6.3 5 14 5s14-2.2 14-5" />
      <circle cx="42" cy="40" r="9" />
      <path d="M48.4 46.4 56 54" />
    </svg>
  );
}

function MarketingArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <path d="M10 26v10l10 3V23l-10 3Z" />
      <path d="M20 20l22-8v36l-22-8V20Z" />
      <path d="M46 24a8 8 0 0 1 0 14" />
      <path d="M17 39l2 9h5l-1-8" />
    </svg>
  );
}

function SapFinanceArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <ellipse cx="16" cy="42" rx="10" ry="4" />
      <path d="M6 42v-6c0 2.2 4.5 4 10 4s10-1.8 10-4v6" />
      <ellipse cx="16" cy="34" rx="10" ry="4" opacity="0.6" />
      <path d="M36 44V34M44 44V26M52 44V18" />
    </svg>
  );
}

function CrmArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <circle cx="20" cy="20" r="7" />
      <path d="M8 42c0-8 5.4-13 12-13s12 5 12 13" />
      <circle cx="44" cy="22" r="6" opacity="0.6" />
      <path d="M34 42c0-6.6 4.5-11 10-11s10 4.4 10 11" opacity="0.6" />
    </svg>
  );
}

function ItServiceDeskArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <path d="M14 32v-2a18 18 0 0 1 36 0v2" />
      <rect x="10" y="30" width="9" height="14" rx="4" />
      <rect x="45" y="30" width="9" height="14" rx="4" />
      <path d="M19 44v2a7 7 0 0 0 7 7h3" />
      <path d="M40 14l4 4 8-8" />
    </svg>
  );
}

function SalesPerformanceArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <circle cx="20" cy="44" r="11" />
      <circle cx="20" cy="44" r="6" />
      <circle cx="20" cy="44" r="1.6" fill="currentColor" stroke="none" />
      <path d="M30 36l9-9 5 5 12-12" />
      <path d="M50 12h6v6" />
    </svg>
  );
}

function MarketResearchArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <circle cx="24" cy="24" r="15" />
      <path d="M24 9v30M9 24h30" />
      <path d="M13 15a15 15 0 0 0 0 18M35 15a15 15 0 0 1 0 18" />
      <path d="M35 35l14 14" />
    </svg>
  );
}

function EcommerceArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...stroke}>
      <path d="M8 12h6l5 26h26l5-18H21" />
      <circle cx="21" cy="46" r="3" />
      <circle cx="37" cy="46" r="3" />
      <path d="M42 16l4 4 8-8" />
    </svg>
  );
}

const artMap: Record<string, (props: ArtProps) => JSX.Element> = {
  "llm-integration-prompt-engineering": LlmArt,
  "cloudsense-environmental-monitoring": CloudSenseArt,
  "cybersecurity-analytics-splunk": SplunkArt,
  "power-bi-sales-dashboard": PowerBiArt,
  "customer-database-sql-analysis": SqlAnalysisArt,
  "digital-marketing-campaign-analytics": MarketingArt,
  "sap-finance-module-optimization": SapFinanceArt,
  "crm-implementation-analysis": CrmArt,
  "it-service-desk-optimization": ItServiceDeskArt,
  "sales-performance-analytics": SalesPerformanceArt,
  "tech-market-research-analysis": MarketResearchArt,
  "ecommerce-process-improvement": EcommerceArt,
};

export default function ProjectArt({ slug }: { slug: string }) {
  const Art = artMap[slug] ?? PowerBiArt;
  return (
    <>
      <Blob className="absolute -inset-6 opacity-10" />
      <Art className="relative h-14 w-14" />
    </>
  );
}
