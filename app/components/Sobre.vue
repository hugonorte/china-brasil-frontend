<script setup lang="ts">
// Resumo da home. O perfil completo da fundadora fica em /sobre-a-china-brasil (YuanAipingPerfil).
</script>

<template>
  <section class="sobre" data-cy="sobre" aria-labelledby="sobre-title">
    <div class="sobre__container">
      <h2 id="sobre-title" class="sobre__title">Sobre Yuan Aiping</h2>

      <div class="sobre__row">
        <div class="sobre__col sobre__col--image">
          <img
            src="/img/home/sobre/foto-da-Yuan.jpg"
            alt="Professora Yuan Aiping"
            class="sobre__image"
            width="949"
            height="852"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="sobre__col sobre__col--text">
          <p class="sobre__description">
            Yuan Aiping nasceu na República Popular da China, é formada em língua e literatura inglesa pela
            Hebei Normal University e lecionou inglês na China por 13 anos. Chegou ao Rio de Janeiro em 1997,
            estudou português na UFRJ e na UERJ e, em 2001, obteve o Certificado de Proficiência em Língua
            Portuguesa para Estrangeiros.
          </p>
          <p class="sobre__description">
            Em 2004, fundou o Centro Cultural China-Brasil Yuan Aiping, com filiais em Pequim e Xangai, onde
            são ministrados cursos de chinês para brasileiros e de português para chineses. É autora de mais
            de 20 livros didáticos, foi eleita em 2015 pelo governo chinês uma das melhores professoras de
            mandarim do mundo e, em 2017, recebeu o Título de Cidadã do Estado do Rio de Janeiro.
          </p>

          <NuxtLink to="/sobre-a-china-brasil" class="sobre__cta" data-cy="sobre-cta">
            Conheça a trajetória completa
            <span class="sr-only">de Yuan Aiping e do Centro Cultural China-Brasil</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sobre {
  @include section-padding;

  &__container {
    @include container;
  }

  &__title {
    margin-bottom: $space-8;
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: $space-8;

    @include respond-to(md) {
      flex-direction: row;
      align-items: flex-start;
      gap: $space-12;
    }
  }

  &__col--image {
    @include respond-to(md) {
      flex: 0 0 320px;
    }
  }

  &__col--text {
    flex: 1;
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: $radius-lg;
    box-shadow: $shadow-card;

    @include respond-to(md) {
      max-width: 320px;
    }
  }

  &__description {
    color: $color-muted-text;
    max-width: none;

    & + & {
      margin-top: $space-4;
    }
  }

  &__cta {
    @include button-primary;
    margin-top: $space-8;
  }
}
</style>
