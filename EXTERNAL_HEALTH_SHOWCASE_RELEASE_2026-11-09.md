# VCC 5.0 — Cronitor External Health on the public showcase

**Published feature context:** 09 November 2026. The owner confirmed authenticated V5 Mini App updated after production rollout. This file documents a sanitized public-facing representation only.

## What changed in the real private Mini App

- External health from **Cronitor** for both USA and Netherlands is an independent source alongside host-level CPU, RAM, disk, services and freshness.
- A separate collector on the monitoring server fetches detailed external status **every 2 minutes**; the Mini App checks the sanitized result via an authenticated read-only API.
- The V5 dashboard includes two external-health cards. Each host detail page includes its own status and three most recent heartbeat events.
- Source age and monitor health are distinct. When data are missing, invalid or older than the allowed freshness window, the Mini App uses `NO_DATA` rather than indefinitely displaying an earlier green status.
- The original V4 entrypoint remains available. The default Telegram menu now opens V5.

## What changed on this public page

- New section **«Второй взгляд / Вне самого сервера»** presents the Cronitor feature with a synthetic USA and Netherlands pair of status cards.
- Updated navigation, feature copy, small Dashboard/host demo labels, Digest first-delivery status and end-of-page next-task copy.
- All new illustrated green `HEALTHY` states are explicitly `DEMO DATA`, **never actual health check results**.
- No private badge link, credential, raw source JSON, internal server addresses, live browser token, private service inventory or real finance data is embedded in this repository. The site remains independent of any private network or host.

## Safe distinctions

| Concept | What it means | What it does *not* establish |
| --- | --- | --- |
| `HEALTHY` from Cronitor | The external heartbeat monitor's reported state when its status was fetched | A complete uptime guarantee or success of all applications and jobs |
| `FRESH` | Latest evidence is inside freshness threshold | That the host or app is healthy |
| `STALE` / `NO_DATA` | Evidence cannot be relied on as current | That a production host is necessarily down |
| Public `HEALTHY · DEMO` | Sample UI state for presentation | Live infrastructure status |
| Digest V2 received | Owner received first scheduled Telegram message and delivery was recorded as `SENT=1` | Guarantees of all future scheduled deliveries |

**Visual rules:** Koroleff Dark graphite/orange/lilac/lime, mobile-first, clear synthetic disclosure, no trailing full stop in headings. Actual protected infrastructure is described only in broad terms; private technical details belong outside the public repo.
