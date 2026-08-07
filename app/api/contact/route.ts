import { NextResponse } from "next/server";
import { contact } from "@/data/portfolio";

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
    _subject: `New message from ${firstName} ${lastName} — Portfolio`,
    _template: "table",
    _captcha: "false",
  };

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  try {
    if (accessKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: payload._subject,
          from_name: "Praveen Portfolio",
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        return NextResponse.json(
          { ok: false, error: data.message || "Failed to send message." },
          { status: 502 },
        );
      }
    } else {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(contact.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = (await res.json()) as {
        success?: string | boolean;
        message?: string;
      };

      const success =
        data.success === true ||
        data.success === "true" ||
        res.ok;

      if (!success) {
        return NextResponse.json(
          {
            ok: false,
            error:
              data.message ||
              "Failed to send message. If this is the first time, check your inbox to activate the form.",
          },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
