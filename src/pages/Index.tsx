
import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import ROISection from '@/components/ROISection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

// Lazy load widgets to improve initial page load
const CalendlyWidget = lazy(() => import('@/components/CalendlyWidget'));
const ChatbaseWidget = lazy(() => import('@/components/ChatbaseWidget'));

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ROISection />
        <CTASection />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <CalendlyWidget />
        <ChatbaseWidget />
      </Suspense>
    </div>
  );
};

export default Index;
