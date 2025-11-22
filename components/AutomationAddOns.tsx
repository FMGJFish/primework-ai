"use client";

import * as React from "react";
import Link from "next/link";

type AddOnCategory = "ai" | "automation" | "web";

type AddOn = {
  id: string;
  category: AddOnCategory;
  name: string;
  description: string;
};

const ADDONS: AddOn[] = [
  // AI AGENTS
  {
    id: "ai-lead-qual",
    category: "ai",
    name: "AI Lead Qualification Agent",
    description:
      "Conversational agent that asks custom qualifying questions, ranks lead quality, summarizes responses, and updates your CRM automatically.",
  },
  {
    id: "ai-review",
    category: "ai",
    name: "AI Review Request Agent",
    description:
      "Automatically requests reviews after service, follows up politely, and sends happy clients to Google, Yelp, or Facebook.",
  },
  {
    id: "ai-analytics",
    category: "ai",
    name: "AI Analytics Agent",
    description:
      "Full performance dashboard with KPIs, conversion trends, and AI-written weekly insights & forecasts.",
  },
  {
    id: "ai-outreach",
    category: "ai",
    name: "AI Outreach Agent",
    description:
      "Cold email or SMS outreach that runs on autopilot to start conversations and book calls.",
  },
  {
    id: "ai-reschedule",
    category: "ai",
    name: "AI Rescheduling Agent",
    description:
      "Handles cancellations, proposes new times, updates calendars, and keeps good leads from falling through the cracks.",
  },

  // AUTOMATION UPGRADES
  {
    id: "auto-contract",
    category: "automation",
    name: "Contract + eSignature automation",
    description:
      "Automatically send contracts, track signatures, trigger invoices, and kick off onboarding once a deal is signed.",
  },
  {
    id: "auto-proposal",
    category: "automation",
    name: "Proposal / quote automation",
    description:
      "Generate branded proposals or quotes, send them instantly, and follow up until a decision is made.",
  },
  {
    id: "auto-reactivation",
    category: "automation",
    name: "Reactivation workflow",
    description:
      "Bring old or inactive leads back with a targeted automation campaign that runs in the background.",
  },
  {
    id: "auto-abandoned",
    category: "automation",
    name: "Abandoned lead recovery",
    description:
      "Automatically follow up with people who ghost after the first message or form submission to recover lost opportunities.",
  },
  {
    id: "auto-upsell",
    category: "automation",
    name: "Cross-sell / upsell flows",
    description:
      "After a purchase or project, send smart follow-ups that offer add-on services, upgrades, or renewals.",
  },

  // WEBSITE & FUNNEL
  {
    id: "web-landing",
    category: "web",
    name: "Landing page upgrade",
    description:
      "Conversion-focused redesign of your existing landing page with modern layout, messaging, and offer clarity.",
  },
  {
    id: "web-mini-site",
    category: "web",
    name: "Mini website (3 sections)",
    description:
      "A clean, professional site with Home, Services, and Contact — fully wired into your automations.",
  },
  {
    id: "web-lead-magnet",
    category: "web",
    name: "Lead magnet funnel",
    description:
      "Lead magnet page, opt-in, and nurture sequence that turns cold traffic into booked calls over time.",
  },
];

const CATEGORY_LABELS: Record<AddOnCategory, string> = {
  ai: "AI agent add-ons",
  automation: "Automation upgrades",
  web: "Website & funnel add-ons",
};

interface AutomationAddOnsProps {
  selectedPlanLabel: string;
   selectedWebDevLabel?: string;
}

export default function AutomationAddOns({
  selectedPlanLabel,
  selectedWebDevLabel,
}: AutomationAddOnsProps) {
  const [selectedAddOns, setSelectedAddOns] = React.useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const addonsByCategory: Record<AddOnCategory, AddOn[]> = {
    ai: ADDONS.filter((a) => a.category === "ai"),
    automation: ADDONS.filter((a) => a.category === "automation"),
    web: ADDONS.filter((a) => a.category === "web"),
  };

  const selectedAddOnObjects = ADDONS.filter((a) =>
    selectedAddOns.includes(a.id)
  );

  const contactHref = {
    pathname: "/contact",
    query: {
      plan: selectedPlanLabel || "Essentials",
      addons: selectedAddOnObjects.map((a) => a.name).join(", "),
      webPackage: selectedWebDevLabel || "",
    },
  };

  return (
    <section className="mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
          Optional Primework add-ons
        </h2>
        <p className="mt-3 text-sm md:text-base text-brand-ink/70">
          Stack extra AI agents, deeper automations, and funnel builds on top of
          your chosen package to match how your business actually works.
        </p>
      </div>

      {/* Add-ons grid + summary */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        {/* ADD-ONS GRID */}
        <div className="space-y-10">
          {(Object.keys(addonsByCategory) as AddOnCategory[]).map(
            (category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/70">
                  {CATEGORY_LABELS[category]}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {addonsByCategory[category].map((addon) => {
                    const isSelected = selectedAddOns.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddOn(addon.id)}
                        className={`text-left rounded-2xl border px-4 py-3 md:px-5 md:py-4 transition-all ${
                          isSelected
                            ? "border-brand-ink/80 bg-brand-ink/5 shadow-sm"
                            : "border-slate-200/80 hover:border-brand-ink/60 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-medium text-xs md:text-sm text-brand-ink">
                            {addon.name}
                          </p>
                          <span
                            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                              isSelected
                                ? "border-brand-ink bg-brand-ink text-white"
                                : "border-slate-300 text-brand-ink/70"
                            }`}
                          >
                            {isSelected ? "Added" : "Add"}
                          </span>
                        </div>
                        <p className="mt-2 text-[11px] md:text-xs text-brand-ink/70">
                          {addon.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>

        {/* SUMMARY CARD */}
        <aside className="lg:sticky lg:top-28 h-fit rounded-2xl border border-slate-200/80 bg-white/70 px-5 py-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-ink/60">
            Your Primework build
          </p>
          <div className="mt-3">
            <p className="text-xs text-brand-ink/60">Automation package</p>
            <p className="text-sm font-semibold text-brand-ink">
              {selectedPlanLabel || "Choose a package above"}
            </p>
          </div>

          {selectedWebDevLabel && (
            <div className="mt-3">
              <p className="text-xs text-brand-ink/60">Web dev package</p>
              <p className="text-sm font-semibold text-brand-ink">
                {selectedWebDevLabel}
              </p>
            </div>
          )}

          <div className="mt-4">
            <p className="text-xs text-brand-ink/60">Add-ons selected</p>
            {selectedAddOnObjects.length === 0 ? (
              <p className="mt-1 text-xs text-brand-ink/70">
                Choose any optional add-ons on the left. You can keep it simple
                or build a full system.
              </p>
            ) : (
              <ul className="mt-2 space-y-1 text-xs text-brand-ink/80">
                {selectedAddOnObjects.map((addon) => (
                  <li key={addon.id} className="flex gap-1.5">
                    <span className="mt-[3px] h-[6px] w-[6px] rounded-full bg-brand-ink/60" />
                    <span>{addon.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="mt-4 text-[11px] text-brand-ink/60">
            We’ll review your package and add-ons on a quick call, confirm
            what’s actually needed, and then lock in final pricing together.
          </p>

          <Link
            href={contactHref}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-brand-ink bg-brand-ink px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-ink/90"
          >
            Continue – talk with us
          </Link>
        </aside>
      </div>
    </section>
  );
}

