import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/beauty/Logo";

const BeautyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#courses", label: "Курсы" },
    { href: "/#benefits", label: "Преимущества" },
    { href: "/#reviews", label: "Отзывы" },
    { href: "/#news", label: "Новости" },
    { href: "/#faq", label: "Вопросы" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center shrink-0 mr-8 lg:mr-12"
          >
            <Logo className="text-lg sm:text-xl md:text-2xl" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
            <a href="/#courses">
              <Button className="btn-primary text-sm lg:text-base">Выбрать курс</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground h-9 w-9 sm:h-10 sm:w-10"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-t border-border transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2.5 sm:py-3 text-sm sm:text-base"
            >
              {link.label}
            </a>
          ))}
          <a href="/#courses" onClick={() => setIsMenuOpen(false)} className="mt-2">
            <Button className="btn-primary w-full text-sm sm:text-base py-2.5 sm:py-3">Выбрать курс</Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default BeautyHeader;
