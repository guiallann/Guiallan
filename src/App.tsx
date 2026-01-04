
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Thesis from './components/Thesis';
import WhatIsIt from './components/WhatIsIt';
import PerformanceMethod from './components/PerformanceMethod';
import Deliverables from './components/Deliverables';
import FilterSection from './components/FilterSection';
import Authority from './components/Authority';
import SolidYears from './components/SolidYears';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import ConfirmationModal from './components/ConfirmationModal';
import { AppStatus } from './types';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (data: any) => {
    setStatus(AppStatus.SUBMITTING);
    try {
      console.log("Integrando com RD Station/CRM:", data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus(AppStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(AppStatus.ERROR);
    }
  };

  return (
    <div className="min-h-screen selection:bg-glow-acid selection:text-black bg-black">
      <Header onApplyClick={scrollToForm} />
      
      <main>
        <Hero onApplyClick={scrollToForm} />
        
        <div className="relative">
          <PainPoints />
          <Thesis />
          <WhatIsIt />
          <PerformanceMethod />
          <Deliverables />
          <FilterSection />
          <SolidYears />
          <Authority />
          
          <div ref={formRef} className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6">
              <ApplicationForm onSubmit={handleFormSubmit} status={status} />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {status === AppStatus.SUCCESS && (
        <ConfirmationModal onClose={() => setStatus(AppStatus.IDLE)} />
      )}
    </div>
  );
};

export default App;
