---
name: ui-guardian
description: UI quality guardian. ALWAYS activate when creating, modifying, or reviewing React components, UI elements, styles, Tailwind CSS, or shadcn/ui. Prevents hardcode, enforces design system, ensures component reuse. Use for ANY UI work.
---

# UI Guardian — Mandatory Process

## STEP 1: Search Before Creating (MANDATORY)

Before writing ANY UI code, search existing components:
```bash
# List all components
ls src/components/ui/
ls src/components/shared/
ls src/components/patterns/

# Search for similar patterns
grep -r "Card" src/components/ --include="*.tsx" -l
grep -r "Dialog" src/components/ --include="*.tsx" -l
grep -r "Button" src/components/ --include="*.tsx" -l

# Find component by functionality
fd -e tsx . src/components/ | xargs grep -l "onClick"
```

**If similar exists → EXTEND or REUSE, don't create new.**

---

## STEP 2: Check Design Tokens
```bash
# Theme variables
grep -A 50 "@theme" src/app/globals.css

# Available shadcn components
ls src/components/ui/
```

---

## Tailwind v4 Rules (2025+)

### ✅ Correct (v4)
```tsx
// CSS-first configuration via @theme
// Dynamic values: grid-cols-15, z-40, w-103
// Container queries: @container, @sm:, @lg:
// CSS variables: bg-(--brand-color) 
// Native cascade layers: @layer theme, base, components, utilities
```

### ❌ Forbidden
```tsx
// NO @apply in components (deprecated pattern)
// NO tailwind.config.js for theming (use @theme in CSS)
// NO arbitrary hex: bg-[#xxx] → use CSS variables
// NO text-white/text-black → use text-foreground
// NO hardcoded colors: text-zinc-500 → text-muted-foreground
```

---

## shadcn/ui Rules (2025+)

### Component Hierarchy
```
src/components/
├── ui/        # shadcn (NEVER modify directly)
├── shared/    # Reusable business components
├── patterns/  # Composed patterns (ResponsiveModal, etc.)
└── [feature]/ # Feature-specific
```

### Patterns
- **Composition over inheritance** — combine existing components
- **Use cn() utility** — for conditional classes
- **Variants with cva** — class-variance-authority for styling
- **Never wrap shadcn** — extend through composition

### Adding Components
```bash
npx shadcn@latest add [component-name]
```

---

## FORBIDDEN Actions

| ❌ Never | ✅ Instead |
|----------|-----------|
| `<button>` | `<Button>` from shadcn |
| `<input>` | `<Input>` from shadcn |
| `<div onClick>` | `<Button variant="ghost">` |
| Inline styles | Tailwind classes |
| Random spacing `px-[13px]` | Design tokens `p-4` |
| New component without search | Search → reuse → extend → create |
| Modify `ui/*.tsx` directly | Create wrapper in `shared/` |
| `any` type | Proper TypeScript |
| Hardcoded strings | i18n `t('key')` |

---

## Before Commit Verification
```bash
# Check forbidden patterns
grep -rn "bg-\[#" src/components/ --include="*.tsx"
grep -rn "text-white" src/components/ --include="*.tsx"  
grep -rn "<button" src/components/ --include="*.tsx"
grep -rn "<input[^I]" src/components/ --include="*.tsx"
grep -rn "style={{" src/components/ --include="*.tsx"
```

**If any found → FIX before commit.**

---

## Component Creation Checklist

Before creating NEW component, verify ALL:

- [ ] Searched `src/components/ui/` — not in shadcn?
- [ ] Searched `src/components/shared/` — doesn't exist?
- [ ] Used `grep` to find similar patterns — none found?
- [ ] Checked `src/components/patterns/` — no pattern fits?
- [ ] Will use CSS variables, not hardcoded colors?
- [ ] Will use design tokens for spacing?
- [ ] TypeScript types defined?

**Only if ALL checked → create in correct location.**
