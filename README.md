# VPS Control Center — Public Showcase

**[Посмотреть сайт →](**Custom domain (GitHub Pages):** https://vps-monitor.koroleff.online/

**Original GitHub Pages URL:** https://sergekoroleff.github.io/vps-control-center-showcase/)**

Публичная презентация персонального Telegram-бота для мониторинга собственной VPS-инфраструктуры и управления VPN-клиентами.

## Возможности

- Единый обзор VPS, статусов и сводной активности.
- VPS Performance и Service Reliability за 24 часа.
- **Smart Memory Monitoring & Smart Alerts v1.3 (20.10.2026, LIVE):** 11 компонентов, наблюдение каждые 5 минут, локальная история 24 часа, детектирование устойчивого роста anon RAM, Telegram-оповещения и recovery.
- Наблюдение за AmneziaWG 2.0 и 3.1, Telegram MTProto Proxy и AML & KYC Scanner.
- Управление профилями AWG 3.1: создание, переименование, выдача подключения и отзыв доступа.
- Выдача конфигурации и QR по запросу в личном Telegram-чате с очисткой сообщений.
- Daily Infrastructure Report: таймер ежедневной сводки настроен на 21:00 МСК; первая полноценная статистика требует накопления истории.

## Smart Alerts — проактивный мониторинг памяти

Серверный контур **v1.3 LIVE**, отдельно от Mini App v1.2: наблюдение за **7 systemd-службами и 4 Docker-контейнерами**, 5-минутная периодичность и история на 24 часа. Кандидат на предупреждение: рост анонимной памяти **не менее 40 MiB и 20%** за 30–60 минут; необходимы два последовательных подтверждения. Для повторных уведомлений действует пауза 6 часов; уведомление о стабилизации требует двух стабильных проверок.

**Подтверждено 20.10.2026:** тестовая доставка Telegram успешна, первая проверка Smart Alerts завершилась успешно, systemd-таймер активен и включён. Тест реальной утечки / полного цикла alert → recovery отдельно не проводился; это не автоустранение проблем и не доказательство memory leak. Публичная страница содержит только схематическое представление, без реальных данных VPS или секретов.

## Архитектура

Telegram Bot (без root и Docker socket) → очищенные снимки мониторинга / ограниченная очередь заявок → отдельные системные обработчики → VPN и инфраструктурные сервисы.

## Реальные скриншоты

Шесть ранних скриншотов Telegram-бота находятся в `assets/screens/` и демонстрируются в адаптивной галерее с просмотром изображений. Для публичного сайта изображения оптимизированы, служебные сведения не используются в коде и логике интерфейса.

## Защита данных

Публичный репозиторий не содержит IP-адресов, токенов, конфигураций, приватных ключей и кода привилегированного обработчика. Пересылка VPN-конфигураций через Telegram не является сквозно зашифрованной; эта особенность явно описана на сайте.

## Публикация

GitHub Pages: **Settings → Pages → Deploy from a branch → main / (root) → Save**. Сайт статический, без сборщиков, фреймворков, CDN и сторонней аналитики.

_Independent personal project · © 2026_


## Telegram Mini App · v0.7 LIVE (18.10.2026)

В Telegram работает Mini App с четырьмя разделами и полноценным **AWG 3.1 VPN Client Manager**. По подтверждению владельца релиз v0.7 установлен и работает.

- **Обзор:** процессы и статус служб, RAM, диск, VPN и текущие показатели.
- **Сервер:** RAM, нагрузка, сеть, тренды и история за 24 часа.
- **VPN:** AWG 2.0/3.1, handshake 3/15/60 минут, RX/TX, именованные профили.
- **События:** история наблюдений, перезапуски, uptime, Service Reliability.
- **Управление клиентами:** создание, переименование, удаление профилей AWG 3.1 с подтверждением и проверкой результата.
- **Получение подключения:** из карточки клиента Mini App открывается его профиль в Telegram-боте, который выдаёт QR и .conf в приватном чате. Mini App не передаёт ключи через веб-API.

**Архитектура (публичное описание):** React / TypeScript / Vite, изолированный Python API, outbound HTTPS ngrok, подписанный Telegram initData и администраторский allowlist. Операции проходят через ограниченный broker / root-only worker. Прямая доставка VPN-секретов через Mini App намеренно не реализована.

### Скриншоты Mini App — готовая галерея

Секция [Mini App](https://sergekoroleff.github.io/vps-control-center-showcase/#miniapp) предусматривает **шесть реальных, обезличенных скриншотов** с такими точными путями:

| Экран | Файл в `assets/screens/` |
| --- | --- |
| Обзор | `07-miniapp-overview.png` |
| Сервер | `08-miniapp-server.png` |
| VPN Analytics | `09-miniapp-vpn.png` |
| События | `10-miniapp-events.png` |
| VPN Client Manager | `11-miniapp-clients.png` |
| Подключение / Telegram Handoff | `12-miniapp-handoff.png` |

**Сейчас файлов нет в репозитории.** До их загрузки секция показывает заполнители; никогда не использовать настоящие QR/.conf в публичных скриншотах.

#### Добавить через GitHub в браузере (без команд)

1. Открыть [папку assets/screens](https://github.com/sergekoroleff/vps-control-center-showcase/tree/main/assets/screens).
2. Подготовить PNG-снимки, **удалить или закрыть** адреса, имена клиентов, профильные ID, Telegram User ID, ключи, QR, конфигурации и иную частную информацию. Проверь область уведомлений телефона и статус-бар.
3. Переименовать файлы **точно** как в таблице (без пробелов, латиницей, расширение `.png`).
4. В папке GitHub выбрать **Add file → Upload files**, перетащить файлы, убедиться, что они загружаются именно в `assets/screens/`.
5. Внизу страницы выбрать **Commit directly to the main branch → Commit changes**.
6. Открыть [публичный сайт](https://sergekoroleff.github.io/vps-control-center-showcase/#miniapp), обновить страницу принудительно (Ctrl+F5) и проверить, что все шесть изображений появились. Публикация GitHub Pages может занять несколько минут.

**Если скриншотов только четыре:** загрузить сначала `07`–`10`. `11`–`12` останутся аккуратными заполнителями до следующих снимков. Если фотографии исходно JPG/WebP, преобразовать их в PNG настоящим экспортом, а не простым переименованием расширения.

_Секреты и приватные конфигурации никогда не публикуются в public showcase._


## Custom domain migration · 22 October 2026

Owner confirmed GitHub Pages DNS checks complete and public showcase opens successfully at https://vps-monitor.koroleff.online/. Custom domain is configured by the `CNAME` file and Cloudflare DNS-only CNAME pointed at `sergekoroleff.github.io`. This is static GitHub Pages hosting, **not** a Cloudflare Tunnel or finance API. No private account data, tokens or production server addresses are published. Original GitHub Pages project URL was preserved as historical reference and may redirect to the new custom domain.
