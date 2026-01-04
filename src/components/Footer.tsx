import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-[#05070a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <img 
                src="https://glowholding.com.br/wp-content/uploads/2025/12/logo-glow-holding.png" 
                alt="Glow Logo" 
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity brightness-0 invert"
              />
            </div>
            <p className="text-zinc-600 text-xs font-light max-w-xs leading-relaxed">
              Apoiando empresas em decisões estratégicas de crescimento e estrutura. Investment & Board Grade.
            </p>
          </div>

          <div className="text-center md:text-right">
             <div className="text-glow-acid font-serif italic text-3xl mb-4">We Create Tomorrow.</div>
             <p className="text-zinc-500 text-[10px] font-tusker uppercase tracking-[0.4em]">
               &copy; {new Date().getFullYear()} Glow Holding™ . Todos os direitos reservados.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;