import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import TelegramPostEmbed from "@/components/beauty/TelegramPostEmbed";
import { useTelegramPosts } from "@/hooks/use-telegram-posts";
import { useCarouselWheel } from "@/hooks/use-carousel-wheel";
import { LANDING } from "@/config/landing";
import type { TelegramPostType } from "@/lib/types";

const { live } = LANDING;

const NAV_BUTTON_CLASS =
  "static translate-y-0 bg-primary text-primary-foreground hover:bg-primary-hover border-0 w-8 h-8 sm:w-10 sm:h-10";

const LiveSection = () => {
  const [activeTab, setActiveTab] = useState<TelegramPostType>(
    live.tabs[0].key,
  );
  const {
    data: posts,
    dataUpdatedAt,
    isError,
    isFetching,
  } = useTelegramPosts(activeTab);
  const isUsingFallback = dataUpdatedAt === 0;
  const { setApi, onWheel } = useCarouselWheel();

  return (
    <section id={live.sectionId} className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{live.title}</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {live.tabs.map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "ghost"}
              className={`text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full ${
                activeTab === tab.key ? "btn-primary" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {import.meta.env.DEV && (isError || isUsingFallback) && (
          <div
            className={`text-center text-xs mb-4 px-3 py-1.5 rounded mx-auto w-fit ${isError ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}
          >
            {isError
              ? "PocketBase недоступен — показаны локальные данные"
              : isFetching
                ? `Загрузка ${activeTab} из PocketBase...`
                : "Показаны локальные данные (PocketBase не отвечал)"}
          </div>
        )}

        {posts.length > 0 && (
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
              <CarouselPrevious className={NAV_BUTTON_CLASS} />
              <CarouselNext className={NAV_BUTTON_CLASS} />
            </div>
          </Carousel>
        )}

        {activeTab === "news" && posts.length > 0 && (
          <div className="flex justify-center mt-6 md:mt-8">
            <a
              href={`https://t.me/${posts[0].channel}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="rounded-full">
                {live.channelLinkLabel}
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default LiveSection;
