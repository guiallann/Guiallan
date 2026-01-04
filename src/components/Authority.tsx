
import React from 'react';

const Authority: React.FC = () => {
  const logos = [
    { name: "Açai da Barra", src: "https://glowholding.com.br/wp-content/uploads/2026/01/acaiDaBarra.webp" },
    { name: "Ateliware", src: "https://glowholding.com.br/wp-content/uploads/2026/01/ateliware.webp" },
    { name: "Daytec", src: "https://glowholding.com.br/wp-content/uploads/2026/01/daytec.webp" },
    { name: "Filtros Brasil", src: "https://glowholding.com.br/wp-content/uploads/2026/01/filtrosBrasil.webp" },
    { name: "Funcional", src: "https://glowholding.com.br/wp-content/uploads/2026/01/funcional.png" },
    { name: "Go Oil", src: "https://glowholding.com.br/wp-content/uploads/2026/01/goOil.png" },
    { name: "Grupo Vellore", src: "https://glowholding.com.br/wp-content/uploads/2026/01/grupoVellore.png" },
    { name: "Italinea", src: "https://glowholding.com.br/wp-content/uploads/2026/01/Italinea.webp" },
    { name: "Maieutics.ai", src: "https://glowholding.com.br/wp-content/uploads/2026/01/maieutics.png" },
    { name: "Maxon Oil", src: "https://glowholding.com.br/wp-content/uploads/2026/01/maxon.png" },
    { name: "Mobiliza", src: "https://glowholding.com.br/wp-content/uploads/2026/01/mobiliza.png" },
    { name: "Muvz", src: "https://glowholding.com.br/wp-content/uploads/2026/01/muvz.png" },
    { name: "Odonto Company", src: "https://glowholding.com.br/wp-content/uploads/2026/01/odontoCompany.webp" },
    { name: "Oral Unic", src: "https://glowholding.com.br/wp-content/uploads/2026/01/oralUnic.webp" },
    { name: "Predilecta", src: "https://glowholding.com.br/wp-content/uploads/2026/01/predilecta.png" },
    { name: "ReMax", src: "https://glowholding.com.br/wp-content/uploads/2026/01/remax.png" },
    { name: "Riolaser", src: "https://glowholding.com.br/wp-content/uploads/2026/01/riolaser.webp" },
    { name: "Total Grass", src: "https://glowholding.com.br/wp-content/uploads/2026/01/totalGrass.png" }
  ];

  return (
    <section className="py-24 bg-[#f2f2f2] text-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-black">
            Quem conduz o Diagnóstico 360
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed mb-12 font-light max-w-2xl mx-auto">
            O Diagnóstico 360 é conduzido pela Glow, um ecossistema com mais de uma década de atuação apoiando empresas em decisões estratégicas de crescimento e estrutura.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <span className="block text-6xl md:text-7xl font-tusker text-black mb-2 transition-transform group-hover:scale-110">+850</span>
              <span className="text-xl font-tusker uppercase tracking-[0.2em] text-zinc-500">Empresas atendidas</span>
            </div>
            <div className="group">
              <span className="block text-6xl md:text-7xl font-tusker text-black mb-2 transition-transform group-hover:scale-110">10</span>
              <span className="text-xl font-tusker uppercase tracking-[0.2em] text-zinc-500">Países</span>
            </div>
            <div className="group">
              <span className="block text-6xl md:text-7xl font-tusker text-black mb-2 transition-transform group-hover:scale-110">GLOBAL</span>
              <span className="text-xl font-tusker uppercase tracking-[0.2em] text-zinc-500">USA, Curitiba & SP</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-16 border-t border-zinc-300">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 text-[16px] font-tusker uppercase tracking-[0.2em] text-black bg-glow-acid">
              Empresas que confiam na metodologia Glow
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
            {logos.map((logo, i) => (
              <div 
                key={i} 
                className="w-full flex items-center justify-center p-4 transition-all duration-500 hover:scale-110"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-12 w-auto object-contain opacity-100 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
