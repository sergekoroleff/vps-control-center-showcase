# VCC — Infrastructure Digest 3.0 · Public Showcase Update

**Date:** 12 November 2026  
**Status:** **Production cutover PASS; first scheduled 3.0 Telegram delivery pending verification**. The existing Digest 2.0 delivery mechanism has previously been confirmed, but **that does not establish a successful V3 message**.

## Private production feature — safe public description

Digest Intelligence 3.0 expands the existing VCC evening report for the **USA** and **Netherlands** servers with:

- 24-hour sampled US CPU statistics (P95, maximum, count of readings above a threshold, longest observed run) and data-coverage/gap indicators. A single sample is not a measured outage duration.
- Netherlands 24-hour sampled service-state observations and number of services with observed failed/inactive states, if coverage exists.
- Separate Cronitor external-monitoring statuses for both locations, with freshness checks, **not** an uptime SLA.
- Clearly identified partial monitoring coverage for Netherlands anonymous process-memory history.
- Up to three concise items requiring attention and explicit caution that active scheduled tasks do not prove successful execution.

The original **Sender 2.0** remains the delivery engine with its established 21:00 Europe/Moscow timer, existing SQLite ledgers, idempotency and error handling. A separately deployed hash-pinned V3 adapter invokes it with a different report renderer. The owner-provided terminal output proved: source integrity PASS, report render PASS, effective ExecStart PASS, unchanged timer PASS, sender not triggered during deployment PASS. **No Telegram message was sent manually during cutover.**

## Changes to the static public showcase

- Replaced the previous Digest 2.0 marketing copy with a precise Digest 3.0 capabilities description.
- Refreshed the text-message mockup with fully fictional CPU P95/peak, sample quality, observed NL service states, and synthetic Cronitor.
- Clearly highlighted that **the first scheduled Digest 3.0 delivery is pending**, rather than treating successful installation as receipt in Telegram.
- Preserved the VCC 5.2 branding, Infrastructure Insights, NL Observed Reliability, three-tab demo, security explanations and all existing static controls.
- No production telemetry, actual system incidents, Telegram users, credentials, backend API connections or real report content are part of this public presentation.

**Data rule:** all metrics and state examples in this public mockup are **synthetic** and do **not** correspond to the actual US/NL observations.

Once the owner confirms the actual V3 Telegram message and the scheduled delivery result, update this release note and public page from **CUTOVER PASS / DELIVERY PENDING** to **DELIVERY CONFIRMED**. Do not infer delivery success from systemd status alone.

[Static showcase](https://vps-monitor.koroleff.online/) · [Previous Infrastructure Insights release](INFRASTRUCTURE_INSIGHTS_V52_SHOWCASE_RELEASE_2026-11-12.md)
