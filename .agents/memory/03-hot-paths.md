---
name: Hot Paths & Critical Files
description: Frequently modified files, stable core areas, and change impact zones
type: reference
source: Extracted from memory system for .agents/memory/
---

# Hot Paths & Critical Files — Quick Reference

## High-Frequency Zones (Change Often)

These files/dirs change frequently and should be understood when context is needed:

### Pages
- `src/pages/` — new pages added regularly
- Current pages: `index.tsx`, `power-electronics-modeling.tsx`, `proposal.tsx`, `create-meeting.tsx`, `privacy.tsx`, `terms.tsx`

### Components
- `src/components/ProposalForm/` — form logic changes
- `src/components/PowerElectronicsModeling/` — recently added, likely to evolve
- Any component in `src/components/` under 50 lines likely to be modified

### i18n
- `app/lang/` — translations change frequently
- `nuxt.config.ts` (i18n config) — stable but check when langDir issues arise

### Tests
- `*.spec.ts` files — added/updated with features
- `cypress/` tests — E2E coverage growing

## Stable Core (Rarely Change)

These are unlikely to need modification:

- `package.json` — dependencies stable, only major updates
- `tsconfig.json` — TypeScript config stable
- `cypress.config.ts` — Cypress setup stable
- `vitest.config.ts` — Vitest setup stable
- `app/types.d.ts` — global types, rarely break

## Impact Zones (Changes Break Multiple Places)

Editing these requires careful consideration of side effects:

### Critical Config
- `nuxt.config.ts` — affects routing, modules, CSS, i18n
- `.env` — server-side integrations (Suite CRM, Google OAuth)

### Shared Styles
- `app/assets/css/main.css` — affects all pages
- Tailwind defaults (if custom config exists)

### Global Composables
- `src/hooks/useAccessibility.ts` — used across components
- `src/hooks/useAnimatedCounter.ts` — used in Numbers component

### Layout
- `app/layouts/` — affects page structure site-wide
- `app/app.tsx` — root component (affects all pages)

## By Feature Area

### Home & Landing
- `src/pages/index.tsx` — home page
- `src/components/Hero/index.tsx`
- `src/components/Numbers/Numbers.tsx`
- `src/components/Studies/index.tsx`
- `src/components/Singularity/Singularity.tsx`
- `src/components/Bess/index.tsx`
- `src/components/SpecialStudies/index.tsx`
- `src/components/TechnicalAndForensicAssessment/index.tsx`

### Proposals & Meetings
- `src/pages/proposal.tsx`
- `src/pages/create-meeting.tsx`
- `src/components/ProposalForm/ProposalForm.tsx`
- `src/components/GoogleAgenda/GoogleAgenda.tsx`

### Power Electronics
- `src/pages/power-electronics-modeling.tsx`
- `src/components/PowerElectronicsModeling/index.tsx`
- i18n strings in `pt-BR.json`, `en-US.json`, `es-ES.json`

### Legal Pages
- `src/pages/privacy.tsx`
- `src/pages/terms.tsx`

### Layout & Navigation
- `src/components/Header/index.tsx`
- `src/components/Footer/Footer.tsx`
- `src/components/FooterWave/index.tsx`

### Data & Visualization
- `app/assets/data/estudos.json` — studies database
- `app/assets/data/locations.json` — location/map data
- `src/components/Map/Map.tsx` — uses topojson + d3

## Red Flags (Likely to Cause Issues)

When editing these, slow down and test thoroughly:

- `nuxt.config.ts` → Run `npm run build` and test locally
- Any `.json` files (malformed JSON breaks) → Validate JSON
- i18n translation keys → Check all 3 language files match keys
- Component props/emits → Grep for usages before changing signature
- Global type definitions (`types.d.ts`) → Tests must pass

## File Size Reference

- Small (< 100 lines): Safe to refactor
- Medium (100-300 lines): Check for multiple responsibilities
- Large (> 300 lines): Extract composables or split into sub-components

Most components are small-to-medium. `app.tsx` and root layouts are minimal.
