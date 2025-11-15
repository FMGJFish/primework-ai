// components/ResultsBeforeAfter.tsx
export default function ResultsBeforeAfter() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink">
            The difference when your workflow runs on autopilot.
          </h2>
          <p className="mt-3 text-brand-ink/70">
            Same business. Same team. The only change is how the work flows.
          </p>
        </div>

        {/* Highlight stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] text-center">
            <div className="text-sm font-medium text-brand-ink/70">
              Avg response time
            </div>
            <div className="mt-2 text-2xl font-semibold text-brand-ink">
              Hours → <span className="text-brand-accent">Minutes</span>
            </div>
            <p className="mt-2 text-xs text-brand-ink/60">
              Leads hear back in under a couple of minutes instead of “whenever I get a chance.”
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] text-center">
            <div className="text-sm font-medium text-brand-ink/70">
              Missed / lost leads
            </div>
            <div className="mt-2 text-2xl font-semibold text-brand-ink">
              ~30% → <span className="text-brand-accent">&lt; 5%</span>
            </div>
            <p className="mt-2 text-xs text-brand-ink/60">
              Every inquiry is captured, logged, and answered—no more “I forgot to text them back.”
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] text-center">
            <div className="text-sm font-medium text-brand-ink/70">
              Admin time per day
            </div>
            <div className="mt-2 text-2xl font-semibold text-brand-ink">
              3–4 hrs → <span className="text-brand-accent">30–45 min</span>
            </div>
            <p className="mt-2 text-xs text-brand-ink/60">
              Reclaimed hours that can go back into clients, family, or sales—not copy/paste.
            </p>
          </div>
        </div>

        {/* Before / After split */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)]">
            <div className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
              Before Primework AI
            </div>
            <h3 className="mt-4 text-xl font-semibold text-brand-ink">
              “I’ll get to it later” runs the day.
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-ink/80">
              <li>• Missed calls and unread DMs piling up between jobs.</li>
              <li>• Pricing and answers re-typed from scratch every single time.</li>
              <li>• Invoices made at night or “whenever I remember.”</li>
              <li>• Google Sheets and notes scattered across devices.</li>
              <li>• Money left on the table because no one followed up.</li>
            </ul>
          </div>

          {/* After */}
          <div className="rounded-3xl border border-brand-accent/30 bg-white p-7 shadow-[0_12px_50px_-16px_rgba(16,185,129,0.45)]">
            <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-brand-accent">
              After Primework AI
            </div>
            <h3 className="mt-4 text-xl font-semibold text-brand-ink">
              The system handles the busywork for you.
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-ink/80">
              <li>• AI answers FAQs and collects clean lead details 24/7.</li>
              <li>• New leads go straight into a shared sheet or simple CRM.</li>
              <li>• Invoices + payment links can be fired off in seconds.</li>
              <li>• Paid / unpaid status is always visible at a glance.</li>
              <li>• Follow-ups are scheduled—no more relying on memory.</li>
            </ul>

            <p className="mt-5 text-sm text-brand-ink/70">
              You still run the business. Primework just runs the parts that were
              draining your time and attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
