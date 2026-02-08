import { useEffect, useRef } from "react";

interface TelegramPostEmbedProps {
  channel: string;
  postId: number;
}

const WIDGET_SCRIPT_URL = "https://telegram.org/js/telegram-widget.js?22";
const ACCENT_COLOR = "762E34";

function clearChildren(node: HTMLElement) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

const TelegramPostEmbed = ({ channel, postId }: TelegramPostEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    clearChildren(container);

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT_URL;
    script.async = true;
    script.setAttribute("data-telegram-post", `${channel}/${postId}`);
    script.setAttribute("data-width", "100%");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-color", ACCENT_COLOR);

    container.appendChild(script);

    return () => {
      clearChildren(container);
    };
  }, [channel, postId]);

  return <div ref={containerRef} className="min-h-[200px]" />;
};

export default TelegramPostEmbed;
