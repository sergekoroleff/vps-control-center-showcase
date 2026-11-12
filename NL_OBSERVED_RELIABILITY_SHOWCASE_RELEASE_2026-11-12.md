# VCC 5.1 — Netherlands Observed Reliability · Public Showcase Release

**Date:** 12 November 2026  
**Production acceptance:** The owner confirmed the protected Telegram Mini App displays the new Netherlands reliability timelines correctly and that the interface looks good.  
**Public presentation:** https://vps-monitor.koroleff.online/

## What is new in VCC 5.1

The authenticated VCC Mini App now has an **Observed Reliability · Netherlands** section that reuses its existing hourly service observations and displays **five service-state timelines** across a rolling 24-hour window. It distinguishes:

- **Lime:** recognized active state in the sampled period.
- **Red:** failed or mixed recognized states in a sampled period.
- **Grey:** missing/unknown or unsupported observations.

NL resource and memory charts, the US observed service/timer histories, independent Cronitor health, Telegram bot interface and the legacy V4 root remain unchanged. The NL view **does not** invent timer histories or restart counts not present in the collected data.

These are **sampled observations, not continuous uptime measurements or an SLA**. Data freshness does not itself establish that all services are healthy.

## Public site refresh

- Updated site headline and current-release wording to **VCC 5.1**.
- Refreshed the Service Reliability capability description so it accurately covers both hosts.
- Added a dedicated responsive *Netherlands Observed Reliability* demo card to the static three-tab Mini App preview, with **five illustrated service timelines**.
- Added visual examples of healthy, failed/mixed and unknown state segments. Such examples are **fictional demonstration states**, not actual incidents or real monitoring observations.
- Preserved the US historical CPU and service-state synthetic examples, Cronitor and Digest 2.0 presentations.
- No new external runtime calls, real host addresses, monitoring tokens, private dashboards, financial records, access credentials or Telegram session identifiers.

**Public files updated:** `index.html`, `showcase-v5.css`, `README.md`, and this release note. The existing static demo tab script remains unchanged.

## Next product direction

Design **Monitoring Intelligence 5.2** from observed state, source freshness and independently measured health, before evolving **Infrastructure Digest 3.0**. Do not market an unimplemented health score or unobserved uptime as an existing capability.

[Public VCC showcase](https://vps-monitor.koroleff.online/) · [Project source](https://github.com/sergekoroleff/vps-control-center-showcase)
