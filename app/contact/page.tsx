// app/contact/page.tsx
import ContactForm from "components/ContactForm";
import Link from "next/link";
import { AuditButton } from "@/components/AuditButton";
import { FadeInSection } from "components/FadeInSection";
import { Suspense } from "react";


// ✅ Tell Next this page is dynamic (no strict static prerender)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact • Primework AI",
  description: "Tell us about your workflow or website. We'll reply same day.",
};

// Wrapper so <ContactForm> can be used inside Suspense
function ContactFormWrapper() {
  return (
    <Suspense
      fallback={
        <p className="text-sm text-brand-ink/60 mb-4">
          Loading contact form…
        </p>
      }
    >
      <ContactForm />
    </Suspense>
  );
}

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="container py-16">

        <FadeInSection>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-brand-ink">
              Tell us what you need. We’ll take it from here.
            </h1>
            <p className="mt-3 text-brand-ink/70">
              No pressure. No contracts. Just clarity. Expect a response the same day.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 md:p-8 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] max-w-3xl">
            
            {/* FIX: Wrap ContactForm in Suspense */}
            <ContactFormWrapper />

            <AuditButton className="btn btn-outline mt-3">
              Talk to a human
            </AuditButton>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
