// app/pricing/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, TrendingUp } from "lucide-react";
import PricingTable, { type BillingCycle } from "@/components/PricingTable";
import PricingFAQ from "@/components/PricingFAQ";

export default function PricingPage() {
  // ✅ hooks live *inside* the component
  const params = useSearchParams();
  const planParam = params.get("plan") as "starter" | "pro" | "advanced" | null;

  const [billing, setBilling] = useState<BillingCycle>("monthly");

  // Optional: use the query to highlight a plan
  const selectedPlan =
    planParam === "starter" || planParam === "pro" || planParam === "advanced"
      ? planParam
      : undefined;

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      {/* --- HERO SECTION --- */}
      <section className="relative container py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent rounded-3xl blur-3xl" />
        <h1 className="relative text-3xl md:text-5xl font-semibold text-brand-ink">
          Pricing made simple.
        </h1>
        <p className="mt-4 text-brand-ink/70 max-w-2xl mx-auto">
          Start small, scale up, or tailor a plan that fits your workflow.
          Every tier comes with end-to-end setup and human support.
        </p>

        {/* Billing Toggle */}
        <div className="relative z-10 mt-8 flex items-center justify-center">
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 text-sm rounded-full transition
                ${
                  billing === "monthly"
                    ? "bg-brand-accent text-white"
                    : "text-brand-ink/70 hover:bg-slate-100"
                }
              `}
              aria-pressed={billing === "monthly"}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 text-sm rounded-full transition
                ${
                  billing === "annual"
                    ? "bg-brand-accent text-white"
                    : "text-brand-ink/70 hover:bg-slate-100"
                }
              `}
              aria-pressed={billing === "annual"}
            >
              Annual <span className="ml-1 opacity-80">(save ~20%)</span>
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3 text-sm text-brand-ink/60">
          <div className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-brand-accent" />
            <span>Cancel or upgrade anytime</span>
          </div>
        </div>
      </section>

      {/* --- PRICING TABLE --- */}
      <section className="container pb-20">
        <PricingTable billing={billing} selected={selectedPlan} />

        {/* --- TRUST BAR / BENEFITS --- */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white shadow-[0_4px_30px_-8px_rgba(0,0,0,0.05)]">
            <h3 className="font-semibold text-brand-ink">✅ Fast Onboarding</h3>
            <p className="text-sm text-brand-ink/70 mt-2">
              Your system is configured and tested within 48 hours of signup.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-[0_4px_30px_-8px_rgba(0,0,0,0.05)]">
            <h3 className="font-semibold text-brand-ink">💬 Human Support</h3>
            <p className="text-sm text-brand-ink/70 mt-2">
              Reach a real expert anytime—no bots, no delays.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-[0_4px_30px_-8px_rgba(0,0,0,0.05)]">
            <h3 className="font-semibold text-brand-ink">🔗 Integrations</h3>
            <p className="text-sm text-brand-ink/70 mt-2">
              Works seamlessly with Stripe, Google Sheets, and QuickBooks.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <PricingFAQ />
        </div>

        {/* --- CTA STRIP --- */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
            Need a custom bundle or on-site setup?
          </h2>
          <p className="text-brand-ink/70 mt-2">
            Tell us your workflow, and we’ll design a package around your goals.
          </p>
          <Link
            href={`/contact?plan=${billing === "annual" ? "pro" : "starter"}`}
            className="btn btn-primary mt-6 inline-block px-8 py-3 text-lg font-medium"
          >
            Contact Us →
          </Link>
        </div>

        <p className="mt-12 text-center text-xs text-brand-ink/60">
          Transparent pricing. Zero hidden costs. Cancel anytime.
        </p>
      </section>
    </main>
  );
}




