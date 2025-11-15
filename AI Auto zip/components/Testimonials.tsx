// components/Testimonials.tsx
"use client";

const TESTIMONIALS = [
  {
    quote:
      "Before Primework AI, I was texting clients at midnight and still missing people. Now leads get answered instantly and I just jump in when it’s time to talk.",
    name: "Danielle C.",
    role: "Owner, mobile beauty studio",
  },
  {
    quote:
      "We used to forget invoices for small jobs all the time. Now every completed job triggers an invoice automatically. Cash flow feels a lot less stressful.",
    name: "Marcus L.",
    role: "Founder, local repair service",
  },
  {
    quote:
      "I thought this would be ‘one more tool’ to manage. Instead, it quietly keeps leads and payments organized while my team focuses on actually serving clients.",
    name: "Rachel T.",
    role: "Director, wellness clinic",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-ink/60">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-brand-ink">
            Real results from real businesses.
          </h2>
          <p className="mt-3 text-brand-ink/70 text-sm md:text-base">
            Different industries, same theme: fewer dropped balls, faster
            payments, and more focus on the work only humans can do.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="h-full rounded-3xl border border-black/5 bg-white p-6 shadow-[0_8px_40px_-10px_rgba(15,23,42,0.25)]"
            >
              <p className="text-sm text-brand-ink/80 leading-relaxed">
                “{t.quote}”
              </p>
              <figcaption className="mt-4">
                <div className="text-sm font-semibold text-brand-ink">
                  {t.name}
                </div>
                <div className="text-xs text-brand-ink/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
