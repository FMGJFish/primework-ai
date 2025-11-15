// components/ContactForm.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState<ContactBody>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

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
        body: JSON.stringify(form),
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
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Server error.";
      setError(msg);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-3xl border border-black/5 p-6 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.08)] space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-brand-ink mb-1">
          Name*
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-ink mb-1">
          Email*
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-ink mb-1">
          Phone (optional)
        </label>
        <input
          type="tel"
          value={form.phone || ""}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-ink mb-1">
          How can we help?*
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent resize-none"
        />
      </div>

      {error && (
        <p className="text-xs text-red-600">
          {error}
        </p>
      )}
      {status === "success" && (
        <p className="text-xs text-emerald-600">
          Thanks for reaching out — we’ll get back to you shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}


