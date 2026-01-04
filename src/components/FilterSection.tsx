
import React from 'react';
import { Check, X } from 'lucide-react';

const FilterSection: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-serif italic mb-4">Para quem é</h2>
          <div className="w-20 h-[1px] bg-glow-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* YES */}
          <div className="bg-emerald-950/20 border border-emerald-900/30 p-10 rounded-2xl">
            <h3 className="flex items-center gap-3 text-glow-acid font-bold uppercase tracking-widest text-sm-10 mb-8">
              <Check size={20} /> É para você se:
            </h3>
            <ul className="space-y-6">
              {[
                "Já opera um negócio em crescimento",
                "Quer melhorar eficiência, não apenas volume",
                "Se preocupa com CAC, LTV, churn e ROI",
                "Entende que percepção e estrutura impactam resultado financeiro",
                "Sabe que o próximo ciclo exige decisões mais maduras"
              ].map((item, i) => (
                <li key={i} className="text-zinc-300 leading-relaxed border-b border-white/5 pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NO */}
          <div className="bg-rose-950/20 border border-rose-900/30 p-10 rounded-2xl opacity-60">
            <h3 className="flex items-center gap-3 text-rose-400 font-bold uppercase tracking-widest text-sm-10 mb-8">
              <X size={20} /> Não é para você se:
            </h3>
            <ul className="space-y-6">
              {[
                "Busca atalhos táticos",
                "Quer apenas “ajustar marketing”",
                "Evita encarar gargalos reais",
                "Confunde crescimento com esforço"
              ].map((item, i) => (
                <li key={i} className="text-zinc-400 leading-relaxed italic border-b border-white/5 pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
