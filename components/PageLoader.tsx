"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/portfolio";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&";
const BRAND = site.brand;

function scrambleToward(target: string, progress: number) {
  return target
    .split("")
    .map((char, i) => {
      const unlock = (i + 1) / target.length;
      if (progress >= unlock) return char;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join("");
}

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [pct, setPct] = useState(0);
  const [display, setDisplay] = useState("·······");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let raf = 0;
    let leaveTimer = 0;
    let hideTimer = 0;
    let safetyTimer = 0;

    document.documentElement.classList.add("is-loading");

    const dismiss = () => {
      if (cancelled) return;
      setLeaving(true);
      document.documentElement.classList.remove("is-loading");
      hideTimer = window.setTimeout(() => {
        if (!cancelled) setVisible(false);
      }, 950);
    };

    const finish = () => {
      if (cancelled) return;
      setDisplay(BRAND);
      setPct(100);
      setDone(true);
      leaveTimer = window.setTimeout(dismiss, 320);
    };

    // Hard failsafe so the site never stays locked behind the loader
    safetyTimer = window.setTimeout(() => {
      if (!cancelled) finish();
    }, 5000);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      finish();
      return () => {
        cancelled = true;
        window.clearTimeout(leaveTimer);
        window.clearTimeout(hideTimer);
        window.clearTimeout(safetyTimer);
        document.documentElement.classList.remove("is-loading");
      };
    }

    const duration = 2400;
    const start = performance.now();

    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.min(100, Math.floor(eased * 100)));
      setDisplay(scrambleToward(BRAND, eased));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.clearTimeout(safetyTimer);
        finish();
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(safetyTimer);
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  if (!visible) return null;

  const digits = String(Math.min(pct, 99)).padStart(2, "0");
  const shown = done ? "100" : digits;

  return (
    <div
      className={`page-loader${leaving ? " is-leaving" : ""}${done ? " is-done" : ""}`}
      aria-live="polite"
      aria-busy={!done}
    >
      <div className="page-loader__noise" />
      <div className="page-loader__grid" />

      <div className="page-loader__top">
        <span className="page-loader__meta">Portfolio / {site.year}</span>
        <span className="page-loader__meta">Loading experience</span>
      </div>

      <div className="page-loader__center">
        <p className="page-loader__brand" aria-label={BRAND}>
          {display
            .padEnd(BRAND.length, "·")
            .slice(0, BRAND.length)
            .split("")
            .map((ch, i) => (
              <span
                key={i}
                className={`page-loader__char${
                  pct >= ((i + 1) / BRAND.length) * 100 ? " is-locked" : ""
                }`}
              >
                {ch}
              </span>
            ))}
          <span className="page-loader__dot">.</span>
        </p>

        <div className="page-loader__counter">
          <span className="page-loader__digits">{shown}</span>
          <span className="page-loader__percent">%</span>
        </div>
      </div>

      <div className="page-loader__bottom">
        <div className="page-loader__track">
          <div
            className="page-loader__fill"
            style={{ transform: `scaleX(${pct / 100})` }}
          />
        </div>
        <div className="page-loader__status">
          <span>{done ? "Ready" : "Initializing"}</span>
          <span>00 — {shown}</span>
        </div>
      </div>

      <div className="page-loader__wipe page-loader__wipe--top" />
      <div className="page-loader__wipe page-loader__wipe--bottom" />
    </div>
  );
}
