import Image from "next/image";
import { about, hero } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function About() {
  const parts = about.body.split(about.highlightName);

  return (
    <section id="about" className="relative bg-[#ff2a2a] text-white pt-4 pb-28 md:pb-36">
      <div className="absolute left-8 top-10 hidden md:block">
        <div className="star-burst opacity-80" />
      </div>
      <div className="absolute right-16 top-6 hidden md:block">
        <div className="star-burst scale-75 opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="left" className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute left-1/2 -top-16 w-[2px] h-16 bg-black/80 -translate-x-1/2 hidden md:block" />
              <div className="absolute left-1/2 -top-3 w-8 h-3 rounded-sm bg-black -translate-x-1/2 hidden md:block" />
              <div className="relative w-[260px] sm:w-[300px] aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-[#111] border-[6px] border-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.4)] rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={hero.portrait}
                  alt="About profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight">
              {about.heading}
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/95 max-w-xl">
              {parts[0]}
              <span className="font-black text-black">{about.highlightName}</span>
              {parts[1]}
            </p>

            <div className="mt-10 flex items-center gap-8 flex-wrap">
              {about.techIcons.map((icon) => (
                <Image
                  key={icon.name}
                  src={icon.src}
                  alt={icon.name}
                  width={72}
                  height={72}
                  className="h-14 w-auto object-contain opacity-95"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="w-full h-20 md:h-28">
          <path
            fill="#f9fafb"
            d="M0,80 C320,140 560,20 800,60 C1040,100 1280,130 1440,70 L1440,140 L0,140 Z"
          />
        </svg>
      </div>
    </section>
  );
}
