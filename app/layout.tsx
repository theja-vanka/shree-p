import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { en } from "@/data/en";
import { assetPath } from "@/lib/basePath";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/i18n/ThemeContext";

const { profile } = en;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://theja-vanka.github.io/shree-p/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.headline}`,
  description:
    "Business Analyst and Data Scientist specializing in AI/ML, market intelligence, statistical analysis, and data-driven strategy. Proven track record cutting manual work by 80% and driving compliance, risk, and analytics initiatives across consulting, tech, and financial services.",
  keywords: [
    "Shree Pushpa",
    "Data Scientist",
    "Business Analyst",
    "Market Researcher",
    "AI/ML",
    "Power BI",
    "SQL",
    "Data Analytics",
    "Market Intelligence",
  ],
  authors: [{ name: profile.name }],
  icons: {
    icon: assetPath("/favicon.svg"),
  },
  openGraph: {
    title: `${profile.name} — ${profile.headline}`,
    description: profile.tagline,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    images: [profile.photo],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.tagline,
    images: [profile.photo],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-paper text-ink">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
