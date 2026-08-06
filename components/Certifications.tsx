import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex text-xs uppercase tracking-widest text-gray-400 mb-3">
              {certifications.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              {certifications.headingBefore}
              <span className="text-[#ff2a2a] font-medium italic">
                {certifications.headingAccent}
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs md:text-right">
            {certifications.description}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 space-y-4">
          {certifications.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 rounded-2xl border border-gray-200 p-5 md:p-6 hover:bg-red-50/30 transition-colors"
            >
              <div className="lg:w-[35%] shrink-0">
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                  {item.provider}
                </p>
              </div>
              <p className="flex-1 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start lg:self-auto rounded-full border border-[#ff2a2a]/30 px-5 py-2.5 text-sm text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeWidth="1.8"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeWidth="1.8"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
