
import React from 'react';

const Thesis: React.FC = () => {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Rotating Text Circle Decoration */}
      <div className="absolute -top-20 -left-20 w-80 h-80 opacity-60 pointer-events-none z-0 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-white font-tusker text-[6px] uppercase tracking-[0.2em]">
            <textPath href="#circlePath">
              LEGACY GLOBAL EQUITY • LEGACY GLOBAL EQUITY • LEGACY GLOBAL EQUITY • 
            </textPath>
          </text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="text-glow-acid text-[16px] font-tusker tracking-[0.4em] uppercase mb-8 block">A TESE EXECUTIVA</span>
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] mb-12 text-white">
              Empresas que jogam alto nível não começam um novo ciclo <span className="italic underline decoration-glow-acid/40 underline-offset-[12px]">investindo mais.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 space-y-12 lg:pt-24">
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed">
              Elas começam entendendo as variáveis que realmente movem o ponteiro:
            </p>
            <ul className="space-y-8">
              {[
                "Onde o crescimento é realmente eficiente",
                "Onde o modelo começa a perder tração",
                "Onde valor está sendo criado ou destruído"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6 border-b border-white/5 pb-8 group">
                  <span className="text-glow-acid font-tusker text-4xl leading-none group-hover:scale-125 transition-transform duration-500">0{i+1}</span>
                  <span className="text-zinc-200 text-xl font-medium pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 max-w-5xl mx-auto bg-zinc-900/50 p-16 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
             <span className="font-tusker text-[15rem] leading-none">GLOW</span>
          </div>
          <blockquote className="text-3xl md:text-6xl font-serif italic text-zinc-100 leading-[1.2]">
            "O modelo atual do seu negócio sustenta crescimento com <span className="text-glow-acid not-italic">eficiência econômica</span> ou apenas mantém resultados à custa de mais esforço?"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
