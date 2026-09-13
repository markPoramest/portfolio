# 🗾 Mark Poramest - Personal Portfolio

[![Astro](https://img.shields.io/badge/Astro-7.3.2-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-11.24-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A modern, fast personal portfolio website built with **Astro 7** and **Tailwind CSS**, designed with an aesthetic inspired by Japanese travel, minimalism, and craftsmanship.

🌐 **Live Demo:** [https://markporamest.github.io/portfolio](https://markporamest.github.io/portfolio)

---

## 🎨 Design System (Japan Trip Theme)

The design system incorporates the **Japan Trip Travel** palette, balancing warm earthy tones with sleek modern contrast.

### 🌙 Dark Mode (Eerie Black & Charcoal Base)

| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--bg-base` | `#252422` | Main page background (Eerie Black) |
| `--bg-surface` | `#2e2c29` | Elevated containers & navigation bars |
| `--bg-card` | `#403D39` | Card and panel backgrounds (Charcoal) |
| `--bg-elevated` | `#4e4b45` | Hovered and floating elements |
| `--border-default` | `#54504a` | Primary card and section borders |
| `--text-primary` | `#FFFCF2` | High-contrast body & heading text |
| `--text-secondary` | `#CCC5B9` | Subtitles, labels, and secondary copy |
| `--accent` | `#EB5E28` | Primary brand accent (Flame Orange) |
| `--accent-light` | `#f2794b` | Accent hover & highlight states |

### ☀️ Light Mode (Floral White & Crisp Cards)

| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--bg-base` | `#FFFCF2` | Main page background (Floral White) |
| `--bg-surface` | `#f5efe4` | Warm secondary containers |
| `--bg-card` | `#ffffff` | Crisp white cards and interactive panels |
| `--bg-elevated` | `#ede5d6` | Elevated badges and button states |
| `--border-default` | `#dcd4c6` | Subtle natural borders |
| `--text-primary` | `#252422` | Deep charcoal primary typography |
| `--text-secondary` | `#403D39` | Secondary text & descriptions |
| `--accent` | `#EB5E28` | Primary brand accent (Flame Orange) |
| `--accent-light` | `#f2794b` | Accent hover & highlight states |

---

## ✨ Features

- **🚀 Featured Projects Tab**:
  - **[Japan Trip Planner](https://japantripplanner.vercel.app/)**: Comprehensive itinerary manager with IC card (Suica/Pasmo) tracking and travel expense estimation.
  - **[Map Animation Generator](https://map-animation-generator.vercel.app/)**: 3D map route travel video generator with customizable transport models (Shinkansen, train, plane, etc.) and 16:9 YouTube export.
- **💼 Professional Work Journey**:
  - Interactive career timeline with scroll-triggered animations.
  - Case study detail pages driven by Markdown and the **Astro 7 Content Layer** (`glob` loader).
- **⚡ Technical Expertise & Linguistics**:
  - Filterable skill stacks covering Programming (Go, Java, Node.js, Flutter, React), Databases, DevOps & Automated Testing.
  - Interactive certificate viewer modals for **JLPT N2** (Japanese) and **CEFR C1** (English).
- **🗾 Passions & Travel Footprint**:
  - Japan travel footprint displaying **29 of 47 visited prefectures** across regions (Kanto, Kansai, Chubu, Chugoku, Kyushu).
  - Infinite photo marquee and social links for *Mark no Nihon Tabi*.
- **📬 Interactive Contact**:
  - Direct form submission via FormSubmit with responsive status modals.
- **⚡ SPA Transitions**:
  - Client-side navigation powered by Astro's `<ClientRouter />` for fast, seamless page swaps.
- **🛡️ Secure & Clean Dependencies**:
  - Fully audited with **0 vulnerabilities** (`pnpm audit`).

---

## 🛠️ Tech Stack

- **Core**: [Astro 7.3.2](https://astro.build/)
- **Styling**: [Tailwind CSS 3.4.19](https://tailwindcss.com/), `@tailwindcss/typography`
- **Typing & Linting**: [TypeScript 5.9.3](https://www.typescriptlang.org/), `@astrojs/check`
- **Transitions**: Astro `<ClientRouter />`
- **Package Manager**: [pnpm 11.24](https://pnpm.io/)

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── cert/                  # Certificate images (JLPT, CEFR)
│   ├── file/                  # Downloadable CV
│   └── image/                 # Logos, portraits, and travel carousel assets
├── src/
│   ├── components/
│   │   ├── Header.astro       # Nav bar with active route highlight & mobile menu
│   │   ├── ThemeToggle.astro  # Light/Dark mode switcher with localStorage sync
│   │   ├── TimelineCard.astro # Interactive timeline card component
│   │   ├── JapanMap.astro     # Interactive Japan travel footprint component
│   │   └── CertModal.astro    # Certificate modal viewer
│   ├── content/
│   │   └── work/              # Markdown case studies (company_1, company_2, company_3)
│   ├── layouts/
│   │   └── Layout.astro       # Master layout (ClientRouter, CSS variables, theme scripts)
│   ├── pages/
│   │   ├── index.astro        # Home / Hero / Timeline / Education / Linguistics
│   │   ├── projects.astro     # Featured projects (Japan Trip Planner, Map Animation)
│   │   ├── work/
│   │   │   ├── index.astro    # Career history overview
│   │   │   └── [company].astro# Markdown dynamic case study page
│   │   ├── skill.astro        # Technical stacks & linguistics
│   │   ├── passions.astro     # Japan travel footprint, culture & media
│   │   └── contact.astro      # Contact form & social media links
│   └── content.config.ts      # Content Layer collections configuration (glob loader)
├── astro.config.mjs           # Astro configuration (base URL: /portfolio)
├── tailwind.config.mjs        # Custom theme tokens, keyframes & animations
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 18.14.1`
- [pnpm](https://pnpm.io/) `>= 8`

### Installation & Development

```bash
# 1. Clone repository
git clone https://github.com/markPoramest/portfolio.git
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Start local development server
pnpm dev
```

Visit `http://localhost:4321` in your browser.

---

## 📜 Scripts Reference

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local development server at `localhost:4321` |
| `pnpm build` | Runs `astro check` type validation and static build |
| `pnpm preview` | Locally serves the built production site from `./dist/` |
| `pnpm audit` | Checks dependencies for vulnerabilities |
| `pnpm deploy` | Deploys static build to GitHub Pages (`gh-pages -d dist`) |

---

## 📄 License

Distributed under the [MIT License](LICENSE).
