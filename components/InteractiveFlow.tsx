// components/InteractiveFlow.tsx
"use client";

import { useMemo, useState } from "react";
import {
  MessageCircle,
  Reply,
  Bell,
  Receipt,
  CreditCard,
  Table,
  CalendarCheck,
  CheckCircle2,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────── *
   Types
 * ────────────────────────────────────────────────────────────────────────── */
type StepKey =
  | "lead"
  | "aiReply"
  | "ownerAlert"
  | "call"         // ← optional step (only shown when needed)
  | "invoice"
  | "payment"
  | "logged"
  | "followup";

type StepDef = { key: StepKey; title: string; desc: string; icon: LucideIcon };

/* ────────────────────────────────────────────────────────────────────────── *
   Static step definitions (no dynamic data here)
 * ────────────────────────────────────────────────────────────────────────── */
const BASE_STEPS: StepDef[] = [
  { key: "lead",       title: "Lead reaches out",       desc: "Website chat / form / SMS.",          icon: MessageCircle },
  { key: "aiReply",    title: "AI responds instantly",  desc: "Answers FAQs, captures info.",        icon: Reply },
  { key: "ownerAlert", title: "Owner is alerted",       desc: "SMS/email with lead details.",        icon: Bell },
  // "call" will be conditionally inserted after ownerAlert when needed
  { key: "invoice",    title: "Invoice auto-created",   desc: "Branded invoice + payment link.",     icon: Receipt },
  { key: "payment",    title: "Customer pays",          desc: "Card/ACH via Stripe/PayPal.",         icon: CreditCard },
  { key: "logged",     title: "Logged to Sheets / CRM", desc: "Source of truth for accounting.",     icon: Table },
  { key: "followup",   title: "Follow-up scheduled",    desc: "Nudge in 2–3 days if needed.",        icon: CalendarCheck },
];

const CALL_STEP: StepDef = {
  key: "call",
  title: "Phone call for clarification",
  desc: "Schedule a short call; capture special requests.",
  icon: PhoneCall,
};

/* ────────────────────────────────────────────────────────────────────────── *
   Component
 * ────────────────────────────────────────────────────────────────────────── */
export default function InteractiveFlow() {
  const [stepIdx, setStepIdx] = useState(0);

  // NOTE: all dynamic values start empty → no server/client mismatch.
  const [state, setState] = useState({
    // Lead
    leadId: "",                  // will be created on first action
    lead_name: "Alex Johnson",
    lead_phone: "+1 555-123-4567",
    lead_email: "alex@acme.com",
    source: "Website Chat",

    // AI & owner
    ai_first_response_at: "",
    owner_alert_channel: "",

    // Optional phone call
    needs_call: false,
    call_scheduled_for: "",      // ISO date (e.g., +1 day)
    call_notes: "",

    // Billing
    invoice_id: "INV-000231",
    invoice_amount: 350,
    payment_status: "pending" as "pending" | "paid",
    payment_time: "",

    // Logging & follow-up
    crm_sheet_row_id: "",
    followup_status: "not scheduled",

    // Misc
    notes: "",
  });

  // Build the visible steps. If a call is needed, inject the "call" step
  // immediately after "ownerAlert".
  const steps = useMemo(() => {
    const arr = [...BASE_STEPS];
    if (state.needs_call) {
      const pos = arr.findIndex(s => s.key === "ownerAlert");
      arr.splice(Math.max(0, pos + 1), 0, CALL_STEP);
    }
    return arr;
  }, [state.needs_call]);

  const current = steps[stepIdx];
  const go = (i: number) => setStepIdx(Math.min(Math.max(i, 0), steps.length - 1));
  const next = () => go(stepIdx + 1);
  const prev = () => go(stepIdx - 1);

  // Helpers to create timestamps/IDs *only when triggered by the user*
  const ensureLeadId = () =>
    setState(s => (s.leadId ? s : { ...s, leadId: "pw_" + new Date().toISOString() }));

  /* ──────────────────────────────────────────────────────────────────────── *
     Action handlers (simulate real integrations)
   * ──────────────────────────────────────────────────────────────────────── */
  function doAiReply(flagNeedsCall: boolean) {
    ensureLeadId();
    setState(s => ({
      ...s,
      ai_first_response_at: new Date().toISOString(),
      needs_call: flagNeedsCall ? true : s.needs_call,
    }));
    next();
  }

  function doOwnerAlert() {
    setState(s => ({ ...s, owner_alert_channel: "SMS + Email" }));
    next();
  }

  function scheduleCall() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    setState(s => ({
      ...s,
      call_scheduled_for: d.toISOString(),
    }));
    next();
  }

  function saveCallNotes(note: string) {
    setState(s => ({ ...s, call_notes: note }));
  }

  function doCreateInvoice() {
    // here you would call Stripe / QuickBooks / etc
    next();
  }

  function togglePayment() {
    setState(s =>
      s.payment_status === "paid"
        ? { ...s, payment_status: "pending", payment_time: "" }
        : { ...s, payment_status: "paid", payment_time: new Date().toISOString() }
    );
  }

  function doLogToSheets() {
    // here you would POST to /api/log (Sheets/DB)
    setState(s => ({ ...s, crm_sheet_row_id: "row_1287" }));
    next();
  }

  function scheduleFollowup() {
    setState(s => ({ ...s, followup_status: "scheduled +2d" }));
    next();
  }

  /* ──────────────────────────────────────────────────────────────────────── *
     Right side: action area per step
   * ──────────────────────────────────────────────────────────────────────── */
  const renderActionArea = () => {
    switch (current.key) {
      case "lead":
        return (
          <div className="text-sm text-brand-ink/70">
            Simulated visitor message:
            <div className="mt-2 rounded-2xl border p-3 bg-gray-50">
              “Hey, do you have availability next week? What’s the price?”
            </div>
            <button onClick={next} className="btn btn-primary mt-4">Continue</button>
          </div>
        );

      case "aiReply":
        return (
          <div className="space-y-3">
            <p className="text-sm text-brand-ink/70">
              AI reply will capture name, phone, service need, and propose next steps.
            </p>
            <div className="flex gap-3">
              <button onClick={() => doAiReply(false)} className="btn btn-primary">
                Send AI Reply
              </button>
              <button onClick={() => doAiReply(true)} className="btn btn-outline">
                Reply & mark “Needs phone call”
              </button>
            </div>
          </div>
        );

      case "ownerAlert":
        return (
          <div>
            <p className="text-sm text-brand-ink/70">Owner receives SMS + Email with lead details.</p>
            <button onClick={doOwnerAlert} className="btn btn-primary mt-4">Send Owner Alert</button>
          </div>
        );

      case "call":
        return (
          <div>
            <p className="text-sm text-brand-ink/70">
              Schedule a quick call for special requests or clarification.
            </p>
            <div className="mt-3 text-sm">
              <div>
                Scheduled for:{" "}
                <span className="font-medium">
                  {state.call_scheduled_for
                    ? new Date(state.call_scheduled_for).toLocaleString()
                    : "— not scheduled —"}
                </span>
              </div>
              <label className="block mt-3 text-brand-ink/80">
                Notes:
                <textarea
                  className="mt-1 w-full rounded-xl border p-2"
                  rows={3}
                  value={state.call_notes}
                  onChange={(e) => saveCallNotes(e.target.value)}
                  placeholder="Client wants sunset photos, outdoor location, etc."
                />
              </label>
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={scheduleCall} className="btn btn-primary">Schedule call (+1 day)</button>
              <button onClick={next} className="btn btn-outline">Skip</button>
            </div>
          </div>
        );

      case "invoice":
        return (
          <div>
            <p className="text-sm text-brand-ink/70">Create branded invoice + payment link.</p>
            <div className="mt-3 text-sm">
              <div>Invoice: <span className="font-medium">{state.invoice_id}</span></div>
              <div>Amount: <span className="font-medium">${state.invoice_amount}</span></div>
            </div>
            <button onClick={doCreateInvoice} className="btn btn-primary mt-4">Create Invoice</button>
          </div>
        );

      case "payment":
        return (
          <div>
            <p className="text-sm text-brand-ink/70">Toggle payment to simulate checkout.</p>
            <div className="mt-3 text-sm">
              Status:{" "}
              <span
                className={`font-semibold ${
                  state.payment_status === "paid" ? "text-green-600" : "text-amber-600"
                }`}
              >
                {state.payment_status.toUpperCase()}
              </span>
              {state.payment_time && <div>Paid at: {new Date(state.payment_time).toLocaleString()}</div>}
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={togglePayment} className="btn btn-outline">
                {state.payment_status === "paid" ? "Mark Pending" : "Mark Paid"}
              </button>
              <button onClick={next} className="btn btn-primary">Continue</button>
            </div>
          </div>
        );

      case "logged":
        return (
          <div>
            <p className="text-sm text-brand-ink/70">Append this flow to Google Sheets / CRM.</p>
            <button onClick={doLogToSheets} className="btn btn-primary mt-4">Log to Sheet</button>
            <a
              href="/sample-lead-pipeline.csv"
              download
              className="btn btn-outline"
            >
             Download CSV
            </a>
          </div>
        );

      case "followup":
        return (
          <div>
            <p className="text-sm text-brand-ink/70">
              Schedule follow-up if no response / upsell after payment.
            </p>
            <div className="mt-2 text-sm">
              Status: <span className="font-medium">{state.followup_status}</span>
            </div>
            <button onClick={scheduleFollowup} className="btn btn-primary mt-4">
              Schedule +2 days
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const Icon = current.icon;

  /* ──────────────────────────────────────────────────────────────────────── */
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-ink text-center">
          See the Primework flow — from lead to cash.
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          {/* Timeline (left) */}
          <ol className="space-y-4">
            {steps.map((s, i) => {
              const SIcon = s.icon;
              const active = i === stepIdx;
              const done = i < stepIdx;
              return (
                <li
                  key={s.key}
                  className={`rounded-2xl border p-4 flex items-center gap-3 cursor-pointer
                    ${active ? "border-brand-accent bg-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.10)]" : "border-black/5 bg-white"}`}
                  onClick={() => setStepIdx(i)}
                  aria-current={active ? "step" : undefined}
                >
                  {done ? (
                    <CheckCircle2 className="text-brand-accent shrink-0" />
                  ) : (
                    <SIcon className="text-brand-ink/70 shrink-0" />
                  )}
                  <div>
                    <div className="font-medium text-brand-ink">{s.title}</div>
                    <div className="text-sm text-brand-ink/60">{s.desc}</div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Elevated action card (right) */}
          <div className="bg-white rounded-3xl border border-black/5 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.10)] p-8">
            <div className="flex items-center gap-3">
              <Icon className="text-brand-accent" />
              <div>
                <div className="text-lg font-semibold text-brand-ink">{current.title}</div>
                <div className="text-sm text-brand-ink/60">{current.desc}</div>
              </div>
            </div>

            <div className="mt-6">{renderActionArea()}</div>

            <div className="mt-8 flex justify-between">
              <button onClick={prev} disabled={stepIdx === 0} className="btn btn-outline disabled:opacity-50">
                Back
              </button>
              <button
                onClick={next}
                disabled={stepIdx === steps.length - 1}
                className="btn btn-primary disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* JSON preview (client-only data appears as you click) */}
        <div className="mt-10 rounded-2xl border border-black/5 bg-gray-50 p-4 text-xs overflow-auto">
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      </div>
    </section>
  );
}



