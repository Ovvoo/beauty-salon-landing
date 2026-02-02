import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70svh] sm:min-h-[85svh] lg:min-h-[100svh] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Мастер по наращиванию ресниц"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Gradient: мягкий снизу, не перекрывает лицо */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      </div>

      {/* Content - компактный, внизу экрана */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10 lg:pb-16">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Headline: 4 слова = 2 сек чтения */}
            <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2 sm:mb-3 animate-fade-in leading-tight">
              Стань <span className="text-gold">бьюти-мастером</span>
            </h1>

            {/* Subheadline: короткий, конкретный */}
            <p className="text-primary-foreground/85 text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 animate-fade-in animate-delay-100 leading-snug">
              Ресницы и брови. Сертификат.
            </p>

            {/* CTA - один, четкий */}
            <div className="animate-fade-in animate-delay-200 mb-5 sm:mb-8">
              <a href="#courses">
                <Button
                  size="lg"
                  className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Выбрать курс
                </Button>
              </a>
            </div>

            {/* Stats - компактные */}
            <div className="flex gap-4 sm:gap-6 animate-fade-in animate-delay-300">
              <div>
                <div className="font-heading text-lg sm:text-xl font-bold text-gold">500+</div>
                <div className="text-primary-foreground/60 text-[10px] sm:text-xs">учениц</div>
              </div>
              <div>
                <div className="font-heading text-lg sm:text-xl font-bold text-gold">7 лет</div>
                <div className="text-primary-foreground/60 text-[10px] sm:text-xs">опыта</div>
              </div>
              <div>
                <div className="font-heading text-lg sm:text-xl font-bold text-gold">98%</div>
                <div className="text-primary-foreground/60 text-[10px] sm:text-xs">довольны</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
