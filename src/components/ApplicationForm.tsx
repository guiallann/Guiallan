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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // opcional: se você quiser usar o dado internamente

    const payload = {
      token_rdstation: "0ddfe1c3bf16b93b5a897e8e750490cc", // seu token público
      identificador: "formulario-360-glow", // identificador do formulário
      nome: formData.nome,
      email: formData.email,
      empresa: formData.empresa,
      cargo: formData.cargo,
      faturamento: formData.faturamento,
      estagio: formData.estagio,
      ambicao: formData.ambicao,
      desconforto: formData.desconforto,
      desconforto_outro: formData.desconfortoOutro,
      metricas: formData.metricas.join(', '),
      momento: formData.momento
    };

    try {
      const response = await fetch("https://www.rdstation.com.br/api/1.3/conversions", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(payload as any).toString()
      });

      if (response.ok) {
        alert("Lead enviado com sucesso!");
      } else {
        alert("Erro ao enviar lead para o RD Station");
      }
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro ao enviar formulário.");
    }
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

        {/* ... (mantém o resto do form igual ao original) ... */}

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
