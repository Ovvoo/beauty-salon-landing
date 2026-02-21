# Deploy

## VPS: `/opt/myapp/` (reg.ru, IP 168.222.193.241)

### Команды деплоя
```bash
cd /opt/myapp
git pull
npm install          # если менялись зависимости
cat .env             # ПРОВЕРИТЬ что VITE_POCKETBASE_URL=https://www.beautybegin.ru
npm run build
```

### Nginx (если менялся конфиг)
```bash
cp deploy/nginx-beautybegin.conf /etc/nginx/sites-available/beautybegin.ru
nginx -t && systemctl reload nginx
```

### Проверка после деплоя
```bash
curl -I http://beautybegin.ru         # → 301 https://www.beautybegin.ru
curl -I https://beautybegin.ru        # → 301 https://www.beautybegin.ru
curl -I https://www.beautybegin.ru    # → 200
```

## Критичные правила

| Правило | Почему |
|---------|--------|
| `.env` НЕ в git | gitignored, существует ТОЛЬКО на VPS |
| Проверяй `.env` перед build | Vite вшивает переменные на этапе сборки, не в рантайме |
| Канонический домен: `www.beautybegin.ru` | Без www → 301 редирект на www |
| Nginx конфиг в репо | `deploy/nginx-beautybegin.conf` — source of truth |
| Cloudflare нельзя | Заблокирован РКН в России |
