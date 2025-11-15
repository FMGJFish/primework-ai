// components/WhoThisIsFor.tsx

export default function WhoThisIsFor() {
  const ITEMS = [
    {
      title: "Service businesses",
      desc: "Photographers, cleaners, handymen, lawn care, tutors, estheticians — anyone who books jobs.",
      emoji: "⚡",
    },
    {
      title: "High-volume inquiries",
      desc: "You get leads from Facebook, Instagram, Google or your website — and can’t reply instantly.",
      emoji: "📥",
    },
    {
      title: "Solo operators",
      desc: "You do the work, manage the calls, send invoices, and keep the books — all on your own.",
      emoji: "🧰",
    },
    {
      title: "Teams that want consistency",
      desc: "You want every lead to be answered the same way, every time, even if you’re busy.",
      emoji: "🤝",
    },
    {
      title: "Businesses that want to automate",
      desc: "Reduce repetitive tasks. Speed up revenue. Eliminate things slipping through the cracks.",
      emoji: "🔁",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink">
          Who Primework is built for
        </h2>
        <p className="mt-3 text-brand-ink/70 max-w-2xl mx-auto">
          Whether you're booking jobs, managing customers, or juggling
          everything yourself — Primework removes the busywork.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-black/5
                         shadow-[0_8px_40px_-10px_rgba(0,0,0,0.06)]
                         p-8 text-left hover:shadow-[0_8px_60px_-10px_rgba(0,0,0,0.1)]
                         transition-all"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-brand-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-brand-ink/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
