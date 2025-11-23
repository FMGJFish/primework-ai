// app/pricing/page.tsx
"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, TrendingUp } from "lucide-react";
import PricingTable, { type BillingCycle } from "@/components/PricingTable";
import PricingFAQ from "@/components/PricingFAQ";
import AutomationComparisonTable from "@/components/AutomationComparisonTable";
import AutomationAddOns from "@/components/AutomationAddOns";

type PlanKey = "starter" | "pro" | "advanced";

function PricingContent() {
  const params = useSearchParams();
  const planParam = params.get("plan") as PlanKey | null;

  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>(() =>
    planParam === "starter" || planParam === "pro" || planParam === "advanced"
      ? planParam
      : null
  );

  const [selectedPlanLabel, setSelectedPlanLabel] = useState<string>(() => {
    if (planParam === "starter") return "Essentials";
    if (planParam === "pro") return "Growth";
    if (planParam === "advanced") return "Scale";
    return "";
  });

  const [selectedWebDevKey, setSelectedWebDevKey] = useState<string | null>(
    null
  );
  const [selectedWebDevLabel, setSelectedWebDevLabel] = useState<string>("");

  const [isScopeModalOpen, setIsScopeModalOpen] = useState(false);

  const handleSelectPlan = (planKey: PlanKey, planLabel: string) => {
    setSelectedPlan(planKey);
    setSelectedPlanLabel(planLabel);
  };

  const handleSelectWebDevPlan = (webKey: string, webLabel: string) => {
    setSelectedWebDevKey(webKey);
    setSelectedWebDevLabel(webLabel);
  };

  // Smooth scroll to automation comparison table
  const scrollToComparison = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("automation-comparison");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      {/* --- HERO SECTION --- */}
      <section className="relative container py-20 text-center">
        {/* background glow – non-interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent rounded-3xl blur-3xl" />

        <h1 className="relative text-3xl md:text-5xl font-semibold text-brand-ink">
          Pricing made simple.
        </h1>
        <p className="mt-4 text-brand-ink/70 max-w-2xl mx-auto">
          Start small, scale up, or tailor a plan that fits your workflow. Every
          tier comes with end-to-end setup and human support.
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

        {/* Hero badges */}
        <div className="mt-6 flex justify-center gap-3 text-sm text-brand-ink/60 relative z-10">
          <div className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-brand-accent" />
            <span>Cancel or upgrade anytime</span>
          </div>
        </div>

        {/* Scroll-to-comparison button */}
        <div className="mt-6 flex justify-center relative z-10">
          <button
            type="button"
            onClick={scrollToComparison}
            className="inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-white/80 px-4 py-2 text-sm font-medium text-brand-ink shadow-sm hover:bg-brand-accent hover:text-white hover:border-brand-accent active:bg-brand-accent/90 active:scale-[0.98] transition-transform transition-colors"
          >
            Compare automation packages
            <span className="text-xs">↓</span>
          </button>
        </div>
      </section>

      {/* --- PRICING + ADD-ONS SECTION --- */}
      <section className="container pb-20">
        {/* Pricing cards */}
        <PricingTable
          billing={billing}
          selected={selectedPlan ?? undefined}
          onSelectPlan={handleSelectPlan}
          selectedWebDevKey={selectedWebDevKey}
          onSelectWebDevPlan={handleSelectWebDevPlan}
        />

        {/* Add-ons section */}
        <AutomationAddOns
          selectedPlanLabel={selectedPlanLabel}
          selectedWebDevLabel={selectedWebDevLabel}
        />

        {/* Comparison table with scroll anchor */}
        <div id="automation-comparison" className="scroll-mt-28 mt-16">
          <AutomationComparisonTable />
        </div>

        

        {/* CLEAR SCOPE BLOCK + MODAL TRIGGER */}
        <section className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-ink">
            Clear scope. No surprises.
          </h2>
          <p className="mt-3 text-sm md:text-base text-brand-ink/70">
            Primework includes strategy, setup, testing, launch support, and
            workflow mapping.
          </p>
          <p className="mt-2 text-sm md:text-base text-brand-ink/70">
            It doesn’t include long-term marketing management, deep custom dev,
            or unlimited ongoing maintenance — unless you add them.
          </p>
          <button
            type="button"
            onClick={() => setIsScopeModalOpen(true)}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-brand-accent/50 bg-white px-5 py-2.5 text-sm font-medium text-brand-ink shadow-sm hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-colors"
          >
            See detailed scope →
          </button>
        </section>

        {/* TRUST BAR / BENEFITS */}
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

        {/* CTA STRIP */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
            Need a custom bundle or on-site setup?
          </h2>
          <p className="text-brand-ink/70 mt-2">
            Tell us your workflow, and we’ll design a package around your goals.
          </p>
          <Link
            href={`/contact?plan=${
              billing === "annual" ? "pro" : "starter"
            }`}
            className="btn btn-primary mt-6 inline-block px-8 py-3 text-lg font-medium"
          >
            Contact Us →
          </Link>
        </div>

        <p className="mt-12 text-center text-xs text-brand-ink/60">
          Transparent pricing. Zero hidden costs. Cancel anytime.
        </p>
      </section>

      {/* SCOPE MODAL */}
      {isScopeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setIsScopeModalOpen(false)}
        >
          <div
            className="max-w-3xl w-full rounded-3xl bg-white shadow-xl p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-brand-ink">
                  Detailed scope – what’s included (and what isn’t)
                </h2>
                <p className="mt-1 text-sm text-brand-ink/70">
                  This is the same scope we use for delivery, contracts, and
                  support. It keeps expectations clear on both sides.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsScopeModalOpen(false)}
                className="text-xs text-brand-ink/60 hover:text-brand-ink"
              >
                Close
              </button>
            </div>

            <div className="mt-5 space-y-5 text-sm text-brand-ink/80 max-h-[60vh] overflow-y-auto pr-1">
              <div>
                <h3 className="font-semibold text-brand-ink">
                  Included in every Primework build
                </h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>
                    Kickoff call to understand your offer, lead sources, and
                    current tools.
                  </li>
                  <li>
                    Simple workflow map from lead → booked → paid so you know
                    how the system fits together.
                  </li>
                  <li>
                    Implementation of your selected automation package
                    (Essentials, Growth, or Scale).
                  </li>
                  <li>
                    Implementation of any agreed web package (if added)
                    using your chosen stack (Wix, Webflow, WordPress, or custom
                    build).
                  </li>
                  <li>
                    Connection to agreed tools like Stripe, Calendly, Google
                    Sheets, and a basic CRM or spreadsheet.
                  </li>
                  <li>
                    Testing of key flows: lead capture, booking, notifications,
                    and payments (where applicable).
                  </li>
                  <li>
                    Loom-style walkthrough of what we built, how leads move
                    through the system, and where to check things.
                  </li>
                  <li>
                    A post-launch support window for small tweaks and bug fixes
                    related to the flows we configured for this project.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-brand-ink">
                  Not included by default
                </h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>
                    Ongoing ad management (Meta, Google, TikTok, etc.) or weekly
                    campaign optimization.
                  </li>
                  <li>
                    Long-term social media content creation or account
                    management.
                  </li>
                  <li>
                    Full brand identity packages (logo design, complete brand
                    guidelines, advanced design systems).
                  </li>
                  <li>
                    Large custom apps or complex portals beyond the agreed
                    website/automation scope.
                  </li>
                  <li>
                    Unlimited changes, new funnels, or open-ended maintenance
                    beyond the support window.
                  </li>
                  <li>
                    24/7 emergency support, general IT troubleshooting, or
                    on-call SLAs.
                  </li>
                  <li>
                    Accounting, bookkeeping, tax filing, or drafting legal
                    contracts and policies.
                  </li>
                  <li>
                    Subscription costs or licenses for 3rd-party tools (Stripe,
                    email platforms, CRMs, scheduling tools, etc.).
                  </li>
                </ul>
              </div>

              <p className="text-xs text-brand-ink/60">
                If you ever need something outside the standard scope, we&apos;re
                happy to scope it as a separate mini-project or connect you with
                a trusted partner. The goal is simple: no surprises, just a
                clear system that works.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-gradient-to-b from-white via-slate-50 to-white">
          <section className="container py-20 text-center">
            <p className="text-sm text-brand-ink/60">Loading pricing…</p>
          </section>
        </main>
      }
    >
      <PricingContent />
    </Suspense>
  );
}






