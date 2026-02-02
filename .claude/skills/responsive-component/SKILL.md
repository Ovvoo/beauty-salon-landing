---
name: responsive-component
description: Создание responsive UI компонента с mobile-first. Использует ResponsiveModal/Card/Table из patterns/, breakpoints md:/lg:, touch targets 44px
---

# Responsive Component

Создание адаптивного компонента.

## Паттерны
| Задача | Компонент |
|--------|-----------|
| Modal/Sheet | `ResponsiveModal` |
| Card layout | `ResponsiveCard` |
| Form layout | `ResponsiveForm` |
| Table/List | `ResponsiveTable` |

## Mobile First
```tsx
// ✅ Правильно
<div className="flex-col p-4 md:flex-row md:p-6">

// ❌ Неправильно
<div className="flex-row p-6 max-md:flex-col">
```

## Breakpoints
| Prefix | Width |
|--------|-------|
| (none) | <640px |
| `md:` | ≥768px |
| `lg:` | ≥1024px |

## Touch Targets
```tsx
<Button className="h-11 md:h-9" />
<Button size="icon" aria-label="Delete" className="size-11 md:size-9" />
```

## Проверка
```bash
npx tsc --noEmit
npm run lint:a11y
```
