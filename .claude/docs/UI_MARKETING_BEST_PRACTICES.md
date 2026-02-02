# UI & Marketing Best Practices for Landing Pages — 2026

> Официальные источники и актуальные исследования

---

## 1. Официальные Design Systems

### Apple Human Interface Guidelines (HIG)
**Источник:** [developer.apple.com/design/human-interface-guidelines](https://developer.apple.com/design/human-interface-guidelines/)

Три принципа:
- **Clarity** — легко понять и навигировать, текст читаемый на любом размере
- **Deference** — интерфейс не отвлекает от контента
- **Depth** — слои и переходы создают иерархию

### Google Material Design 3
**Источник:** [m3.material.io](https://m3.material.io)

- Responsive grid-based layout
- Material as metaphor — поверхности и грани
- Meaningful motion — анимации информируют пользователя

---

## 2. WCAG 2.2 Accessibility (Обязательно)

**Источник:** [W3C WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)

### Контраст (Level AA)
| Элемент | Минимум |
|---------|---------|
| Обычный текст | 4.5:1 |
| Крупный текст (18px+ или 14px bold) | 3:1 |
| UI компоненты, графика | 3:1 |
| Focus индикатор | 3:1 |

### Touch Targets (Level AA)
| Уровень | Размер |
|---------|--------|
| **AA Minimum** | 24×24 CSS px |
| **AAA Enhanced** | 44×44 CSS px |

**Правило:** Между интерактивными элементами достаточно пространства для предотвращения случайных кликов.

---

## 3. Nielsen Norman Group — Above the Fold

**Источник:** [NN/G Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)

### Ключевые данные
| Метрика | Значение |
|---------|----------|
| Время на above-the-fold | **80%** |
| Время на below-the-fold | 20% |
| Среднее время просмотра fold | 57% viewing time |

### Выводы
- **Fold matters** — пользователи скроллят, но 80% внимания выше fold
- **Information scent** — контент выше fold определяет, будут ли скроллить
- **Mobile critical** — на мобильных first fold ещё важнее

---

## 4. Google Core Web Vitals 2026

**Источник:** [Google Developers - Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)

### Три ключевых метрики
| Метрика | Цель | Что измеряет |
|---------|------|--------------|
| **LCP** | < 2.5s | Загрузка главного контента |
| **INP** | < 200ms | Отзывчивость на взаимодействие |
| **CLS** | < 0.1 | Визуальная стабильность |

### Оптимизация для Landing Page
- Изображения: WebP/AVIF, srcset, lazy loading (кроме LCP элемента)
- Шрифты: font-display: swap, preload
- Размеры: явные width/height для img и video
- CSS: критические стили inline

---

## 5. Tailwind CSS Mobile-First

**Источник:** [Tailwind CSS v3 Docs](https://v3.tailwindcss.com/docs/responsive-design)

### Breakpoints
```
sm: 640px   // Крупные телефоны
md: 768px   // Планшеты
lg: 1024px  // Ноутбуки
xl: 1280px  // Десктопы
2xl: 1536px // Большие экраны
```

### Mobile-First принцип
```tsx
// ❌ Неправильно: desktop-first
className="text-2xl sm:text-base"

// ✅ Правильно: mobile-first
className="text-base md:text-xl lg:text-2xl"
```

### Container Padding
```tsx
// Рекомендуемые отступы
className="px-4 sm:px-6 lg:px-8"
```

---

## 6. Hero Section — Тренды 2026

**Источники:**
- [TheeDigital Web Design Trends 2026](https://www.theedigital.com/blog/web-design-trends)
- [ContentSquare Trends](https://contentsquare.com/guides/web-design/trends/)

### Типографика
- **Variable fonts** — один файл, бесконечные вариации
- **Oversized headlines** — крупный шрифт привлекает внимание
- **Kinetic typography** — анимированный текст (умеренно)

### Mobile-First Hero
| Аспект | Рекомендация |
|--------|--------------|
| Высота viewport | 50-70% mobile, 60-100% desktop |
| Layout | Вертикальный стек на mobile |
| Изображения | Vertical-first (портрет) |
| CTA | Thumb-accessible (нижняя часть экрана) |

### Streamlined Design
> "Hero sections with only the most important information reduce friction"

- Минимум элементов
- Один четкий CTA
- Негативное пространство

---

## 7. Landing Page Conversion — Статистика 2026

**Источники:**
- [Hostinger Landing Page Statistics](https://www.hostinger.com/tutorials/landing-page-statistics)
- [KlientBoost Statistics](https://www.klientboost.com/landing-pages/landing-page-statistics/)

### Benchmarks
| Метрика | Значение |
|---------|----------|
| Средний conversion rate | 6.6% |
| Медиана | 2.35% |
| Top 10% | > 11.45% |
| Хороший результат | > 5% |

### Что работает
| Фактор | Эффект |
|--------|--------|
| Хороший headline | **+307%** конверсия |
| Удаление навигации | Повышает конверсию |
| Dynamic landing pages | **+25.2%** mobile users |
| A/B тестирование | 77% бизнесов используют |

---

## 8. Copywriting — Формулы Headlines

**Источники:**
- [Unbounce Landing Page Copywriting](https://unbounce.com/landing-page-copywriting/)
- [HubSpot Writing Tips](https://blog.hubspot.com/marketing/landing-page-writing-tips)

### Правило 80/20
> 8 из 10 читают только headline. 2 из 10 — остальное.

### Требования к Headline
| Правило | Пояснение |
|---------|-----------|
| 6-10 слов | Читается за 3 секунды |
| Benefit > Feature | Продавай результат |
| Clarity first | Мгновенно понятно |
| One promise | Один месседж |

### 4U Framework
1. **Useful** — полезность для пользователя
2. **Urgent** — срочность
3. **Unique** — уникальность предложения
4. **Ultra-specific** — конкретика, цифры

### Примеры для Beauty Landing
```
❌ Feature: "Курсы наращивания ресниц и бровей"
✅ Benefit: "Стань мастером за 2 недели"

❌ Длинно: "Онлайн-курсы по наращиванию ресниц и оформлению бровей с сертификатом"
✅ Коротко: "Курсы с сертификатом. Старт сразу."
```

---

## 9. Чек-лист Hero Section

### Before Launch
- [ ] Headline: 6-10 слов, понятен за 3 сек
- [ ] Benefit, не feature
- [ ] Один CTA
- [ ] Контраст текста ≥ 4.5:1
- [ ] Touch targets ≥ 44px
- [ ] Mobile: текст не перекрывает ключевые части фото
- [ ] Mobile: контент visible без скролла
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

### Mobile-Specific
- [ ] Высота hero: 50-70% viewport
- [ ] Вертикальный layout
- [ ] Gradient не скрывает лицо/объект
- [ ] CTA в зоне большого пальца
- [ ] Шрифт читаемый (min 16px body)

---

## 10. Технические требования

### Изображения
```html
<!-- Responsive с lazy loading -->
<img
  src="hero.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="100vw"
  width="1200"
  height="800"
  alt="Описание"
  loading="eager" <!-- Hero image - не lazy! -->
/>
```

### Шрифты
```css
/* Preload критических шрифтов */
@font-face {
  font-family: 'Heading';
  src: url('/fonts/heading.woff2') format('woff2');
  font-display: swap;
}
```

### Container
```tsx
// Консистентные отступы
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
```

---

## Источники

### Официальные
- [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/)
- [Google Material Design 3](https://m3.material.io)
- [W3C WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Tailwind CSS Docs](https://v3.tailwindcss.com/docs)

### Исследования
- [NN/G Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- [NN/G Fold Manifesto](https://www.nngroup.com/articles/page-fold-manifesto/)

### Статистика
- [Hostinger Landing Page Statistics 2026](https://www.hostinger.com/tutorials/landing-page-statistics)
- [KlientBoost Landing Page Statistics](https://www.klientboost.com/landing-pages/landing-page-statistics/)
- [OptiMonk CRO Guide](https://www.optimonk.com/conversion-rate-optimization-for-landing-pages/)

### Тренды
- [TheeDigital Web Design Trends 2026](https://www.theedigital.com/blog/web-design-trends)
- [ContentSquare Trends](https://contentsquare.com/guides/web-design/trends/)
- [BrandCrowd Typography Trends 2026](https://www.brandcrowd.com/blog/top-typography-trends-in-2026)

---

*Документ актуален на февраль 2026*
