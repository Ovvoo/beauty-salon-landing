import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.webp";
import { LANDING } from "@/config/landing";

const { hero } = LANDING;

/**
 * Hero Section — Above the Fold
 *
 * UI Standards 2026:
 * - Desktop: items-start для выравнивания по верху (не center!)
 * - Floating card внутри границ изображения
 * - Все элементы видны без скролла
 */
const HeroSection = () => {
  return (
    <section className="relative bg-background">
      {/* Background decorative shape */}
      <div className="absolute top-0 right-0 w-full md:w-[55%] h-1/2 md:h-full bg-muted/30 md:rounded-bl-[3rem] lg:rounded-bl-[4rem] pointer-events-none" />

      {/* Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-6 sm:pb-8 md:pb-10">
        {/*
          ВАЖНО: md:items-start — выравнивание по ВЕРХУ
          Это предотвращает смещение изображения вниз при разной высоте контента
        */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-10 xl:gap-12">

          {/* Content — LEFT on desktop, выровнен по верху с изображением */}
          <div className="order-2 md:order-1 md:w-1/2 lg:w-[48%] py-4 sm:py-5 md:py-0">
            <div className="max-w-md lg:max-w-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 sm:px-3 py-1 rounded-full text-[0.625rem] sm:text-xs font-medium mb-3 sm:mb-4 animate-fade-in">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                {hero.badge}
              </div>

              {/* Headline */}
              <h1 className="font-heading text-2xl sm:text-3xl md:text-3xl lg:text-[2.25rem] xl:text-4xl font-bold text-foreground mb-3 sm:mb-4 animate-fade-in leading-tight">
                {hero.headline.main}
                <br />
                <span className="text-primary relative inline-block">
                  {hero.headline.accent}
                  <svg className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-1.5 sm:h-2 text-gold/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-muted-foreground text-sm sm:text-base md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 animate-fade-in animate-delay-100 leading-relaxed">
                {hero.subheadline}
              </p>

              {/* CTA Buttons — h-11 (44px) = WCAG AAA touch target */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 animate-fade-in animate-delay-200 mb-5 sm:mb-6 md:mb-8">
                <a href={hero.primaryCta.href} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="btn-primary text-sm lg:text-base px-5 lg:px-6 h-11 rounded-xl shadow-md hover:shadow-lg transition-all w-full"
                  >
                    {hero.primaryCta.label}
                  </Button>
                </a>
                <a href={hero.secondaryCta.href} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-sm lg:text-base px-5 lg:px-6 h-11 rounded-xl border-2 w-full"
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </a>
              </div>

              {/* Stats — минимум text-xs (12px) для читаемости */}
              <div className="flex justify-between sm:justify-start gap-5 sm:gap-6 md:gap-8 animate-fade-in animate-delay-300">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="font-heading text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-muted-foreground text-xs sm:text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image — RIGHT on desktop */}
          <div className="order-1 md:order-2 md:w-1/2 lg:w-[52%]">
            <div className="relative">
              {/* Image container */}
              <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl">
                <img
                  src={heroImage}
                  alt={hero.imageAlt}
                  width={600}
                  height={480}
                  className="w-full aspect-[3/2] sm:aspect-[4/5] md:aspect-[4/3] lg:aspect-[5/4] object-cover object-top md:max-h-[26rem] lg:max-h-[30rem] xl:max-h-[34rem]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              </div>

              {/* Floating card — выходит за левый край изображения на desktop */}
              <div className="absolute bottom-3 left-1 sm:bottom-4 sm:left-2 md:bottom-6 md:-left-3 lg:-left-4 bg-card p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl shadow-lg border border-border animate-fade-in animate-delay-300">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-[0.5rem] sm:text-[0.625rem] font-bold text-primary">А</div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gold/20 border-2 border-card flex items-center justify-center text-[0.5rem] sm:text-[0.625rem] font-bold text-gold">М</div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-[0.5rem] sm:text-[0.625rem] font-bold text-primary">Е</div>
                  </div>
                  <div>
                    <div className="text-[0.625rem] sm:text-xs md:text-xs font-semibold text-foreground leading-tight">{hero.floatingCard.title}</div>
                    <div className="text-[0.5rem] sm:text-[0.625rem] md:text-[0.625rem] text-muted-foreground leading-tight">{hero.floatingCard.subtitle}</div>
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
