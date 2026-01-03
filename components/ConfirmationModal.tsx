
import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ConfirmationModalProps {
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500">
      <div className="relative w-full max-w-2xl bg-black border border-white/10 rounded-[2.5rem] p-8 md:p-16 text-center shadow-[0_0_100px_-20px_rgba(204,255,0,0.1)] animate-in zoom-in-95 duration-700">
        
        {/* Botão de Fechar */}
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 text-zinc-600 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Header com Marca */}
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://glowholding.com.br/wp-content/uploads/2025/12/logo-glow-holding.png" 
            alt="Glow Holding Logo" 
            className="h-10 w-auto object-contain brightness-0 invert opacity-90 mb-8"
          />
        </div>

        <h2 className="text-4xl md:text-6xl font-serif italic mb-10 text-white">Aplicação Recebida.</h2>
        
        {/* Caixa de Conteúdo */}
        <div className="space-y-6 text-zinc-400 text-[15px] leading-relaxed text-left bg-zinc-900/30 p-8 md:p-12 rounded-[2rem] border border-white/5">
          <p className="font-semibold text-zinc-100 text-lg">Prezado(a),</p>
          <p className="font-light">
            Obrigado por aplicar para o Diagnóstico 360 Glow. Sua aplicação foi recebida com sucesso e entra agora na etapa de análise executiva.
          </p>
          
          <div className="space-y-6 pt-8 mt-4 border-t border-white/5">
            <h4 className="text-glow-acid text-[11px] font-tusker font-bold uppercase tracking-[0.4em]">PRÓXIMOS PASSOS:</h4>
            <ul className="space-y-5">
              {[
                { id: "01", text: "Análise criteriosa dos seus dados e ambições para 2026 por nossa banca estratégica." },
                { id: "02", text: "Contato direto via canal executivo para alinhamento de expectativas." },
                { id: "03", text: "Agendamento do Encontro Estratégico (Diagnóstico 360)." }
              ].map((step) => (
                <li key={step.id} className="flex gap-4 items-start">
                  <span className="text-glow-acid font-tusker text-xl leading-none mt-1">{step.id}</span>
                  <span className="text-zinc-300 font-light leading-snug">{step.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="mt-12">
          <p className="text-2xl md:text-3xl font-serif italic text-zinc-100 mb-10">Clareza primeiro. Decisão depois.</p>
          <button 
            onClick={onClose}
            className="w-full md:w-auto px-16 py-5 border border-white/20 text-white font-tusker uppercase text-sm tracking-[0.4em] hover:bg-white hover:text-black hover:border-transparent transition-all duration-500 rounded-full"
          >
            ENCERRAR JANELA
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
