import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-svh flex flex-col md:flex-row">
      {/* Mobile: Image Top / Desktop: Image Right */}
      <div className="relative h-[45svh] md:h-auto md:w-1/2 md:order-2">
        <img
          src={heroImage}
          alt="Мастер по наращиванию ресниц"
          className="w-full h-full object-cover object-top md:object-center"
          loading="eager"
        />
      </div>

      {/* Mobile: Content Bottom / Desktop: Content Left */}
      <div className="flex-1 flex items-center bg-background md:w-1/2 md:order-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="max-w-lg">
            {/* Headline */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 md:mb-5 animate-fade-in leading-tight">
              Стань мастером{" "}
              <span className="text-primary">бьюти-индустрии</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-5 md:mb-8 animate-fade-in animate-delay-100">
              Курсы по ресницам и бровям с сертификатом
            </p>

            {/* CTA */}
            <div className="animate-fade-in animate-delay-200 mb-6 md:mb-10">
              <a href="#courses">
                <Button
                  size="lg"
                  className="btn-primary text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Смотреть курсы
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-5 sm:gap-6 md:gap-8 lg:gap-10 animate-fade-in animate-delay-300">
              <div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground text-xs sm:text-sm md:text-base">учениц</div>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">7 лет</div>
                <div className="text-muted-foreground text-xs sm:text-sm md:text-base">опыта</div>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground text-xs sm:text-sm md:text-base">довольны</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
