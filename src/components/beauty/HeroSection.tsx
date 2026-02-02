import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-svh bg-background overflow-hidden">
      {/* Background decorative shape */}
      <div className="absolute top-0 right-0 w-full md:w-[55%] h-[50svh] md:h-full bg-muted/30 md:rounded-bl-[4rem] lg:rounded-bl-[6rem]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-svh flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">

          {/* Content - Left */}
          <div className="order-2 md:order-1 md:w-1/2 lg:w-[45%] py-8 md:py-16">
            <div className="max-w-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 md:mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Онлайн-обучение
              </div>

              {/* Headline */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-[1.1]">
                Стань мастером{" "}
                <span className="text-primary relative">
                  бьюти-индустрии
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-6 md:mb-8 animate-fade-in animate-delay-100 max-w-md">
                Курсы по ресницам и бровям с сертификатом. Начни зарабатывать уже через 2 недели.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in animate-delay-200 mb-8 md:mb-12">
                <a href="#courses">
                  <Button
                    size="lg"
                    className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  >
                    Смотреть курсы
                  </Button>
                </a>
                <a href="#reviews">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 w-full sm:w-auto"
                  >
                    Отзывы учениц
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-6 sm:gap-8 md:gap-10 animate-fade-in animate-delay-300">
                <div className="text-center sm:text-left">
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">500+</div>
                  <div className="text-muted-foreground text-sm md:text-base">учениц</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">7 лет</div>
                  <div className="text-muted-foreground text-sm md:text-base">опыта</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">98%</div>
                  <div className="text-muted-foreground text-sm md:text-base">довольны</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div className="order-1 md:order-2 md:w-1/2 lg:w-[55%] pt-20 md:pt-0">
            <div className="relative">
              {/* Main image with modern shape */}
              <div className="relative rounded-3xl md:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl md:ml-auto md:max-w-[90%]">
                <img
                  src={heroImage}
                  alt="Мастер по наращиванию ресниц"
                  className="w-full h-[40svh] sm:h-[45svh] md:h-[70vh] lg:h-[80vh] object-cover object-top"
                  loading="eager"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating card - Social proof */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-0 md:-left-8 bg-card p-3 sm:p-4 rounded-2xl shadow-xl border border-border animate-fade-in animate-delay-300">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-primary">А</div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/20 border-2 border-card flex items-center justify-center text-xs font-bold text-gold">М</div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-primary">Е</div>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">500+ мастеров</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">уже обучились</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
