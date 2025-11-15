// components/IntegrationsStrip.tsx
"use client";

import {
  CreditCard,
  FileSpreadsheet,
  Receipt,
  MessageCircle,
  Cable,
  CloudCog,
  type LucideIcon,
} from "lucide-react";

type Integration = {
  name: string;
  tag: string;
  description: string;
  icon: LucideIcon;
};

const INTEGRATIONS: Integration[] = [
  {
    name: "Stripe",
    tag: "Payments & invoices",
    description: "Collect card payments and send hosted payment links without extra typing.",
    icon: CreditCard,
  },
  {
    name: "Google Sheets",
    tag: "Source of truth",
    description: "Log every lead, payment, and follow-up in a sheet your team already knows.",
    icon: FileSpreadsheet,
  },
  {
    name: "QuickBooks / CSV",
    tag: "Accounting exports",
    description: "Push clean records out of Primework so your books stay up-to-date.",
    icon: Receipt,
  },
  {
    name: "SMS / Chat",
    tag: "Conversations",
    description: "Reply from the same channels your customers already use—text and web chat.",
    icon: MessageCircle,
  },
  {
    name: "Zapier / Make",
    tag: "Glue layer",
    description: "Connect Primework to CRMs, calendars, and whatever else you run today.",
    icon: Cable,
  },
  {
    name: "Custom APIs",
    tag: "When you outgrow templates",
    description: "Need something special? We’ll connect directly to your existing stack.",
    icon: CloudCog,
  },
];

export default function IntegrationsStrip() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-r from-brand-accent/5 via-white to-brand-accent/5 p-8 md:p-10 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.18)]">
          {/* Header row */}
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
                Plays nicely with your existing tools.
              </h2>
              <p className="mt-3 text-sm md:text-base text-brand-ink/70">
                Primework doesn’t replace the apps you already rely on—it connects them.
                We automate the busywork between tools so your team doesn’t have to.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="inline-flex items-center rounded-full bg-white/80 border border-black/5 px-4 py-2 text-xs md:text-sm text-brand-ink/70">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-2" />
                Live inside Stripe, Sheets, and your CRM—Primework just runs the flow.
              </p>
            </div>
          </div>

          {/* Logos / cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTEGRATIONS.map(({ name, tag, description, icon: Icon }) => (
              <div
                key={name}
                className="flex gap-3 rounded-2xl bg-white/80 border border-white/60 px-4 py-4 md:px-5 md:py-5 hover:border-brand-accent/60 hover:shadow-[0_12px_40px_-18px_rgba(0,0,0,0.4)] transition-all"
              >
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent/10">
                  <Icon className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide text-brand-ink/50">
                    {tag}
                  </div>
                  <div className="text-sm font-semibold text-brand-ink">{name}</div>
                  <p className="mt-1 text-xs md:text-sm text-brand-ink/70">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="mt-8 text-center text-xs md:text-sm text-brand-ink/60">
            Don’t see your tool listed?{" "}
            <span className="font-medium text-brand-ink">
              We can usually connect it via Zapier, Make, or a direct API.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
