// components/PricingTable.tsx
"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Rocket, Zap, Crown, CheckCircle2 } from "lucide-react";

export type BillingCycle = "monthly" | "annual";
type PlanKey = "starter" | "pro" | "advanced";

type PricingTableProps = {
  billing?: BillingCycle;
  selected?: PlanKey;
  onSelectPlan?: (planKey: PlanKey, planLabel: string) => void;

  // NEW: for web dev selection
  selectedWebDevKey?: string | null;
  onSelectWebDevPlan?: (webKey: string, webLabel: string) => void;
};

/* ---------------- AI AUTOMATION PLANS ---------------- */

const PLANS: Array<{
  key: PlanKey;
  name: string;
  icon: LucideIcon;
  blurb: string;
  price: {
    monthly: number;
    annual: number;
  };
  annualBillTotal: number;
  setupFee?: number;
  features: string[];
  ctaHref: string;
}> = [
  {
    key: "starter",
    name: "Essentials",
    icon: Rocket,
    blurb: "Get the basics live fast.",
    price: { monthly: 49, annual: 39 },
    annualBillTotal: 468,
    setupFee: 199,
    features: [
      "AI lead capture + instant replies",
      "Chat → Email workflow",
      "Google Sheets logging",
    ],
    ctaHref: "/contact?plan=starter",
  },
  {
    key: "pro",
    name: "Growth",
    icon: Zap,
    blurb: "Add payments and tracking.",
    price: { monthly: 149, annual: 119 },
    annualBillTotal: 1428,
    setupFee: 399,
    features: [
      "Everything in Starter",
      "Auto invoice + payment link",
      "Owner SMS/email alerts",
      "CRM sync (Sheets baseline)",
    ],
    ctaHref: "/contact?plan=pro",
  },
  {
    key: "advanced",
    name: "Scale",
    icon: Crown,
    blurb: "End-to-end system with exports.",
    price: { monthly: 299, annual: 249 },
    annualBillTotal: 2988,
    setupFee: 699,
    features: [
      "Everything in Pro",
      "AI follow-ups + reminders",
      "QuickBooks/TurboTax export",
      "Custom automations",
    ],
    ctaHref: "/contact?plan=advanced",
  },
];

/* ---------------- WEB DEV PACKAGES ---------------- */

type WebDevPlan = {
  key: string;
  name: string;
  label: string; // price label (one-time)
  blurb: string;
  features: string[];
  ctaHref: string;
};

const WEB_DEV_PLANS: WebDevPlan[] = [
  {
    key: "wd-landing",
    name: "Launch Landing",
    label: "From $300 one-time",
    blurb: "Single high-impact page wired to your lead + booking flow.",
    features: [
      "Custom landing page tailored to one clear offer",
      "Mobile-first build on your stack (Wix, Webflow, Next, etc.)",
      "Contact / lead form connected to Sheets or CRM",
    ],
    // use human-readable webPackage param
    ctaHref: "/contact?service=web-dev&webPackage=Launch%20Landing",
  },
  {
    key: "wd-core",
    name: "Core Site (3–5 pages)",
    label: "From $500 one-time",
    blurb: "A full mini-site focused on answering questions and booking work.",
    features: [
      "Home, About, Services, Contact + 1 extra page",
      "Lead forms + chat connected to automations",
      "Basic SEO structure + analytics setup",
    ],
    ctaHref: "/contact?service=web-dev&webPackage=Core%20Site%20(3–5%20pages)",
  },
  {
    key: "wd-pro",
    name: "Site + Automation Pro",
    label: "From $1,500 one-time",
    blurb: "Deeper site plus advanced workflows built in from day one.",
    features: [
      "Up to ~8 pages with section-based layouts",
      "Booking, payments, and follow-up flows wired in",
      "Custom lead routing / tagging in Sheets or CRM",
    ],
    ctaHref: "/contact?service=web-dev&webPackage=Site%20+%20Automation%20Pro",
  },
  {
    key: "wd-custom",
    name: "Custom Build",
    label: "Custom quote",
    blurb: "For larger builds, portals, or something very specific.",
    features: [
      "Discovery call to map requirements and tech stack",
      "Scoped proposal with timeline and milestones",
      "Priority support during launch window",
    ],
    ctaHref: "/contact?service=web-dev&webPackage=Custom%20Build",
  },
];

