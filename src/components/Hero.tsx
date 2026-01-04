
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Architectural Background Overlay with Parallax */}
      <div 
        className="absolute inset-0 z-0 opacity-70 will-change-transform"
        style={{ 
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover mix-blend-luminosity grayscale scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="flex flex-col items-center leading-none mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <span className="text-glow-acid font-serif italic text-2xl lowercase tracking-normal">#glowWay</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif leading-[0.9] mb-12 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards] text-white">
            Sua estrutura é compatível com a <span className="italic text-glow-acid">ambição</span> que você tem para 2026?
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1.2s_ease-out_0.4s_forwards]">
            O Diagnóstico 360 Glow é uma leitura executiva para quem busca previsibilidade, eficiência econômica e uma estrutura à altura do seu legado.
          </p>
          
          <div className="flex flex-col items-center gap-10 opacity-0 animate-[fadeIn_1.4s_ease-out_0.6s_forwards]">
            <button 
              onClick={onApplyClick}
              className="group relative flex items-center gap-4 bg-glow-acid text-black px-16 py-7 font-tusker uppercase tracking-widest text-xl rounded-full hover:scale-[1.05] transition-all duration-500 shadow-[0_0_50px_-10px_rgba(204,255,0,0.5)]"
            >
              Aplicar para o Diagnóstico 360
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4 text-2sm text-zinc-500 font-tusker uppercase tracking-[0.3em]">
              <div className="w-3 h-3 rounded-full bg-glow-acid animate-pulse"></div>
              Acesso restrito a empresas em estágio de escala
            </div>
          </div>
        </div>
      </div>
      
      {/* Legacy Circle Decoration */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-glow-acid/20 rounded-full flex items-center justify-center animate-spin-slow opacity-40 hidden lg:flex">
         <div className="text-glow-acid font-tusker text-base uppercase tracking-[0.5em] whitespace-nowrap">
            LEGACY GLOBAL EQUITY • LEGACY GLOBAL EQUITY • 
         </div>
      </div>
    </section>
  );
};

export default Hero;
