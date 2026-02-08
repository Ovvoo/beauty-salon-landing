import BeautyHeader from "../components/beauty/BeautyHeader";
import HeroSection from "../components/beauty/HeroSection";
import CoursesSection from "../components/beauty/CoursesSection";
import BenefitsSection from "../components/beauty/BenefitsSection";
import TelegramPostCarousel from "../components/beauty/TelegramPostCarousel";
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
        <TelegramPostCarousel
          type="review"
          title="Отзывы и преображения"
          sectionId="reviews"
        />
        <TelegramPostCarousel
          type="news"
          title="Новости"
          sectionId="news"
          bgClassName="bg-background"
          itemBasis="basis-full sm:basis-1/2 lg:basis-1/3"
          showChannelLink
        />
        <FAQSection />
      </main>
      <BeautyFooter />
    </div>
  );
};

export default BeautyLanding;
