---
name: verify-task
description: Проверяет выполненную задачу по чеклисту - TypeScript, логика, edge cases, best practices, интеграция. Fail → Fix → Verify again
metadata:
  tags: verification, quality, checklist
---

# Verify Task

Проверка выполненной задачи.

## Вход
Задача: $ARGUMENTS

## Чеклист
1. ✓ **Синтаксис** — `npx tsc --noEmit`
2. ✓ **Логика** — делает то что нужно?
3. ✓ **Edge cases** — null, undefined, empty, errors
4. ✓ **Best practices** — паттерны стека
5. ✓ **Интеграция** — работает с существующим кодом
6. ✓ **Docs** — внешние API проверены?

## При ошибке внешнего API
| Сервис | Действие |
|--------|----------|
| Supabase | `mcp__supabase__search_docs` |
| Clerk | WebFetch https://clerk.com/docs |
| Vercel | `mcp__vercel__search_vercel_documentation` |

## Формат
```
| # | Проверка | Статус |
|---|----------|--------|
| 1 | Синтаксис | ✅/❌ |
...

Результат: ✅ PASSED / ❌ FAILED
```

**Fail → Fix → Verify again**
