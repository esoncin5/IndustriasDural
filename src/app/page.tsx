
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import ProcessSection from '@/components/ProcessSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import IndustriesSection from '@/components/IndustriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <ProcessSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
      <FloatingContactButtons />
    </main>
  );
}
