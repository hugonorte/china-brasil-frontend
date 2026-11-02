---
name: Project Architecture
description: Nuxt 3 structure, component organization, and key patterns
type: reference
source: Extracted from memory system for .agents/memory/
---

# Project Architecture — Quick Reference

## Directory Structure

```
src/
├── components/          # Nuxt 3 components organized by feature
├── hooks/               # Custom Nuxt 3 hooks
├── locales/             # i18n translation files
├── pages/               # Page components for manual routing
├── App.tsx              # Root component with manual routing logic
├── main.tsx             # Entry point
```

## Component Organization

**Format**: Nuxt 3 functional components in `.tsx` files.

## Routing Strategy

**Manual Routing**:
- Routing is handled manually inside `App.tsx` by inspecting `window.location.pathname`.
- No external routing libraries (like Nuxt 3 Router) are used by default unless specified.

## i18n Setup

**Files**: `src/locales/`

## Styling Architecture

- **Tailwind CSS**
- **SCSS**
- **CSS**: Global CSS styles

## Key Integrations

- **Nuxt 3**: Core UI library
- **Vite**: Build tool and dev server
- **TypeScript**: Strict mode enabled

