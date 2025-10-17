import HeroSection from "@/components/HeroSection";
import AchievementSection from "@/components/AchievementSection";
import StrengthSection from "@/components/StrengthSection";
import ServiceFlowSection from "@/components/ServiceFlowSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import FixedCTA from "@/components/FixedCTA";
import LazyMultiStepForm from "@/components/LazyMultiStepForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <LazyMultiStepForm />
      <AchievementSection />
      <StrengthSection />
      <ServiceFlowSection />
      <TestimonialSection />
      <FAQSection />
      <DisclaimerSection />
      <Footer />
      <FixedCTA />
    </main>
  );
}
