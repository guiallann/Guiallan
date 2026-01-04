
import React from 'react';
import { Target, TrendingUp, Filter, Layers, PieChart } from 'lucide-react';

const WhatIsIt: React.FC = () => {
  const vectors = [
    {
      title: "Posicionamento & Percepção",
      icon: <Target className="text-glow-acid" />,
      items: ["Como sua empresa é percebida e comparada", "Impacto dessa percepção em conversão e preço", "Onde valor é construído — ou diluído"]
    },
    {
      title: "Crescimento & Aquisição",
      icon: <TrendingUp className="text-glow-acid" />,
      items: ["Origem real do crescimento atual", "Sustentabilidade do CAC", "Relação entre investimento e retorno", "Previsibilidade vs. picos circunstanciais"]
    },
    {
      title: "Funil, Vendas & Retenção",
      icon: <Filter className="text-glow-acid" />,
      items: ["Coerência entre atração e fechamento", "Qualidade real de demanda vs. volume", "Gargalos invisíveis no funil", "Churn e lifetime do cliente"]
    },
    {
      title: "Estrutura, Processos & Escala",
      icon: <Layers className="text-glow-acid" />,
      items: ["Capacidade operacional de sustentar crescimento", "Dependência excessiva de você como decisor", "Escalabilidade real vs. crescimento no braço", "Custo estrutural do modelo"]
    },
    {
      title: "Governança & Decisão",
      icon: <PieChart className="text-glow-acid" />,
      items: ["Onde decisões estão concentradas", "Dados que existem vs. dados que orientam", "Clareza de prioridades e foco estratégico", "Capacidade de decidir sem urgência"]
    }
  ];

  return (
    <section className="relative pt-0 pb-32 bg-black overflow-hidden">
      {/* CEO/Partners Background Header */}
      <div className="absolute top-0 left-0 w-full h-[500px] md:h-[700px] z-0 overflow-hidden">
        <img 
          src="https://glowholding.com.br/wp-content/uploads/2026/01/team.jpg" 
          alt="Glow Partners" 
          className="w-full h-full object-cover md:object-top grayscale brightness-[0.7] opacity-80"
          style={{ objectPosition: 'left 20%' }}
        />
        {/* Precise Gradients for deep immersion */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="pt-[380px] md:pt-[550px] mb-20">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white leading-tight">
              O que é o <span className="italic text-glow-acid">Diagnóstico 360</span>
            </h2>
            <p className="text-zinc-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              É uma leitura executiva integrada, que analisa o seu negócio como um sistema — não como áreas isoladas. Cruzamos, de forma estratégica, os cinco vetores que determinam crescimento sustentável:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vectors.map((vector, i) => (
            <div key={i} className="group p-8 bg-zinc-900/40 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-glow-acid/30 transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-glow-acid/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {vector.icon}
              </div>
              <h3 className="text-[22px] font-tusker tracking-[0.1em] uppercase mb-6 text-zinc-100">{vector.title}</h3>
              <ul className="space-y-4">
                {vector.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[15px] text-zinc-400 font-light leading-relaxed">
                    <div className="mt-2 w-1 h-1 bg-glow-acid/60 rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsIt;
