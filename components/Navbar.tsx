"use client";

import { useState } from "react";
import { nav, site, hero } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#home" className="text-white text-xl tracking-tight font-black">
          {site.brand} <span className="opacity-80">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={hero.resumeHref}
            className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition-colors"
          >
            Resume
          </a>
          <a
            href={hero.hireHref}
            className="rounded-full bg-white px-5 py-2 text-sm text-[#ff2a2a] hover:bg-white/90 transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href={hero.resumeHref}
              className="flex-1 text-center rounded-full border border-white/40 px-4 py-2 text-sm text-white"
            >
              Resume
            </a>
            <a
              href={hero.hireHref}
              className="flex-1 text-center rounded-full bg-white px-4 py-2 text-sm text-[#ff2a2a]"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
