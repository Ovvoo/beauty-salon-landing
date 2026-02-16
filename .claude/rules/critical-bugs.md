# Critical Bugs

| Баг | Решение |
|-----|---------|
| Hooks after return | Все хуки ДО early return |
| Empty array dep | `const EMPTY: T[] = []` вне компонента |
| setTimeout leak | `useRef` + cleanup |
| CSS hex | `bg-card`, не `bg-[#...]` |
| VPS `.env` пустой → API сломан | Проверить `cat /opt/myapp/.env` перед `npm run build` |
| Билд без VITE_POCKETBASE_URL | Fallback `localhost:8090` — не работает из браузера |
| Nginx конфиг не применён | `cp deploy/... → nginx -t → systemctl reload nginx` |
