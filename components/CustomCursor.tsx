"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, summary, .cursor-pointer";

type Vec = { x: number; y: number };

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const mouse = useRef<Vec>({ x: -200, y: -200 });
  const points = useRef<Vec[]>(
    Array.from({ length: 8 }, () => ({ x: -200, y: -200 })),
  );
  const hover = useRef(false);
  const press = useRef(false);
  const active = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !motion.matches);
    sync();
    fine.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    document.documentElement.classList.add("has-custom-cursor");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!active.current) {
        active.current = true;
        for (const p of points.current) {
          p.x = e.clientX;
          p.y = e.clientY;
        }
      }
    };

    const onOver = (e: MouseEvent) => {
      hover.current = Boolean((e.target as Element | null)?.closest(INTERACTIVE));
    };

    const onDown = () => {
      press.current = true;
    };
    const onUp = () => {
      press.current = false;
    };
    const onLeave = () => {
      active.current = false;
      hover.current = false;
      press.current = false;
    };
    const onEnter = () => {
      active.current = true;
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      if (!active.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const pts = points.current;
      pts[0].x += (mouse.current.x - pts[0].x) * 0.45;
      pts[0].y += (mouse.current.y - pts[0].y) * 0.45;
      for (let i = 1; i < pts.length; i++) {
        const lag = 0.32 - i * 0.02;
        pts[i].x += (pts[i - 1].x - pts[i].x) * lag;
        pts[i].y += (pts[i - 1].y - pts[i].y) * lag;
      }

      const base = hover.current ? 28 : press.current ? 10 : 16;

      // Soft ribbon stroke through the chain
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const cx = (pts[i].x + pts[i + 1].x) / 2;
        const cy = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx, cy);
      }
      ctx.strokeStyle = "rgba(255, 42, 42, 0.35)";
      ctx.lineWidth = hover.current ? 22 : 10;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // Metaball-style dots along the trail
      for (let i = pts.length - 1; i >= 0; i--) {
        const t = 1 - i / (pts.length - 1);
        const r = base * (0.35 + t * 0.65);
        const alpha = 0.25 + t * 0.75;
        const g = ctx.createRadialGradient(
          pts[i].x,
          pts[i].y,
          0,
          pts[i].x,
          pts[i].y,
          r * 1.6,
        );
        g.addColorStop(0, `rgba(255, 42, 42, ${alpha})`);
        g.addColorStop(0.55, `rgba(255, 42, 42, ${alpha * 0.45})`);
        g.addColorStop(1, "rgba(255, 42, 42, 0)");
        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(pts[i].x, pts[i].y, r * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Crisp core
      const coreR = hover.current ? 6 : press.current ? 4 : 5;
      ctx.beginPath();
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "rgba(255, 42, 42, 0.9)";
      ctx.shadowBlur = 18;
      ctx.arc(pts[0].x, pts[0].y, coreR, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Outer ring on hover
      if (hover.current) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
        ctx.lineWidth = 2;
        ctx.arc(pts[0].x, pts[0].y, 34, 0, Math.PI * 2);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="custom-cursor-canvas"
      aria-hidden="true"
    />
  );
}
