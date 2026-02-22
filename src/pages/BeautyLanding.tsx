import BeautyHeader from "../components/beauty/BeautyHeader";
import HeroSection from "../components/beauty/HeroSection";
import PainPointsSection from "../components/beauty/PainPointsSection";
import CoursesSection from "../components/beauty/CoursesSection";
import ProductSection from "../components/beauty/ProductSection";
import LiveSection from "../components/beauty/LiveSection";
import CTASection from "../components/beauty/CTASection";
import FAQSection from "../components/beauty/FAQSection";
import BeautyFooter from "../components/beauty/BeautyFooter";

const BeautyLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <BeautyHeader />
      <main>
        <HeroSection />
        <PainPointsSection />
        <CoursesSection />
        <ProductSection />
        <LiveSection />
        <CTASection />
        <FAQSection />
      </main>
      <BeautyFooter />
    </div>
  );
};

export default BeautyLanding;
