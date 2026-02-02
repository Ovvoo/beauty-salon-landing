import { Send, Instagram, Mail } from "lucide-react";

const BeautyFooter = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-3 sm:mb-4">
              <span className="font-heading text-xl sm:text-2xl font-bold text-background">
                LASH<span className="text-gold">&</span>BROW
              </span>
            </a>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
              Авторские онлайн-курсы по наращиванию ресниц и оформлению бровей от практикующего мастера.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4">Связаться</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://t.me/lash_brow_master"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-background/70 hover:text-gold transition-colors duration-200 text-sm"
              >
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Telegram</span>
              </a>
              <a
                href="https://instagram.com/lash_brow_master"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-background/70 hover:text-gold transition-colors duration-200 text-sm"
              >
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:info@lashbrow.ru"
                className="flex items-center gap-2 sm:gap-3 text-background/70 hover:text-gold transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>info@lashbrow.ru</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4">Документы</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="/terms-of-service"
                className="block text-background/70 hover:text-gold transition-colors duration-200 text-sm"
              >
                Публичная оферта
              </a>
              <a
                href="/privacy-policy"
                className="block text-background/70 hover:text-gold transition-colors duration-200 text-sm"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-background/20 text-center">
          <p className="text-background/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} Lash&Brow. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BeautyFooter;
