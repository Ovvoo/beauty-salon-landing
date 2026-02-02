---
name: preview
description: Быстрый commit и push в feature branch для Vercel Preview. Создаёт branch если в main, генерирует commit message из diff
argument-hint: [commit message]
user-invocable: true
disable-model-invocation: true
---

# Preview Deploy

Commit + push в feature branch → Vercel Preview URL.

## Вход
Commit message: $ARGUMENTS

## Шаги
1. Если в `main` → создать feature branch
2. `git status` + `git diff --stat`
3. Если $ARGUMENTS пуст → сгенерировать message из diff
4. `git add -A && git commit && git push -u origin {branch}`

## Формат commit
```
тип(область): описание

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## Вывод
```
✅ Pushed to: feature/{name}
🔗 Preview: https://{project}-git-{branch}.vercel.app (~1 мин)
📋 Следующий шаг: /ship
```
