// components/TierTeaser.tsx
"use client";

import { Rocket, Zap, Crown } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    key: "starter",
    title: "Starter Tier",
    icon: Rocket,
    desc: "Perfect for solopreneurs or small teams just starting with automation.",
    features: [
      "Instant AI responses to leads",
      "Basic chat-to-email workflow",
      "Google Sheets logging",
    ],
    href: "/pricing?plan=starter",
  },
  {
    key: "pro",
    title: "Pro Tier",
    icon: Zap,
    desc: "For growing businesses that want to streamline payments and tracking.",
    features: [
      "Everything in Starter",
      "Auto invoice + payment link",
      "CRM + email notifications",
    ],
    href: "/pricing?plan=pro",
  },
  {
    key: "advanced",
    title: "Advanced Tier",
    icon: Crown,
    desc: "Full AI system with accounting exports and follow-up scheduling.",
    features: [
      "Everything in Pro",
      "AI follow-up + reminders",
      "QuickBooks / TurboTax integration",
    ],
    href: "/pricing?plan=advanced",
  },
];

export default function TierTeaser() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink">
          Choose your automation path.
        </h2>
        <p className="text-brand-ink/70 mt-3 max-w-2xl mx-auto">
          Each tier builds on the same foundation — automating the busywork so you can focus on growth.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map(({ key, title, icon: Icon, desc, features, href }) => (
            <div
              key={key}
              className="relative bg-white rounded-3xl border border-black/5 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.05)]
           hover:scale-[1.02] hover:shadow-[0_8px_60px_-8px_rgba(0,0,0,0.12)]
           transition-all duration-300 p-8 text-left"
            >
                    {key === "pro" && (
                     <span className="absolute top-4 right-4 bg-brand-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                       Most Popular
                     </span>
                   )}

              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-brand-accent" size={24} />
                <h3 className="text-xl font-semibold text-brand-ink">{title}</h3>
              </div>
              <p className="text-brand-ink/70 mb-6">{desc}</p>
              <ul className="space-y-2 text-sm text-brand-ink/80">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-accent mt-[2px]">•</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className="inline-block mt-6 btn btn-primary"
              >
                View Full Plan →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
