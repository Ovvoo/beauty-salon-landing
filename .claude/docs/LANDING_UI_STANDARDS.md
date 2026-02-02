# Landing UI Standards — Universal Guide

> Краткая памятка для любого лендинга. Копируй в `.claude/docs/` нового проекта.

---

## 1. Mobile First

**Базовые стили — для мобильных. Расширяем через breakpoints.**

```
sm: 640px   — крупные телефоны
md: 768px   — планшеты
lg: 1024px  — ноутбуки
xl: 1280px  — десктопы
2xl: 1536px — большие экраны
```

```tsx
// ✅ Правильно: mobile-first
className="text-base md:text-lg lg:text-xl"

// ❌ Неправильно: desktop-first
className="text-xl sm:text-base"
```

---

## 2. Zoom-Safe Sizing (WCAG 1.4.10)

**Viewport units (vh, vw, svh, dvh) НЕ масштабируются при zoom браузера!**

| ❌ Избегать | ✅ Использовать |
|-------------|-----------------|
| `h-[50vh]`, `h-[40svh]` | `aspect-[4/3]` + `max-h-[30rem]` |
| `w-screen`, `min-h-screen` | `w-full`, `min-h-full` |
| `text-[3vw]` | `text-base md:text-lg` |

```tsx
// ✅ Zoom-safe изображение
<img className="w-full aspect-[3/2] sm:aspect-[4/5] md:aspect-[4/3] object-cover
               md:max-h-[26rem] lg:max-h-[30rem]" />
```

---

## 3. WCAG 2.2 Touch Targets

| Уровень | Размер | Класс |
|---------|--------|-------|
| AA Minimum | 24×24px | `h-6 w-6` |
| **AAA Enhanced** | **44×44px** | **`h-11`** |

```tsx
// ✅ CTA кнопка — 44px высота
<Button className="h-11 px-6 rounded-xl">Действие</Button>
```

---

## 4. Text Sizes

| Элемент | Mobile | Desktop |
|---------|--------|---------|
| Body text | `text-sm` (14px) | `text-base` (16px) |
| Subheadline | `text-sm` | `text-lg` |
| Headline | `text-xl` | `text-4xl` — `text-5xl` |
| Small/Meta | `text-xs` (12px) | `text-sm` (14px) |

**Минимум читаемого текста: 12px (`text-xs`)**

---

## 5. Above the Fold (First Screen)

**80% внимания пользователя — выше fold (NN/g research)**

### Обязательно видно без скролла:
- Badge/индикатор
- Headline (6-10 слов)
- Subheadline
- CTA кнопки
- Изображение/визуал

### Padding для fixed header:
```tsx
// Header h-14 (56px) → контент pt-16 (64px) минимум
className="pt-16 sm:pt-20 md:pt-24 lg:pt-28"
```

---

## 6. Flex Alignment

| Задача | Класс |
|--------|-------|
| Выровнять по верху (разная высота) | `items-start` |
| Центрировать (одинаковая высота) | `items-center` |
| Растянуть на всю высоту | `items-stretch` |

```tsx
// ✅ Split layout — выравнивание по верху
<div className="flex flex-col md:flex-row md:items-start md:gap-8">
  <div className="order-2 md:order-1 md:w-1/2">Content</div>
  <div className="order-1 md:order-2 md:w-1/2">Image</div>
</div>
```

---

## 7. Container & Spacing

```tsx
// Стандартный контейнер
<div className="container mx-auto px-4 sm:px-6 lg:px-8">

// Section padding
className="py-12 sm:py-16 md:py-20 lg:py-24"
```

---

## 8. Images

```tsx
// Hero image — eager loading (LCP)
<img
  src={heroImage}
  alt="Описание"
  loading="eager"
  className="w-full aspect-[3/2] md:aspect-[4/3] object-cover object-top"
/>

// Below fold — lazy loading
loading="lazy"
```

### Aspect Ratios по экранам:
| Breakpoint | Ratio | Ориентация |
|------------|-------|------------|
| Mobile | `3/2` | Landscape (короткое) |
| Tablet | `4/5` | Portrait |
| Desktop | `4/3` или `5/4` | Landscape |

---

## 9. Floating Elements

```tsx
// Карточка, выходящая за край изображения
<div className="absolute bottom-3 left-1
               sm:bottom-4 sm:left-2
               md:bottom-6 md:-left-3 lg:-left-4
               bg-card p-2 rounded-xl shadow-lg">
```

---

## 10. Чек-лист перед релизом

- [ ] Mobile First — стили от маленького к большому
- [ ] Нет viewport units (vh, vw, svh, dvh)
- [ ] Touch targets ≥ 44px для CTA
- [ ] Минимальный текст ≥ 12px
- [ ] Above the Fold: headline + CTA видны
- [ ] Padding-top > высоты fixed header
- [ ] Контраст текста ≥ 4.5:1
- [ ] Изображения с aspect-ratio, не фиксированной высотой
- [ ] Hero image: loading="eager"
- [ ] Тест zoom 200% — контент не обрезается

---

## Quick Reference

```tsx
// Hero Section шаблон
<section className="relative bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8
                  pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 md:pb-10">
    <div className="flex flex-col md:flex-row md:items-start md:gap-8">

      {/* Content */}
      <div className="order-2 md:order-1 md:w-1/2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Headline
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Subheadline
        </p>
        <Button className="h-11 px-6">CTA</Button>
      </div>

      {/* Image */}
      <div className="order-1 md:order-2 md:w-1/2">
        <img
          className="w-full aspect-[3/2] md:aspect-[4/3] object-cover
                     rounded-2xl md:max-h-[26rem] lg:max-h-[30rem]"
          loading="eager"
        />
      </div>

    </div>
  </div>
</section>
```

---

*Стандарт актуален на февраль 2026*
