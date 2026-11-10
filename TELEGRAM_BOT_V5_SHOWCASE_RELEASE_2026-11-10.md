# Telegram Bot V5 — public showcase release (P5.3)

**Date:** 10 November 2026  
**Product status:** Owner confirmed that the VCC 5.0 Telegram-bot rollout script finished without errors and that the redesigned buttons work in Telegram. This note describes the public showcase representation and does not expose the private deployment.

## New authenticated Telegram bot experience

The monitoring-only bot now complements the existing three-tab Telegram Mini App rather than reusing the original single-VPS menu.

- **🚀 Открыть Mini App:** open the accepted V5 Mini App.
- **📊 Infrastructure Summary:** concise current view of US and NL, host-specific resource metrics and independent external-health status.
- **🇺🇸 USA / 🇳🇱 Netherlands:** individual host summaries. US also reports *timer state*; this does not prove a scheduled job completed.
- **🛡️ Service Health:** per-host monitored service statuses with separately reported external Cronitor checks.
- **ℹ️ О системе:** architecture and limitations. Read-only monitoring only; historical VPN management remains disabled.

The bot supports refresh/back on text reports. The previous `/start`, `/menu`, `/help` and `/preview` commands remain; `/app` opens the Mini App. Existing read-only callbacks from earlier messages are handled compatibly; obsolete VPN operations do not run. Authenticated access remains restricted in the private bot.

## Showcase changes

- A new **«Вся инфраструктура / В пару нажатий»** section with a device-friendly **static** Telegram chat mockup and accurately named V5 buttons.
- The mock includes a *synthetic* two-host summary and examples of resource/Cronitor labels; the values are not production data.
- Navigation, hero release status, SEO description and end-of-page next iteration copy now reflect the accepted P5.3 release.
- Style uses Koroleff Dark graphite, orange, lilac and lime, with responsive rules for tablet and narrow mobile layouts.
- No new network connection, dynamic widget, live data source or Telegram API interaction is added to the public site.

## Privacy and correctness guarantees

1. **STATIC DEMO / SYNTHETIC DATA** prominently disclosed next to the Telegram mock. Any `HEALTHY`, `FRESH` or numeric metric in this page is a sample display, not a live check.
2. The real production Mini App and Telegram text reports use separate, authenticated access to validated and sanitized telemetry; the public page **never** requests either protected endpoint.
3. Current US resource metrics are available. **US historical trends are not yet collected** (`NO_DATA`) and are a separate future release.
4. A monitoring service marked active, an active timer and a healthy external heartbeat are distinct observations. None alone proves a successful scheduled job, complete uptime or user-application correctness.
5. No real server IP, auth token, Telegram user/chat ID, private badge URL, keys, HMAC raw payloads, account balances or production telemetry is included in this repository.

## Verification checklist

- Main page has a navigable `#telegram` section and six illustrative buttons arranged as the five real menu rows.
- Examples clearly say DEMO/SYNTHETIC and contain no credentials or live endpoint requests.
- Mobile styles stack explanation and preview with readable buttons.
- Existing three-tab Mini App demo, Cronitor feature and Digest sections remain present.
- Public GitHub Pages publication depends on the repository's Pages pipeline; a successful commit by itself is not evidence that CDN/browser caches are already refreshed.
