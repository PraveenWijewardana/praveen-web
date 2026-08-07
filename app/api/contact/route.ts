import { NextResponse } from "next/server";
import { contact, site } from "@/data/portfolio";

type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  message?: string;
  website?: string; // honeypot
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function siteOrigin(request: Request) {
  const fromRequest = request.headers.get("origin");
  if (fromRequest) return fromRequest;

  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  return site.url;
}

async function sendWithResend(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const from =
    process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [contact.email],
      reply_to: input.email,
      subject: input.subject,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        "",
        input.message,
      ].join("\n"),
    }),
  });

  const data = (await res.json()) as { id?: string; message?: string };

  if (!res.ok) {
    return {
      ok: false as const,
      error: data.message || "Failed to send message via Resend.",
    };
  }

  return { ok: true as const };
}

async function sendWithFormSubmit(
  request: Request,
  input: {
    name: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
  },
) {
  const origin = siteOrigin(request);

  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(contact.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/`,
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        phone: input.phone,
        message: input.message,
        _subject: input.subject,
        _template: "table",
        _captcha: "false",
        _replyto: input.email,
      }),
    },
  );

  const data = (await res.json()) as {
    success?: string | boolean;
    message?: string;
  };

  const success = data.success === true || data.success === "true";

  if (!success) {
    const message = data.message || "Failed to send message.";
    const needsActivation = /activat/i.test(message);

    return {
      ok: false as const,
      error: needsActivation
        ? "Almost there — check your inbox for a FormSubmit activation email and click Activate Form, then try again."
        : message,
    };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silent success for bots
  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const mobile = body.mobile?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Message is too long." },
      { status: 400 },
    );
  }

  const payload = {
    name: `${firstName} ${lastName}`,
    email,
    phone: mobile || "Not provided",
    message,
    subject: `New message from ${firstName} ${lastName} — Portfolio`,
  };

  try {
    const viaResend = await sendWithResend(payload);
    const result = viaResend ?? (await sendWithFormSubmit(request, payload));

    if (!result.ok) {
      return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
