# Beauty Salon

Лендинг онлайн-школы бьюти-индустрии (ресницы, брови).

## Stack

Vite 5 · React 18 · TypeScript · Tailwind CSS 3 · shadcn/ui · React Router 6

## Commands

```bash
npm run dev          # Dev server
npm run build        # Build
npx tsc --noEmit     # Type check
```

## Critical Rules

1. **NO `any`** — strict TypeScript
2. **shadcn/ui only** — не `<button>`, а `<Button>`
3. **CSS variables** — `bg-card`, `text-gold` (NO hex, NO `text-white`)
4. **`@/` imports**
5. **NO agents** без запроса — используй `Glob`, `Grep`, `Read`

## Structure

```
src/
├── components/
│   ├── ui/           # shadcn primitives
│   └── beauty/       # Landing sections (Header, Hero, Courses, Benefits, Reviews, FAQ, Footer)
├── pages/            # BeautyLanding, Privacy, Terms
└── assets/           # Images
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
