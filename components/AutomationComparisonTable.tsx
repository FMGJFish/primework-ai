// components/AutomationComparisonTable.tsx

export default function AutomationComparisonTable() {
  return (
    <div className="mt-16">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
          Compare automation packages
        </h2>
        <p className="mt-3 text-sm md:text-base text-brand-ink/70">
          See what’s included in Essentials, Growth, and Scale so you can pick the system
          that matches where your business is today.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left text-xs md:text-sm font-semibold text-brand-ink/60 pb-4 pr-4" />
              <th className="text-left text-sm font-semibold text-brand-ink pb-4 px-4">
                Essentials
              </th>
              <th className="text-left text-sm font-semibold text-brand-ink pb-4 px-4">
                Growth
              </th>
              <th className="text-left text-sm font-semibold text-brand-ink pb-4 px-4">
                Scale
              </th>
            </tr>
          </thead>
          <tbody className="align-top">
            {/* Delivery time */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70 font-medium">
                Delivery time
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">48 hours</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">5–7 days</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">10–14 days</td>
            </tr>

            {/* Lead capture system */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Lead capture system
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Lead notifications */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Lead notifications (email / SMS)
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Calendar + booking */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Calendar + booking automations
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* CRM setup */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                CRM setup (Sheets or Notion)
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Basic follow-up */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Basic follow-up sequence (email + SMS)
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Advanced nurture */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Advanced nurture sequences
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Automated payments */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Automated invoices &amp; payments
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Lead scoring */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Lead scoring &amp; segmentation
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Zapier/Make map */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Zapier / Make automation blueprint
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Pipeline automation */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Pipeline automation &amp; lead routing
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Multi-inbox support */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Multi-inbox support routing
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* Weekly analytics */}
            <tr className="border-t border-slate-200/70">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink/70">
                Weekly AI-generated analytics report
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* AI Auto-Reply Agent */}
            <tr className="border-t border-slate-200/70 bg-slate-50/60">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink font-medium">
                AI Auto-Reply Agent
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* AI Sales Follow-Up Agent */}
            <tr className="border-t border-slate-200/70 bg-slate-50/60">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink font-medium">
                AI Sales Follow-Up Agent
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* AI Customer Support Agent */}
            <tr className="border-t border-slate-200/70 bg-slate-50/60">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink font-medium">
                AI Customer Support Agent
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">✔ Included</td>
            </tr>

            {/* AI Onboarding Agent */}
            <tr className="border-t border-b border-slate-200/70 bg-slate-50/60">
              <td className="py-3 pr-4 text-xs md:text-sm text-brand-ink font-medium">
                AI Onboarding Agent
              </td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink/60">—</td>
              <td className="py-3 px-4 text-xs md:text-sm text-brand-ink">
                ✔ Included (optional flow)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs md:text-sm text-brand-ink/60 text-center">
        Need something in between tiers? We can adjust automations during your strategy call.
      </p>
    </div>
  );
}
