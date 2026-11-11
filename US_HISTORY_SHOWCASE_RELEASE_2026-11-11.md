# VCC 5.0 — US Historical Infrastructure Intelligence · Public Showcase Update

**Published documentation date:** 11 November 2026. **Production feature acceptance:** owner-verified 11 November 2026. **Public site:** https://vps-monitor.koroleff.online/

## What changed in the real protected Mini App

- Existing **Dashboard / USA / Netherlands** structure preserved.
- USA now supports rolling **24-hour historical technical observations**, including CPU, derived RAM and disk utilization, load, swap, memory PSI and cumulative OOM signals.
- Three Finance service-memory histories, observed service state/restart histories and three scheduled-task state histories are exposed as read-only.
- Timeline aggregation emphasizes a brief observed failed/inactive event rather than silently hiding it during visual downsampling.
- Data freshness, coverage and gaps remain visible with explicit `FRESH / STALE / NO_DATA`. Incomplete history is not replaced with zero.
- Existing Netherlands history and independent Cronitor External Health remain separate. Old V4 root route is preserved.
- V5 has protected Telegram-signed admin access; unsigned API requests return HTTP401.

## Site refresh on 11 November

The public static landing page now accurately describes **US and NL history**, rather than marking US history permanently unavailable. The USA tab of the demonstrator includes an illustrative historical CPU line and service state timeline, while the existing three tabs, two-host cards, bot, Cronitor and digest sections remain.

**All numbers, charts, health pills and service states on the public site are synthetic examples.** They do not represent actual server measurements, recent service outages, actual Finance transactions, Telegram accounts or real monitoring history. The site does not call protected APIs, has no API keys, no HMAC tokens, and does not subscribe to Cronitor. The US 24h design is a rolling *target window* and should not be read as proof 24 hours had accumulated at cutover.

## Confirmed production evidence (not public data)

The owner reported `STEP 22C PRODUCTION CUTOVER PASS` and `STEP 23D PRODUCTION CUTOVER PASS`. Final checks confirmed active VCC API, telemetry receiver, history exporter timer and history projector timer, authenticated API boundary and owner visual acceptance inside Telegram. Production code differs from GitHub main and is not redeployed by this documentation change.

## Explicit limits / what is next

- A scheduled Finance timer being active does not prove that its job completed successfully; observed state samples are not an uptime SLA.
- Real VCC **Infrastructure Digest 2.0** remains a separate 21:00 MSK production sender; the new US historical charts have **not yet been claimed as a deployed digest feature**.
- Future work: restore the separate AML & KYC Scanner news digest; Finance reporting-period rollover; stale VCC chat-list launcher URL; improve VCC infrastructure digest. All are currently open tasks, **not** part of this site release.
- No private server addresses, secrets, raw telemetry or Google Sheets financial data are disclosed here.

## Links
- [Public showcase](https://vps-monitor.koroleff.online/)
- [Showcase repository](https://github.com/sergekoroleff/vps-control-center-showcase)
- [Previous Telegram Bot V5 showcase release](TELEGRAM_BOT_V5_SHOWCASE_RELEASE_2026-11-10.md)
