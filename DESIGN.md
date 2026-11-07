---
name: My-Portfolio
description: Harshil Gorasiya's portfolio as a DIN engineering drawing sheet (Datenblatt)
colors:
  paper: "#F6F4EE"
  paper-hi: "#FCFBF7"
  paper-lo: "#ECE8DC"
  ink: "#16130E"
  ink-soft: "#453F33"
  graphite: "#7C766A"
  stamp: "#B3291E"
typography:
  display:
    fontFamily: "Barlow, Arial Narrow, sans-serif"
    fontWeight: 800
    lineHeight: 0.95
  cond:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontWeight: 700
  mono:
    fontFamily: "Overpass Mono, Courier New, monospace"
    fontWeight: 600
rounded:
  stamp: "9999px"
spacing:
  block-gap: "5.5rem"
  block-gap-md: "7.5rem"
components:
  tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    border: "1px solid {colors.ink}"
    padding: "7px 12px 6px"
  tab-proof-active:
    textColor: "{colors.stamp}"
    border: "1px solid {colors.stamp}"
    boxShadow: "inset 0 0 0 1px {colors.stamp}"
  stamp:
    border: "2.5px solid {colors.stamp}"
    borderRadius: "{rounded.stamp}"
    mixBlendMode: "multiply"
  submit:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    border: "1px solid {colors.ink}"
    padding: "13px 10px 12px"
  chip-red:
    textColor: "{colors.stamp}"
    border: "1px solid {colors.stamp}"
    padding: "9px 14px 8px"

# Design System: My-Portfolio

## Overview

**Creative North Star: "The Datenblatt"**

The page is one continuous DIN engineering drawing sheet: warm paper ground (#F6F4EE) under a fixed-pitch dot grain that never rescales at any zoom, ink #16130E, a single stamp-red accent (#B3291E), graphite hairlines (#7C766A), a double drawing frame with crop ticks and edge coordinates (A–F / 1–6), index-tab navigation, and a DIN title block clamped to the inner frame's bottom-right corner. Claims are set with measured values beside their sources and stamped GEPRÜFT; sections open as heavy cut-blocks separated by deep void gaps; hierarchy is carried by ink weight and size together.

**Key Characteristics:**
- Sheet paper ground with a 3.6px fixed-pitch dot grain overlay
- One accent, stamp red #B3291E, used on stamps, ticks, and active states only
- Flat paper world — no shadows, no glass, no blur, no gradient text, no glyph icons
- Contour-proof reading: `html.proof` class plus `prefers-contrast: more` force pure black/white/red

## Colors

Warm technical paper under ink, with one measured accent.

### Primary
- **Stamp red** (#B3291E): stamps, active tab fill, proof toggle when pressed, the one red role underline beneath the role line. Kept to ≤10% of screen pixels; its rarity is the point (**The One Voice Rule**).

### Secondary
- *Omitted: the project has one accent only.*

### Tertiary
- *Omitted: the project has one accent only.*

### Neutral
- **Sheet paper** (#F6F4EE): body ground; fixed-pitch dot grain paints over it.
- **Sheet surface hi** (#FCFBF7): title-block surface, chip rests, hover-neutral panels.
- **Sheet surface lo** (#ECE8DC): tab hover and sheet-ground hover tone.
- **Drawing ink** (#16130E): body text, frame, title-block borders, active tab fill.
- **Soft ink** (#453F33): secondary description text, KPI labels.
- **Graphite hairline** (#7C766A): frame inner rule, coordinates, captions, disabled copy.

## Typography

**Display Font:** Barlow (self-hosted, latin woff2; weights 500/600/700/800)
**Body Font:** Barlow Semi Condensed (self-hosted; 600/700)
**Label/Mono Font:** Overpass Mono (self-hosted; 400/600)

**Character:** DIN-1451-lineage grotesques for display and labels; tabular mono for measured values. Weight and size steps carry hierarchy — never gradient text (**The Flat Paper Rule**).

### Hierarchy
- **Display** (800, clamp(2.7rem–4.7rem), 0.95): name at the first viewport only, max 6rem; one line, tracking-tight.
- **Headline** (700, ~1.35–1.6rem): register item names, small caps via uppercase, tight leading.
- **Title** (700, ~1.2rem): section heads inside black cut-blocks on white ink.
- **Body** (400–500, 0.9rem, 1.6–1.7 leading): blurbs at 65–75ch max measure.
- **Label** (600, 0.6–0.78rem, letter-spaced 0.1–0.3em, uppercase): captions, coordinates, KPI labels, chips.

### Named Rules
**The Tracking Floor Rule.** Tracking never goes below -0.04em; mono values use tabular figures.

## Layout

Single-column sheet under a fixed drawing frame. Sections stack vertically as cut-blocks (ink ground, white type) separated by deep void gaps (5.5rem, 7.5rem at md) topped with a dotted rule. The first viewport is a full drawing frame: index tabs plus EN/DE plus CV chips across the top, name and KPI table left two-thirds, DIN title block bottom-right. Responsive: KPI table collapses to a single column below 640px; desktop holds 1280–1600 widths fluidly, nothing fixed-pixel that wraps narrower.

**The Spacing Rhythm Rule.** More space above a heading than below it; tight groups, generous separation between sections.

## Elevation & Depth

Flat-by-default: no box-shadow, no glass, no blur. Depth is conveyed through tonal layering (paper / paper-hi / paper-lo) and ink weight, never through shadows (**The Flat Paper Rule**).

## Shapes

Square corners everywhere except the GEPRÜFT stamp, which is a circle (9999px border-radius) with a dashed inner ring, rotated −11deg. No geometric masks standing in for organic contours. No nested cards — cards are the lazy container; the sheet is the structure.

## Components

### Index tabs
**Shape:** square, 1px ink border. **Primary:** ink fill on active state with white type; hover goes sheet-lo. **States:** default outline, active filled ink, disabled none. Navigation: Projects / Experience / Skills / Contact.

### Proof toggle
**Style:** same tab shape; fills stamp red (#B3291E) with red border when pressed; guards `html.proof` + `prefers-contrast: more`.

### CV download chip
**Style:** stamp-red text on a 1px ink border, paper-hi background. **State:** hover to sheet-lo. Labels swap per language: CV (EN) ↓ / Lebenslauf (DE) ↓, and the German chip on the EN side.

### Submit record
**Style:** black on paper, 1px ink border, cond type uppercase. **Hover:** flips to stamp red with red border.

## Do's and Don'ts

### Do:
- **Do** keep one accent only (stamp red #B3291E) at ≤10% of screen pixels; its rarity is the point.
- **Do** put every measured figure beside its source column — claims are labelable, never invented.
- **Do** keep the phone number off the page; it lives only in the CV download.

### Don't:
- **Don't** add a kicker or eyebrow above any heading — the heading carries its own weight.
- **Don't** introduce drop shadows, glass, blur, gradient text, or glyph icons — flat paper world.
- **Don't** nest cards or use the hero-metric template — cards are the lazy container; the sheet is the structure.
