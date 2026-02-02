import BeautyHeader from "../components/beauty/BeautyHeader";
import HeroSection from "../components/beauty/HeroSection";
import CoursesSection from "../components/beauty/CoursesSection";
import BenefitsSection from "../components/beauty/BenefitsSection";
import ReviewsSection from "../components/beauty/ReviewsSection";
import FAQSection from "../components/beauty/FAQSection";
import BeautyFooter from "../components/beauty/BeautyFooter";

const BeautyLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <BeautyHeader />
      <main>
        <HeroSection />
        <CoursesSection />
        <BenefitsSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <BeautyFooter />
    </div>
  );
};

export default BeautyLanding;
