# VCC 5.3.1 — Performance Intelligence · Showcase Release

## Subsequent update · 12 November 2026 21:00 MSK

Separately from the already accepted VCC 5.3.1 Mini App, the owner **received the first scheduled Infrastructure Digest 3.0 Telegram message** at 21:00 MSK on 12 Nov. Digest content and time are confirmed. Systemd send result and dated ledger outcome await a read-only check. Previous pending references below predate this event. The digest's fixed header `VCC 5.2` does not mean VCC 5.3.1 UI was rolled back.


**Date:** 12 November 2026  
**Private production feature:** **OWNER ACCEPTED** (cutover PASS and UI visibly displayed in Telegram)  
**Public representation:** **STATIC SYNTHETIC DEMONSTRATION**. No real telemetry, authentication tokens, private usernames, IP addresses, incident details or production API requests.

## What is actually live in protected Telegram Mini App

- A new **Performance Intelligence · V5.3.1** section on the protected Dashboard, after Infrastructure Insights.
- CPU/RAM history together on a chart; USA and Netherlands selector; USA 1h / 6h / 24h, Netherlands 6h / 24h (hourly source).
- CPU P95, CPU Peak, RAM P95, observed/expected sampled data count, interactive pointer/touch reading, freshness and no-data safeguards.
- Still uses the existing authenticated Unified API and client-side SVG, no new backend, collector, cron task or notifications.
- Existing Dashboard / USA / Netherlands tabs, Infrastructure Insights, Cronitor and sampled Reliability remain.

**Production evidence reported by owner:** predeploy/backup, atomic replacement, service restart and hash, existing digest timer preserved, rollback baseline integrity all PASS. The owner confirmed the new panel appeared inside Telegram and marked the phase successfully closed. No independent end-to-end route auth/HTTP test is claimed for this cutover.

## What is represented in public showcase

- Updated title/metadata, hero and feature text to **VCC 5.3.1**.
- Added a new responsive Performance Intelligence mockup inside the existing synthetic Dashboard with CPU/RAM SVG lines, four synthetic summary values and illustrative host/window chips.
- The chips in this public static illustration are **not live controls**, even though the real private Mini App has interactive controls.
- Updated mobile styling in `showcase-v5.css`, while retaining the V5.2 Insights demo, US/NL historical and reliability examples, and Digest 3.0 section.
- Every number, graph and monitoring state shown publicly is **fictional** and labeled **DEMO**. Public page does not fetch any production API.

## Separate pending acceptance

Daily **Infrastructure Digest 3.0** was deployed earlier the same day while its first actual 21:00 Europe/Moscow Telegram delivery remained pending independent confirmation at the time of this note. V5.3.1 frontend success does **not** constitute Digest 3.0 delivery. Do not mark Digest 3.0 as delivered until the owner confirms the scheduled message and reviewed service/ledger outcomes.

[Public VCC Showcase](https://vps-monitor.koroleff.online/) · [Previous Infrastructure Insights release](INFRASTRUCTURE_INSIGHTS_V52_SHOWCASE_RELEASE_2026-11-12.md) · [Digest 3.0 cutover note](INFRASTRUCTURE_DIGEST_30_CUTOVER_SHOWCASE_2026-11-12.md)
