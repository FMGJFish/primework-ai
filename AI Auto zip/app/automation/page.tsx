// app/automation/page.tsx
"use client";

import Link from "next/link";
import {
  MessageCircle,
  Zap,
  CreditCard,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

export default function AutomationPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      {/* HERO */}
      <section className="container py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-ink/60">
            AI Automation
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-brand-ink">
            Turn every new lead into a clear next step&nbsp;— automatically.
          </h1>
          <p className="mt-4 text-brand-ink/70 text-lg max-w-xl">
            Primework connects your chat, inbox, payments, and tracking into one
            workflow. Leads get answered, owners get alerted, invoices get sent,
            and follow-ups are never forgotten.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pricing" className="btn btn-primary">
              View plans &amp; pricing
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Talk through your workflow
            </Link>
          </div>

          <p className="mt-4 text-xs text-brand-ink/60">
            No lock-in. We build on tools you already use — Stripe, Google
            Sheets, QuickBooks, and more.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS – 4 STEPS */}
      <section className="container pb-20">
        <div className="rounded-3xl bg-white border border-black/5 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.06)] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
            See how the system runs the day for you.
          </h2>
          <p className="mt-2 text-brand-ink/70 max-w-2xl">
            We plug into your existing tools, design the flow with you, and then
            the automation handles the busywork while you focus on actual work.
          </p>

          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            <li className="flex gap-3">
              <div className="mt-1 rounded-full bg-brand-accent/10 p-2">
                <MessageCircle className="text-brand-accent" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink">
                  1. Lead reaches out
                </h3>
                <p className="text-sm text-brand-ink/70">
                  Website chat, form, SMS, DM — we capture it all and clean the
                  data so it’s ready to use.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="mt-1 rounded-full bg-brand-accent/10 p-2">
                <Zap className="text-brand-accent" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink">
                  2. AI responds instantly
                </h3>
                <p className="text-sm text-brand-ink/70">
                  Smart templates answer common questions, confirm details, and
                  set expectations in seconds.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="mt-1 rounded-full bg-brand-accent/10 p-2">
                <CreditCard className="text-brand-accent" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink">
                  3. Invoice &amp; payment link go out
                </h3>
                <p className="text-sm text-brand-ink/70">
                  Stripe links or hosted invoices are generated from the lead
                  info — no more manual typing.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="mt-1 rounded-full bg-brand-accent/10 p-2">
                <CalendarCheck className="text-brand-accent" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink">
                  4. Follow-ups and logs are handled
                </h3>
                <p className="text-sm text-brand-ink/70">
                  Payments and statuses are logged to Sheets/CRM, and nudges are
                  scheduled so nothing slips.
                </p>
              </div>
            </li>
          </ol>
        </div>
        
        {/* MINI TIER CALL-OUTS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <AutomationTierCard
            label="Starter Systems"
            title="Get leads under control"
            bullets={[
              "AI lead capture + instant reply",
              "Basic chat → email workflow",
              "Google Sheets logging",
            ]}
            href="/pricing?plan=starter"
          />
          <AutomationTierCard
            label="Pro Systems"
            title="From lead to paid"
            bullets={[
              "Auto invoices + payment links",
              "Owner SMS/email alerts",
              "Simple reports on revenue",
            ]}
            href="/pricing?plan=pro"
            highlight
          />
          <AutomationTierCard
            label="Advanced Systems"
            title="Full stack automation"
            bullets={[
              "QuickBooks / CSV exports",
              "Custom routing & SLAs",
              "Follow-ups and upsell flows",
            ]}
            href="/pricing?plan=advanced"
          />
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
            Not sure where to start?
          </h2>
          <p className="mt-2 text-brand-ink/70 max-w-xl mx-auto">
            Share how leads come in today, and we’ll map out the exact
            automation flow we would build for your business — no obligation.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6 inline-block">
            Book a 15-min audit →
          </Link>
        </div>
      </section>
    </main>
  );
}

type TierProps = {
  label: string;
  title: string;
  bullets: string[];
  href: string;
  highlight?: boolean;
};

function AutomationTierCard({
  label,
  title,
  bullets,
  href,
  highlight,
}: TierProps) {
  return (
    <div
      className={`rounded-3xl border bg-white p-6 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.05)] text-left
        ${highlight ? "border-brand-accent ring-1 ring-brand-accent/60" : "border-black/5"}
      `}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/60">
        {label}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-brand-ink">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <CheckCircle2 className="text-brand-accent mt-0.5" size={16} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link href={href} className="mt-5 inline-block text-sm font-medium text-brand-accent underline">
        See matching plan →
      </Link>
    </div>
  );
}
