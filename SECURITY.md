# Security Policy

## Supported Versions

Only the `main` branch is supported. Production traffic is served from the latest deploy on Vercel.

## Reporting a Vulnerability

If you discover a security vulnerability in this project:

1. **Do not open a public GitHub issue.**
2. Email **gabrielmoraesprincipe@gmail.com** with the subject `[SECURITY] <short title>`.
3. Include reproduction steps, affected version/commit, and impact assessment.

You can expect:

- **Acknowledgement** within 72 hours.
- **Initial triage** within 7 days.
- **Fix or mitigation plan** within 30 days for confirmed issues.

## Hardening Applied

| Layer | Control |
|---|---|
| Transport | HTTPS enforced via Vercel + HSTS (`max-age=63072000; includeSubDomains; preload`) |
| Browser policy | CSP without `unsafe-eval`, `frame-ancestors 'none'`, `object-src 'none'` |
| Cross-origin | COOP `same-origin`, CORP `same-origin` |
| Clickjacking | `X-Frame-Options: DENY` |
| MIME confusion | `X-Content-Type-Options: nosniff` |
| Referrer leak | `Referrer-Policy: strict-origin-when-cross-origin` |
| Browser APIs | `Permissions-Policy` blocks camera, mic, geo, FLoC, payments, USB, motion sensors |
| Framework fingerprint | `X-Powered-By` removed (`poweredByHeader: false`) |
| Supply chain | `npm overrides` pinning patched `postcss` |
| Dependencies | Dependabot weekly + CodeQL on every push |

## Threat Model

The site is **static** (no server-side runtime, no API routes, no user input persisted). The primary risks are:

1. **Dependency vulnerabilities** — mitigated by Dependabot + CodeQL.
2. **Clickjacking against authenticated session tokens of visitors** — mitigated by `frame-ancestors 'none'` + `X-Frame-Options: DENY`.
3. **Hostile asset injection via compromised CDN** — mitigated by removing third-party script sources from CSP (`script-src 'self' 'unsafe-inline'`).
4. **Supply-chain attack on build step** — mitigated by lockfile + pinned overrides.

## Out of Scope

- Self-XSS via DevTools.
- Attacks requiring physical access to a maintainer's machine.
- Vulnerabilities in third-party platforms (Vercel, GitHub, npm registry).
