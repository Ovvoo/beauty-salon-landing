import { useEffect, useRef } from "react";

const WIDGET_SCRIPT_URL = "https://telegram.org/js/telegram-widget.js?22";

interface TelegramPostEmbedProps {
  channel: string;
  postId: number;
}

const TelegramPostEmbed = ({ channel, postId }: TelegramPostEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT_URL;
    script.async = true;
    script.dataset.telegramPost = `${channel}/${postId}`;
    script.dataset.width = "100%";

    container.appendChild(script);

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [channel, postId]);

  return (
    <div
      ref={containerRef}
      className="min-h-[200px]"
    />
  );
};

export default TelegramPostEmbed;
