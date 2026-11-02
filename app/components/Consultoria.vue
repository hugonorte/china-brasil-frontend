<script setup lang="ts">
const topics = ['Networking', 'Importação & Exportação', 'Acompanhamento de Delegações']
</script>

<template>
  <section class="consultoria" data-cy="consultoria">
    <div class="consultoria__row consultoria__row--intro">
      <div class="consultoria__col consultoria__col--text">
        <h2 class="consultoria__subtitle">Apoio à entrada e implantação de empresas chinesas no Brasil</h2>
      </div>
      <div class="consultoria__col consultoria__col--image">
        <img
          src="/img/home/consultoria/consultoria.avif"
          alt="Consultoria para entrada e implantação de empresas chinesas no Brasil"
          class="consultoria__image"
        />
      </div>
    </div>

    <div class="consultoria__row consultoria__row--cards">
      <ul class="consultoria__cards">
        <li v-for="topic in topics" :key="topic" class="consultoria__card">
          {{ topic }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.consultoria {
  @include section-padding;

  &__row {
    @include container;

    & + & {
      margin-top: $space-16;
    }
  }

  &__row--intro {
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

  &__subtitle {
    max-width: 20ch;
  }

  &__image {
    width: 100%;
    max-width: 480px;
    height: auto;
    border-radius: $radius-lg;
    box-shadow: $shadow-card;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: $space-4;

    @include respond-to(md) {
      flex-direction: row;
      gap: $space-6;
    }
  }

  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: $space-6;
    text-align: center;
    background-color: $white;
    border: $border-subtle;
    border-radius: $radius-lg;
    box-shadow: $shadow-soft;
    font-weight: $weight-semibold;
    color: $color-heading-text;
  }
}
</style>
