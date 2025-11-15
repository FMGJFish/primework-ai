// components/PricingFAQ.tsx
export default function PricingFAQ() {
  const items = [
    { q: "How fast is setup?", a: "Within 48 hours after we collect your basics." },
    { q: "Can I cancel anytime?", a: "Yes. Plans are month-to-month." },
    { q: "Do you integrate with our tools?", a: "Stripe, Sheets, QuickBooks, and more." },
    { q: "Who owns the data?", a: "You do. We provide exports on request." },
  ];
  return (
    <section className="container py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink text-center">Pricing FAQ</h2>
      <div className="mt-8 max-w-3xl mx-auto divide-y border rounded-2xl bg-white">
        {items.map((it, i) => (
          <details key={i} className="p-5">
            <summary className="cursor-pointer font-medium text-brand-ink">{it.q}</summary>
            <p className="mt-2 text-sm text-brand-ink/70">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
