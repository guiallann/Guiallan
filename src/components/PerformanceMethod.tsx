
import React from 'react';

const PerformanceMethod: React.FC = () => {
  return (
    <section className="py-40 bg-glow-acid text-black overflow-hidden relative">
      {/* Glow Symbol Decoration with Rotation Animation */}
      <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 opacity-10 pointer-events-none z-0">
         <img 
           src="https://glowholding.com.br/wp-content/uploads/2026/01/symbol-glow.png" 
           alt="Glow Holding Symbol" 
           className="w-64 h-64 md:w-[32rem] md:h-[32rem] object-contain animate-spin-slow"
         />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-[6.5rem] font-serif italic leading-[1.1] mb-16 flex flex-col items-center">
            <span className="block">Performance</span>
            <span className="block">sem método é sorte.</span>
            <span className="block">Nós trabalhamos com</span>
            <span className="inline-block bg-white transform hover:scale-105 transition-transform duration-500">
              previsibilidade.
            </span>
          </h2>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-black mb-8"></div>
            <span className="font-tusker text-2xl tracking-[0.2em] uppercase">Glow Way™</span>
            <p className="text-sm font-light mt-2 opacity-70 uppercase tracking-widest">
              Idealizamos. Executamos. Mensuramos. Realizamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMethod;
