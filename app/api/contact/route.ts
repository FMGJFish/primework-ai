// app/api/contact/route.ts
import { NextResponse } from "next/server";

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string;   // hidden field on the form
  startedAt?: number;  // timestamp when the user first saw the form
  recaptchaToken?: string;

  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;

};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactBody>;
    const {
      name,
      email,
      phone,
      message,
      honeypot,
      startedAt,
      recaptchaToken,
      pageUrl,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
    } = body || {};


    // --- Anti-spam guards ---------------------------------------

    // 1) Honeypot: if this hidden field is filled, it's almost certainly a bot.
    // We "succeed" but do nothing so the bot thinks everything worked.
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 2) Timing check: if the form is submitted unrealistically fast, treat as spam.
    if (typeof startedAt === "number") {
      const deltaMs = Date.now() - startedAt;
      const MIN_MS = 3000; // 3 seconds; bump to 5000+ if you want

      if (deltaMs < MIN_MS) {
        return NextResponse.json(
          { error: "Form submitted too fast." },
          { status: 429 }
        );
      }
    }

    // 3) Regular validation (same as before)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // --- 1) Forward to Google Apps Script Web App (logs to Google Sheet) ---

const webhook = process.env.CONTACT_SHEET_WEBHOOK;
console.log("CONTACT_SHEET_WEBHOOK:", webhook); // ✅ log output

if (!webhook) {
  console.error("❌ Missing CONTACT_SHEET_WEBHOOK in environment variables.");
  return NextResponse.json(
    { error: "CONTACT_SHEET_WEBHOOK is not set." },
    { status: 500 }
  );
}


    const payload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone ?? "",
      message,
      source: pageUrl || "", // used in Apps Script as Page URL
      referrer: referrer || "",
      utmSource: utmSource || "",
      utmMedium: utmMedium || "",
      utmCampaign: utmCampaign || "",
      utmTerm: utmTerm || "",
      utmContent: utmContent || "",
      startedAt,
      recaptchaToken: recaptchaToken ?? "", // ✅ pass token to GScript
    };

    const resp = await fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

// Read the body whether or not resp.ok is true
const rawText = await resp.text();

let okFlag = true;
let backendError = "";

try {
  const json = JSON.parse(rawText);
  // Apps Script returns { ok: false, error: "..." } for duplicates
  okFlag = json.ok !== false;
  backendError = json.error || "";
} catch {
  // not JSON, fall back to raw text
  okFlag = resp.ok;
  backendError = rawText;
}

// If HTTP failed OR backend flagged an error, treat as failure
if (!resp.ok || !okFlag) {
  const rawMsg = backendError || "Unknown error from lead logger.";

  if (rawMsg.includes("Duplicate entry detected")) {
    // Give the user a friendly, specific message
    throw new Error(
      "Looks like we already received this exact message recently. " +
        "If you need to add more details, tweak your message and send again."
    );
  }

  throw new Error(rawMsg);
}


    // --- 2) Optional: owner email via Resend (unchanged) ---

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_ALERT_EMAIL = process.env.OWNER_ALERT_EMAIL;
    if (RESEND_API_KEY && OWNER_ALERT_EMAIL) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Primework AI <noreply@primeworkai.com>",
          to: [OWNER_ALERT_EMAIL],
          subject: "New Primework AI contact",
          html: `
            <p><strong>${name}</strong> reached out.</p>
            <p>Email: ${email}${phone ? `<br/>Phone: ${phone}` : ""}</p>
            <p>Message:</p>
            <pre>${message.replace(/</g, "&lt;")}</pre>
          `,
        }),
      }).catch(() => {
        /* non-blocking */
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Server error.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

