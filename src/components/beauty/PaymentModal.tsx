import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send, Award, Lock } from "lucide-react";

interface Course {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
}

interface PaymentModalProps {
  course: Course | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal = ({ course, open, onOpenChange }: PaymentModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !course) return;

    setIsSubmitting(true);

    // Имитация обработки оплаты
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Сброс через 3 секунды
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      onOpenChange(false);
    }, 3000);
  };

  if (!course) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            {isSuccess ? "Оплата успешна!" : "Оформление заказа"}
          </DialogTitle>
          <DialogDescription>
            {isSuccess
              ? "Проверьте вашу почту"
              : course.title}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">
              Спасибо за покупку!
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              На указанный email отправлены:
            </p>
            <div className="space-y-2 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-3 text-sm">
                <Award className="w-5 h-5 text-primary" />
                <span>Сертификат о прохождении</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Send className="w-5 h-5 text-primary" />
                <span>Ссылка на закрытый Telegram-канал</span>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Course Info */}
            <div className="bg-muted rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Курс:</span>
                <span className="font-medium text-foreground">{course.title}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-muted-foreground">Стоимость:</span>
                <div className="flex items-center gap-2">
                  <span className="line-through text-muted-foreground text-sm">
                    {course.oldPrice.toLocaleString()} ₽
                  </span>
                  <span className="font-bold text-primary text-lg">
                    {course.price.toLocaleString()} ₽
                  </span>
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email">Email для получения доступа</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
              <p className="text-xs text-muted-foreground">
                На этот адрес будет отправлен сертификат и ссылка на Telegram-канал с уроками
              </p>
            </div>

            {/* What you get */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Вы получите:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Доступ к закрытому Telegram-каналу
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Все видеоуроки курса
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Сертификат после прохождения
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Поддержка от куратора
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full btn-primary h-12"
              disabled={isSubmitting || !email}
            >
              {isSubmitting ? (
                "Обработка..."
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Оплатить {course.price.toLocaleString()} ₽
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="/terms-of-service" className="underline hover:text-primary">
                публичной офертой
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
