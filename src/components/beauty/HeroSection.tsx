import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75svh] md:min-h-[100svh] flex items-end md:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Мастер по наращиванию ресниц"
          className="w-full h-full object-cover object-top md:object-center"
          loading="eager"
        />
        {/* Mobile: градиент снизу / Desktop: градиент слева */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-transparent md:from-black/85 md:via-black/50 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-0 md:pt-24 lg:pt-28">
          <div className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
            {/* Headline - крупный на desktop */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-3 md:mb-5 animate-fade-in leading-tight">
              Стань <span className="text-gold">бьюти-мастером</span>
            </h1>

            {/* Subheadline */}
            <p className="text-primary-foreground/90 text-sm sm:text-base md:text-xl lg:text-2xl mb-5 md:mb-8 animate-fade-in animate-delay-100 leading-relaxed max-w-md lg:max-w-lg">
              Ресницы и брови. Сертификат.
            </p>

            {/* CTA */}
            <div className="animate-fade-in animate-delay-200 mb-6 md:mb-10">
              <a href="#courses">
                <Button
                  size="lg"
                  className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Выбрать курс
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-5 sm:gap-6 md:gap-10 animate-fade-in animate-delay-300">
              <div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold">500+</div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm md:text-base">учениц</div>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold">7 лет</div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm md:text-base">опыта</div>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold">98%</div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm md:text-base">довольны</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
