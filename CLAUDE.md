# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Project Overview

This is a modern portfolio website for 大野克樹 (Oono Katsuki), a web engineer. The site showcases development experience, projects, and technical skills with a sophisticated white-based modern UI design.

## Project Architecture

- **Framework**: Next.js 15.3.4 with App Router
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
  - `AboutSection.tsx` - Hero section with floating profile avatar
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
   - Professional background description
   - "Available for opportunities" status indicator

2. **Works Section** (6 projects in priority order):
   - 人材派遣業企業の受注・シフト管理システム (DDD architecture)
   - 採用メディアサイト「レイワーカーズ」 (with external link)
   - SNSモバイルアプリ開発 (with screenshot)
   - シニアアテンダント eラーニングシステム (with external link)
   - インフルエンサー商品紹介サイト
   - 懐かしのプロフィール帳アプリ (with screenshot)

3. **Links Section**: 
   - X (Twitter), Qiita, GitHub, Speaker Deck
   - Animated cards with gradient backgrounds
   - Contact encouragement message

### Technology Icons

The `TechIcon` component supports color-coded icons for:
- Frontend: React, Next.js, Flutter, Dart
- Backend: PHP, Laravel
- Cloud: AWS services (EC2, RDS, S3, CloudFront, ECS, Fargate, CodeBuild)
- Deployment: Vercel, Heroku
- Other: Micro CMS, payment gateways, TestFlight
- Architecture: DDD (Domain Driven Design)

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