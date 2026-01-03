
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Deliverables: React.FC = () => {
  const deliveries = [
    "uma leitura clara de ineficiências invisíveis",
    "entendimento objetivo de onde o CAC pressiona seu modelo",
    "visão real da sustentação de LTV e churn",
    "identificação dos pontos que consomem mais esforço com menor retorno",
    "mapa dos riscos estruturais que afetam previsibilidade e ROI",
    "base concreta para decisões estratégicas em 2026"
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-glow-acid/5 to-transparent border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 italic leading-tight text-white">
              O que o Diagnóstico entrega
            </h2>
            <p className="text-zinc-400 mb-10 text-lg font-light leading-relaxed">
              Ao final da leitura, você sai com um instrumento prático de direcionamento estratégico.
            </p>
            <div className="grid gap-6">
              {deliveries.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <CheckCircle size={22} className="text-glow-acid mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-zinc-300 text-lg leading-snug font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative group">
            {/* Image Container with Glow Effect */}
            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img 
                src="https://glowholding.com.br/wp-content/uploads/2026/01/board.jpg" 
                alt="Diagnóstico Executivo em Ação" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-black text-center">
                <span className="block text-3xl font-tusker text-glow-acid leading-none mb-1">BOARD GRADE</span>
                <span className="text-[10px] text-zinc-400 font-tusker uppercase tracking-[0.2em]">Executivo & Estratégico</span>
              </div>
            </div>

            {/* Decorative element background */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-glow-acid/80 rounded-full animate-pulse z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-white/5 rounded-full z-0"></div>
          </div>
        </div>
        
        <div className="mt-32 text-center max-w-5xl mx-auto">
          <p className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Não é um relatório para arquivar. <br className="hidden md:block"/> 
            <span className="text-glow-acid italic font-bold">É um instrumento de decisão.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
