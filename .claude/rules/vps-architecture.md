# VPS Architecture

## Схема
```
Браузер → Nginx (443, www.beautystart.ru)
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
| `http://beautystart.ru` | 301 → `https://www.beautystart.ru` |
| `http://www.beautystart.ru` | 301 → `https://www.beautystart.ru` |
| `https://beautystart.ru` | 301 → `https://www.beautystart.ru` |
| `https://www.beautystart.ru` | 200 (основной) |

## PocketBase
- SDK: `pocketbase ^0.26.8` (npm)
- URL задаётся через `VITE_POCKETBASE_URL` в `.env` (build-time)
- Fallback в коде: `http://localhost:8090` — работает ТОЛЬКО локально
- Коллекции: `courses`, `telegram_posts`, `leads`
