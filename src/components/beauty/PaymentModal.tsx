import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      <DialogContent className="w-[calc(100%-2rem)] max-w-md p-0 rounded-xl overflow-hidden">
        {/* Course image */}
        {course.image && (
          <div className="relative h-36 sm:h-44 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-2.5 left-3 flex gap-1.5">
              <Badge className="bg-card/90 text-card-foreground text-[10px] sm:text-xs">
                {course.category}
              </Badge>
              <Badge variant="outline" className="bg-card/90 text-card-foreground border-border text-[10px] sm:text-xs">
                {course.level}
              </Badge>
            </div>
          </div>
        )}

        <div className="p-4 sm:p-5">
          <DialogHeader className="pb-2">
            <DialogTitle className="font-heading text-base sm:text-lg leading-tight">
              {course.title}
            </DialogTitle>
          </DialogHeader>

          {/* Price */}
          <div className="mb-3">
            <PriceDisplay price={course.price} oldPrice={course.oldPrice} variant="lg" />
          </div>

          {/* Guarantees */}
          <div className="flex gap-2 mb-3">
            {GUARANTEES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex-1 flex items-center gap-1.5 bg-muted/50 rounded-lg px-2 py-1.5">
                <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[10px] sm:text-xs text-foreground leading-tight">{text}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
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

            {/* Email Input */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm">
                Твой Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 sm:h-11 text-sm"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full btn-primary h-10 sm:h-11 text-sm"
              disabled={!email || !isValidEmail(email)}
            >
              <Send className="w-4 h-4 mr-2" />
              Записаться за {course.price.toLocaleString()} ₽
            </Button>

            <p className="text-[10px] sm:text-xs text-center text-muted-foreground leading-tight">
              После нажатия откроется Telegram-канал курса с инструкциями
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
