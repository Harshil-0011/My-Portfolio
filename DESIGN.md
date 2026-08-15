---
name: Synapse-Vortex Universal Design System
version: 2.0.0
author: Jules Autonomous Engineering Platform
description: Universal design architecture for building high-impact, distinctive web experiences and software interfaces across multiple archetypes without generic templates.
colors:
  background: '#030712'
  surface: '#0B0F19'
  surface-low: '#0F172A'
  surface-high: '#1E293B'
  surface-border: '#1E293B'
  border-glow: 'rgba(34, 211, 238, 0.2)'
  primary: '#22D3EE'
  primary-bright: '#67E8F9'
  secondary: '#8B5CF6'
  secondary-bright: '#A78BFA'
  accent-orange: '#FF3300'
  accent-green: '#10B981'
  text-primary: '#F8FAFC'
  text-secondary: '#94A3B8'
  text-muted: '#64748B'
typography:
  font-sans: 'Inter, system-ui, -apple-system, sans-serif'
  font-mono: 'JetBrains Mono, Fira Code, monospace'
  font-display: 'Space Grotesk, Inter, sans-serif'
spacing:
  base-unit: '4px'
  grid-padding: '24px'
  card-gap: '16px'
  section-spacing: '96px'
---

# 🛸 Synapse-Vortex Universal DESIGN.md

> **Instruction for AI Agents (Claude, Cursor, v0, Bolt, Jules, GPT-4o):**
> Read and enforce this entire document when generating code, UI components, layouts, or stylesheets.
> **DO NOT** produce default, generic "white card with subtle shadow" templates or generic AI boilerplate.
> Every component generated must adhere strictly to the visual identity, surface layering, micro-interactions, and visual hooks specified below.

---

