"use client";

import { FormEvent, useState } from "react";
import { contactForm } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
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
                    type={name === "email" ? "email" : "text"}
                    className="mt-2 w-full bg-transparent border-0 border-b border-white/40 pb-2.5 text-white placeholder-white/50 focus:border-white focus:outline-none"
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
                  placeholder={contactForm.fields.message}
                  className="flex-1 min-h-[180px] md:min-h-[220px] w-full resize-none bg-transparent border-0 border-b border-white/40 pb-2.5 text-white placeholder-white focus:border-white focus:outline-none"
                />
              </label>

              <label className="mt-6 flex items-start gap-3 text-sm text-white/90">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-white/40"
                />
                <span>{contactForm.consent}</span>
              </label>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-3 text-white hover:bg-white hover:text-[#ff2a2a] transition-colors"
                >
                  {sent ? "Sent ✓" : contactForm.submit}
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
