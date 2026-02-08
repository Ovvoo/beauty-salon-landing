import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TelegramPostEmbed from "@/components/beauty/TelegramPostEmbed";
import { Button } from "@/components/ui/button";
import { useTelegramPosts } from "@/hooks/use-telegram-posts";

const NewsSection = () => {
  const { data: posts } = useTelegramPosts("news");

  if (posts.length === 0) return null;

  const channelUrl = `https://t.me/${posts[0].channel}`;

  return (
    <section id="news" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Новости</h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
            {posts.map((post) => (
              <CarouselItem
                key={post.id}
                className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
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
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            <CarouselPrevious className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary-hover border-0 w-8 h-8 sm:w-10 sm:h-10" />
            <CarouselNext className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary-hover border-0 w-8 h-8 sm:w-10 sm:h-10" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-6 md:mt-8">
          <a href={channelUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full">
              Все новости в Telegram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
