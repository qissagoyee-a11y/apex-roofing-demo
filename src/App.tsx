import React, { useState } from 'react';
import { EmergencyTopBar } from './components/EmergencyTopBar';
import { StickyNavbar } from './components/StickyNavbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { SimpleProcess } from './components/SimpleProcess';
import { FaqSection } from './components/FaqSection';
import { EstimateCalculatorForm } from './components/EstimateCalculatorForm';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { CallConfirmationModal } from './components/CallConfirmationModal';
import { DemoToolbar } from './components/DemoToolbar';

export default function App() {
  const [isStormAlert, setIsStormAlert] = useState<boolean>(false);
  const [estimateModalOpen, setEstimateModalOpen] = useState<boolean>(false);
  const [callModalOpen, setCallModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenEstimate = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setEstimateModalOpen(true);
  };

  const handleOpenCall = () => {
    setCallModalOpen(true);
  };

  const scrollToEstimate = () => {
    const el = document.getElementById('estimate-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setEstimateModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Emergency Top Bar */}
      <EmergencyTopBar
        isStormAlert={isStormAlert}
        onCallClick={handleOpenCall}
        onEstimateClick={scrollToEstimate}
      />

      {/* 2. Sticky Navbar */}
      <StickyNavbar
        onCallClick={handleOpenCall}
        onEstimateClick={() => handleOpenEstimate()}
      />

      {/* 3. Premium Hero */}
      <HeroSection
        onCallClick={handleOpenCall}
        onEstimateClick={() => handleOpenEstimate()}
      />

      {/* 4. Trust Bar */}
      <TrustBar />

      {/* 5. Services */}
      <ServicesSection
        onSelectService={(serviceId) => handleOpenEstimate(serviceId)}
      />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Before & After Gallery */}
      <BeforeAfterGallery />

      {/* 8. Google Reviews */}
      <ReviewsSection />

      {/* 9. Simple Process */}
      <SimpleProcess
        onEstimateClick={() => handleOpenEstimate()}
      />

      {/* 10. FAQ */}
      <FaqSection
        onCallClick={handleOpenCall}
      />

      {/* 11. Contact Form & Free Estimate Calculator */}
      <EstimateCalculatorForm
        initialServiceId={selectedServiceId}
        onCallClick={handleOpenCall}
      />

      {/* 12. Footer */}
      <Footer
        onCallClick={handleOpenCall}
        onEstimateClick={() => handleOpenEstimate()}
      />

      {/* Modals & Presentation Toolbar */}
      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        onCallClick={handleOpenCall}
        initialServiceId={selectedServiceId}
      />

      <CallConfirmationModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />

      <DemoToolbar
        isStormAlert={isStormAlert}
        setIsStormAlert={setIsStormAlert}
        onEstimateClick={() => handleOpenEstimate()}
        onCallClick={handleOpenCall}
      />

    </div>
  );
}
