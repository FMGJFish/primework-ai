// components/GuaranteeBlock.tsx
import Link from "next/link";
import { ShieldCheck, Clock3, MessageCircle } from "lucide-react";

export default function GuaranteeBlock() {
  return (
    <section id="guarantee" className="py-20 bg-white">
      <div className="container">
        <div className="rounded-3xl bg-brand-ink text-white px-8 py-10 md:px-12 md:py-12 grid md:grid-cols-2 gap-10 items-start">
          {/* Left side: headline + core promise */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-emerald-200/90">
              <ShieldCheck className="w-4 h-4" />
              <span>Primework Guarantee</span>
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
              If your system doesn&apos;t save you time, we fix it with you for free.
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-100/90 max-w-xl">
              Every build comes with a 30-day optimization window. If you&apos;re not
              seeing faster responses or cleaner tracking, we&apos;ll tune the workflows
              with you—at no extra cost.
            </p>
          </div>

          {/* Right side: supporting bullets + CTA */}
          <div>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <Clock3 className="w-5 h-5 mt-0.5 text-emerald-300" />
                <span>
                  <span className="font-semibold">Launch in days, not months.</span>{" "}
                  Most systems go live within 3–5 business days once we have your details.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-5 h-5 mt-0.5 text-emerald-300" />
                <span>
                  <span className="font-semibold">Real humans on support.</span>{" "}
                  You get a direct line to someone who understands your workflow, not a generic help desk.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 mt-0.5 text-emerald-300" />
                <span>
                  <span className="font-semibold">No long-term lock-ins.</span>{" "}
                  Adjust or cancel month-to-month as your business changes.
                </span>
              </li>
            </ul>

            <Link
              href="/contact?topic=guarantee"
              className="mt-6 inline-block rounded-2xl border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-brand-ink transition-colors"
            >
              Talk through the guarantee →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
