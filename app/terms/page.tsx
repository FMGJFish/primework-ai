// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold text-brand-ink">Terms of Service</h1>
        <p className="text-brand-ink/70 mt-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 space-y-8 text-brand-ink/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using Primework AI, you agree to be bound by these Terms of Service.
              If you do not agree, do not use the website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">2. Use of Services</h2>
            <p className="mt-2">
              You agree to use our tools and automations only for lawful purposes. You are responsible
              for all activity under your account and ensuring your use complies with local regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">3. Payments & Billing</h2>
            <p className="mt-2">
              Some Primework AI services involve recurring payments. All pricing is displayed clearly
              before checkout. You may cancel anytime, and cancellations take effect at the end of the
              billing cycle. No prorated refunds are offered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">4. No Guarantee of Outcome</h2>
            <p className="mt-2">
              We provide tools and automations designed to streamline workflows. Actual business results
              may vary depending on execution, industry, and market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">5. Limitation of Liability</h2>
            <p className="mt-2">
              Primework AI is not liable for indirect, incidental, or consequential damages arising from
              your use of our services. Our total liability is limited to the fees paid for the service
              in the previous 90 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">6. Contact</h2>
            <p className="mt-2">
              For legal questions, email:
              <br />
              <span className="font-medium">info@fishermarketgroup.com</span>
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
