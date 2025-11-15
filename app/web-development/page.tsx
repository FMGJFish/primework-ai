// app/web-development/page.tsx
import Link from "next/link";
import WebDevCaseStudies from "@/components/WebDevCaseStudies";
import WebDevPackages from "@/components/WebDevPackages";
import { AuditButton } from "@/components/AuditButton";
import {
  CheckCircle2,
  Rocket,
  Sparkles,
  Settings2,
  MonitorSmartphone,
  Store,
  Presentation,
} from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      {/* HERO */}
      <section className="relative container py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-accent/6 to-transparent rounded-3xl blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-medium text-brand-ink/70 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.25)]">
            <MonitorSmartphone className="w-4 h-4 text-brand-accent" />
            Primework AI · Web builds wired for automation
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-brand-ink">
            Websites built to answer leads, not just look pretty.
          </h1>
          <p className="mt-4 text-brand-ink/70">
            We design and ship fast, conversion-focused sites that plug straight
            into your automations – chat, lead capture, payments, and follow-up.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-brand-ink/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]">
              <Rocket className="w-4 h-4 text-brand-accent" />
              Launch-ready in days, not months
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              Built to convert & capture leads
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <AuditButton className="hidden sm:inline-flex" />

            <Link href="/pricing" className="btn btn-outline">
              View automation packages
            </Link>
          </div>

          <p className="mt-3 text-xs text-brand-ink/60">
            No fluff decks. We’ll look at your current site (or idea), suggest a
            concrete plan, and you decide if we build it.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="container pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-[0_6px_30px_-8px_rgba(0,0,0,0.06)]">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-brand-ink">
              <Sparkles className="w-5 h-5 text-brand-accent" />
              Conversion-first design
            </h2>
            <p className="mt-2 text-sm text-brand-ink/70">
              Clear copy, simple layouts, and obvious next steps so visitors
              know exactly how to contact you or book.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-[0_6px_30px_-8px_rgba(0,0,0,0.06)]">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-brand-ink">
              <Settings2 className="w-5 h-5 text-brand-accent" />
              Automation-ready stack
            </h2>
            <p className="mt-2 text-sm text-brand-ink/70">
              Forms, chat, and booking wired into your lead sheet, CRM, and
              payment flows from day one.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-[0_6px_30px_-8px_rgba(0,0,0,0.06)]">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-brand-ink">
              <Rocket className="w-5 h-5 text-brand-accent" />
              Speed & SEO basics
            </h2>
            <p className="mt-2 text-sm text-brand-ink/70">
              Clean code, mobile-first layouts, and on-page SEO essentials so
              Google and your customers both like your site.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="container pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
              Every build includes…
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
              {[
                "Homepage tailored to your offer and audience",
                "Contact / lead form connected to Google Sheets or CRM",
                "Chat or AI widget ready to capture and qualify leads",
                "Booking or call-back option (Calendly or similar)",
                "Mobile-first responsive layout",
                "Basic analytics (Google Analytics or Plausible)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-[0_6px_30px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-lg font-semibold text-brand-ink">
              A simple 3-step process
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-brand-ink/80">
              <li>
                <span className="font-semibold">1. 30-min strategy call.</span>{" "}
                We map your offer, ideal customer, and the actions you want
                visitors to take.
              </li>
              <li>
                <span className="font-semibold">2. Draft & wiring.</span> We
                design the layout, write core copy, and connect forms, chat, and
                payment/booking tools.
              </li>
              <li>
                <span className="font-semibold">3. Review & launch.</span> You
                preview everything, request edits, and we push it live with
                basic tracking set up.
              </li>
            </ol>

            <div className="mt-6">
              <Link
                href="/contact?service=web-dev"
                className="btn btn-primary w-full"
              >
                Request a web build →
              </Link>
            </div>

            <p className="mt-3 text-xs text-brand-ink/60 text-center">
              Most projects launch in 7–14 days depending on scope.
            </p>
          </div>
        </div>

        {/* SITE TYPES / USE CASES STRIP */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.10)]">
            <h3 className="flex items-center gap-2 text-base font-semibold text-brand-ink">
              <Store className="w-4 h-4 text-brand-accent" />
              Local service businesses
            </h3>
            <p className="mt-2 text-sm text-brand-ink/70">
              Barbers, photographers, cleaners, contractors — sites that turn
              clicks into booked calls and appointments.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.10)]">
            <h3 className="flex items-center gap-2 text-base font-semibold text-brand-ink">
              <Presentation className="w-4 h-4 text-brand-accent" />
              Coaches & consultants
            </h3>
            <p className="mt-2 text-sm text-brand-ink/70">
              Clear offers, credibility sections, and easy ways to book
              discovery or strategy calls without chasing DMs.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.10)]">
            <h3 className="flex items-center gap-2 text-base font-semibold text-brand-ink">
              <MonitorSmartphone className="w-4 h-4 text-brand-accent" />
              Automation-first builds
            </h3>
            <p className="mt-2 text-sm text-brand-ink/70">
              Sites built specifically to plug into AI chat, invoicing flows,
              and the same lead systems we set up on your automation plan.
            </p>
          </div>
        </div>
        <section className="mt-24">
        <WebDevCaseStudies />
        </section>
        <WebDevPackages />

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <p className="text-sm text-brand-ink/70">
            Already have a site and just want it tuned for leads + automation?
          </p>
         <AuditButton className="hidden sm:inline-flex">
            Book a quick site audit
          </AuditButton>
        </div>
      </section>
    </main>
  );
}

