# ANONPASS v1.3 — From Password Lab to Security Utilities

**Release story · 22 November 2026 · Owner accepted in private Telegram Mini App**

ANONPASS is a lightweight client-side security toolkit integrated into the **read-only VCC Telegram Mini App**. The infrastructure dashboard remains monitoring-only; no VPN provisioning or access management is offered by VCC. VPN profiles are managed separately in Amnezia.

## The product: four small tools with clear limits

| Version | Generator | Functionality | Status |
|---|---|---|---|
| v1.1 | Password | 12–64 characters, configurable character groups, ambiguous-character exclusion; secure browser randomness and brief decorative scramble | Accepted, real-device tested |
| v1.2 | Passphrase | 4–8 independent words from the complete EFF Large Wordlist (7,776 words); default 6 words; user-selectable separator/capitalization and **three-second** animated letter-to-word assembly | Accepted, real-device tested |
| v1.3 | PIN | 4, 6 or 8 independent decimal digits (default 6), with leading zeroes preserved and a short decorative animation | Accepted, real-device tested |
| v1.3 | Codeword | One independent EFF word, with short animation; for noncritical identifiers and labels, **not an account password or verification factor** | Accepted, real-device tested |

The actual value is generated **after** the animation completes. Changing the mode/length or leaving ANONPASS invalidates the current result. Copying is available after generation. The browser's clipboard/OS remains a separate trust surface.

## Security architecture

- **Client-side secrets.** Production generation uses Web Crypto `crypto.getRandomValues` and rejection sampling to avoid modulo bias. No `Math.random` fallback.
- **No secret API.** Passwords, phrases, PINs and codewords are not submitted to VCC backend, persisted in application storage or exported through telemetry.
- **Pinned public EFF dictionary.** The complete 7,776-word source is downloaded as a **public same-origin static resource**, and checked against a known SHA256 before use. The dictionary request sends no generated value; the initial dictionary download is still a network request (not “fully offline”).
- **Measured language.** A uniformly selected 6-word EFF phrase has approximately 77.5 bits of selection entropy, before any caveats related to formatting. A single EFF word is only about 12.9 bits. PINs have 10,000 / 1,000,000 / 100,000,000 possibilities for 4 / 6 / 8 digits, which is useful only when guessing attempts are limited.
- **Fail-closed cancellation.** No real final secret is produced when generation is cancelled or the Mini App is hidden. UI data is cleared on ANONPASS exit. This is not a claim of guaranteed memory zeroization or OS clipboard removal.

The public site **does not reproduce the private generator code**. Its ANONPASS panel is an illustrative mockup with prewritten placeholders and a mode switch. It contains no production passwords, user details, live host names, keys, QR codes, real API links or server credentials.

## The engineering milestone: SERVER = GITHUB

The owner accepted **ANONPASS v1.3** on a real device and performed a read-only SHA256 comparison between exact GitHub release artifacts, six production files on the NL server and five HTTP-served resources. Final reported output:

```text
PASS: server.py
PASS: v5.html
PASS: v5.css
PASS: v5.js
PASS: v5-passphrase.js
PASS: eff_large_words.txt
ANONPASS13_SERVER_GITHUB_PARITY: PASS (6/6)
```

- v1.2 expanded the App API with same-origin read-only public static routes for the wordlist and client module.
- v1.3 changed **only two deployable assets**, `v5.css` and `v5-passphrase.js`; server routes, existing telemetry, the public EFF wordlist and VPN remained unchanged.
- GitHub repository owner: `sergekoroleff/vps-control-center` (private production source). Exact v1.3 candidate source commit: `9e5b88d23a2c8b7d88068e3e744b4cdc98548788`; merged in **PR #28**, merge `9d65ad96dfc44b1cacaa2b4d004cd84781dad7ab`.
- GitHub Actions security/UX and monitoring regression checks passed; guarded release used immutable source hashes, dry-run, backup and rollback, targeted Mini App API restart, device test, then disk+HTTP parity verification.
- The independent, post-merge GitHub blob comparison confirmed **six files byte-for-byte identical** to the reviewed candidate source.
- This outcome **applies only to the six ANONPASS files**. It does not certify the entire VCC infrastructure or both VPS hosts as fully synchronized with GitHub.

## Public showcase integrity

This is a **static documentation and product presentation project**. It does not connect to private servers, receive Telegram authentication tokens, generate actual secrets, run a browser crypto generator, or contain real identities/credentials.

The showcased user interface demonstrates four modes and release evidence without requiring a login or any integration with the private Mini App.

**Deployment boundary:** updating this public GitHub Pages site does not alter production ANONPASS, VCC bot, monitoring API or Amnezia VPN.

**Deferred:** SHA-256 checksum utility, token generator, PIN-vault and privacy timer were deliberately not included in v1.3.
