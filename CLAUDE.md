# Beauty Salon

Лендинг онлайн-школы бьюти-индустрии (ресницы, брови, шугаринг, волос).

## КРИТИЧЕСКИ ВАЖНО — ПРОДАКШЕН

- **Продакшен работает. Данные = приоритет №1. НЕ ЛОМАТЬ.**
- Перед ЛЮБЫМ действием на VPS — проверь что не потеряешь данные
- PocketBase (`pb_data`) — единый источник правды. Git не содержит данные БД.
- Fallback (в коде) — страховка на случай падения PB, НЕ источник правды

## Stack

Vite 5 · React 18 · TypeScript · Tailwind CSS 3 · shadcn/ui · React Router 6 · PocketBase 0.36

## Architecture

```
Браузер → Nginx (443, www.beautybegin.ru)
            ├── /          → static files (/opt/myapp/dist)
            ├── /api       → PocketBase (localhost:8090)
            └── /_         → PocketBase Admin (localhost:8090)
```

PocketBase на VPS: PM2 id:9, `--dir=/opt/pocketbase/pb_data`

## Collections (PocketBase)

| Коллекция | Read | Create | Update | Назначение |
|-----------|------|--------|--------|------------|
| courses | Public | Superuser | Superuser | 9 курсов, цены, описания |
| leads | — | Public | — | Заявки с сайта |
| telegram_posts | Public | Superuser | Superuser | Отзывы и новости |

## Commands

```bash
npm run dev          # Dev server
npm run build        # Build
npx tsc --noEmit     # Type check
```

## Deploy (VPS)

```bash
ssh root@168.222.193.241
cd /opt/myapp
git pull
cat .env             # ПРОВЕРИТЬ: VITE_POCKETBASE_URL=https://www.beautybegin.ru
npm run build
```

## Critical Rules

1. **NO `any`** — strict TypeScript
2. **shadcn/ui only** — не `<button>`, а `<Button>`
3. **CSS variables** — `bg-card`, `text-gold` (NO hex, NO `text-white`)
4. **`@/` imports**
5. **NO agents** без запроса — используй `Glob`, `Grep`, `Read`
6. **Категории курсов**: `"Ресницы" | "Брови" | "Шугаринг" | "Волос"`
7. **Fallback price = 990₽** — безопасный дефолт, не менять на актуальную цену PB

## Structure

```
src/
├── components/
│   ├── ui/           # shadcn primitives
│   └── beauty/       # Landing sections (Header, Hero, Courses, Benefits, Reviews, FAQ, Footer)
├── pages/            # BeautyLanding, Privacy, Terms
├── config/           # site.ts
├── hooks/            # use-courses, use-telegram-posts
├── lib/              # pocketbase, types, fallback-data, leads, utm
└── assets/           # Images (7 webp)
```

## Design

| Token | Class |
|-------|-------|
| Background | `bg-background`, `bg-card`, `bg-muted` |
| Text | `text-foreground`, `text-muted-foreground` |
| Accent | `text-gold`, `bg-primary` |
| Fonts | `font-heading` (Montserrat), `font-sans` (Inter) |

## Patterns

```tsx
// Section
<section className="section-padding bg-muted">
  <div className="container mx-auto">
    <h2 className="section-title">...</h2>
  </div>
</section>

// Card
<div className="bg-card rounded-xl p-4 hover:shadow-lg transition-all">

// CTA
<Button className="btn-primary rounded-full">
```

## Verify

```bash
npx tsc --noEmit && npm run lint
```
