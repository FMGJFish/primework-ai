// components/ContactForm.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot: string;  // spam trap
  startedAt: number; // when the user first saw the form
};

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState<ContactBody>({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
    startedAt: Date.now(),
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  // Ensure startedAt is set when the form first mounts
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      startedAt: Date.now(),
    }));
  }, []);

  // Pre-fill message based on ?service= and ?plan=
  useEffect(() => {
    const service = searchParams.get("service");
    const plan = searchParams.get("plan");

    // Don’t overwrite if user has already started typing:
    if (form.message.trim()) return;

    const pieces: string[] = [];

    if (service === "web-dev") {
      pieces.push(
        "Web build request:\nI'd like help creating or redesigning my website so it captures leads and connects to automation."
      );
    } else if (service === "web-audit") {
      pieces.push(
        "Web audit request:\nI'd like a quick review of my existing site and suggestions to improve lead flow + automation."
      );
    } else if (service === "automation") {
      pieces.push(
        "Automation request:\nI’d like help setting up AI lead handling, auto-responses, and invoice/payment workflows."
      );
    }

    if (plan) {
      const prettyPlan =
        plan.charAt(0).toUpperCase() + plan.slice(1).replace("-", " ");
      pieces.push(`I’m most interested in the ${prettyPlan} plan.`);
    }

    if (!pieces.length) return;

    setForm((prev) => ({
      ...prev,
      message: pieces.join("\n\n"),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // includes honeypot + startedAt
      });

      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
        startedAt: Date.now(),
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Server error.";
      setError(msg);
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* hidden timing field (optional but harmless) */}
      <input type="hidden" name="startedAt" value={form.startedAt} />

      {/* Honeypot (hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, honeypot: e.target.value }))
          }
        />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name*
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="phone">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, phone: e.target.value }))
          }
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          How can we help?*
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-600 mt-2">
          Got it — we’ll get back to you shortly.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600 mt-2">
          {error ?? "Something went wrong. Please try again or email us directly."}
        </p>
      )}
    </form>
  );
}



