# VCC 5.0 — Public Showcase Redesign Plan

**Date:** 8 November 2026  
**Status:** DESIGN BACKLOG — **not deployed on the public site**  
**Scope:** public, synthetic, no private host data

## Product direction

Move the presentation from historical VPN-centered VCC to **Infrastructure Intelligence**, monitoring two independent hosts with a simple, meaningful interface.

The owner-approved sequence is:
1. Build the internal, authenticated **unified telemetry Dashboard**
2. Deploy the new authenticated **Telegram Mini App** with exactly **Dashboard / 🇺🇸 US / 🇳🇱 NL**
3. Update the **Daily Infrastructure Digest** to show meaningful two-host status, incidents and history

**Do not claim these three components already deployed**. The current GitHub Pages site and screenshot gallery contain historical VPN UI and will be refreshed when a real v5 release has passed production acceptance.

## Public-site storytelling (after v5 UX acceptance)

- Hero: monitoring two hosts without inflated global averages or false 'everything green' metrics
- Dashboard concept: distinct US and NL host cards, obvious freshness, service health and incident summary
- US detail: technical resource charts and high-level service availability only; no Finance data
- NL detail: infrastructure health, history and technical alerts; do not display VPN client controls
- Digest: illustrative anonymized example covering both hosts, not actual user notifications
- Security: describe TLS, signed ingress, least privilege, data minimization and access control at a conceptual level; no network diagrams with private hostnames, service ports, usernames, account IDs, real tokens or telemetry credentials

## Design requirements

Apple-inspired dark visual language, restrained typography, subtle motion, mobile first with tablet and desktop layouts. Avoid verbose or overwhelming status cards; use useful color semantics and clear legends. Label synthetic data and mockups **DEMO**. Never label a mockup as live operational monitoring.

## Acceptance criteria

- Site matches **verified deployed** v5 UI and Digest capabilities; no false features
- Gallery/screen captures scrubbed of sensitive data, IPs, tokens, usernames, chat IDs, financial amounts and notifications
- GitHub Pages link and custom domain verified; accessibility, metadata and responsive behavior reviewed
- README/changelog/plan aligned with actual release; static GitHub Pages contains no server-side dependencies
- Separate security review of public files and repository history before broad publicity

## Deferred / excluded

No VPN provisioning or QR export in v5 marketing; historic screenshots may be retained only in clearly labeled archive. Do not publish telemetry raw JSON, server commands, Cloudflare account screenshots, HMAC material, credentials or non-public installation details.

**Owner-approved implementation is tracked privately. This public document is only a sanitized release plan.**
