"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const CASES = [
  {
    sector: "SERVICE BUSINESS · PHOTOGRAPHER",
    title: "From missed DMs to booked shoots",
    before: [
      "Inquiry DMs sitting unread overnight",
      "Manually typing the same pricing reply",
      "Forgetting to follow up after sending quote",
    ],
    after: [
      "AI replies in under 60 seconds with pricing + FAQ",
      "Leads dropped straight into a shoot pipeline sheet",
      "Auto-reminder sent if no reply in 24 hours",
    ],
    stat: "3× more consult calls booked in 30 days",
  },
  {
    sector: "TRADES · HOME CONTRACTOR",
    title: "Chaos inbox → clean, trackable pipeline",
    before: [
      "Calls going to voicemail during jobs",
      "Quotes scattered across text + email",
      "No clear view of who’s ready to start",
    ],
    after: [
      "AI form collects project details 24/7",
      "Each lead logged with status (new / quoted / won)",
      "Owner gets a daily “who to call today” list",
    ],
    stat: "Cut admin time by ~2 hours per day",
  },
  {
    sector: "CLINIC · WELLNESS / THERAPY",
    title: "Patients helped faster, with less back-and-forth",
    before: [
      "Front desk buried in voicemails",
      "Manual intake forms + copy/paste into EMR",
      "Patients waiting days for a call back",
    ],
    after: [
      "Online intake flows into a clean triage sheet",
      "AI answers common questions about hours & policies",
      "Owner sees same-day view of new and urgent cases",
    ],
    stat: "Response times cut from 24h → under 2h",
  },
];

export default function CaseStudiesSlider() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="container py-20">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink">
            Real results, with real workflows.
          </h2>
          <p className="mt-2 text-brand-ink/70 max-w-xl">
            Same core system. Different industries. We plug into how you already
            work, then remove the clicks that slow everything down.
          </p>
        </div>

        {/* No “swipe text floating randomly” — now boxed */}
        <div className="p-4 rounded-xl bg-brand-accent/10 text-sm text-brand-ink/70 max-w-xs border border-brand-accent/20">
          <strong className="text-brand-accent">Pro tip:</strong> Swipe to
          explore real transformations powered by Primework AI.
        </div>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative">
        {/* Desktop arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-black/10 p-2 rounded-full shadow hover:bg-slate-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-black/10 p-2 rounded-full shadow hover:bg-slate-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* HORIZONTAL SLIDER */}
        <div
          ref={ref}
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth
            pb-4 no-scrollbar
          "
        >
          {CASES.map((c, i) => (
            <div
              key={i}
              className="
                snap-start min-w-[330px] md:min-w-[380px] lg:min-w-[420px]
                bg-white border border-black/5 rounded-2xl p-6 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.06)]
              "
            >
              <p className="text-xs uppercase tracking-wide text-brand-ink/60">
                {c.sector}
              </p>

              <h3 className="mt-1 font-semibold text-brand-ink text-lg">
                {c.title}
              </h3>

              {/* BEFORE */}
              <div className="mt-4 bg-slate-50 rounded-xl p-4 text-sm">
                <p className="font-semibold text-brand-ink mb-2">Before</p>
                <ul className="space-y-1 text-brand-ink/80">
                  {c.before.map((b, bi) => (
                    <li key={bi} className="flex gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AFTER */}
              <div className="mt-4 bg-brand-accent/10 rounded-xl p-4 text-sm">
                <p className="font-semibold text-brand-ink mb-2">
                  After with Primework AI
                </p>
                <ul className="space-y-1 text-brand-ink/80">
                  {c.after.map((b, bi) => (
                    <li key={bi} className="flex gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-4 text-xs text-brand-ink/60 flex justify-between items-center">
                <span>{c.stat}</span>
                <a
                  href="/contact"
                  className="text-brand-accent font-medium hover:underline"
                >
                  See what this could look like for you →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
