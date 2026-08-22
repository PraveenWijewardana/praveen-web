"use client";

import { FormEvent, useState } from "react";
import { contactForm } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mobile = String(data.get("mobile") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    setStatus("loading");
    setError("");

    try {
      if (website) {
        setStatus("success");
        form.reset();
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          mobile,
          message,
          website: "",
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Failed to send. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-[#111111] pt-24 md:pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-x-0 top-16 md:top-20 text-center pointer-events-none select-none">
        <p className="text-[18vw] md:text-[16vw] font-black leading-none text-white/15 tracking-tighter">
          {contactForm.heading.toUpperCase()}
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <Reveal
          direction="scale"
          className="rounded-[2rem] bg-[#ff2a2a] p-6 sm:p-9 md:p-12 shadow-[0_20px_50px_rgba(255,42,42,0.4)]"
        >
          <p className="text-white/80 text-xs tracking-[0.2em] uppercase mb-8">
            {contactForm.label}
          </p>

          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="space-y-6">
              {(
                [
                  ["firstName", contactForm.fields.firstName],
                  ["lastName", contactForm.fields.lastName],
                  ["email", contactForm.fields.email],
                  ["mobile", contactForm.fields.mobile],
                ] as const
              ).map(([name, label]) => (
                <label key={name} className="block">
                  <span className="text-white text-sm">{label}</span>
                  <input
                    name={name}
                    required={name !== "mobile"}
                    type={name === "email" ? "email" : name === "mobile" ? "tel" : "text"}
                    disabled={status === "loading"}
                    className="mt-2 w-full bg-transparent border-0 border-b border-white/40 pb-2.5 text-white placeholder-white/50 focus:border-white focus:outline-none disabled:opacity-60"
                  />
                </label>
              ))}
            </div>

            <div className="flex flex-col">
              <label className="flex-1 flex flex-col">
                <span className="sr-only">{contactForm.fields.message}</span>
                <textarea
                  name="message"
                  required
                  disabled={status === "loading"}
                  placeholder={contactForm.fields.message}
                  className="flex-1 min-h-[180px] md:min-h-[220px] w-full resize-none bg-transparent border-0 border-b border-white/40 pb-2.5 text-white placeholder-white focus:border-white focus:outline-none disabled:opacity-60"
                />
              </label>

              <label className="mt-6 flex items-start gap-3 text-sm text-white/90">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  disabled={status === "loading"}
                  className="mt-1 rounded border-white/40"
                />
                <span>{contactForm.consent}</span>
              </label>

              {(status === "success" || status === "error") && (
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    status === "success" ? "text-white" : "text-black/85"
                  }`}
                  role="status"
                >
                  {status === "success"
                    ? "Thanks — your message was sent. I’ll get back to you soon."
                    : error}
                </p>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-3 text-white hover:bg-white hover:text-[#ff2a2a] transition-colors disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "loading"
                    ? "Sending…"
                    : status === "success"
                      ? "Sent ✓"
                      : contactForm.submit}
                  <span>→</span>
                </button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
