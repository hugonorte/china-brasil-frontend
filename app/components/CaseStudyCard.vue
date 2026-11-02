<script setup lang="ts">
import type { CaseStudy } from '~/types/content'

defineProps<{
  caseStudy: CaseStudy
}>()
</script>

<template>
  <article class="case-study">
    <p class="case-study__sector text-caption">{{ caseStudy.sector }}</p>
    <h3 class="case-study__title">{{ caseStudy.title }}</h3>
    <dl class="case-study__details">
      <div>
        <dt>Desafio</dt>
        <dd>{{ caseStudy.challenge }}</dd>
      </div>
      <div>
        <dt>Nossa atuação</dt>
        <dd>{{ caseStudy.approach }}</dd>
      </div>
      <div>
        <dt>Resultado</dt>
        <dd>{{ caseStudy.result }}</dd>
      </div>
    </dl>
  </article>
</template>

<style lang="scss" scoped>
.case-study {
  padding: $space-6;
  border: $border-subtle;
  border-left: 4px solid $red-900;
  border-radius: $radius-md;
  background-color: $white;
  box-shadow: $shadow-soft;

  @include respond-to(md) {
    padding: $space-8;
  }

  &__sector {
    margin-bottom: $space-2;
  }

  &__title {
    margin-bottom: $space-6;
    font-size: $font-size-heading-md;
  }

  &__details {
    display: grid;
    gap: $space-5;

    @include respond-to(md) {
      grid-template-columns: repeat(3, 1fr);
    }

    dt {
      margin-bottom: $space-1;
      color: $jade-700;
      font-weight: $weight-semibold;
    }

    dd {
      color: $color-muted-text;
      font-size: $font-size-body-sm;
    }
  }
}
</style>
