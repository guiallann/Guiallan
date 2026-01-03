
import React from 'react';

const SolidYears: React.FC = () => {
  const groupLogos = [
    { name: "Glow Agência", src: "https://glowholding.com.br/wp-content/uploads/2025/12/glow-agencia.png" },
    { name: "Bright Marketing", src: "https://glowholding.com.br/wp-content/uploads/2025/12/bright-mkt.png" },
    { name: "ARK Tecnologia", src: "https://glowholding.com.br/wp-content/uploads/2025/12/ark.png" },
    { name: "Yah Filmes", src: "https://glowholding.com.br/wp-content/uploads/2025/12/yah-filmes.png" },
    { name: "Qahal Digital", src: "https://glowholding.com.br/wp-content/uploads/2025/12/qahal-digital.png" },
    { name: "Gráfica Yellow", src: "https://glowholding.com.br/wp-content/uploads/2025/12/grafica-yellow.png" }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop" 
          alt="Glow Office Building" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          
          {/* Title */}
          <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-serif italic text-white leading-none">
            10 anos de Solidez<span className="text-glow-acid">.</span>
          </h2>
          
          {/* Locations */}
          <div className="text-glow-acid font-tusker text-xl md:text-2xl tracking-[0.3em] uppercase">
            Curitiba, PR | São Paulo, SP | Orlando, USA
          </div>
          
          {/* Logos Grid */}
          <div className="w-full max-w-5xl mt-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center opacity-80">
              {groupLogos.map((logo, i) => (
                <div key={i} className="w-full flex justify-center transition-transform duration-500 hover:scale-110">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-h-8 md:max-h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolidYears;
