# Koroleff VCC 5.4 — Smart Alerts Infrastructure (Public Release Note)

**Released 13 November 2026.** This is a public, intentionally non-operational summary. The public site is static; displayed snapshots, status labels and history visuals are **synthetic demo data** and cannot send alerts or query protected endpoints.

## What was accepted

- VCC Smart Alerts 2.0 shadow pipeline is operating separately from existing services. It examines technical evidence and maintains an isolated state/outbox for later notifications; the Telegram Smart Alerts sender is **not enabled**.
- A separate read-only Operational Watchdog validates freshness and health of the shadow pipeline, including source coverage, its latest execution and the outbox evidence.
- A dedicated external Cronitor heartbeat sender sends a positive tick only on a freshly successful Watchdog check. The design is deliberately fail-closed: no successful Watchdog evidence means no positive heartbeat.
- A secure systemd credential flow provides a separate Cronitor telemetry URL to the least-privilege sender. The URL, API keys and internal secret locations are **not published**.
- Production cutover was accepted by the owner; three consecutive automatic HTTP transport outcomes succeeded with no reported transport/credential failures or suppressed sends during the final observation window. An initial controlled ping was confirmed in the Cronitor interface. HTTP success alone does not prove independent registration of every subsequent event.
- This new Watchdog monitor is **additional to** the previously available host-level US/NL Cronitor monitors; its status is **not yet displayed as a live card** in the protected V5.3.1 Mini App.

## Operating concept

```text
Isolated Smart Alerts shadow runtime
             |
       Read-only Watchdog
             | healthy + fresh?
         +---+---+
         |       |
        YES      NO
         |       |
  External tick  No positive tick
     Cronitor
```

Scheduled heartbeat checks happen once per minute, independently of the existing host monitors. Safe transport behavior: validated destination, TLS verification, no proxy/redirect, bounded timeout, one attempt, no automatic retries.

## Explicit limits

- **No Telegram Smart Alerts 2.0 notifications yet.** The alert-delivery flow (incident, deduplication, RECOVERED) is the next release.
- Existing Telegram bot, Mini App 5.3.1, evening Infrastructure Digest 3.0, finance and AML applications remain separate.
- Never interpret successful heartbeat alone as an uptime SLA, proof of successful downstream application jobs, or a guarantee that every Cronitor event was independently registered.
- No credentials, monitoring keys, private endpoints, server IPs, user data or actual telemetry are included in the public showcase.

[Public showcase](https://vps-monitor.koroleff.online/) · [Showcase source](https://github.com/sergekoroleff/vps-control-center-showcase)
