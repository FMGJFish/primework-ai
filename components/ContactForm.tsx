// components/ContactForm.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    grecaptcha?: {
      getResponse: () => string;
      reset: () => void;
    };
  }
}

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot: string;  // spam trap
  startedAt: number; // when the user first saw the form

  // Tracking fields (no UI)
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

// NEW: finer-grained phases for UX messaging
type SubmitPhase = "idle" | "verifying" | "analyzing" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();

  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  if (!recaptchaSiteKey && typeof window !== "undefined") {
    console.warn("⚠️ Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY in env");
  }

  const [form, setForm] = useState<ContactBody>({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
    startedAt: Date.now(),

    pageUrl: "",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // NEW: phase + note for better feedback
  const [submitPhase, setSubmitPhase] = useState<SubmitPhase>("idle");
  const [submitNote, setSubmitNote] = useState<string | null>(null);

  // Capture page URL, referrer, and UTM params once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    const params = url.searchParams;

    setForm((prev) => ({
      ...prev,
      pageUrl: url.href,
      referrer: document.referrer || "",
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmTerm: params.get("utm_term") || "",
      utmContent: params.get("utm_content") || "",
    }));
  }, []);

  // Pre-fill message based on ?service=, ?plan=, ?addons=, ?webPackage=
  useEffect(() => {
    const service = searchParams.get("service");
    const plan = searchParams.get("plan");
    const addons = searchParams.get("addons");
    const webPackage = searchParams.get("webPackage");

    // Don’t overwrite if user has already started typing:
    if (form.message.trim()) return;

    const pieces: string[] = [];

    // 1) Service-based intro
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

    // 2) Automation plan + add-ons
    if (plan) {
      let prettyPlan = plan;

      if (plan === "starter") prettyPlan = "Essentials";
      else if (plan === "pro") prettyPlan = "Growth";
      else if (plan === "advanced") prettyPlan = "Scale";
      else {
        // If plan came in as "AI Automation – Growth" or "Essentials", just use it as-is
        prettyPlan = plan;
      }

      if (addons && addons.trim().length > 0) {
        pieces.push(
          `I'm interested in the ${prettyPlan} package with the following add-ons: ${addons}.`
        );
      } else {
        pieces.push(`I'm interested in the ${prettyPlan} package.`);
      }
    }

    // 3) Web dev package
    if (webPackage && webPackage.trim().length > 0) {
      pieces.push(`For web, I'm interested in the ${webPackage} package.`);
    }

    // 4) Prompt for more context if we have at least one interest
    if (pieces.length > 0) {
      pieces.push(
        "Here’s a bit more about my business and what I’m hoping to automate:"
      );
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
    setSubmitPhase("verifying");
    setSubmitNote("Verifying you’re human…");
    setError(null);

    // 🔎 1) Basic client-side validation
    const newErrors: FieldErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please tell us your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Please share a bit about what you need help with.";
    }

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setStatus("idle");
      setSubmitPhase("idle");
      setSubmitNote(null);
      return;
    }

    // Clear old field errors if validation passes
    setFieldErrors({});

    const formEl = e.currentTarget;

    // 2) Grab the reCAPTCHA token from the hidden field
    const tokenField =
      formEl.querySelector<HTMLInputElement>(
        '[name="g-recaptcha-response"]'
      ) ||
      formEl.querySelector<HTMLTextAreaElement>(
        '[name="g-recaptcha-response"]'
      );

    const token = tokenField?.value || "";

    if (!token) {
      setStatus("error");
      setSubmitPhase("error");
      setSubmitNote("Please complete the reCAPTCHA before submitting.");
      setError("Please complete the reCAPTCHA before submitting.");
      return;
    }

    const payload = {
      ...form,
      recaptchaToken: token,
    };

    try {
      // NEW: we’ve passed validation + have a token → AI/Apps Script work now
      setSubmitPhase("analyzing");
      setSubmitNote("Analyzing your message with AI (usually 1–3 seconds)…");

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json();

      if (!resp.ok) {
        const rawMsg = data?.error || "Something went wrong.";

        // Special handling for duplicate error from backend
        if (
          typeof rawMsg === "string" &&
          rawMsg.includes("Duplicate entry detected")
        ) {
          throw new Error(
            "Looks like we already received this exact message. If you need to add anything, tweak your message and resend."
          );
        }

        throw new Error(rawMsg);
      }

      // ✅ Success
      setStatus("success");
      setSubmitPhase("success");
      setSubmitNote(
        "Got it! We’ll review your message and follow up shortly."
      );
      setError(null);

      setForm((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
        startedAt: Date.now(),
      }));

      // Optional: visually reset reCAPTCHA
      if (typeof window !== "undefined" && window.grecaptcha) {
        try {
          window.grecaptcha.reset();
        } catch {
          // ignore if it complains
        }
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setSubmitPhase("error");

      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again in a moment.";

      setError(message);
      setSubmitNote(message);
    }
  }

  const isSubmitting = status === "submitting";

  // NEW: smarter button label based on phase
  let buttonLabel = "Send message";
  if (submitPhase === "verifying") {
    buttonLabel = "Verifying you’re human…";
  } else if (submitPhase === "analyzing") {
    buttonLabel = "Analyzing with AI (1–3 seconds)…";
  } else if (submitPhase === "success") {
    buttonLabel = "Sent!";
  } else if (submitPhase === "error") {
    buttonLabel = isSubmitting ? "Sending..." : "Try again";
  } else if (isSubmitting) {
    buttonLabel = "Sending...";
  }

  const isBusy =
    isSubmitting ||
    submitPhase === "verifying" ||
    submitPhase === "analyzing";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ✅ Status banners */}
      {status === "success" && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
          Thanks for reaching out — your message is in our queue. We’ll follow
          up at your email as soon as possible.
        </div>
      )}

      {status === "error" && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
          {error}
        </div>
      )}

      {/* NEW: soft status note under the banners */}
      {submitNote && (
        <p className="text-xs text-slate-500">{submitNote}</p>
      )}

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
          onChange={(e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, name: value }));
            if (fieldErrors.name) {
              setFieldErrors((prev) => ({ ...prev, name: undefined }));
            }
          }}
          aria-invalid={!!fieldErrors.name}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
        {fieldErrors.name && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
        )}
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
          onChange={(e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, email: value }));
            if (fieldErrors.email) {
              setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          aria-invalid={!!fieldErrors.email}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
        {fieldErrors.email && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      {/* Phone */}
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
          onChange={(e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, message: value }));
            if (fieldErrors.message) {
              setFieldErrors((prev) => ({ ...prev, message: undefined }));
            }
          }}
          aria-invalid={!!fieldErrors.message}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
        )}
      </div>

      {/* ✅ reCAPTCHA widget (v2 checkbox) */}
      {recaptchaSiteKey && (
        <div className="mt-2">
          <div
            className="g-recaptcha"
            data-sitekey={recaptchaSiteKey}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isBusy}
        className="btn btn-primary"
      >
        {buttonLabel}
      </button>
    </form>
  );
}







