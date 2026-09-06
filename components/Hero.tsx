"use client";

import { useEffect, useRef, useState } from "react";
import { hero, socials } from "@/data/portfolio";

function SocialIcon({ label }: { label: string }) {
  const common = "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6";
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
  const [, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const p = video.play();
      if (p) {
        p.then(() => setPlaying(true)).catch(() => {});
      }
    };

    const onPlaying = () => setPlaying(true);

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", onPlaying);

    // Fallback interaction triggers in case mobile browser autoplay is restricted
    const onUserInteraction = () => {
      if (video.paused) {
        video.play().then(() => setPlaying(true)).catch(() => {});
      }
    };
    window.addEventListener("touchstart", onUserInteraction, { passive: true, once: true });
    window.addEventListener("click", onUserInteraction, { passive: true, once: true });
    window.addEventListener("scroll", onUserInteraction, { passive: true, once: true });

    // Kick after intro loader removes scroll lock
    const boot = window.setTimeout(tryPlay, 100);
    const retry = window.setTimeout(tryPlay, 800);
    const retryLate = window.setTimeout(tryPlay, 2800);

    if (video.readyState >= 2) tryPlay();

    return () => {
      window.clearTimeout(boot);
      window.clearTimeout(retry);
      window.clearTimeout(retryLate);
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("click", onUserInteraction);
      window.removeEventListener("scroll", onUserInteraction);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const soundIcon = muted ? (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-black transition-colors"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z"
      />
    </svg>
  ) : (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-black transition-colors"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
      />
    </svg>
  );

  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100svh] overflow-hidden bg-[#0a0a0a] text-white flex flex-col justify-center"
    >
      {/* Background video: responsive focal position keeps subject framed on phones, tablets, and widescreen */}
      <video
        ref={videoRef}
        src={hero.video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Praveen Wijewardana — Software Engineer intro reel"
        className="absolute top-0 left-0 w-full h-full object-cover object-[78%_center] sm:object-[75%_center] lg:object-center z-0 pointer-events-none"
      />

      {/* Directional gradients: vertical dark vignette on mobile/tablets, horizontal fade on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/90 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/45 lg:to-transparent z-10 pointer-events-none" />

      {/* Main hero content */}
      <div className="relative z-20 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center text-left w-full pt-24 pb-24 sm:pt-28 sm:pb-28 lg:py-32 my-auto">
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 tracking-tight leading-[1.1] font-black">
            Hi, I&apos;m Praveen{" "}
            <span className="sr-only">Wijewardana</span>
            <br />
            <span className="font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl opacity-90 block mt-1">
              {hero.role}
            </span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md mb-6 sm:mb-8">
            {hero.bio}
          </p>

          <div className="flex flex-row items-center gap-3 sm:gap-4 w-full flex-wrap">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-black hover:-translate-y-0.5 transition-transform shadow-md"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <a
              href={hero.resumeHref}
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-white hover:text-black transition-colors"
              aria-label="Resume"
              title="Resume"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-white hover:text-black transition-colors"
                aria-label={s.label}
                title={s.label}
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Sound toggle: placed in right column */}
        <div className="hidden lg:flex flex-col items-center self-center">
          <button
            type="button"
            onClick={toggleMute}
            className="group flex flex-col items-center"
            aria-label={muted ? "Unmute video reel" : "Mute video sound"}
          >
            <div className="w-16 h-16 rounded-full border border-white/25 bg-black/30 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl">
              {soundIcon}
            </div>
            <span className="text-white text-[11px] tracking-widest uppercase opacity-75 group-hover:opacity-100 transition-opacity mt-1.5 whitespace-nowrap">
              {muted ? "Unmute Reel" : "Mute Sound"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Sound toggle: pinned to bottom-right of the hero section */}
      <button
        type="button"
        onClick={toggleMute}
        className="lg:hidden absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex flex-col items-center group"
        aria-label={muted ? "Unmute video reel" : "Mute video sound"}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/25 bg-black/50 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-active:scale-95 transition-all shadow-xl">
          {soundIcon}
        </div>
        <span className="text-white text-[8px] sm:text-[9px] tracking-widest uppercase opacity-75 mt-1 whitespace-nowrap">
          {muted ? "Unmute" : "Mute"}
        </span>
      </button>

      {/* Scroll indicator for large screens */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
