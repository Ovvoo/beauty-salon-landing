---
description: UI/Design rules
---

# UI

## Stack
shadcn/ui · Tailwind CSS 3 · Lucide Icons

## Colors (CSS Variables ONLY)
| Use | Class |
|-----|-------|
| Background | `bg-background`, `bg-card`, `bg-muted` |
| Text | `text-foreground`, `text-muted-foreground` |
| Accent | `text-gold`, `bg-primary` |

**FORBIDDEN:** `bg-[#xxx]`, `text-white`, `text-zinc-*`

## Typography
| Element | Class |
|---------|-------|
| Title | `font-heading text-3xl font-bold` |
| Section | `section-title` |
| Body | `text-sm text-muted-foreground` |

## Buttons
| Variant | When |
|---------|------|
| `default` | Primary CTA |
| `secondary` | Secondary |
| `outline` | Tertiary |
| `ghost` | Minimal |

## Mobile First
```tsx
// ✅ Correct
<div className="text-base md:text-lg">

// ❌ Wrong
<div className="text-lg max-md:text-base">
```

## Accessibility
- `aria-label` на icon buttons
- Alt text на images
- Focus trap в modals
