import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const Logo = ({ variant = "dark", className }: LogoProps) => (
  <span
    className={cn(
      "font-heading font-bold",
      variant === "dark" ? "text-primary" : "text-background",
      className
    )}
  >
    BEAUTY<span className="text-gold">BEGIN</span>
  </span>
);

export default Logo;
