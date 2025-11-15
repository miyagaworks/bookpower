import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import FloatingBackToTop from "@/components/FloatingBackToTop";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import DetailedContentSection from "@/components/sections/DetailedContentSection";
import MidPageCTA from "@/components/sections/MidPageCTA";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PlansSection from "@/components/sections/PlansSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <DetailedContentSection />
      <MidPageCTA />
      <CaseStudiesSection />
      <PlansSection />
      <ProcessSection />
      <FinalCTA />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
      <FloatingBackToTop />
    </main>
  );
}
