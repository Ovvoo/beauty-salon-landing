---
name: ship
description: Merge feature branch в main → production deploy. Проверяет uncommitted changes, показывает diff, подтверждение, cleanup branch
argument-hint: [--force для пропуска подтверждения]
user-invocable: true
disable-model-invocation: true
---

# Ship to Production

Feature branch → main → Production.

## Вход
Опции: $ARGUMENTS

## Шаги
1. Проверить не в `main`
2. Проверить нет uncommitted changes
3. Показать `git log main..HEAD`
4. Подтверждение (если нет --force)
5. `git checkout main && git pull && git merge --no-ff && git push`
6. Cleanup: `git branch -d {branch} && git push origin --delete {branch}`

## Вывод
```
✅ Shipped to production!
🚀 Deploy: ~1-2 мин
📋 Merged: {branch} → main
```
