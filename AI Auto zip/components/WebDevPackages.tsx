// components/WebDevPackages.tsx
"use client";

import Link from "next/link";
import {
  LayoutTemplate,
  PanelsTopLeft,
  Grid3X3,
  Wand2,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type WebPlanKey = "launch" | "core" | "growth" | "custom";

const CHECK_ICON = (
  <CheckCircle2
    size={18}
    strokeWidth={2}
    className="text-brand-accent shrink-0 mt-0.5"
  />
);

const WEB_PLANS: Array<{
  key: WebPlanKey;
  name: string;
  icon: LucideIcon;
  priceLabel: string;
  tag?: string;
  blurb: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
}> = [
  {
    key: "launch",
    name: "Launch Page",
    icon: LayoutTemplate,
    priceLabel: "",
    blurb: "A high-converting single landing page built with clean design and clarity.",
    features: [
      "Modern homepage / landing layout",
      "Copywriting polish for core messaging",
      "Mobile-first responsive design",
      "Basic on-page SEO (title, meta)",
      "Analytics setup (GA4 or Plausible)",
    ],
    ctaHref: "/contact?service=web-dev&package=launch",
    ctaLabel: "Start a Launch Page →",
  },
  {
    key: "core",
    name: "Core Site (3–5 pages)",
    icon: PanelsTopLeft,
    priceLabel: "",
    tag: "Most popular",
    blurb: "Your main website pages, professionally structured for clarity and trust.",
    features: [
      "3–5 custom-designed pages (Home, About, Services, Contact)",
      "Clean, structured content layout",
      "Copy refinement across all pages",
      "Basic SEO setup for all pages",
      "Light brand styling (typography + colors)",
    ],
    ctaHref: "/contact?service=web-dev&package=core",
    ctaLabel: "Talk about a Core Site →",
  },
  {
    key: "growth",
    name: "Growth Site (5–8 pages)",
    icon: Grid3X3,
    priceLabel: "",
    blurb: "For multi-service businesses needing richer layouts or deeper content.",
    features: [
      "5–8 pages including service subpages",
      "Richer content sections + FAQ areas",
      "Multi-location or multi-service structure",
      "Blog or resource hub setup",
      "Higher-end visuals and micro-layouts",
    ],
    ctaHref: "/contact?service=web-dev&package=growth",
    ctaLabel: "Plan a Growth Site →",
  },
  {
    key: "custom",
    name: "Custom Build",
    icon: Wand2,
    priceLabel: "Let’s scope it together",
    blurb:
      "For anything beyond 8 pages or requiring unique features or flows.",
    features: [
      "Full project discovery + roadmap",
      "Custom features (portals, directories, dashboards)",
      "Build broken into clear phases",
      "Advanced brand styling + UI/UX",
      "Tool integrations available upon request",
    ],
    ctaHref: "/contact?service=web-dev&package=custom",
    ctaLabel: "Request a custom quote →",
  },
];

export default function WebDevPackages() {
  return (
    <section className="container pt-16 md:pt-20 pb-20">
      {/* Header copy row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
            Web dev packages, built for real service businesses.
          </h2>
          <p className="mt-3 text-sm md:text-base text-brand-ink/70 max-w-2xl">
            Every site is built around clarity, trust, and conversion — not fluff. 
            On our call we’ll match the right package to your goals, brand, and content needs.
          </p>
        </div>
        <p className="text-xs md:text-sm text-brand-ink/60 md:text-right">
          Transparent project-based pricing. Hosting + tools are billed separately.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WEB_PLANS.map(
          ({
            key,
            name,
            icon: Icon,
            priceLabel,
            tag,
            blurb,
            features,
            ctaHref,
            ctaLabel,
          }) => (
            <div
              key={key}
              className="relative bg-white rounded-3xl border border-black/5 p-6 text-left
                shadow-[0_8px_40px_-8px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_60px_-8px_rgba(0,0,0,0.12)]
                hover:-translate-y-1 transition-all duration-300"
            >
              {tag && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-accent to-brand-accent/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {tag}
                </span>
              )}

              <div
                className={`flex items-center gap-3 ${
                  tag ? "mt-6" : "mt-1"
                }`}
              >
                <Icon className="w-5 h-5 text-brand-accent" />
                <h3 className="text-lg font-semibold text-brand-ink">{name}</h3>
              </div>

              <div className="mt-3">
                <div className="text-xl font-bold text-brand-ink">
                  {priceLabel}
                </div>
                <p className="mt-1 text-sm text-brand-ink/70">{blurb}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                  {CHECK_ICON}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={ctaHref}
                className="mt-6 inline-block btn btn-primary w-full text-center hover:bg-brand-accent/90 transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  );
}


