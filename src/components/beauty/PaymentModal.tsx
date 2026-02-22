import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, Send, Play, Award, MessageCircle } from "lucide-react";
import PriceDisplay from "./PriceDisplay";
import type { Course } from "@/lib/types";
import { submitLead } from "@/lib/leads";
import { getUtmParams } from "@/lib/utm";

interface PaymentModalProps {
  course: Course | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GUARANTEES = [
  { icon: Play, text: "Доступ навсегда" },
  { icon: Award, text: "Сертификат" },
  { icon: MessageCircle, text: "Поддержка куратора" },
];

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const PaymentModal = ({ course, open, onOpenChange }: PaymentModalProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !isValidEmail(email) || !course) return;

    const utm = getUtmParams();
    submitLead({
      email,
      courseId: course.id,
      courseTitle: course.title,
      ...utm,
    });

    window.open(course.telegramLink, "_blank");
    setEmail("");
    onOpenChange(false);
  };

  if (!course) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-sm md:max-w-md p-0 rounded-xl overflow-hidden gap-0 flex flex-col max-h-[90vh]">

        {/* ===== STICKY TOP: Image + Title overlay ===== */}
        <div className="relative shrink-0">
          {course.image && (
            <>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 sm:h-52 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </>
          )}
          {/* Title + price on image */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <h2 className="font-heading text-base sm:text-lg font-bold text-background leading-tight mb-1">
              {course.title}
            </h2>
            <div className="flex items-baseline gap-2">
              {course.oldPrice && course.oldPrice > course.price && (
                <span className="line-through text-background/60 text-xs sm:text-sm">
                  {course.oldPrice.toLocaleString()} ₽
                </span>
              )}
              <span className="font-bold text-gold text-lg sm:text-xl">
                {course.price.toLocaleString()} ₽
              </span>
            </div>
          </div>
        </div>

        {/* Badges + guarantees — under image */}
        <div className="px-3 sm:px-4 pt-3 pb-1 shrink-0 flex flex-wrap gap-1.5">
          <Badge className="bg-primary/10 text-primary border-0 text-[10px] sm:text-xs">
            {course.category}
          </Badge>
          <Badge className="bg-muted text-muted-foreground border-0 text-[10px] sm:text-xs">
            {course.level}
          </Badge>
          {GUARANTEES.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1 bg-muted/50 rounded-full px-2 py-0.5">
              <Icon className="w-3 h-3 text-primary shrink-0" />
              <span className="text-[10px] sm:text-xs text-foreground">{text}</span>
            </div>
          ))}
        </div>

        {/* ===== SCROLLABLE BODY ===== */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-2">
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
        </div>

        {/* ===== STICKY BOTTOM: Email + CTA ===== */}
        <form onSubmit={handleSubmit} className="shrink-0 px-3 sm:px-4 pb-3 sm:pb-4 pt-2 border-t border-border bg-background space-y-2.5">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Твой Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email"
              className="h-11 text-sm flex-1"
            />
            <Button
              type="submit"
              className="btn-primary h-11 text-sm px-4 sm:px-5 shrink-0"
              disabled={!email || !isValidEmail(email)}
            >
              <Send className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Записаться</span>
            </Button>
          </div>
          <p className="text-[10px] sm:text-xs text-center text-muted-foreground leading-tight">
            После нажатия откроется Telegram-канал с инструкциями
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
