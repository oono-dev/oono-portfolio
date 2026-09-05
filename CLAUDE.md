# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Project Overview

This is a modern portfolio website for 大野克樹 (Oono Katsuki), a web engineer. The site showcases development experience, projects, and technical skills with a sophisticated white-based modern UI design.

**Purpose (decided 2026-09)**: an engineer's "business card", not a job-hunting page. Primary readers are fellow engineers; it is also shown to new colleagues (including business-side members) during 1on1s, so career text must be readable without engineering jargon. The site advertises that side work (副業) requests are welcome via X DM. There is no contact form.

**Content sources**: `docs/requirement.md` (original requirements, now partially outdated), `docs/contents.md`, and the owner's Wantedly profile for career history. When a fact on the site conflicts with these docs, the site (and the decisions below) wins.

## Project Architecture

- **Framework**: Next.js 15.5 with App Router
- **Styling**: Tailwindcss v4 with custom CSS animations and effects
- **TypeScript**: Full TypeScript support with strict mode
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Design System**: Glass morphism, gradients, and floating animations
- **Linting**: ESLint with Next.js core-web-vitals and TypeScript extensions

### Directory Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with SEO metadata and fonts
  - `page.tsx` - Main landing page with gradient backgrounds
  - `globals.css` - Custom CSS with animations and glass effects
- `src/components/` - React components
  - `AboutSection.tsx` - Hero section with floating profile avatar and the X-DM badge
  - `CareerSection.tsx` - Client component: vertical timeline of career history (3 companies, oldest first); each card opens a detail dialog (summary, 担当業務, 使用技術, この経験から)
  - `WorksSection.tsx` - Projects showcase with animated cards
  - `SocialLinksSection.tsx` - Social media links grid
  - `ProjectCard.tsx` - Reusable project card with tech icons
  - `TechIcon.tsx` - Animated technology stack icons
- `docs/` - Documentation and requirements
- `public/` - Static assets and placeholder images

### Design System

**Color Palette**: White-based modern design with:
- Primary: Indigo (#4338ca) to Purple (#7c3aed) gradients
- Background: Light gray (#fafafa) with gradient overlays
- Cards: Semi-transparent white with glass morphism effects
- Accents: Cyan, Pink, and Purple for highlights

**Animation System**:
- `.floating-animation` - Subtle floating effect for profile avatar
- `.fade-in-up` with `.stagger-*` - Sequential fade-in animations
- `.gradient-text` - Gradient text effects for headings
- Glass morphism effects with `backdrop-blur` and transparency

**Component Architecture**:
- Modular, reusable components
- Technology icons with color-coded gradients
- Project cards support both link and image variants
- Responsive grid layouts with hover effects

### Content Structure

1. **About Section**: 
   - Profile avatar with gradient border
   - Name and title with gradient text effect
   - Professional background description (SIer → 広告代理店ベンチャー → 業務SaaSスタートアップ)
   - Badge linking to X DM: 「副業等のご依頼はXのDMへ」 (replaced the old "Available for opportunities" indicator)

2. **Career Section** (company-level timeline, oldest first, all company names public):
   - 2021年4月〜2023年3月: 株式会社中央コンピュータシステム / 開発メンバー (金融系SIer)
   - 2023年4月〜2025年7月: 株式会社WAVE / エンジニアリング責任者 (「ひとりエンジニア」)
   - 2025年8月〜現在: アトミックソフトウェア株式会社 / フルスタックエンジニア (プレイングスクラムマスター, 5人チーム)
   - Each entry: period + industry tag + company + role + one-line episode. No education entries, no per-role splits.
   - Clicking a card opens a dialog with `detail` (summary, responsibilities, technologies, learnings). Close via ✕, Esc, or backdrop click. The SIer entry intentionally has no technologies listed (stack not confirmed).

3. **Works Section** (7 projects in priority order):
   - 警備業向け業務管理SaaS「警備フォース」(current job, external link, DDD + "Scrum Master" badges, screenshot `pj7.png`)
   - 人材派遣業企業の受注・シフト管理システム (DDD architecture)
   - 採用メディアサイト「レイワーカーズ」 (with external link)
   - SNSモバイルアプリ開発 (with screenshot)
   - シニアアテンダント eラーニングシステム (with external link)
   - インフルエンサー商品紹介サイト
   - 懐かしのプロフィール帳アプリ (with screenshot)

4. **Links Section**: 
   - X (Twitter), Qiita, GitHub, Speaker Deck
   - Animated cards with gradient backgrounds
   - Closing message 「副業等のご依頼はXのDMへ」

**Content decisions to preserve**:
- Existing Works cards keep "etc.." in their tech lists on purpose (card size over completeness).
- The `architecture` prop on `ProjectCard` is rendered under the label 「アーキテクチャ・役割」 and is used for both DDD and the Scrum Master role badge.
- Only technologies the owner actually designed/built go on the current-job card (AWS/Terraform yes, GCP no).

### Technology Icons

The `TechIcon` component supports color-coded icons for:
- Frontend: TypeScript, React, Next.js, Flutter, Dart
- Backend: PHP, Laravel, Hono
- Cloud: AWS services (EC2, RDS, S3, CloudFront, ECS, Fargate, CodeBuild), Terraform
- Deployment: Vercel, Heroku
- Other: Micro CMS, payment gateways, TestFlight
- Architecture / role: DDD (Domain Driven Design), Scrum Master

Unknown names fall back to a generic 🔧 icon, so add an entry to `techIcons` whenever a new technology is used in `WorksSection.tsx`.

### Screenshots

Work screenshots live in `public/images/works/pjN.*`. They can be captured with headless Chrome:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --window-size=1280,800 --virtual-time-budget=8000 --screenshot=public/images/works/pjN.png <url>
```

Note that headless Chrome on macOS will not go narrower than roughly 500px, so a 390px capture looks clipped even when the layout is fine.

### SEO Configuration

- Optimized meta title and description in Japanese
- Structured content for portfolio showcase
- Open Graph and social sharing optimization
- Japanese language content targeting

### Styling Conventions

- Use Tailwind utilities with custom CSS variables
- Glass morphism: `bg-white/80 backdrop-blur-sm border border-white/30`
- Gradient text: `gradient-text` class for headings
- Animations: Stagger delays for sequential animations
- Hover effects: Scale, shadow, and color transitions
- Responsive: Mobile-first approach with `md:` and `lg:` breakpoints