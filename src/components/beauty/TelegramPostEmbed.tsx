import { useEffect, useRef, useState, useCallback } from "react";

interface TelegramPostEmbedProps {
  channel: string;
  postId: number;
}

const DEFAULT_HEIGHT = 200;

const TelegramPostEmbed = ({ channel, postId }: TelegramPostEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== "https://t.me") return;

      // Telegram sends JSON string via postMessage
      let msg: Record<string, unknown>;
      try {
        const raw = event.data as unknown;
        msg = typeof raw === "string" ? JSON.parse(raw) : (raw as Record<string, unknown>);
      } catch {
        return;
      }

      if (msg.event !== "resize" || typeof msg.height !== "number") return;

      const iframe = iframeRef.current;
      if (!iframe) return;

      if (event.source === iframe.contentWindow) {
        setHeight(msg.height);
      }
    },
    [],
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const src = `https://t.me/${channel}/${postId}?embed=1&userpic=true`;

  return (
    <iframe
      ref={iframeRef}
      src={src}
      width="100%"
      height={height}
      frameBorder={0}
      scrolling="no"
      style={{ border: "none", overflow: "hidden", colorScheme: "light dark" }}
      className="min-h-[200px]"
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      loading="lazy"
    />
  );
};

export default TelegramPostEmbed;
