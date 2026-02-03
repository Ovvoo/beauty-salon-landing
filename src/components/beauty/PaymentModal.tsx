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
import { CheckCircle, Send, Award } from "lucide-react";

interface Course {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  telegramLink: string;
}

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

    // Открываем Telegram-канал курса в новой вкладке
    window.open(course.telegramLink, "_blank");

    // Закрываем модальное окно и сбрасываем форму
    setTelegram("");
    onOpenChange(false);
  };

  // Форматируем ввод Telegram username
  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Убираем @ если пользователь ввёл его, мы добавим сами
    value = value.replace(/^@/, "");
    setTelegram(value);
  };

  if (!course) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            Записаться на курс
          </DialogTitle>
          <DialogDescription>
            {course.title}
          </DialogDescription>
        </DialogHeader>

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

          {/* Telegram Input */}
          <div className="space-y-2">
            <Label htmlFor="telegram">Ваш Telegram</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                @
              </span>
              <Input
                id="telegram"
                type="text"
                placeholder="username"
                value={telegram}
                onChange={handleTelegramChange}
                required
                className="h-12 pl-8"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Укажите ваш никнейм в Telegram для связи
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
            disabled={!telegram}
          >
            <Send className="w-4 h-4 mr-2" />
            Записаться за {course.price.toLocaleString()} ₽
          </Button>

          <div className="bg-muted/50 rounded-lg p-3 flex items-start gap-2">
            <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground">
              После нажатия вы перейдёте в закрытый Telegram-канал курса, где получите инструкции по оплате и доступ к материалам
            </p>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="/terms-of-service" className="underline hover:text-primary">
              публичной офертой
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
