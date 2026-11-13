# Koroleff VCC 5.4.10 — Smart Alerts 2.0 Telegram Delivery

**Release:** 13 November 2026 · **Status:** PRODUCTION CUTOVER ACCEPTED · **Public information only**

This is an explanatory release note for the static VCC Showcase. No credentials, chat IDs, monitoring keys, private endpoints, actual alert contents, production snapshots, or raw customer/user data are published.

## What shipped

VCC Smart Alerts 2.0 now includes a **separate active Telegram delivery service** in addition to the previously accepted isolated Shadow Runtime, read-only Operational Watchdog and fail-closed external Cronitor heartbeat. The new delivery job runs once per minute and sends pending incident batches to the owner's existing VCC Telegram bot.

The delivery ledger follows a guarded state machine:

```text
Smart Alerts shadow / persisted event outbox
                     |
                   PENDING
                     |
              Atomic reservation
                     |
                  RESERVED
                     |
            Telegram Bot API send
                 /        \
      Confirmed accepted   Timeout / ambiguous
                 |          |
                ACKED       RESERVED (manual review)
```

It attempts each batch no more than once automatically. An uncertain or rejected response, including rate limiting, is not blindly replayed: it stays reserved for manual investigation. This intentionally favours avoiding duplicate alerts; it is **not a guarantee of eventual delivery or exactly-once messaging**. Telegram response validation requires a successful result and a matching recipient. Access credentials are isolated via systemd's built-in credential mechanism, with no new external Bot API or public endpoints exposed by the showcase.

## Acceptance evidence

- Offline outbox/delivery tests **9/9 passed**; includes simulated success, duplicate replay, ambiguous timeout, refusal to retry, recovery message rendering and concurrent claim.
- Offline Telegram acceptance-parser tests **5/5 passed**.
- **One synthetic test message** was accepted by Telegram API and **its receipt was separately confirmed by the owner** in the existing VCC bot.
- Production scheduler was enabled; **its first automatic run succeeded**. Seven relevant infrastructure/notification timers were active after cutover; existing bot and protected Mini App remained healthy.
- The persisted incident Outbox contained **no real incident batches** at the acceptance checkpoint. Therefore **actual live incident and RECOVERED alert delivery has not yet been validated**. A successful empty scheduled job should not be presented as proof of a genuine incident's end-to-end notification.
- Separate maintenance: unused legacy XRay telemetry service and timer were removed with a retained rollback. No change to existing finance, AML scanner, digest or Cronitor monitoring components.

## Operating model (illustrative)

Shadow state evaluation → persisted Outbox → deduplicated at-most-one automatic Telegram attempt → explicit Telegram API acknowledgement or reserved/manual review. In parallel, a separate Watchdog continues to gate healthy Cronitor heartbeats. Existing Memory Alerts and the scheduled Infrastructure Digest are independent.

The publicly displayed monitor indicators, screenshots, US/NL metrics and demo incident labels are **fictional / static**. The public website cannot send any Telegram message, read protected APIs, or observe production incident data. The protected Telegram Mini App remains at its previously accepted interface version; this release is a **background notification service**, not a newly deployed live Mini App panel.

[Public static Showcase](https://vps-monitor.koroleff.online/) · [Showcase source](https://github.com/sergekoroleff/vps-control-center-showcase)
