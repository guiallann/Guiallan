import React from 'react';

interface HeaderProps {
  onApplyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://glowholding.com.br/wp-content/uploads/2025/12/logo-glow-holding.png" 
            alt="Glow Logo" 
            className="h-10 md:h-14 w-auto object-contain brightness-0 invert"
          />
        </div>
        
        <button 
          onClick={onApplyClick}
          className="hidden md:block text-[14px] font-tusker tracking-[0.4em] uppercase border border-white/20 text-white px-10 py-4 rounded-full hover:bg-[#ccff00] hover:text-black hover:border-transparent transition-all duration-500"
        >
          Aplicar agora
        </button>
      </div>
    </header>
  );
};

export default Header;