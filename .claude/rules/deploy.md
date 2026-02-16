# Deploy

## VPS: `/opt/myapp/` (reg.ru, IP 168.222.193.241)

### Команды деплоя
```bash
cd /opt/myapp
git pull
npm install          # если менялись зависимости
cat .env             # ПРОВЕРИТЬ что VITE_POCKETBASE_URL=https://www.beautystart.ru
npm run build
```

### Nginx (если менялся конфиг)
```bash
cp deploy/nginx-beautystart.conf /etc/nginx/sites-available/beautystart.ru
nginx -t && systemctl reload nginx
```

### Проверка после деплоя
```bash
curl -I http://beautystart.ru         # → 301 https://www.beautystart.ru
curl -I https://beautystart.ru        # → 301 https://www.beautystart.ru
curl -I https://www.beautystart.ru    # → 200
```

## Критичные правила

| Правило | Почему |
|---------|--------|
| `.env` НЕ в git | gitignored, существует ТОЛЬКО на VPS |
| Проверяй `.env` перед build | Vite вшивает переменные на этапе сборки, не в рантайме |
| Канонический домен: `www.beautystart.ru` | Без www → 301 редирект на www |
| Nginx конфиг в репо | `deploy/nginx-beautystart.conf` — source of truth |
| Cloudflare нельзя | Заблокирован РКН в России |
