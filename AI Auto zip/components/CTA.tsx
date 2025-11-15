// components/CTA.tsx
import Link from "next/link";

export default function CTA() {
  return (
    <section id="lead" className="py-20">
      <div className="container">
        <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-[var(--brand-ink)] to-[var(--brand-ink-2)] text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
          {/* Eyebrow */}
          <p className="text-sm/6 tracking-wide uppercase text-white/70">
            Get a working demo in 15 minutes
          </p>

          {/* Headline */}
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
            Ready to stop losing leads and get paid faster?
          </h2>

          {/* Subcopy */}
          <p className="mt-3 text-white/80 max-w-2xl">
            We’ll show you the exact flow we’ll install: AI reply → owner alert → invoice & payment
            → logging → follow-up. No pressure, no contracts—just clarity.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact" // change to your scheduler link when ready
              className="btn btn-primary bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white"
              aria-label="Book a 15 minute audit"
            >
              Book a 15-min Audit
            </Link>
            <Link
              href="/pricing"
              className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-[var(--brand-ink)]"
              aria-label="View pricing and tiers"
            >
              See Pricing & Tiers
            </Link>
          </div>

          {/* Quick trust bullets */}
          <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-white/80">
            <li className="rounded-xl bg-white/5 backdrop-blur px-4 py-3 border border-white/10">
              24/7 auto-response, even when you’re busy
            </li>
            <li className="rounded-xl bg-white/5 backdrop-blur px-4 py-3 border border-white/10">
              Invoices & payment links sent in seconds
            </li>
            <li className="rounded-xl bg-white/5 backdrop-blur px-4 py-3 border border-white/10">
              Logs everything to Sheets/CRM for tax time
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
