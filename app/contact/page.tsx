// app/contact/page.tsx
import ContactForm from "components/ContactForm";
import { AuditButton } from "@/components/AuditButton";
import { FadeInSection } from "components/FadeInSection";
import { Suspense } from "react";
import Script from "next/script";


// ✅ Tell Next this page is dynamic (no strict static prerender)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact • Primework AI",
  description: "Tell us about your workflow or website. We'll reply same day.",
};

type ContactPageProps = {
  searchParams?: Promise<{
    plan?: string;
    addons?: string;
  }>;
};

// Wrapper so <ContactForm> can be used inside Suspense
function ContactFormWrapper({ defaultMessage }: { defaultMessage: string }) {
  return (
    <Suspense
      fallback={
        <p className="text-sm text-brand-ink/60 mb-4">
          Loading contact form…
        </p>
      }
    >
      {/* ContactForm should accept this prop; we'll use it as the initial textarea value */}
      <ContactForm />
    </Suspense>
  );
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = (await searchParams) || {};

  const planParam = (resolvedSearchParams.plan || "").trim();
  const addonsParam = (resolvedSearchParams.addons || "").trim();

  // Map URL keys to nicer labels when needed
  let planLabel = planParam;
  if (planParam === "starter") planLabel = "Essentials";
  else if (planParam === "pro") planLabel = "Growth";
  else if (planParam === "advanced") planLabel = "Scale";

  const hasPlan = planLabel.length > 0;
  const hasAddons = addonsParam.length > 0;

  const defaultMessage =
    hasPlan && hasAddons
      ? `I'm interested in the ${planLabel} package with the following add-ons: ${addonsParam}.

Could you walk me through how this would look for my business and what the timeline would be?`
      : hasPlan
      ? `I'm interested in the ${planLabel} package.

Could you walk me through how this would look for my business and what the timeline would be?`
      : hasAddons
      ? `I'm interested in the following add-ons: ${addonsParam}.

Could you walk me through how this would look for my business and what the timeline would be?`
      : "";

  return (
    <section className="bg-white">
      
      {/* ✅ LOAD RECAPTCHA SCRIPT HERE */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <div className="container py-16">
        <FadeInSection>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-brand-ink">
              Tell us what you need. We’ll take it from here.
            </h1>
            <p className="mt-3 text-brand-ink/70">
              No pressure. No contracts. Just clarity. Expect a response the
              same day.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 md:p-8 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] max-w-3xl">
            <ContactFormWrapper defaultMessage={defaultMessage} />

            <AuditButton className="btn btn-outline mt-3">
              Talk to a human
            </AuditButton>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

