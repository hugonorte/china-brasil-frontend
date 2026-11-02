# ChinaBrasil — Design System

Sugestão de design system para modernizar o `chinabrasil.com`, inspirada nas referências em `../referencias/` (estrutura do `financeco_design_system.json` e o estilo de execução do `design-system.html`), adaptada para o negócio real (consultoria/intermediação comercial China ↔ Brasil) e para a stack atual do projeto (Nuxt 4 + Vue 3, com geração estática / SSG).

## Arquivos

- **`tokens.json`** — fonte da verdade: cores, tipografia, espaçamento, raios, sombras, motion, especificação de componentes e estrutura de página. Use como referência ao construir qualquer componente novo.
- **`tokens.css`** — os mesmos tokens como CSS custom properties (`--cb-*`), para uso fora do Tailwind (ex.: e-mails transacionais, PDFs, widgets de terceiros).
- **`tailwind.tokens.js`** — mapeamento pronto para `theme.extend` do Tailwind, gerado a partir do `tokens.json`.
- **`preview.html`** — protótipo estático navegável (abra direto no navegador) mostrando paleta, tipografia e os principais componentes (nav, hero, cards de serviço, processo, métricas, CTA, footer) já compostos como uma página real.

## Direção de marca

- **Paleta**: **vermelho** (`red-900` como cor-base) é a cor institucional primária — referência direta e sóbria à identidade chinesa, usada em headings, ações principais e seções escuras (`red-950`); **dourado** é o acento de maior destaque, reservado a CTAs sobre fundo escuro e a pequenos realces (prosperidade); **jade** vira um accent secundário mais discreto (badges de setor, ícones alternativos), preservando a leitura de confiança/crescimento sem competir com o vermelho como cor dominante.
- **Tipografia**: `Fraunces` (serifada, editorial) para headlines de peso institucional + `Inter` para todo o resto — mesma lógica do `financeco_design_system.json` (serif de destaque + sans utilitária), mas com um par mais atual.
- **Tom**: direto, consultivo, sem jargão aduaneiro sem explicação; menos "landing page de SaaS", mais "escritório de comércio exterior sério".

## Como integrar no Nuxt (passo a passo sugerido)

1. **Tailwind**
   ```bash
   pnpm add -D @nuxtjs/tailwindcss
   ```
   ```ts
   // nuxt.config.ts
   export default defineNuxtConfig({
     modules: ['@nuxtjs/tailwindcss'],
   })
   ```
   ```js
   // tailwind.config.js (raiz do projeto)
   const { theme } = require('./design-system/tailwind.tokens.js')
   module.exports = {
     content: ['./app/**/*.{vue,js,ts}'],
     theme: { extend: theme },
   }
   ```

2. **Tokens CSS globais**
   Copie (ou importe) `design-system/tokens.css` para `app/assets/css/tokens.css` e referencie em `nuxt.config.ts`:
   ```ts
   css: ['~/assets/css/tokens.css']
   ```

3. **Fontes**
   Auto-hospedar via `@nuxt/fonts` (evita depender de CDN externo em produção, importante para LGPD/performance):
   ```bash
   pnpm add -D @nuxt/fonts
   ```
   ```ts
   modules: ['@nuxt/fonts'],
   fonts: {
     families: [
       { name: 'Fraunces', provider: 'google' },
       { name: 'Inter', provider: 'google' },
     ],
   }
   ```

4. **Ícones**: `lucide-vue-next`, coerente com o estilo "thin line" definido em `tokens.json > icons`.

5. **Componentes a construir** (ver `tokens.json > components` e `implementation_checklist`):
   `AppHeader`, `AppButton` (variants: primary/accent/secondary/link), `SectionHeading`, `ServiceCard`, `ProcessStep`, `StatStrip`, `CaseCard`, `CtaBanner`, `AppFooter`. Cada um deve consumir apenas classes Tailwind mapeadas aos tokens (nunca cores/tamanhos "soltos").

6. **SSG**: como o site será pré-renderizado (`nuxt generate`), evite qualquer dependência de estado só-client para o conteúdo visível acima da dobra; animações de entrada (`prefers-reduced-motion`-safe) podem ficar em client-only via `<ClientOnly>` quando necessário.

## Próximos passos sugeridos

- Validar a paleta e o `preview.html` com o cliente antes de codificar componentes Vue.
- Definir o conteúdo real de `page_structure` em `tokens.json` (serviços, cases, métricas) com dados do negócio.
- Implementar os componentes Vue em `app/components/` seguindo os nomes acima, usando as páginas existentes (`app/pages/index.vue`, `app/pages/contato.vue`) e layouts (`Home.vue`, `Sections.vue`) como ponto de montagem.
