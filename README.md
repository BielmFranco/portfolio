<div align="center">

# ⚡ Gabriel Moraes Franco · Portfolio

**Cyber-intelligence portfolio built for AI Engineers.**

[![Live](https://img.shields.io/badge/LIVE-portfolio--orpin--ten--16.vercel.app-00FF41?style=for-the-badge&logo=vercel&labelColor=0A0A0F)](https://portfolio-orpin-ten-16.vercel.app)
[![Deploy](https://img.shields.io/badge/DEPLOY-auto-00FF41?style=for-the-badge&logo=vercel&labelColor=0A0A0F)](https://vercel.com)
[![License](https://img.shields.io/badge/LICENSE-MIT-00FF41?style=for-the-badge&labelColor=0A0A0F)](./LICENSE)
[![CodeQL](https://img.shields.io/badge/CodeQL-active-00FF41?style=for-the-badge&logo=github&labelColor=0A0A0F)](./.github/workflows/codeql.yml)

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16-0A0A0F?style=flat-square&logo=next.js&logoColor=00FF41)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-0A0A0F?style=flat-square&logo=typescript&logoColor=00FF41)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-0A0A0F?style=flat-square&logo=tailwindcss&logoColor=00FF41)
![React](https://img.shields.io/badge/React-19-0A0A0F?style=flat-square&logo=react&logoColor=00FF41)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0A0A0F?style=flat-square&logo=framer&logoColor=00FF41)

</div>

---

## ✦ Overview

Portfolio pessoal com estética **cyber-intelligence** (Matrix rain, CRT scanlines, glow neon, terminal prompts). Suporte a **3 idiomas** (PT-BR · EN · ES), **tema dark/light** (matrix green ↔ tech blue), animações scroll-triggered e hardening completo de segurança (CSP, COOP/CORP, CodeQL, Dependabot).

**Live:** [portfolio-orpin-ten-16.vercel.app](https://portfolio-orpin-ten-16.vercel.app)

---

## ✦ Features

| Categoria | Detalhe |
|---|---|
| 🎨 **Design** | Cyber-intelligence — Matrix rain canvas, CRT scanlines, HUD corner brackets, glow neon, terminal prompts |
| 🌓 **Themes** | Dark (matrix `#00ff41`) e Light (tech blue `#0066ff`) com toggle pill animado + anti-FOUC inline script |
| 🌐 **i18n** | 3 idiomas (PT-BR default · EN · ES) via React Context + localStorage persist |
| ⚡ **Performance** | 100% static prerender (SSG) · font subsetting · Turbopack build · CDN edge |
| 🔒 **Security** | CSP sem `unsafe-eval` · COOP/COOP same-origin · X-Frame-Options DENY · HSTS preload · CodeQL + Dependabot weekly |
| ♿ **A11y** | Contraste WCAG AAA · `<html lang>` dinâmico · `prefers-reduced-motion` respeitado · focus visible |
| 📱 **Responsive** | Mobile-first · breakpoints Tailwind · animações otimizadas GPU |
| 🔍 **SEO** | Metadata API · Open Graph · Twitter Cards · robots.txt · sitemap.xml |

---

## ✦ Tech Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router + Turbopack) | 16.2.6 |
| Runtime | [React](https://react.dev/) | 19.2.4 |
| Linguagem | [TypeScript](https://www.typescriptlang.org/) (strict) | 5.x |
| Estilo | [TailwindCSS](https://tailwindcss.com/) v4 (Lightning CSS) | 4.x |
| Animação | [Framer Motion](https://motion.dev/) | 12.40 |
| Ícones | [Lucide React](https://lucide.dev/) + SVG custom | 1.17 |
| Deploy | [Vercel](https://vercel.com) Edge Network | — |

---

## ✦ Estrutura

```
portfolio/
├── app/                              # App Router (Next 16)
│   ├── layout.tsx                    # Root layout + SEO + providers
│   ├── page.tsx                      # Composição das seções
│   ├── globals.css                   # Design tokens + tema
│   ├── robots.ts                     # MetadataRoute.Robots
│   └── sitemap.ts                    # MetadataRoute.Sitemap
├── components/
│   ├── icons/SocialIcons.tsx         # GitHub + LinkedIn SVG inline
│   ├── Navbar.tsx                    # Fixed nav · scroll spy · mobile menu
│   ├── Hero.tsx                      # Apresentação + Matrix rain
│   ├── MatrixRain.tsx                # Canvas 60fps · theme-aware
│   ├── About.tsx                     # Avatar HUD + bio + facts
│   ├── Skills.tsx                    # Stack grid com emojis
│   ├── Projects.tsx                  # Cards MSN_XXX · badge VERIFIED
│   ├── Certifications.tsx            # Agrupado por instituição
│   ├── Experience.tsx                # Cards · badge LIVE
│   ├── Achievements.tsx              # Timeline vertical
│   ├── Contact.tsx                   # Canais CH_01/02/03
│   ├── Footer.tsx                    # Transmission end
│   ├── BackToTop.tsx                 # FAB flutuante
│   ├── ThemeToggle.tsx               # Pill dark/light · spring animation
│   ├── LanguageSwitcher.tsx          # Dropdown PT/EN/ES
│   └── SectionWrapper.tsx            # Layout reutilizável [XX]
├── data/portfolio.ts                 # Source of truth (dados estruturais)
├── lib/
│   ├── i18n.tsx                      # LanguageProvider + useT()
│   └── theme.tsx                     # ThemeProvider + useTheme()
├── public/
│   ├── favicon.ico
│   └── .well-known/security.txt      # RFC 9116
├── .github/
│   ├── CODEOWNERS
│   ├── dependabot.yml                # Weekly npm scan
│   ├── ISSUE_TEMPLATE/               # Bug + Feature
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       ├── codeql.yml                # Static analysis
│       └── security-audit.yml        # npm audit CI
├── next.config.ts                    # Security headers (9x)
├── SECURITY.md                       # Vulnerability disclosure policy
├── LICENSE                           # MIT
└── CHANGELOG.md                      # Version history
```

---

## ✦ Rodar local

**Pré-requisitos:** Node ≥ 20 · npm

```bash
git clone https://github.com/BielmFranco/portfolio.git
cd portfolio
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

**Outros comandos:**

```bash
npm run build        # Production build (Turbopack)
npm run start        # Serve production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

---

## ✦ Customização

Todo conteúdo (textos, projetos, certificações, experiência, skills) vive centralizado em:

- **[`data/portfolio.ts`](./data/portfolio.ts)** — dados estruturais (URLs, datas, tags, IDs)
- **[`lib/i18n.tsx`](./lib/i18n.tsx)** — textos traduzidos (PT · EN · ES)

**Cores:** ajuste as CSS variables em [`app/globals.css`](./app/globals.css):

```css
[data-theme="dark"]  { --accent: #00ff41; /* matrix green */ }
[data-theme="light"] { --accent: #0066ff; /* tech blue    */ }
```

---

## ✦ Sections

| # | ID | Section |
|---|---|---|
| 01 | `#about` | Identidade · avatar HUD + facts + bio |
| 02 | `#skills` | Arsenal · stack grid |
| 03 | `#projects` | Missões · cards MSN_XXX |
| 04 | `#certifications` | Credenciais · agrupadas por instituição |
| 05 | `#experience` | Deployment · histórico profissional |
| 06 | `#achievements` | Timeline · marcos cronológicos |
| 07 | `#contact` | Establish link · canais |

---

## ✦ Security

Este projeto aplica hardening completo. Ver [SECURITY.md](./SECURITY.md) para política de disclosure e detalhes.

**Highlights:**
- CSP restritivo (sem `unsafe-eval`, `frame-ancestors 'none'`)
- COOP/CORP `same-origin`
- HSTS preload (`max-age=63072000`)
- CodeQL scan weekly + Dependabot updates
- npm audit CI bloqueia PR com vuln ≥ moderate

Reportar vulnerabilidade: **gabrielmoraesprincipe@gmail.com** (não abrir issue pública).

---

## ✦ License

MIT © [Gabriel Moraes Franco](https://github.com/BielmFranco) — ver [LICENSE](./LICENSE).

---

<div align="center">

**Construído com café · código · curiosidade**

[LinkedIn](https://www.linkedin.com/in/gabriel-moraes-franco-935453352/) · [GitHub](https://github.com/BielmFranco) · [Live Site](https://portfolio-orpin-ten-16.vercel.app)

</div>
