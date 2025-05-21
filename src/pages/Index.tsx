
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import ROISection from '@/components/ROISection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CalendlyWidget from '@/components/CalendlyWidget';
import ChatbaseWidget from '@/components/ChatbaseWidget';

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
      <CalendlyWidget />
      <ChatbaseWidget />
    </div>
  );
};

export default Index;