## 📐 Table of Contents
1. [Design Philosophy & Visual Hooks](#1-design-philosophy--visual-hooks)
2. [Color System & Functional Tokens](#2-color-system--functional-tokens)
3. [Typography & Numeric Alignment](#3-typography--numeric-alignment)
4. [Layout Engine & Grid System](#4-layout-engine--grid-system)
5. [Elevation, Glassmorphism & Depth](#5-elevation-glassmorphism--depth)
6. [Component Blueprints](#6-component-blueprints)
7. [Motion, Physics & Micro-Interactions](#7-motion-physics--micro-interactions)
8. [Multi-Archetype Adaptability System](#8-multi-archetype-adaptability-system)
9. [Prompting Guide for AI Coding Agents](#9-prompting-guide-for-ai-coding-agents)

---

## 1. Design Philosophy & Visual Hooks

### 1.1 Core Aesthetic Directive: *Hyper-Precision & Atmospheric Energy*
- **Purpose**: Create web interfaces that feel like next-generation software operating systems—authoritative, expressive, fast, and intensely polished.
- **Visual Personality**: High-contrast dark backgrounds, glowing neon energy conduits, hairline structural borders, dense tabular metadata, and dynamic motion.
- **The "Anti-AI-Dump" Rule**: Never generate flat, lifeless blocks of plain text or uniform gray boxes. Interfaces must feature **visual anchors** (HUD chips, glowing focal points, monospaced tech tags, interactive glass cards, and dynamic grid lines).

### 1.2 Key Signature Visual Hooks
1. **The Synapse Halo / Ambient Sphere**: Subtle, blurred radial gradient blurs (`backdrop-blur-3xl`, `bg-cyan-500/10`) positioned behind focal areas to create cinematic depth.
2. **Hairline Cyber Borders**: 1px crisp borders using high-contrast slate borders (`border-slate-800/86`) paired with subtle hover gradient shifts (`hover:border-cyan-500/50`).
3. **Monospaced Technical HUD**: Top bars, badge headers, and metadata chips rendered in monospaced fonts (`JetBrains Mono`) with bracket styling `[STATUS: ACTIVE]` or `// SECTION_01`.
4. **Interactive Bento Glassware**: Asymmetric card layouts using translucent slate backgrounds (`bg-slate-900/60`), backdrop blur (`backdrop-blur-md`), and subtle glow illumination on hover.

---

## 2. Color System & Functional Tokens

### 2.1 Palette Architecture
| Token | Hex / Value | Semantic Purpose |
| :--- | :--- | :--- |
| `bg-deep-space` | `#030712` | Main viewport canvas, deep pitch darkness |
| `surface-glass` | `rgba(15, 23, 42, 0.65)` | Cards, panels, elevated surfaces |
| `surface-border` | `rgba(30, 41, 59, 0.8)` | Structural panel separation |
| `primary-cyan` | `#22D3EE` | Primary focus, active triggers, core accent |
| `secondary-violet` | `#8B5CF6` | Secondary accent, AI/neural features |
| `orange-hazard` | `#FF3300` | High-priority callouts, focal badges, borders |
| `emerald-status` | `#10B981` | Verification, success metrics, online indicators |
| `text-bright` | `#F8FAFC` | Primary headlines, data values |
| `text-muted` | `#94A3B8` | Body text, explanations |
| `text-dim` | `#64748B` | Labels, timestamps, system metadata |

### 2.2 Color Rules for Code Generation
- **Never use pure white backgrounds** (`#FFFFFF`) unless strictly in light-mode overrides.
- **Gradients**: Use dual-stop directional gradients for accents:
  `bg-gradient-to-r from-cyan-500 via-violet-500 to-indigo-500`
- **Glow Effects**: Use `box-shadow` or `drop-shadow` with opacity matching the accent token:
  `shadow-[0_0_25px_rgba(34,211,238,0.15)]`

---

## 3. Typography & Numeric Alignment

### 3.1 Type Stack
- **Display Font**: `Space Grotesk` or `Inter` (Weight 700/800) for hero lines, section banners, and large numbers.
- **Body Font**: `Inter` or system sans-serif (Weight 400/500) for readable paragraphs and UI labels.
- **Code & Tech Font**: `JetBrains Mono` or `Fira Code` for technical metrics, tags, navigation numbers, and terminal output.

### 3.2 Typography Rules
- **Line Breaks**: Control headline line breaks explicitly with structured translation keys or precise spans rather than arbitrary string splitting.
- **Tabular Figures**: ALWAYS apply `font-mono tabular-nums` to financial data, percentages, counters, timestamps, and coordinates so digits do not jump during animation.
- **Case Hierarchy**:
  - Main Titles: Title Case or UPPERCASE with tracking (`tracking-tight` for titles, `tracking-widest` for mono labels).
  - UI Labels: All CAPS monospaced tags (`[ARCHIVE]`, `// SYSTEM STATS`).

---

## 4. Layout Engine & Grid System

### 4.1 Grid Hierarchy
- **Bento Box Grid**: Use multi-column responsive Tailwind grids:
  ```html
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4">
    <div class="lg:col-span-8 ...">Primary Hero Card</div>
    <div class="lg:col-span-4 ...">Side HUD Widget</div>
  </div>
  ```
- **Max Canvas Width**: `max-w-7xl`, centered with `mx-auto px-4 sm:px-6 lg:px-8`.
- **Vertical Rhythm**: Section margins must use generous spacing (`py-20` to `py-32`) to give elements breathing room.

---

## 5. Elevation, Glassmorphism & Depth

### 5.1 Layering Architecture
1. **Level 0 (Canvas)**: Pitch dark `#030712` with optional subtle CSS noise or matrix grid lines (`bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]`).
2. **Level 1 (Card Base)**: `bg-slate-900/50 backdrop-blur-md border border-slate-800/86 rounded-2xl`.
3. **Level 2 (Hover / Active)**: `hover:bg-slate-900/80 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300`.
4. **Level 3 (Modals / Overlays)**: `bg-slate-950/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl`.

---

## 6. Component Blueprints

### 6.1 Navigation Bar (HUD Navigation)
- **Structure**: Fixed/sticky top bar with glass background (`backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/86`).
- **Brand Emblem**: Monospaced technical logo paired with status pill `[ONLINE]`.
- **Nav Items**: Monospaced items with hover glowing underbar or cyan tint.
- **Language & Theme Toggle**: Integrated inline control with crisp borders and active state highlights.

### 6.2 Hero Section (Identity Reveal)
- **Layout**: Asymmetric split—left side large typography + high-impact CTA buttons; right side interactive 3D canvas, particle orb, or dynamic preview card.
- **Badges**: Top pill badge `[ SYSTEM OPERATIONAL ]` with emerald status dot.
- **Buttons**:
  - Primary CTA: `bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all`
  - Secondary CTA: `bg-slate-900/86 border border-slate-700 text-slate-200 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all`

### 6.3 Bento Feature Cards
- **Card Header**: Icon container with cyan border + monospaced category label (`01 / NEURAL ENGINE`).
- **Body**: Bold title + crisp description text.
- **Card Footer**: Dynamic metric pill or interactive trigger arrow (`→`).

### 6.4 Interactive Contact / Terminal Portal
- **Form Inputs**: Glass inputs `bg-slate-950/60 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 rounded-xl px-4 py-3 outline-none`.
- **Feedback State**: Motion state changes on submit (pulse glow, status checkmarks, monospaced logs).

---

## 7. Motion, Physics & Micro-Interactions

### 7.1 Animation Principles
- **Library Target**: Framer Motion, GSAP, or CSS Tailwind Transitions.
- **Easiest Timing**: Easing curves should be snappy and mechanical: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Stagger Delays**: Apply `staggerChildren: 0.08` to lists, grids, and navigation items.
- **Scroll Reveals**: Elements fade up `y: 20 -> y: 0` with `opacity: 0 -> opacity: 1` as they enter the viewport.

---

## 8. Multi-Archetype Adaptability System

Use this `DESIGN.md` as a foundation, and swap tokens according to the target website archetype:

### 🎯 Archetype A: AI Engineering Portfolio / Research Lab (Default)
- **Primary Accent**: Electric Cyan (`#22D3EE`) & Royal Violet (`#8B5CF6`)
- **Key Vibe**: Sci-Fi Command Center, High-Density Skills Matrix, Interactive 3D Sphere, Monospaced Badges.

### 🎯 Archetype B: Enterprise SaaS / Analytics Dashboard
- **Primary Accent**: Deep Cobalt Blue (`#2563EB`) & Emerald Green (`#10B981`)
- **Key Vibe**: Ultra-clean data tables, real-time chart overlays, KPI summary metric cards, filter bars.

### 🎯 Archetype C: Developer Tooling / Infrastructure CLI
- **Primary Accent**: Matrix Green (`#22C55E`) & Amber Warning (`#F59E0B`)
- **Key Vibe**: Terminal windows with prompt carets, copy-paste snippet blocks, syntax highlighting, minimal glow.

### 🎯 Archetype D: Creative Studio / Portfolio Agency
- **Primary Accent**: Crimson Red (`#EF4444`) & Liquid Silver (`#E2E8F0`)
- **Key Vibe**: Kinetic big typography, horizontal smooth scrolling, full-screen video/image showcases, magnetic cursor.

---

## 9. Prompting Guide for AI Coding Agents

When passing this file to an AI Agent (e.g. Cursor, Claude, v0, Bolt, Jules), include this system instruction:

> **System Prompt Template for AI Generation:**
> *"You are an expert frontend engineer and creative technologist. Follow the design directives in `DESIGN.md`. Ensure every component uses the exact color tokens, monospaced tech headers, bento grid layouts, glassmorphism overlays, and micro-interaction states defined in `DESIGN.md`. Do not simplify or compromise on the visual polish."*

---
