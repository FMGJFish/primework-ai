// components/WebDevCaseStudies.tsx
"use client";

import { Dumbbell, Camera, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CaseKey = "gym" | "photographer" | "consultant";

const CASES: Array<{
  key: CaseKey;
  icon: LucideIcon;
  label: string;
  before: string[];
  after: string[];
  outcome: string;
}> = [
  {
    key: "gym",
    icon: Dumbbell,
    label: "Local gym → clearer offer + easier booking",
    before: [
      "Outdated homepage with no clear call-to-action",
      "Leads DM’ing on IG, text, and email",
      "Staff spending time answering the same questions",
    ],
    after: [
      "New landing page with one clear offer and CTA",
      "Lead form sends details straight to staff + sheet",
      "AI chat answers hours, pricing, and location 24/7",
    ],
    outcome: "More trial sign-ups without extra front-desk work.",
  },
  {
    key: "photographer",
    icon: Camera,
    label: "Event photographer → fewer back-and-forth messages",
    before: [
      "Prospects asking “Are you free on this date?” over and over",
      "Quotes being typed manually each time",
      "Inquiries scattered between email and SMS",
    ],
    after: [
      "Site form collects date, budget, and event type up front",
      "Auto-response shares pricing ranges + next steps",
      "Owner gets one clean summary per lead",
    ],
    outcome: "Inbox cleaned up, more time on shoots instead of DM’s.",
  },
  {
    key: "consultant",
    icon: Headphones,
    label: "Consultant → predictable consult calls",
    before: [
      "People asking for “quick advice” in DMs",
      "No structured discovery call process",
      "Hard to tell which leads are serious",
    ],
    after: [
      "Simple site with one path: book a consult",
      "Form qualifies budget + goals before calls",
      "Calendar + reminders reduce no-shows",
    ],
    outcome: "Steady pipeline of calls with the right clients.",
  },
];

export default function WebDevCaseStudies() {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container py-16">
        {/* TOP: heading + copy + CTA (centered, full width) */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
            Real sites, built around the work you actually do.
          </h2>
          <p className="mt-3 text-sm md:text-base text-brand-ink/70">
            These aren’t “dribbble shots.” They’re practical builds for real
            service businesses who needed their website to{" "}
            <span className="font-semibold">
              answer questions, qualify leads, and plug into automation
            </span>{" "}
            — not just look good.
          </p>
          <p className="mt-2 text-sm md:text-base text-brand-ink/70">
            Here are a few patterns we use again and again. You’ll likely see
            your business in one of them — or we’ll adapt the same principles
            to your world.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="/contact?service=web-dev"
              className="btn btn-primary"
            >
              See what this could look like for you →
            </a>
          </div>
        </div>

        {/* BOTTOM: stacked case-study cards */}
        <div className="mt-12 max-w-5xl mx-auto space-y-6">
          {CASES.map(({ key, icon: Icon, label, before, after, outcome }) => (
            <article
              key={key}
              className="bg-white rounded-3xl border border-black/5 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.06)] p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-brand-accent">
                  <Icon className="w-4 h-4" />
                </span>
                <h3 className="text-base md:text-lg font-semibold text-brand-ink">
                  {label}
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-500">
                    Before
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-brand-ink/80">
                    {before.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    After
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-brand-ink/80">
                    {after.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-xs md:text-sm text-brand-ink/60">
                {outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