/* ---------------- UTIL ---------------- */

function formatUSD(n: number) {
  return `$${n.toLocaleString()}`;
}

/* ---------------- COMPONENT ---------------- */

export default function PricingTable({
  selected,
  billing = "monthly",
  onSelectPlan,
  selectedWebDevKey,
  onSelectWebDevPlan,
}: PricingTableProps) {
  return (
    <div className="space-y-16">
      {/* AI AUTOMATION PLANS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PLANS.map(
          ({
            key,
            name,
            blurb,
            icon: Icon,
            features,
            ctaHref,
            price,
            annualBillTotal,
            setupFee,
          }) => {
            const isPopular = key === "pro";
            const isSelected = selected ? selected === key : isPopular;
            const perMonth =
              billing === "monthly" ? price.monthly : price.annual;

            return (
              <div
                key={key}
                onClick={() => onSelectPlan?.(key, name)}
                className={`relative bg-white rounded-3xl border border-black/5 
                  shadow-[0_8px_40px_-8px_rgba(0,0,0,0.05)] 
                  hover:shadow-[0_8px_60px_-8px_rgba(0,0,0,0.12)] 
                  hover:-translate-y-1 transition-all duration-300 p-8 text-left
                  cursor-pointer
                  ${isSelected ? "ring-2 ring-brand-accent" : ""}`}
              >
                {isPopular && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-accent to-brand-accent/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <Icon className="text-brand-accent" />
                  <h3 className="text-xl font-semibold text-brand-ink">
                    {name}
                  </h3>
                </div>

                <div className="mt-2">
                  <div className="text-3xl font-bold text-brand-ink">
                    {formatUSD(perMonth)}{" "}
                    <span className="text-base font-medium text-brand-ink/60">
                      /mo
                    </span>
                  </div>

                  {typeof setupFee === "number" && setupFee > 0 && (
                    <p className="mt-1 text-xs text-brand-ink/70">
                      + {formatUSD(setupFee)} one-time setup
                    </p>
                  )}

                  <p className="mt-1 text-brand-ink/70">{blurb}</p>

                  {billing === "annual" && (
                    <p className="mt-1 text-xs text-brand-ink/60">
                      Billed annually at {formatUSD(annualBillTotal)}/yr
                    </p>
                  )}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        className="text-brand-accent shrink-0 mt-0.5"
                        size={16}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={ctaHref}
                  className="mt-6 inline-block btn btn-primary w-full text-center hover:bg-brand-accent/90 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Get Started
                </Link>
              </div>
            );
          }
        )}
      </div>

      {/* WEB DEVELOPMENT PACKAGES */}
      <section
        aria-labelledby="web-dev-packages-heading"
        className="border-t border-black/5 pt-10"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2
              id="web-dev-packages-heading"
              className="text-xl md:text-2xl font-semibold text-brand-ink"
            >
              Website build packages
            </h2>
            <p className="text-sm text-brand-ink/70">
              Flat-fee projects that usually launch in 7–21 days, wired straight
              into your Primework automations.
            </p>
          </div>
          <p className="text-xs md:text-sm text-brand-ink/60">
            Need something outside these buckets? Choose{" "}
            <span className="font-semibold">Custom Build</span> and we&apos;ll
            scope it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEB_DEV_PLANS.map((plan) => {
            const isSelected = selectedWebDevKey === plan.key;

            return (
              <div
                key={plan.key}
                onClick={() =>
                  onSelectWebDevPlan?.(plan.key, plan.name)
                }
                className={`bg-white rounded-3xl border border-black/5 p-6 
                           shadow-[0_6px_30px_-8px_rgba(0,0,0,0.06)]
                           hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)]
                           transition-transform duration-300 text-left cursor-pointer
                           ${isSelected ? "ring-2 ring-brand-accent" : ""}`}
              >
                <h3 className="text-lg font-semibold text-brand-ink">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-accent">
                  {plan.label}
                </p>
                <p className="mt-2 text-sm text-brand-ink/70">{plan.blurb}</p>

                <ul className="mt-4 space-y-2 text-xs text-brand-ink/80">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-brand-accent mt-0.5 shrink-0"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className="mt-6 inline-block btn btn-outline w-full text-center"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Discuss this package →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}


          

