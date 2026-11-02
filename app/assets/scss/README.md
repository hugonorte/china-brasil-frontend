# Estilos — ChinaBrasil

SCSS é o padrão do projeto. Tailwind só deve ser usado onde for **explicitamente** solicitado — o resto do site é SCSS puro, mobile-first.

## Estrutura

```
abstracts/   variáveis, breakpoints e mixins (sem gerar CSS sozinhos)
base/        reset, tipografia base e ajustes globais
layout/      classes utilitárias de layout (.container, .section)
components/  estilos globais de componente, quando não couberem no <style scoped> do .vue
main.scss    entry point único, importado em nuxt.config.ts
```

Os valores em `abstracts/` espelham `../../../design-system/tokens.json` — ao mudar um token de marca, atualize os dois lugares.

## Mobile-first, na prática

Todo estilo novo começa "solto" (mobile) e cresce via `@include respond-to($bp)`, que gera `min-width`. Nunca use `max-width` para o fluxo principal do layout — só em `respond-below()`, reservado a exceções (ex.: esconder um menu desktop no mobile).

```scss
<style lang="scss" scoped>
.card {
  padding: $space-4;
  flex-direction: column;

  @include respond-to(md) {
    padding: $space-8;
    flex-direction: row;
  }
}
</style>
```

Breakpoints disponíveis (`abstracts/_breakpoints.scss`): `sm` 480px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1440px.

## Uso dentro de componentes Vue

Não é preciso `@use` manual: o `nuxt.config.ts` injeta `abstracts/_index.scss` automaticamente em todo `<style lang="scss">`. Basta usar as variáveis/mixins diretamente:

```vue
<style lang="scss" scoped>
.btn {
  @include button-primary;
}
</style>
```

Fora de componentes Vue (ex.: outro `.scss` solto), importe explicitamente:

```scss
@use '~/assets/scss/abstracts' as *;
```

## Quando usar Tailwind

Só quando indicado explicitamente para uma página/seção específica. Nesse caso, instale `@nuxtjs/tailwindcss` e mapeie `design-system/tailwind.tokens.js` — ver `design-system/README.md`. Não misture utilitários Tailwind com estes componentes SCSS na mesma seção.
