// app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold text-brand-ink">Privacy Policy</h1>
        <p className="text-brand-ink/70 mt-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 space-y-8 text-brand-ink/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">1. Information We Collect</h2>
            <p className="mt-2">
              We collect information that you provide directly to us, such as your name,
              email address, phone number, and messages submitted through our contact forms.
              We also automatically collect basic analytics data such as page views and browser information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">2. How We Use Your Information</h2>
            <p className="mt-2">
              We use your information to provide and improve our services, respond to inquiries,
              send updates, and analyze how visitors use our website. We do not sell your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">3. Third-Party Services</h2>
            <p className="mt-2">
              We use trusted third-party tools such as Google Sheets, Stripe, Resend, and analytics
              platforms to operate Primework AI. These providers may process limited data on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">4. Data Security</h2>
            <p className="mt-2">
              We use reasonable technical measures to safeguard your information, but no method
              of transmission over the internet is 100% secure.  
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">5. Your Rights</h2>
            <p className="mt-2">
              You may request to access, update, or delete your personal information at any time
              by contacting us at info@fishermarketgroup.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">6. Contact</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy, email:
              <br />
              <span className="font-medium">info@fishermarketgroup.com</span>
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
