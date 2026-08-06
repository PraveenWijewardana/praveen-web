"use client";

import { useRef, useState } from "react";
import { hero, socials } from "@/data/portfolio";

function SocialIcon({ label }: { label: string }) {
  const common = "w-5 h-5";
  switch (label) {
    case "GitHub":
      return (
        <svg className={common} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={common} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={common} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg className={common} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#ff2a2a] text-white overflow-hidden pb-8"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-28 md:pt-32 pb-16 md:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">
              {hero.greeting}
            </h1>
            <p className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-white/95">
              {hero.role}
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-md">
              {hero.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm text-black hover:-translate-y-0.5 transition-transform"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={hero.resumeHref}
                className="w-10 h-10 rounded-full bg-black/20 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white hover:text-black transition-colors"
                aria-label="Resume"
                title="Resume"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.8" d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                  <path strokeWidth="1.8" d="M14 3v5h5M8 13h8M8 17h6" />
                </svg>
              </a>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/20 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white hover:text-black transition-colors"
                  aria-label={s.label}
                  title={s.label}
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={hero.video}
                poster={hero.portrait}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <button
              type="button"
              onClick={toggleMute}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 flex flex-col items-center gap-2"
            >
              <span className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
                {muted ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12a4.5 4.5 0 0 0-1.5-3.3v1.76l1.45 1.45c.03-.3.05-.6.05-.91zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8.7v6.6a4.5 4.5 0 0 0 2.5-3.3zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </span>
              <span className="text-[9px] tracking-[0.15em] uppercase text-white/80">
                {muted ? "Unmute Reel" : "Mute Reel"}
              </span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
