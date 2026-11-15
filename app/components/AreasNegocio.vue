<script setup lang="ts">
interface BusinessArea {
  title: string
  text: string
  to: string
  /** Conteúdo interno de um ícone Lucide (24x24, stroke). */
  icon: string
}

// Atalhos para as três áreas de negócio, logo abaixo do slideshow.
const areas: BusinessArea[] = [
  {
    title: 'Cursos In Company',
    text: 'Mandarim e português para profissionais e empresas, com foco no ambiente corporativo.',
    to: '/conexao-empresarial-estrategica/treinamento-executivos',
    icon: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  },
  {
    title: 'Consultoria Brasil–China',
    text: 'Conexões, negociações e acompanhamento de parcerias entre empresas dos dois países.',
    to: '/conexao-empresarial-estrategica/consultoria',
    icon: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  },
  {
    title: 'Livros didáticos',
    text: 'Materiais de autoria própria para aprender chinês e português de forma prática.',
    to: '/livros-e-publicacoes',
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  },
]
</script>

<template>
  <section class="areas" data-cy="areas-negocio" aria-labelledby="areas-heading">
    <h2 id="areas-heading" class="areas__heading">Áreas de negócio</h2>

    <ul class="areas__list">
      <li v-for="area in areas" :key="area.title">
        <NuxtLink :to="area.to" class="areas__card">
          <span class="areas__icon-wrap" aria-hidden="true">
            <svg
              class="areas__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
              v-html="area.icon"
            />
          </span>
          <h3 class="areas__title">{{ area.title }}</h3>
          <p class="areas__text">{{ area.text }}</p>
          <span class="areas__more" aria-hidden="true">
            Acessar
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.areas {
  @include container;
  padding-block: $space-12;

  // O título existe para a hierarquia (SEO e leitores de tela); os cartões falam por si.
  &__heading {
    @include visually-hidden;
  }

  &__list {
    display: grid;
    gap: $space-6;
    margin: 0;
    padding: 0;
    list-style: none;

    @include respond-to(md) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    li {
      display: flex;
    }
  }

  &__card {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: $space-8 $space-6;
    background-color: $white;
    border: $border-subtle;
    border-top: 4px solid $color-highlight;
    border-radius: $radius-lg;
    box-shadow: $shadow-soft;
    color: inherit;
    text-decoration: none;
    transition: box-shadow $duration-normal $easing-brand,
      transform $duration-normal $easing-brand;

    &:hover,
    &:focus-visible {
      box-shadow: $shadow-card;
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid $color-primary-action;
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;

      &:hover,
      &:focus-visible {
        transform: none;
      }
    }
  }

  &__icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: $space-4;
    border-radius: 50%;
    background-color: $surface;
    color: $color-primary-action;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__title {
    margin-bottom: $space-2;
    color: $color-heading-text;
    font-family: $font-display;
    font-size: $font-size-heading-md;
    line-height: 1.3;
  }

  &__text {
    margin-bottom: $space-5;
    color: $color-muted-text;
    font-size: $font-size-body-sm;
    line-height: 1.6;
  }

  &__more {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    margin-top: auto;
    color: $color-primary-action;
    font-size: $font-size-body-sm;
    font-weight: $weight-semibold;

    svg {
      width: 16px;
      height: 16px;
      transition: transform $duration-normal $easing-brand;
    }
  }

  &__card:hover &__more svg {
    transform: translateX(3px);
  }
}
</style>
