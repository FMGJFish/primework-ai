import { CheckCircle } from "lucide-react";


export default function ProblemSolution() {
  return (
    <section className="bg-white py-20">
      <div className="container grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink leading-tight">
            Stop losing business to slow follow-up.
          </h2>

          <p className="mt-5 text-brand-ink/80 text-lg leading-relaxed">
            Most businesses don’t lose customers because they’re bad at what they do.
            They lose customers because they respond too slow.
          </p>

          <p className="mt-4 text-brand-ink/70">
            People move fast. If you don’t respond within minutes, they pick someone else.
            That’s not a marketing problem — that’s a workflow problem.
          </p>
        </div>

        {/* Elevated Card - Option B */}
        <div className="bg-white rounded-3xl border border-black/5 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)] p-8">
          <ul className="space-y-4 text-brand-ink/80">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brand-accent shrink-0" size={22}/>
              <span>Leads get answered instantly — even when you're busy.</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-brand-accent shrink-0" size={22}/>
              <span>Follow-ups happen automatically, so nothing slips.</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-brand-accent shrink-0" size={22}/>
              <span>Invoices and payment links get sent the moment work is complete.</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-brand-accent shrink-0" size={22}/>
              <span>Your time goes back to the work that actually grows the business.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

