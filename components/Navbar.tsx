"use client";

import { useEffect, useState } from "react";
import { nav, site, hero } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = open || !scrolled;
  const logoClass = onHero ? "text-white" : "text-gray-900";
  const linkClass = scrolled
    ? "text-gray-600 hover:text-gray-950"
    : "text-white/80 hover:text-white";
  const menuIconClass = onHero ? "text-white" : "text-gray-900";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        open
          ? "bg-[#ff2a2a] py-4"
          : scrolled
            ? "bg-white/70 backdrop-blur-xl py-3 border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#home"
            className={`text-2xl tracking-tight transition-colors duration-500 ${logoClass}`}
          >
            {site.brand}{" "}
            <span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        <div className="hidden md:flex space-x-7 lg:space-x-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide relative group transition-colors duration-500 ${linkClass}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href={hero.resumeHref}
            target={hero.resumeHref.startsWith("http") ? "_blank" : undefined}
            rel={
              hero.resumeHref.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className={`px-5 py-2 rounded-full text-sm transition-all duration-500 border ${
              scrolled
                ? "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                : "border-white/30 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            Resume
          </a>
          <a
            href={hero.hireHref}
            className={`px-6 py-2.5 rounded-full text-sm transition-all duration-500 ${
              scrolled
                ? "bg-gray-900 text-white hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.25)]"
                : "bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-md"
            }`}
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`focus:outline-none p-2 transition-colors duration-500 ${menuIconClass}`}
            aria-label="Toggle navigation drawer menu"
            aria-expanded={open}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          open
            ? "max-h-[600px] py-6 opacity-100 bg-[#ff2a2a] shadow-2xl"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white hover:text-black text-base border-b border-white/10 pb-2.5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-4">
            <a
              href={hero.resumeHref}
              target={hero.resumeHref.startsWith("http") ? "_blank" : undefined}
              rel={
                hero.resumeHref.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-block px-6 py-3 rounded-full text-center text-sm border border-white/40 text-white hover:bg-white hover:text-black transition-colors"
            >
              Resume
            </a>
            <a
              href={hero.hireHref}
              onClick={() => setOpen(false)}
              className="inline-block px-6 py-3 rounded-full text-center text-sm bg-white text-gray-900 hover:bg-black hover:text-white transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
