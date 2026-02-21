# Domain Analytics — beautybegin.ru

Ссылка на контекст: этот файл создан по результатам диагностики 2026-02-21.

## Домен

| Параметр | Значение |
|----------|----------|
| Домен | beautybegin.ru |
| Канонический | www.beautybegin.ru |
| Регистратор | REGRU-RU |
| DNS | ns5.hosting.reg.ru, ns6.hosting.reg.ru |
| IP | 168.222.193.241 |
| Оплачен до | 2027-02-07 |
| SSL | Let's Encrypt, покрывает beautybegin.ru + www.beautybegin.ru |

## Редиректы (все работают корректно)

| Запрос | Ответ |
|--------|-------|
| http://beautybegin.ru | 301 → https://www.beautybegin.ru |
| http://www.beautybegin.ru | 301 → https://www.beautybegin.ru |
| https://beautybegin.ru | 301 → https://www.beautybegin.ru |
| https://www.beautybegin.ru | 200 OK |

## Известная проблема: DPI-блокировка в РФ

Голые домены (без www) чаще блокируются DPI-фильтрами российских провайдеров.
Мобильные операторы (МТС, Билайн, Мегафон) используют свои DPI, отличные от домашних.

### Симптомы
- Сайт работает через curl/VPN, но «недоступен» из браузера в РФ
- Работает через Wi-Fi, но не через мобильный интернет (или наоборот)

### Решения
1. www как канонический домен (уже настроено)
2. Если www тоже блокируется — российский CDN (DDoS-Guard, EdgeCenter)
3. Проверка: попробовать с разных провайдеров и с мобильного без Wi-Fi

## SEO-статус (обновлено 2026-02-21)

- [x] robots.txt: Allow / (закрыты /api/ и /_/)
- [x] sitemap.xml: 3 страницы
- [x] meta robots: index, follow
- [x] canonical: https://www.beautybegin.ru/
- [x] og:url добавлен
- [ ] og:image — нужно добавить превью-картинку для соцсетей
