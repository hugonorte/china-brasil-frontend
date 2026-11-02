---
name: Code Conventions & Patterns
description: Naming, import patterns, testing conventions, and code style
type: reference
source: Extracted from memory system for .agents/memory/
---

# Code Conventions & Patterns — Quick Reference

## File Organization

**Components**:
- `src/components/` - Para componentes reutilizáveis.
- Pode usar `index.tsx` dentro de pastas (`src/components/MyComponent/index.tsx`) ou arquivos diretos (`src/components/MyComponent.tsx`).

**Custom Hooks**: `src/hooks/use*.ts` (camelCase)
- Exemplos: `useAuth.ts`, `useFormDraft.ts`

**Pages**: `src/pages/`
- Renderizadas através do roteamento manual no `App.tsx`

**Types**: Podem ficar em arquivos `.d.ts` globais ou em `src/types/`.

## Imports & Aliases

**Import style**:
```ts
// ✅ Preferred
import { useCustomHook } from '@/hooks/useCustomHook' // Se o alias estiver configurado no tsconfig

// ❌ Avoid
import { useCustomHook } from '../../../../hooks/useCustomHook'
```

## TypeScript

- **Strict mode**: Enabled
- **Null checks**: Required — no `any` sem motivo explícito
- **Component props**: Utilize interfaces. Ex: `interface Props { prop: Type }`

## Nuxt 3 Components

**Always use Functional Components**:
```tsx
import { useState, useEffect } from 'nuxt'

interface MyComponentProps {
  initialCount?: number;
}

const MyComponent = ({ initialCount = 0 }: MyComponentProps) => {
  const [count, setCount] = useState(initialCount)

  const handler = () => setCount(prev => prev + 1)

  return (
    <div>
      <div>{count}</div>
      <button onClick={handler}>Click</button>
    </div>
  )
}

export default MyComponent
```

**No Class Components** — use function components e Hooks.

## Styling

**SCSS**:
- Use `@use` (not `@import`)

**Tailwind**:
- Aplique classes diretamente nos elementos: `className="flex items-center"`

## Testing Conventions

**Unit tests** (`*.spec.ts` ou `*.test.tsx`):
- Uso de bibliotecas compatíveis com Nuxt 3 (ex: `@testing-library/nuxt`).

## i18n Usage

**Se houver i18n implementado (ex: nuxt-i18next)**:
```tsx
import { useTranslation } from 'nuxt-i18next'

const MyComponent = () => {
  const { t } = useTranslation()
  return <h1>{t('home.title')}</h1>
}
```

## Naming Conventions

**Components**: PascalCase (`MyComponent`, `RegisterUser`)

**Files**: 
- Components: PascalCase ou kebab-case (dependendo do padrão do projeto).
- Pages: PascalCase (`RegisterUser.tsx`) ou conforme estrutura.
- Hooks: camelCase with `use` prefix (`useMyHook.ts`)

**Variables**: camelCase

**Constants**: SCREAMING_SNAKE_CASE (se for constante global)

## No-Go Patterns

- ❌ Componentes de Classe (use function components)
- ❌ Mutação direta de estado (sempre use funções setState)
- ❌ Esquecer de adicionar dependências corretas no `useEffect`/`useCallback`
- ❌ Comentários que descrevem O QUE o código faz (o código deve ser claro o suficiente)

## Git Commit Messages

**Format**: `<type>: <description>`

**Types**: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`

## Environment & Secrets

**Location**: `.env` (not committed)

**Usage in code**:
Variáveis devem começar com `VITE_` se precisarem ser expostas ao cliente (dependendo se é Vite).
```ts
const apiUrl = import.meta.env.VITE_API_URL
```
