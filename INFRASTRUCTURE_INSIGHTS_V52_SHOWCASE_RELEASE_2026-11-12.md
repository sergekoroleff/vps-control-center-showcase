# VCC 5.2 — Infrastructure Insights · Public Showcase Update

**Release documentation date:** 12 November 2026  
**Private production feature:** owner-confirmed 12 November 2026, accepted  
**Public synthetic demo:** https://vps-monitor.koroleff.online/

## Live capability that the public site describes

The protected V5 Dashboard now includes **Infrastructure Insights · Needs Attention**, after the independent Cronitor cards.

- Uses validated, fresh current US/NL service-state observations and per-service data-availability indicators.
- Treats independent Cronitor as a separate signal with its own freshness limits.
- Reports unavailable/stale/unknown source information as warnings instead of inferring service health.
- Categorizes confirmed current service failures and independent Cronitor `PROBLEM` as critical.
- When there are no observed issues in the inspected signals, reports **NO ISSUES OBSERVED**, not a claim of continuous uptime or operational SLA.
- No new collector, external feed, shared credentials, alerting service or backend endpoint.

These are **current evidence-based checks**, not full event-time correlation or historical incident root-cause analysis. Existing NL Observed Reliability, US history, Cronitor and the V4 fallback remain supported. **Infrastructure Digest 3.0 is still planned**, not shipped as part of V5.2.

## Public static page changes

- Updated VCC 5.1 site identity to **VCC 5.2**.
- Added a responsive **Infrastructure Insights · Needs Attention** example to the Dashboard tab of the existing three-tab demonstration.
- The sample default screen shows **DEMO · NO ISSUES OBSERVED** and explanatory sample chips for current service state, Cronitor and data quality.
- All text explicitly labels sample states as **STATIC DEMO / SYNTHETIC** and explains that “no issues observed” is not proof of uninterrupted uptime.
- Updated the capabilities copy and future-work note.
- Files: `index.html`, `showcase-v5.css`, `README.md`, this release note.

**No real server metrics, incidents, host addresses, usernames, API calls, financial records or Telegram sessions are embedded in the public page.** The static GitHub Pages website is not connected to the protected VCC API.

[Showcase](https://vps-monitor.koroleff.online/) · [Previous NL observed reliability note](NL_OBSERVED_RELIABILITY_SHOWCASE_RELEASE_2026-11-12.md)
