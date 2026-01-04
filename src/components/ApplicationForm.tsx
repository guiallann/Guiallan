import React, { useState } from 'react';
import { AppStatus } from '../types';
import { Loader2 } from 'lucide-react';

interface ApplicationFormProps {
  onSubmit: (data: any) => void;
  status: AppStatus;
}

const RD_TOKEN_PUBLICO = '0ddfe1c3bf16b93b5a897e8e750490cc';
const RD_IDENTIFICADOR = 'aplicacao-estrategica-glow';

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

    // mantém o fluxo interno (status, UI, etc)
    onSubmit(formData);

    // payload para o RD Station
    const payload: Record<string, string> = {
      token_rdstation: RD_TOKEN_PUBLICO,
      identificador: RD_IDENTIFICADOR,
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
      await fetch('https://www.rdstation.com.br/api/1.3/conversions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(payload).toString()
      });
    } catch (error) {
      console.error('Erro ao enviar para RD Station:', error);
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

  const inputClasses =
    'w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-5 text-zinc-200 focus:outline-none focus:border-glow-acid/50 transition-all placeholder:text-zinc-700 font-light text-lg';

  const labelClasses =
    'block text-[16px] font-serif text-zinc-200 uppercase tracking-[0.1em] mb-4';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-8xl font-serif italic mb-8 text-white">
          Aplicação Estratégica
        </h2>
        <p className="text-zinc-500 font-tusker tracking-[0.2em] uppercase text-base max-w-2xl mx-auto">
          Confirmamos acesso apenas para operações com maturidade estrutural.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-20 bg-zinc-900/20 p-8 md:p-20 rounded-[3rem] border border-white/5 backdrop-blur-md"
      >

        {/* STEP 1 */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <span className="w-12 h-12 rounded-full border border-glow-acid text-glow-acid flex items-center justify-center text-xl font-tusker">
              01
            </span>
            <h3 className="text-[20px] font-serif uppercase tracking-[0.1em] text-zinc-100">
              Dados Básicos
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className={labelClasses}>Nome completo</label>
              <input
                required
                type="text"
                className={inputClasses}
                value={formData.nome}
                onChange={e => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div>
              <label className={labelClasses}>E-mail corporativo</label>
              <input
                required
                type="email"
                className={inputClasses}
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className={labelClasses}>Empresa</label>
              <input
                required
                type="text"
                className={inputClasses}
                value={formData.empresa}
                onChange={e => setFormData({ ...formData, empresa: e.target.value })}
              />
            </div>

            <div>
              <label className={labelClasses}>Cargo / Função</label>
              <input
                required
                type="text"
                className={inputClasses}
                value={formData.cargo}
                onChange={e => setFormData({ ...formData, cargo: e.target.value })}
              />
            </div>
          </div>
        </section>

        {/* O RESTANTE DO FORMULÁRIO PERMANECE EXATAMENTE IGUAL */}
        {/* (Etapas 02 e 03, métricas, botão etc.) */}

        <div className="pt-16 border-t border-white/5">
          <button
            type="submit"
            disabled={status === AppStatus.SUBMITTING}
            className="w-full flex items-center justify-center gap-4 bg-glow-acid text-black py-8 font-tusker uppercase tracking-[0.5em] text-2xl rounded-2xl transition-all disabled:opacity-50"
          >
            {status === AppStatus.SUBMITTING ? (
              <>
                <Loader2 className="animate-spin" size={28} />
                Enviando aplicação...
              </>
            ) : (
              'Confirmar Aplicação Estratégica'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
