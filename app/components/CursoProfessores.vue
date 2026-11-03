<script setup lang="ts">
// Banner compacto da home que divulga o curso de formação de professores de mandarim.
// O conteúdo completo fica em /curso-formacao-professores.
const tags = ['Letras', 'Ensino de idiomas', 'Acadêmicos']
</script>

<template>
  <section class="curso-professores" data-cy="curso-professores" aria-labelledby="curso-professores-title">
    <div class="curso-professores__container">
      <div class="curso-professores__banner">
        <div class="curso-professores__body">
          <p class="curso-professores__eyebrow">Formação de professores</p>
          <h2 id="curso-professores-title" class="curso-professores__title">
            Torne-se professor de mandarim com o método de Yuan Aiping
          </h2>
          <p class="curso-professores__text">
            Um curso para profissionais de Letras e do ensino de idiomas que querem abrir uma nova frente na
            carreira.
          </p>
          <ul class="curso-professores__tags" aria-label="Para quem é">
            <li v-for="tag in tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>

        <NuxtLink to="/curso-formacao-professores" class="curso-professores__cta" data-cy="curso-professores-cta">
          Conheça o curso
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.curso-professores {
  padding-block: $space-8 $space-12;

  @include respond-to(md) {
    padding-block: $space-10 $space-16;
  }

  &__container {
    @include container;
  }

  &__banner {
    position: relative;
    display: grid;
    gap: $space-5;
    padding: $space-8 $space-6;
    overflow: hidden;
    border-radius: $radius-xl;
    background:
      radial-gradient(circle at 100% 0%, rgba($gold-600, 0.28) 0%, transparent 45%),
      radial-gradient(circle at 0% 100%, rgba($red-700, 0.45) 0%, transparent 50%),
      linear-gradient(120deg, $red-950 0%, $red-900 100%);
    box-shadow: $shadow-floating;
    color: $white;
    isolation: isolate;

    // Anéis dourados decorativos no canto superior direito
    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      border: 1px solid rgba($gold-500, 0.22);
      border-radius: 50%;
      pointer-events: none;
    }

    &::before {
      top: -120px;
      right: -80px;
      width: 280px;
      height: 280px;
    }

    &::after {
      top: -60px;
      right: -20px;
      width: 160px;
      height: 160px;
    }

    @include respond-to(md) {
      padding: $space-10;
    }

    @include respond-to(lg) {
      grid-template-columns: 1fr auto;
      align-items: center;
      column-gap: $space-8;
      padding: $space-10 $space-12;
    }
  }

  &__eyebrow {
    margin-bottom: $space-2;
    color: $gold-500;
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  &__title {
    max-width: 26ch;
    margin-bottom: $space-2;
    color: $white;
    font-size: $font-size-heading-lg;
    line-height: 1.2;
    text-wrap: balance;
  }

  &__text {
    max-width: 52ch;
    color: rgba($white, 0.78);
    font-size: $font-size-body-sm;
    line-height: 1.6;

    @include respond-to(md) {
      font-size: $font-size-body-md;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-top: $space-4;

    li {
      padding: $space-1 $space-3;
      border: 1px solid rgba($gold-500, 0.4);
      border-radius: $radius-pill;
      color: $gold-300;
      font-size: $font-size-caption;
      font-weight: $weight-semibold;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
  }

  &__cta {
    @include button-accent;
    justify-self: start;

    svg {
      width: 16px;
      height: 16px;
      transition: transform $duration-normal $easing-brand;
    }

    &:hover svg,
    &:focus-visible svg {
      transform: translateX(3px);
    }

    @media (prefers-reduced-motion: reduce) {
      svg {
        transition: none;
      }
    }

    @include respond-to(lg) {
      justify-self: end;
    }
  }
}
</style>
