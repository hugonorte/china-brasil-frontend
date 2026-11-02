---
trigger: always_on
---

# Padrões Nuxt 3, Vue 3 e TypeScript

Sempre que escrever, editar ou analisar código Vue/Nuxt neste projeto, deve seguir estritamente as seguintes regras:

- **Componentes Vue (SFCs):** Use sempre Single File Components (SFCs) com `<script setup lang="ts">`. Evite a Options API.
- **Tipagem Estrita (TypeScript):** Defina sempre interfaces ou tipos para Props. Utilize `defineProps<{ ... }>()`. Evite o uso de `any`.
- **Data Fetching:**
    - Utilize os padrões do Nuxt 3 (`useFetch`, `useAsyncData`) adequados para geração de site estático (SSG).
    - Lembre-se que o site é estático (sem CMS), logo as chamadas para renderização devem suportar o build via `npm run generate`.
- **Folders (Nuxt 3 structure):**
    - Siga a estrutura padrão do Nuxt 3: `components/`, `composables/`, `pages/`, `layouts/`, `public/`, `assets/`.
    - O Roteamento é feito de forma automática pelo Nuxt através da pasta `pages/`.
- **Estilização:** Use **Tailwind CSS** para layout e componentes rápidos. Para estilos específicos e reutilizáveis, use SCSS (`<style lang="scss" scoped>`).
- **Nomenclatura:** 
    - **Componentes:** PascalCase (ex: `MyComponent.vue`).
    - **Arquivos Composables:** camelCase com prefixo "use" (ex: `useMyHook.ts`).
    - **Variáveis/Funções:** camelCase (ex: `const myValue = ...`).
- **Gerenciamento de Estado:** Use **Composables** (`useState` do Nuxt) para estados globais ou partilhados. Mantenha os estados locais dentro dos componentes usando a reatividade do Vue (`ref`, `reactive`).
