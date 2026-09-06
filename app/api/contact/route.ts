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

type ProviderResponse = {
  success?: boolean | string;
  id?: string;
  message?: string;
};

async function readProviderResponse(response: Response): Promise<ProviderResponse> {
  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text) as ProviderResponse;
  } catch {
    return { message: text.slice(0, 300) };
  }
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function siteOrigin() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    site.url.replace(/\/$/, "")
  );
}

function requestOrigin(request: Request) {
  const origins = [request.headers.get("origin"), request.url];
  for (const value of origins) {
    if (!value) continue;

    try {
      return new URL(value).origin;
    } catch {
      continue;
    }
  }

  return siteOrigin();
}

function providerError(message: string | undefined, fallback: string) {
  if (!message) return fallback;
  if (/just a moment|cloudflare|cf-chl/i.test(message)) {
    return "The current mail service is unavailable. Please try again later.";
  }
  return message;
}

async function sendWithResend(payload: {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [contact.email],
      reply_to: payload.email,
      subject: `New message from ${payload.firstName} ${payload.lastName} — Portfolio`,
      text: [
        `Name: ${payload.firstName} ${payload.lastName}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.mobile || "Not provided"}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  const data = await readProviderResponse(res);
  if (!res.ok) {
    return { ok: false as const, error: data.message || "Failed to send message." };
  }

  return { ok: true as const };
}

async function sendWithWeb3Forms(payload: {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}) {
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return null;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New message from ${payload.firstName} ${payload.lastName} — Portfolio`,
      from_name: "Praveen Portfolio",
      name: `${payload.firstName} ${payload.lastName}`,
      email: payload.email,
      phone: payload.mobile || "Not provided",
      message: payload.message,
      botcheck: false,
    }),
  });

  const data = await readProviderResponse(res);
  const ok = data.success === true || data.success === "true";

  if (!ok) {
    return {
      ok: false as const,
      error: providerError(data.message, "Failed to send. Please try again."),
    };
  }

  return { ok: true as const };
}

async function sendWithFormSubmit(payload: {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}, origin: string) {

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
        name: `${payload.firstName} ${payload.lastName}`,
        email: payload.email,
        phone: payload.mobile || "Not provided",
        message: payload.message,
        _subject: `New message from ${payload.firstName} ${payload.lastName} — Portfolio`,
        _template: "table",
        _captcha: "false",
        _replyto: payload.email,
      }),
    },
  );

  const data = await readProviderResponse(res);
  const ok = data.success === true || data.success === "true";
  const messageText = data.message || "Failed to send. Please try again.";

  if (!ok) {
    const needsActivation = /activat/i.test(messageText);
    return {
      ok: false as const,
      error: needsActivation
        ? `Form not activated yet — check ${contact.email} for the FormSubmit email and click Activate Form.`
        : providerError(messageText, "Failed to send. Please try again."),
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

  const payload = { firstName, lastName, email, mobile, message };

  try {
    const resendResult = await sendWithResend(payload);
    if (resendResult) {
      if (!resendResult.ok) {
        return NextResponse.json(
          { ok: false, error: resendResult.error },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    const web3Result = await sendWithWeb3Forms(payload);
    if (web3Result) {
      if (!web3Result.ok) {
        return NextResponse.json(
          { ok: false, error: web3Result.error },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    const formSubmitResult = await sendWithFormSubmit(payload, requestOrigin(request));
    if (!formSubmitResult.ok) {
      return NextResponse.json(
        { ok: false, error: formSubmitResult.error },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form provider request failed", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
