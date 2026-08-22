import { education } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="relative bg-gray-50 py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <Reveal
          direction="up"
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
        >
          <div>
            <span className="inline-flex text-xs uppercase tracking-widest text-gray-400 mb-2">
              {education.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {education.headingBefore}
              <span className="text-[#ff2a2a]">{education.headingAccent}</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs sm:text-right">
            {education.description}
          </p>
        </Reveal>

        <div className="border-t border-gray-200 pt-6 space-y-3">
          {education.items.map((item, i) => (
            <Reveal
              key={`${item.degree}-${item.institution}`}
              direction="up"
              delay={i * 60}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 md:px-5 md:py-4 hover:border-[#ff2a2a]/25 transition-colors"
            >
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug">
                  {item.degree}
                </h3>
                <p className="text-xs md:text-sm text-[#ff2a2a] font-medium mt-0.5">
                  {item.institution}
                  <span className="text-gray-400 font-normal"> · {item.location}</span>
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <p className="text-[11px] uppercase tracking-wide text-gray-400 whitespace-nowrap">
                  {item.period}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {item.highlights.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] md:text-xs text-gray-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
