<script setup lang="ts"></script>

<template>
  <section class="livros" data-cy="livros">
    <div class="livros__container">
      <div class="livros__card">
        <div class="livros__text">
          <h2 class="livros__title">Livraria Virtual</h2>
          <p class="livros__description">
            Encontre aqui todo o conteúdo editorial produzido pelo Centro Cultural China-Brasil
          </p>
          <NuxtLink to="https://chinasil.commercesuite.com.br" class="livros__cta" data-cy="livros-cta" target="_blank">
            Clique aqui e acesse nossa livraria virtual
            <span class="livros__cta-arrow" aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <div class="livros__visual" aria-hidden="true">
          <span class="livros__glow livros__glow--gold"></span>
          <span class="livros__glow livros__glow--jade"></span>

          <div class="livros__panel livros__panel--sm">
            <span class="livros__panel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </span>
            <div class="livros__panel-lines">
              <span class="livros__line livros__line--lg"></span>
              <span class="livros__line livros__line--sm"></span>
            </div>
          </div>

          <div class="livros__panel livros__panel--lg">
            <span class="livros__panel-icon livros__panel-icon--accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <div class="livros__panel-lines">
              <span class="livros__line livros__line--lg"></span>
              <span class="livros__line livros__line--md"></span>
            </div>
          </div>

          <div class="livros__panel livros__panel--md">
            <span class="livros__panel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M9 13h6M9 17h6" />
              </svg>
            </span>
            <div class="livros__panel-lines">
              <span class="livros__line livros__line--sm"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.livros {
  @include section-padding;

  &__container {
    @include container;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: $space-12;
    position: relative;
    overflow: hidden;
    padding: $space-8;
    background-color: $color-dark-section;
    // Camada escura sobre a foto para manter o contraste do texto branco.
    background-image: linear-gradient(90deg, rgba($red-950, 0.92) 0%, rgba($red-950, 0.7) 100%),
      url('/img/livros/livros.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: $radius-xl;
    box-shadow: $shadow-floating;

    @include respond-to(md) {
      flex-direction: row;
      align-items: center;
      padding: $space-16;
      min-height: 480px;
    }
  }

  &__text {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;

    @include respond-to(md) {
      width: 50%;
      padding-right: $space-16;
    }
  }

  &__title {
    color: $white;
    margin-bottom: $space-6;
  }

  &__description {
    max-width: 36ch;
    color: rgba($white, 0.75);
    line-height: 1.8;
    margin-bottom: $space-10;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    align-self: flex-start;
    font-size: $font-size-body-md;
    font-weight: $weight-medium;
    color: $gold-500;
    transition: color $duration-fast $easing-brand;

    @include focus-ring;

    &:hover {
      color: $gold-300;
      text-decoration: underline;
    }
  }

  &__cta-arrow {
    font-size: 1.2rem;
    line-height: 1;
    transition: transform $duration-fast $easing-brand;
  }

  &__cta:hover &__cta-arrow {
    transform: translateX(4px);
  }

  &__visual {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: $space-6;
    min-height: 260px;
    margin-top: $space-8;

    @include respond-to(md) {
      width: 50%;
      min-height: 100%;
      margin-top: 0;
    }
  }

  &__glow {
    position: absolute;
    z-index: 0;
    border-radius: $radius-pill;
    filter: blur(70px);
  }

  &__glow--gold {
    top: 50%;
    left: 50%;
    width: 220px;
    height: 220px;
    background-color: rgba($gold-600, 0.5);
    transform: translate(-50%, -50%);
  }

  &__glow--jade {
    top: 20%;
    right: 15%;
    width: 140px;
    height: 140px;
    background-color: rgba($jade-600, 0.35);
  }

  &__panel {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: $space-4;
    width: 100%;
    max-width: 320px;
    padding: $space-4;
    background-color: rgba($white, 0.06);
    backdrop-filter: blur(16px);
    border: 1px solid rgba($white, 0.12);
    border-radius: $radius-lg;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transition: transform $duration-normal $easing-brand;

    &:hover {
      transform: translateY(-4px);
    }
  }

  &__panel--sm {
    max-width: 260px;
  }

  &__panel--md {
    max-width: 300px;
    align-self: center;
  }

  &__panel--lg {
    max-width: 360px;
    padding: $space-5;
    background-color: rgba($white, 0.1);
    border-color: rgba($white, 0.18);
  }

  &__panel-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    color: rgba($white, 0.7);
    background-color: rgba($white, 0.08);
    border-radius: $radius-md;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__panel-icon--accent {
    color: $gold-300;
    background-color: rgba($gold-600, 0.2);
  }

  &__panel-lines {
    display: flex;
    flex-direction: column;
    gap: $space-2;
    width: 100%;
  }

  &__line {
    display: block;
    height: 8px;
    background-color: rgba($white, 0.2);
    border-radius: $radius-pill;
  }

  &__line--lg {
    width: 75%;
  }

  &__line--md {
    width: 55%;
  }

  &__line--sm {
    width: 40%;
    background-color: rgba($white, 0.12);
  }
}
</style>
