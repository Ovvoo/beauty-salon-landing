interface TelegramPostEmbedProps {
  channel: string;
  postId: number;
}

const TelegramPostEmbed = ({ channel, postId }: TelegramPostEmbedProps) => {
  const src = `https://t.me/${channel}/${postId}?embed=1&userpic=true`;

  return (
    <iframe
      src={src}
      title={`Telegram пост ${channel}/${postId}`}
      className="w-full border-0 h-[450px] sm:h-[500px]"
      scrolling="no"
      sandbox="allow-scripts allow-same-origin allow-popups"
    />
  );
};

export default TelegramPostEmbed;
