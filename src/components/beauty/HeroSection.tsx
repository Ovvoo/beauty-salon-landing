import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Мастер по наращиванию ресниц"
          className="w-full h-full object-cover object-top sm:object-center"
        />
        {/* Mobile: градиент снизу, Desktop: справа */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/90 via-black/70 to-transparent sm:from-black/80 sm:via-black/60 sm:to-black/30" />
      </div>

      {/* Content - на mobile внизу экрана, на desktop по центру слева */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-32 sm:py-20">
        <div className="text-center sm:text-left sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          {/* Заголовок */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2 sm:mb-4 md:mb-6 animate-fade-in leading-tight">
            Стань мастером{" "}
            <span className="text-gold">бьюти-индустрии</span>
          </h1>

          {/* Описание - короткое на mobile */}
          <p className="text-primary-foreground/90 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-10 max-w-md sm:max-w-lg mx-auto sm:mx-0 animate-fade-in animate-delay-100 leading-relaxed">
            <span className="hidden sm:inline">Онлайн-курсы по наращиванию ресниц и оформлению бровей с сертификатом</span>
            <span className="sm:hidden">Курсы по ресницам и бровям с сертификатом</span>
          </p>

          {/* CTA */}
          <div className="animate-fade-in animate-delay-200">
            <a href="#courses">
              <Button
                size="lg"
                className="btn-primary text-sm sm:text-base md:text-lg px-5 sm:px-8 py-3 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Смотреть курсы
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-6 sm:mt-12 md:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-xs sm:max-w-md mx-auto sm:mx-0 animate-fade-in animate-delay-300">
            <div className="text-center">
              <div className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-gold">7+</div>
              <div className="text-primary-foreground/70 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-gold">500+</div>
              <div className="text-primary-foreground/70 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">Учениц</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-gold">98%</div>
              <div className="text-primary-foreground/70 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">Довольных</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
