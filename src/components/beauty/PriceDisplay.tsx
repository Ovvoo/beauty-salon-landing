interface PriceDisplayProps {
  price: number;
  oldPrice?: number;
  variant?: "sm" | "lg";
}

const priceVariants = {
  sm: {
    container: "flex flex-col sm:flex-row sm:items-baseline sm:gap-2",
    old: "line-through text-muted-foreground text-xs sm:text-sm",
    current: "font-bold text-primary text-lg sm:text-xl",
  },
  lg: {
    container: "flex items-baseline gap-2",
    old: "line-through text-muted-foreground text-xs sm:text-sm",
    current: "font-bold text-primary text-xl sm:text-2xl",
  },
};

const PriceDisplay = ({ price, oldPrice, variant = "sm" }: PriceDisplayProps) => {
  const styles = priceVariants[variant];

  return (
    <div className={styles.container}>
      {oldPrice && oldPrice > price && (
        <span className={styles.old}>
          {oldPrice.toLocaleString()} ₽
        </span>
      )}
      <span className={styles.current}>
        {price.toLocaleString()} ₽
      </span>
    </div>
  );
};

export default PriceDisplay;
