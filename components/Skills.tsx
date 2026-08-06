import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-70" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-xs uppercase tracking-wide text-[#ff2a2a] mb-6 border border-red-100 shadow-sm">
              {skills.badge}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              {skills.headingBefore}
              <span className="text-[#ff2a2a]">{skills.headingAccent}</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed">
            {skills.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {skills.categories.map((cat) => (
            <article
              key={cat.number}
              className={`rounded-[2rem] border p-7 md:p-8 ${cat.bg} ${cat.border} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-shadow`}
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-[#ff2a2a] text-sm mb-5">
                {cat.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {cat.category}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
