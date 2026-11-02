<script setup lang="ts"></script>

<template>
  <section class="intercambio" data-cy="intercambio">
    <div class="intercambio__container">
      <div class="intercambio__col intercambio__col--text">
        <h2 class="intercambio__title">Intercâmbio Cultural</h2>
        <p class="intercambio__description">
          A aproximação entre os dois países, continua sendo uma parte essencial da nossa identidade. Veja
          alguns projetos de intercâmbio cultural, educacional e institucional entre Brasil e China.
        </p>
      </div>
      <div class="intercambio__col intercambio__col--image">
        <img
          src="/img/home/intercambio/intercambio.avif"
          alt="Projetos de intercâmbio cultural, educacional e institucional entre Brasil e China"
          class="intercambio__image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intercambio {
  @include section-padding;

  &__container {
    @include container;
    display: flex;
    flex-direction: column;
    gap: $space-8;

    @include respond-to(md) {
      flex-direction: row;
      align-items: center;
      gap: $space-12;
    }
  }

  &__col {
    flex: 1;
  }

  &__col--image {
    display: flex;
    justify-content: center;

    @include respond-to(md) {
      justify-content: flex-end;
    }
  }

  &__title {
    margin-bottom: $space-6;
  }

  &__description {
    max-width: $text-width;
    color: $color-muted-text;
  }

  &__image {
    width: auto;
    height: 100px;
    border-radius: $radius-lg;
    box-shadow: $shadow-card;
  }
}
</style>
