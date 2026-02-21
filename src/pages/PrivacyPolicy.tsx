import { useEffect } from "react";
import BeautyHeader from "../components/beauty/BeautyHeader";
import BeautyFooter from "../components/beauty/BeautyFooter";
import { SITE } from "@/config/site";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = `Политика конфиденциальности — ${SITE.name}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BeautyHeader />

      <main className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <header className="mb-8 sm:mb-12 text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Политика конфиденциальности
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
                {SITE.domain} (далее — «Сайт») уважает вашу конфиденциальность и обязуется защищать персональные данные, которые вы предоставляете при использовании Сайта. Настоящая Политика описывает, какие данные мы собираем, как их используем и защищаем.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                2. Собираемые данные
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
                При оформлении заказа и использовании Сайта мы можем собирать:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base space-y-1">
                <li>Имя и контактные данные (email, Telegram)</li>
                <li>Данные об оплате (обрабатываются через защищённые платёжные сервисы)</li>
                <li>Техническую информацию (IP-адрес, тип браузера, страницы посещений)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                3. Цели обработки данных
              </h2>
              <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base space-y-1">
                <li>Предоставление доступа к оплаченным курсам</li>
                <li>Связь с вами по вопросам обучения</li>
                <li>Улучшение качества Сайта и курсов</li>
                <li>Исполнение требований законодательства РФ</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                4. Защита данных
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Мы принимаем технические и организационные меры для защиты ваших данных от несанкционированного доступа, изменения или уничтожения. Платёжные данные обрабатываются сертифицированными платёжными системами и не хранятся на наших серверах.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                5. Передача данных третьим лицам
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ, а также для обработки платежей через сертифицированные платёжные сервисы.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                6. Файлы cookie
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Сайт использует файлы cookie для улучшения пользовательского опыта и анализа посещаемости. Вы можете отключить cookie в настройках браузера, однако это может повлиять на функциональность Сайта.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                7. Ваши права
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Вы вправе запросить информацию о хранимых персональных данных, потребовать их исправления или удаления, обратившись по контактам ниже.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3">
                8. Контактная информация
              </h2>
              <div className="text-muted-foreground text-sm sm:text-base space-y-1">
                <p>Сайт: {SITE.domain}</p>
                <p>Email: {SITE.email}</p>
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

export default PrivacyPolicy;
