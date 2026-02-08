import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useReviews } from "@/hooks/use-reviews";

const ReviewsSection = () => {
  const { data: reviews } = useReviews();
  return (
    <section id="reviews" className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Отзывы учениц</h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2"
              >
                <Card className="h-full bg-card border-0 shadow-md">
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <img
                        src={review.photo}
                        alt={review.name}
                        className="w-11 sm:w-12 md:w-14 h-11 sm:h-12 md:h-14 rounded-full object-cover border-2 border-primary/30"
                      />
                      <div>
                        <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base">
                          {review.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          {review.course}
                        </p>
                        <div className="flex gap-0.5 mt-0.5 sm:mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 sm:w-4 h-3 sm:h-4 fill-gold text-gold"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            <CarouselPrevious className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary-hover border-0 w-8 h-8 sm:w-10 sm:h-10" />
            <CarouselNext className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary-hover border-0 w-8 h-8 sm:w-10 sm:h-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewsSection;
