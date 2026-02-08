import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send } from "lucide-react";
import PriceDisplay from "./PriceDisplay";
import type { Course } from "@/lib/types";

interface PaymentModalProps {
  course: Course | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal = ({ course, open, onOpenChange }: PaymentModalProps) => {
  const [telegram, setTelegram] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!telegram || !course) return;

    window.open(course.telegramLink, "_blank");
    setTelegram("");
    onOpenChange(false);
  };

  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/^@/, "");
    setTelegram(value);
  };

  if (!course) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-sm p-4 sm:p-5 rounded-xl">
        <DialogHeader className="pb-2">
          <DialogTitle className="font-heading text-base sm:text-lg leading-tight">
            {course.title}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Price */}
          <PriceDisplay price={course.price} oldPrice={course.oldPrice} variant="lg" />

          {/* Target Audience */}
          <div className="bg-muted/50 rounded-lg p-2.5 sm:p-3">
            <p className="text-xs font-medium text-foreground mb-1.5">Этот курс для тебя, если ты:</p>
            <ul className="space-y-1">
              {course.targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-success mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Telegram Input */}
          <div className="space-y-1.5">
            <Label htmlFor="telegram" className="text-xs sm:text-sm">
              Твой Telegram
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                @
              </span>
              <Input
                id="telegram"
                type="text"
                placeholder="username"
                value={telegram}
                onChange={handleTelegramChange}
                required
                className="h-10 sm:h-11 pl-7 text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full btn-primary h-10 sm:h-11 text-sm"
            disabled={!telegram}
          >
            <Send className="w-4 h-4 mr-2" />
            Записаться за {course.price.toLocaleString()} ₽
          </Button>

          <p className="text-[10px] sm:text-xs text-center text-muted-foreground leading-tight">
            После нажатия откроется Telegram-канал курса с инструкциями
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
