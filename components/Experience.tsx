import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex text-xs uppercase tracking-widest text-gray-400 mb-3">
              {experience.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              {experience.headingBefore}
              <span className="text-[#ff2a2a] font-medium italic">
                {experience.headingAccent}
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs md:text-right">
            {experience.description}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 space-y-4">
          {experience.items.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-5 md:p-6 hover:bg-red-50/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[#ff2a2a] font-medium mt-1">
                    {item.company}
                  </p>
                </div>
                <div className="lg:text-right">
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    {item.period}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.location}</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <span className="mt-0.5 text-[#ff2a2a] shrink-0">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
