
import React, { useState } from 'react';
import { AppStatus } from '../types';
import { Loader2 } from 'lucide-react';

interface ApplicationFormProps {
  onSubmit: (data: any) => void;
  status: AppStatus;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSubmit, status }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    faturamento: '',
    estagio: '',
    ambicao: '',
    desconforto: '',
    desconfortoOutro: '',
    metricas: [] as string[],
    momento: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleMetricaToggle = (metrica: string) => {
    setFormData(prev => ({
      ...prev,
      metricas: prev.metricas.includes(metrica)
        ? prev.metricas.filter(m => m !== metrica)
        : [...prev.metricas, metrica]
    }));
  };

  const inputClasses = "w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-5 text-zinc-200 focus:outline-none focus:border-glow-acid/50 transition-all placeholder:text-zinc-700 font-light text-lg";
  const labelClasses = "block text-[16px] font-serif text-zinc-200 uppercase tracking-[0.1em] mb-4";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-8xl font-serif italic mb-8 text-white">Aplicação Estratégica</h2>
        <p className="text-zinc-500 font-tusker tracking-[0.2em] uppercase text-base max-w-2xl mx-auto">
          Confirmamos acesso apenas para operações com maturidade estrutural.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-20 bg-zinc-900/20 p-8 md:p-20 rounded-[3rem] border border-white/5 backdrop-blur-md">
        
        {/* Step 1: Basic Info */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <span className="w-12 h-12 rounded-full border border-glow-acid text-glow-acid flex items-center justify-center text-xl font-tusker">01</span>
            <h3 className="text-[20px] font-serif uppercase tracking-[0.1em] text-zinc-100">Dados Básicos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className={labelClasses}>Nome completo</label>
              <input required type="text" className={inputClasses} placeholder="Seu nome" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} />
            </div>
            <div>
              <label className={labelClasses}>E-mail corporativo</label>
              <input required type="email" className={inputClasses} placeholder="email@empresa.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className={labelClasses}>Empresa</label>
              <input required type="text" className={inputClasses} placeholder="Nome da empresa" value={formData.empresa} onChange={e => setFormData({...formData, empresa: e.target.value})} />
            </div>
            <div>
              <label className={labelClasses}>Cargo / Função</label>
              <input required type="text" className={inputClasses} placeholder="CEO, CMO, Diretor..." value={formData.cargo} onChange={e => setFormData({...formData, cargo: e.target.value})} />
            </div>
          </div>
        </section>

        {/* Step 2: Context */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <span className="w-12 h-12 rounded-full border border-glow-acid text-glow-acid flex items-center justify-center text-xl font-tusker">02</span>
            <h3 className="text-[20px] font-serif uppercase tracking-[0.1em] text-zinc-100">Escopo de Operação</h3>
          </div>
          
          <div className="mb-12">
            <label className={labelClasses}>Faturamento anual estimado *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Até R$ 2 milhões / ano",
                "R$ 2 a R$ 10 milhões / ano",
                "R$ 10 a R$ 50 milhões / ano",
                "R$ 50 a R$ 200 milhões / ano",
                "R$ 200 a R$ 500 milhões / ano",
                "Acima de R$ 500 milhões / ano"
              ].map(f => (
                <label key={f} className={`cursor-pointer flex items-center p-5 border rounded-xl transition-all text-base font-medium ${formData.faturamento === f ? 'bg-glow-acid border-glow-acid text-black' : 'bg-zinc-900/40 border-white/5 text-zinc-500 hover:border-white/20'}`}>
                  <input required type="radio" name="faturamento" className="hidden" value={f} checked={formData.faturamento === f} onChange={e => setFormData({...formData, faturamento: e.target.value})} />
                  {f}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClasses}>Estágio atual do negócio *</label>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Estrutura em consolidação",
                "Crescimento com fricções claras",
                "Crescimento acelerado exigindo mais estrutura",
                "Operação madura buscando eficiência e previsibilidade"
              ].map(s => (
                <label key={s} className={`cursor-pointer flex items-center p-5 border rounded-xl transition-all text-base font-medium ${formData.estagio === s ? 'bg-glow-acid border-glow-acid text-black' : 'bg-zinc-900/40 border-white/5 text-zinc-500 hover:border-white/20'}`}>
                  <input required type="radio" name="estagio" className="hidden" value={s} checked={formData.estagio === s} onChange={e => setFormData({...formData, estagio: e.target.value})} />
                  {s}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Step 3: Strategic Questions */}
        <section className="space-y-12">
          <div className="flex items-center gap-6 mb-12">
            <span className="w-12 h-12 rounded-full border border-glow-acid text-glow-acid flex items-center justify-center text-xl font-tusker">03</span>
            <h3 className="text-[20px] font-serif uppercase tracking-[0.1em] text-zinc-100">Visão Estratégica</h3>
          </div>

          <div>
            <label className={labelClasses}>1. Ambição: O que deve ser diferente no final de 2026?</label>
            <textarea required rows={4} className={inputClasses} placeholder="Sua visão..." value={formData.ambicao} onChange={e => setFormData({...formData, ambicao: e.target.value})} />
          </div>

          <div>
            <label className={labelClasses}>2. Principal ponto que limita o crescimento hoje?</label>
            <select required className={inputClasses} value={formData.desconforto} onChange={e => setFormData({...formData, desconforto: e.target.value})}>
              <option value="">Selecione uma opção...</option>
              <option value="Falta de previsibilidade">Falta de previsibilidade de receita</option>
              <option value="Estrutura não acompanha">Estrutura não acompanha o crescimento</option>
              <option value="CAC alto">CAC alto ou ROI pressionado</option>
              <option value="Marketing/Vendas desalinhados">Marketing e vendas desalinhados</option>
              <option value="Dependência de pessoas">Dependência excessiva de pessoas-chave</option>
              <option value="Outro">Outro (especifique abaixo)</option>
            </select>
          </div>

          <div>
            <label className={labelClasses}>3. Métricas de decisão priorizadas hoje?</label>
            <div className="flex flex-wrap gap-4">
              {["CAC", "LTV", "Churn", "Margem", "ROI", "Receita"].map(m => (
                <button type="button" key={m} onClick={() => handleMetricaToggle(m)} className={`px-8 py-4 rounded-full text-base font-tusker uppercase tracking-widest transition-all ${formData.metricas.includes(m) ? 'bg-glow-acid text-black' : 'bg-zinc-800 text-zinc-500 hover:text-zinc-200 border border-white/5'}`}>
                  {m}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="pt-16 border-t border-white/5">
          <button 
            type="submit" 
            disabled={status === AppStatus.SUBMITTING}
            className="w-full flex items-center justify-center gap-4 bg-glow-acid text-black py-8 font-tusker uppercase tracking-[0.5em] text-2xl rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_20px_60px_-15px_rgba(204,255,0,0.6)]"
          >
            {status === AppStatus.SUBMITTING ? (
              <>
                <Loader2 className="animate-spin" size={28} />
                Enviando aplicação...
              </>
            ) : "Confirmar Aplicação Estratégica"}
          </button>
          <p className="text-center text-base text-zinc-600 mt-12 font-tusker uppercase tracking-[0.3em]">
            Clareza primeiro. Decisão depois.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
