import Image from "next/image";
import { projects, projectsSection } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg-strong pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-20">
          <Reveal direction="up">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-500 mb-6 shadow-sm">
              {projectsSection.badge}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              {projectsSection.headingBefore}
              <span className="text-[#ff2a2a]">{projectsSection.headingAccent}</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed">
              {projectsSection.description}
            </p>
          </Reveal>
        </div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal
                key={project.title}
                as="article"
                direction={reverse ? "right" : "left"}
                className="rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                <div
                  className={`flex flex-col ${
                    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-8 lg:gap-12 p-6 sm:p-9 md:p-12 lg:p-12 items-center`}
                >
                  <div className="w-full lg:w-[45%] space-y-5">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-[#ff2a2a] font-medium">{project.subtitle}</p>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                        Key Features
                      </p>
                      <ul className="space-y-2.5">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <span className="mt-0.5 text-[#ff2a2a] shrink-0">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm hover:bg-[#ff2a2a] transition-colors group"
                    >
                      Explore Project
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>

                  <div className="w-full lg:w-[55%]">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
