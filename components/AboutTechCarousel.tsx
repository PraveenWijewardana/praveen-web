"use client";

import Image from "next/image";
import { about } from "@/data/portfolio";

export function AboutTechCarousel() {
  const icons = about.techIcons;
  const track = [...icons, ...icons];

  return (
    <div className="about-tech-marquee mt-10" aria-label="Languages and tools">
      <div className="about-tech-marquee__track">
        {track.map((icon, i) => (
          <div
            key={`${icon.name}-${i}`}
            className="about-tech-marquee__item"
            title={icon.name}
            aria-hidden={i >= icons.length}
          >
            <Image
              src={icon.src}
              alt={i < icons.length ? icon.name : ""}
              width={56}
              height={56}
              className="about-tech-marquee__img h-11 w-11 md:h-12 md:w-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
