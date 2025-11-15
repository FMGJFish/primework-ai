// components/CaseStudies.tsx
import Link from "next/link";

const bulletListClasses =
  "mt-2 list-disc list-outside pl-5 space-y-1 text-sm text-brand-ink/80";


const CASES = [
  {
    key: "photographer",
    tag: "SERVICE BUSINESS · PHOTOGRAPHER",
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
    metric: "3× more consult calls booked in 30 days",
    contactHref: "/contact?case=photographer",
  },
  {
    key: "contractor",
    tag: "TRADES · HOME CONTRACTOR",
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
    metric: "Cut admin time by ~2 hours per day",
    contactHref: "/contact?case=contractor",
  },
  {
    key: "clinic",
    tag: "CLINIC · WELLNESS / THERAPY",
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
    metric: "Average response time cut from 24h to under 2h",
    contactHref: "/contact?case=clinic",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        {/* Heading row */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink">
              Real results, with real workflows.
            </h2>
            <p className="mt-3 text-brand-ink/70 max-w-xl">
              Same core system. Different industries. We plug into how you
              already work, then remove the clicks that slow everything down.
            </p>
          </div>

          {/* Gradient info box on the right */}
          <div className="md:justify-self-end">
            <div className="rounded-3xl border border-brand-accent/10 bg-gradient-to-br from-brand-accent/5 via-white to-emerald-50 px-5 py-4 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.15)] text-sm text-brand-ink/75">
              <p className="font-medium text-brand-ink text-xs uppercase tracking-wide mb-1">
                What these stories show
              </p>
              <p>
                Here are a few examples of how your automations can run quietly
                in the background—so your team can focus on the work only humans
                can do.
              </p>
            </div>
          </div>
        </div>

        {/* Case cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {CASES.map((cs) => (
            <article
              key={cs.key}
              className="rounded-3xl border border-black/5 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-ink/50">
                  {cs.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                  {cs.title}
                </h3>

                {/* Before */}
                <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <p className="font-semibold text-brand-ink/80 mb-1">Before</p>
                  <ul className="list-disc list-inside space-y-1 text-brand-ink/75">
                    {cs.before.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="mt-4 rounded-2xl bg-emerald-50/70 px-4 py-3 text-sm">
                  <p className="font-semibold text-brand-ink/80 mb-1">
                    After with Primework AI
                  </p>
                  <ul className="mt-2 list-disc list-outside pl-4 space-y-1 text-sm">
                    {cs.after.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer metric + CTA */}
              <div className="mt-5 flex flex-col gap-1 text-xs text-brand-ink/70">
                <span className="font-medium text-brand-ink/80">
                  {cs.metric}
                </span>
                <Link
                  href={cs.contactHref}
                  className="text-brand-accent hover:text-brand-accent/80 font-semibold inline-flex items-center gap-1"
                >
                  See what this could look like for you
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


