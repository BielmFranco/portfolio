<div align="center">

# 🌐 Portfolio · Gabriel Moraes Franco

[![Next.js](https://img.shields.io/badge/Next.js_16-0A0A0F?style=for-the-badge&logo=next.js&logoColor=22D3EE)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-0A0A0F?style=for-the-badge&logo=typescript&logoColor=22D3EE)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_v4-0A0A0F?style=for-the-badge&logo=tailwindcss&logoColor=22D3EE)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/MIT-22D3EE?style=for-the-badge&labelColor=0A0A0F)](#)

> Portfólio pessoal · IA · Azure AI Foundry · Agentes Autônomos · Cloud

</div>

---

## ✦ Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router · Turbopack) |
| Linguagem | TypeScript |
| Estilo | TailwindCSS v4 |
| Animações | Framer Motion |
| Ícones | Lucide React + SVG custom |
| Deploy | Vercel |

---

## ✦ Estrutura

```
portfolio/
├── app/
│   ├── layout.tsx          # SEO + Open Graph
│   ├── page.tsx            # Composição das seções
│   └── globals.css         # Tema dark · accent cyan
├── components/
│   ├── icons/              # Github + LinkedIn SVG inline
│   ├── Navbar.tsx          # Scroll spy · mobile menu
│   ├── Hero.tsx            # Apresentação principal
│   ├── About.tsx           # Avatar + facts + bio
│   ├── Skills.tsx          # Stack grid com emojis
│   ├── Projects.tsx        # Cards com badge "REAL"
│   ├── Certifications.tsx  # Agrupado por instituição
│   ├── Experience.tsx      # Cards com badge "ATUAL"
│   ├── Achievements.tsx    # Timeline cronológica
│   ├── Contact.tsx         # Email · LinkedIn · GitHub
│   ├── Footer.tsx
│   ├── BackToTop.tsx
│   └── SectionWrapper.tsx  # Layout reutilizável
└── data/
    └── portfolio.ts        # Dados centralizados
```

---

## ✦ Seções

`01.` Sobre · `02.` Stack · `03.` Projetos · `04.` Cursos & Certificações · `05.` Experiência · `06.` Jornada · `07.` Contato

---

## ✦ Rodar local

```bash
git clone https://github.com/BielmFranco/portfolio.git
cd portfolio
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## ✦ Personalização

Edite **`data/portfolio.ts`** — todo conteúdo (textos, projetos, certificações, skills) está centralizado neste arquivo.

Cores: ajuste `--accent` em **`app/globals.css`** (padrão `#22d3ee` cyan).

---

<div align="center">

**Construído com café, código e curiosidade**

[LinkedIn](https://www.linkedin.com/in/gabriel-moraes-franco-935453352/) · [GitHub](https://github.com/BielmFranco)

</div>
