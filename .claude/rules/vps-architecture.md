# VPS Architecture

## Схема
```
Браузер → Nginx (443, www.beautybegin.ru)
            ├── /          → static files (/opt/myapp/dist)
            ├── /api       → PocketBase (localhost:8090)
            └── /_         → PocketBase Admin (localhost:8090)
```

## Сервисы
| Сервис | Порт | Управление |
|--------|------|------------|
| Nginx | 80, 443 | `systemctl reload nginx` |
| PocketBase | 8090 | PM2 id:9 (`pm2 restart 9`) |

## Домены
| Запрос | Результат |
|--------|-----------|
| `http://beautybegin.ru` | 301 → `https://www.beautybegin.ru` |
| `http://www.beautybegin.ru` | 301 → `https://www.beautybegin.ru` |
| `https://beautybegin.ru` | 301 → `https://www.beautybegin.ru` |
| `https://www.beautybegin.ru` | 200 (основной) |

## PocketBase
- SDK: `pocketbase ^0.26.8` (npm)
- URL задаётся через `VITE_POCKETBASE_URL` в `.env` (build-time)
- Fallback в коде: `http://localhost:8090` — работает ТОЛЬКО локально
- Коллекции: `courses`, `telegram_posts`, `leads`
