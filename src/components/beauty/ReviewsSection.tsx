import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TelegramPostEmbed from "@/components/beauty/TelegramPostEmbed";
import { useTelegramPosts } from "@/hooks/use-telegram-posts";
import { useCarouselWheel } from "@/hooks/use-carousel-wheel";

const ReviewsSection = () => {
  const { data: posts } = useTelegramPosts("review");
  const { setApi, onWheel } = useCarouselWheel();

  return (
    <section id="reviews" className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Отзывы и преображения</h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
        >
          <div onWheel={onWheel}>
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {posts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2"
                >
                  <div className="bg-card rounded-xl overflow-hidden border border-border">
                    <TelegramPostEmbed
                      channel={post.channel}
                      postId={post.postId}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
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
