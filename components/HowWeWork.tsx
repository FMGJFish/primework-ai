export default function HowWeWork() {
  const STEPS = [
    {
      num: "01",
      title: "Tell us what you want automated",
      desc: "You share your workflow, tools, and the problems slowing you down.",
    },
    {
      num: "02",
      title: "We design + install your system",
      desc: "We build, test, and optimize your flow — AI, invoices, alerts, logging, everything.",
    },
    {
      num: "03",
      title: "You go live in days, not weeks",
      desc: "Your workflow runs quietly in the background while you focus on the real work.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink text-center">
          How we’ll work together
        </h2>
        <p className="text-brand-ink/70 text-center max-w-xl mx-auto mt-3">
          Clear, fast, and built around your business — not the other way around.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="rounded-3xl p-8 bg-white border border-black/5 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.05)]"
            >
              <div className="text-brand-accent font-bold text-4xl">{s.num}</div>
              <h3 className="mt-3 text-xl font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-brand-ink/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
