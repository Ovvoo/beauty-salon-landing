import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-svh flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Мастер по наращиванию ресниц"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Градиент */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <div className="md:max-w-xl lg:max-w-2xl">
          {/* Headline */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 md:mb-5 animate-fade-in leading-tight">
            Стань мастером{" "}
            <span className="text-gold">бьюти-индустрии</span>
          </h1>

          {/* Subheadline */}
          <p className="text-primary-foreground/90 text-sm sm:text-base md:text-xl lg:text-2xl mb-5 md:mb-8 animate-fade-in animate-delay-100">
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
          <div className="flex gap-5 sm:gap-6 md:gap-10 animate-fade-in animate-delay-300">
            <div>
              <div className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gold">500+</div>
              <div className="text-primary-foreground/70 text-[11px] sm:text-xs md:text-base">учениц</div>
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gold">7 лет</div>
              <div className="text-primary-foreground/70 text-[11px] sm:text-xs md:text-base">опыта</div>
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gold">98%</div>
              <div className="text-primary-foreground/70 text-[11px] sm:text-xs md:text-base">довольны</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
