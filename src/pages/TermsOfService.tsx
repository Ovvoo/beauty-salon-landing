import { useEffect } from "react";
import BeautyHeader from "../components/beauty/BeautyHeader";
import BeautyFooter from "../components/beauty/BeautyFooter";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Публичная оферта — BeautyStart";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BeautyHeader />

      <main className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <header className="mb-8 sm:mb-12 text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Публичная оферта
            </h1>
            <p className="text-muted-foreground text-sm">
              Дата последнего обновления: 1 февраля 2026 г.
            </p>
          </header>

          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                1. Общие положения
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Настоящий документ является публичной офертой BeautyStart.ru (далее — «Исполнитель») и определяет условия предоставления доступа к онлайн-курсам по наращиванию ресниц и оформлению бровей. Оплата курса является акцептом настоящей оферты.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                2. Предмет оферты
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Исполнитель предоставляет Заказчику доступ к видеоматериалам выбранного онлайн-курса, включая учебные материалы, чек-листы и доступ к закрытому Telegram-каналу курса. По завершении курса выдаётся электронный сертификат.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                3. Порядок оплаты
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Оплата производится единовременно в полном объёме до получения доступа к материалам курса. Цены указаны на сайте BeautyStart.ru и могут изменяться без предварительного уведомления. Стоимость курса фиксируется в момент оплаты.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                4. Доступ к материалам
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Доступ к материалам курса предоставляется бессрочно с момента оплаты. Материалы предназначены исключительно для личного использования Заказчиком. Передача доступа третьим лицам, копирование и распространение материалов запрещены.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                5. Возврат средств
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Возврат денежных средств возможен в течение 7 дней с момента оплаты при условии, что Заказчик не получил доступ к материалам курса. После получения доступа возврат не осуществляется, так как информационные услуги считаются оказанными в полном объёме.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                6. Ответственность сторон
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Исполнитель не несёт ответственности за результаты применения полученных знаний Заказчиком. Курс носит информационно-образовательный характер. Результат обучения зависит от индивидуальных усилий Заказчика.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                7. Контактная информация
              </h2>
              <div className="text-muted-foreground text-sm sm:text-base space-y-1">
                <p>Сайт: BeautyStart.ru</p>
                <p>Email: info@beautystart.ru</p>
                <p>Telegram: @Education_La</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <BeautyFooter />
    </div>
  );
};

export default TermsOfService;
