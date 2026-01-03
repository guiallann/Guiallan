
import React from 'react';
import { AlertCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    { num: "01", text: "Crescem em faturamento, mas não em previsibilidade" },
    { num: "02", text: "Aumentam investimento, mas veem o CAC subir" },
    { num: "03", text: "Vendem mais, mas com margem pressionada" },
    { num: "04", text: "Escalam aquisição, mas não escalam LTV" },
    { num: "05", text: "Trabalham mais, mas sem ganho real de ROI" }
  ];

  return (
    <section className="py-32 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] text-white">
              Empresas não repetem ciclos por falta de trabalho. <br/>
              <span className="text-glow-acid italic">Repetem por falta de leitura.</span>
            </h2>
            <p className="text-zinc-500 text-xl font-tusker tracking-widest uppercase">
              O que destrói o equity de marcas B2B
            </p>
          </div>

          <div className="grid gap-12 mb-24">
            {points.map((point, i) => (
              <div key={i} className="group relative">
                <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-white/10 pb-10 group-hover:border-glow-acid/50 transition-colors">
                  <div className="relative">
                    <span className="text-4xl md:text-6xl font-serif text-white opacity-90 whitespace-nowrap">Erro {point.num}</span>
                    <div className="absolute -bottom-2 left-0 w-full h-2 bg-glow-acid scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  <span className="text-2xl md:text-4xl text-zinc-400 font-light group-hover:text-zinc-100 transition-colors leading-tight">
                    {point.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 border-l-4 border-glow-acid bg-zinc-900/50 rounded-r-3xl">
            <div className="flex items-start gap-8">
              <AlertCircle className="text-glow-acid mt-2" size={32} />
              <div>
                <p className="text-zinc-300 text-xl mb-4 font-light">
                  Isoladamente, esses sinais parecem ajustáveis.
                </p>
                <p className="text-white text-3xl md:text-5xl font-tusker tracking-wide uppercase leading-none">
                  Combinados, indicam ineficiência estrutural de crescimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
