// app/api/contact/route.ts
import { NextResponse } from "next/server";

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactBody>;
    const { name, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1) Forward to Google Apps Script Web App (logs to Google Sheet)
    const webhook = process.env.CONTACT_SHEET_WEBHOOK;
    if (!webhook) {
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
      source: "primeworkai.com/contact",
    };

    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Webhook failed: ${text}`);
    }

    // 2) Optional: owner email via Resend (only if key + recipient are present)
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

