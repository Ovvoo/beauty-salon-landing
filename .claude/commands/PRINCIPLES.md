# Principles

## Core

1. **READ BEFORE CHANGE** — не меняй код, который не читал
2. **MINIMAL CHANGES** — делай только то, что просят
3. **PRESERVE PATTERNS** — следуй стилю проекта
4. **NO `any`** — strict TypeScript
5. **VERIFY** — `npx tsc --noEmit` после каждого изменения

## Search

| Задача | Инструмент |
|--------|------------|
| Найти файл | `Glob` |
| Найти паттерн | `Grep` |
| Понять код | `Read` |

**Task/Explore** — только по явному запросу.

## Quality Cycle

```
Write → Review → Verify → Fix if needed
```

**Checklist:**
- [ ] Синтаксис корректен?
- [ ] Логика верна?
- [ ] Edge cases обработаны?
- [ ] Hooks до early return?

## Anti-Patterns

- Blind trust — всегда проверяй AI-код
- Skip verification — `tsc --noEmit` обязателен
- Hooks after return — хуки ВСЕГДА до return
- Native HTML — используй shadcn/ui

## When to Break Rules

1. User explicitly requests
2. Security conflict (security wins)
3. Critical production bug (minimal hotfix)
