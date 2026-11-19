# VCC 6.0 — First Real VPN Profile Delivered · Public Showcase Release

**20 November 2026 · Production milestone / Owner-confirmed Telegram delivery**

## The milestone

The Koroleff VPS Control Center has evolved from infrastructure monitoring into an **owner-gated Telegram-native AmneziaWG 3.1 client provisioning experience**.

For the first time in VCC 6.0, a genuine new VPN peer was added to the US server and the owner received **a working-format .conf profile and a branded Unonimous QR** directly in the private Telegram bot. This is a confirmed real artifact delivery, not a simulated UI action or dry-run. The two existing peer records were preserved during the guarded provisioning process.

The protected process conceptually combines:

```text
Telegram request → authorized NL command queue → US VPN provisioning
                 → encrypted US→NL result → private Telegram .conf + QR
```

The team recovered an initially unconfirmed encrypted-delivery outcome using the already created profile rather than generating duplicate credentials.

## Acceptance boundaries — important

**Delivered and confirmed:** a genuine AWG client profile and branded QR arrived in the owner's Telegram private chat.

**Still pending:** real-device import, tunnel handshake, DNS, accessing a website via VPN and independent post-delivery transaction reconciliation / restoration of the paused US poll timer. Do not present this milestone as proof of successful VPN connectivity or as a generally available public service. This is a **private single-owner system**.

**Planned next:** securely revoke already issued client access from Telegram, followed by a beautiful **read-only** VPN inventory in the authenticated Mini App (client display names, device types, counts, and signal-quality-aware statistics). Neither feature is shipped by this release.

## Public demo / security

The public showcase is **static, synthetic and non-operational**. Any illustrative names or device types are fiction. There are no live VPN requests, hidden privileged endpoints, production telemetry, real client records, IP addresses, confidential server names, private keys, access tokens, configuration exports or actual scannable QR codes in the public site. The public page does not expose a VPN management action.

Actual .conf and QR files are delivered privately through Telegram; conventional bot chats are **not end-to-end encrypted**. Real configuration screenshots are not used in the public showcase.

**Status label:** `REAL PROFILE DELIVERED · VPN CONNECTIVITY PENDING`.

[Static public VCC website](https://vps-monitor.koroleff.online/) · [Showcase source](https://github.com/sergekoroleff/vps-control-center-showcase).
