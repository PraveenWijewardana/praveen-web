import { expertise } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Expertise() {
  return (
    <section id="expertise" className="relative bg-gray-50 py-24 md:py-32 overflow-hidden grid-bg">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-24">
          <Reveal direction="up">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-500 mb-6 shadow-sm">
              {expertise.badge}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] max-w-lg">
              {expertise.heading}
              <span className="inline-block ml-2 text-gray-400 font-medium text-3xl align-middle">
                ↘
              </span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={140}>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md lg:mt-16">
              {expertise.description}
            </p>
          </Reveal>
        </div>

        <div className="relative min-h-[auto] md:min-h-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:block md:relative md:h-[1650px]">
            {expertise.cards.map((card, i) => {
              const positions = [
                "md:top-[10px] md:left-[5%]",
                "md:top-[450px] md:right-[5%]",
                "md:top-[700px] md:left-[5%]",
                "md:top-[1020px] md:right-[10%]",
                "md:top-[1340px] md:left-[15%]",
              ];
              const tilts = [
                "md:-rotate-3",
                "md:rotate-3",
                "md:rotate-2",
                "md:-rotate-2",
                "md:rotate-1",
              ];
              const isRed = card.variant === "red";

              return (
                <Reveal
                  key={card.number}
                  direction="scale"
                  delay={i * 100}
                  className={`relative md:absolute md:w-[350px] lg:w-[380px] ${positions[i] ?? ""}`}
                >
                  <article
                    className={`
                      relative rounded-[1.5rem] p-7 md:p-8 shadow-[0_20px_50px_rgba(255,42,42,0.4)]
                      ${tilts[i] ?? ""}
                      ${isRed ? "bg-[#ff2a2a] text-white" : "bg-white text-gray-900 border border-gray-100"}
                      transition-transform duration-500 hover:rotate-0 hover:-translate-y-1
                    `}
                  >
                    {!isRed && (
                      <div className="absolute left-1/2 top-3 w-3 h-3 rounded-full bg-gray-200 -translate-x-1/2" />
                    )}
                    <div
                      className={`text-sm mb-4 ${isRed ? "text-white/70" : "text-gray-400"}`}
                    >
                      {card.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{card.title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${isRed ? "text-white/90" : "text-gray-500"}`}
                    >
                      {card.text}
                    </p>
                    <div
                      className={`absolute -bottom-3 left-4 right-4 h-3 rounded-b-2xl ${
                        isRed ? "bg-[#ff2a2a]/70" : "bg-[#ff2a2a]"
                      } opacity-80 blur-[1px]`}
                    />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
