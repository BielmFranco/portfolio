# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-08

### Added
- Cyber-intelligence theme (Matrix rain canvas, CRT scanlines, HUD corners, glow neon).
- Dark/light theme toggle (matrix green ↔ tech blue) with pill UI + spring animation.
- Anti-FOUC inline script in `<head>` — reads `localStorage` before paint.
- i18n system (PT-BR default, EN, ES) via React Context + `useT()` hook.
- Language switcher dropdown with flag emojis.
- 7 numbered sections (`01` — `07`) with terminal-style headers.
- Timeline of 11 chronological achievements.
- IBM AI Fundamentals certification.
- FIAP certifications relocated to 2026 to match LinkedIn dates.
- Repository hardening: `CODEOWNERS`, `SECURITY.md`, `.gitattributes`, `LICENSE` (MIT), issue + PR templates.
- CI: CodeQL weekly, npm audit on push, Dependabot weekly.

### Security
- CSP without `unsafe-eval`.
- COOP + CORP `same-origin`.
- X-Frame-Options: DENY.
- Permissions-Policy blocking 9 browser APIs.
- HSTS preload (2-year max-age).
- `X-Powered-By` header removed.
- `postcss` overridden to `^8.5.10` (CVE fix).

### Changed
- Navbar links aligned to sections `01`—`07` (7 total).
- Nav label "Stack" → "Skills" across all locales.
- Section title "Skills" locked across all locales.
- Achievements timeline reordered chronologically (Apr 2026 now precedes May 2026).
- Certification cards no longer display dates (dates remain in timeline).

### Removed
- Unused default Next.js SVGs from `/public`.
- FOLLOWERS / STARS / STREAK dynamic badges (rate-limited APIs).
- Redundant `code/label` render in language dropdown.
- Contact CV button.

## [0.1.0] — 2026-05

### Added
- Initial scaffold with `create-next-app` (Next.js 16, App Router, Turbopack, Tailwind v4).
- First hero, about, projects, certifications sections.
- Vercel deployment.
