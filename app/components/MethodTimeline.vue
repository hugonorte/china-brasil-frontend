<script setup lang="ts">
import type { MethodStep } from '~/types/content'

defineProps<{
  steps: MethodStep[]
}>()
</script>

<template>
  <ol class="method-timeline">
    <li v-for="(step, index) in steps" :key="step.title" class="method-timeline__step">
      <span class="method-timeline__number" aria-hidden="true">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
      <div class="method-timeline__body">
        <h3 class="method-timeline__title">{{ step.title }}</h3>
        <p class="method-timeline__description">{{ step.description }}</p>
      </div>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
$number-size: 48px;
$step-gap: $space-8;

.method-timeline {
  display: grid;
  gap: $step-gap;

  &__step {
    position: relative;
    display: grid;
    grid-template-columns: $number-size 1fr;
    gap: $space-4;

    @include respond-to(md) {
      gap: $space-6;
    }

    // Linha que liga cada etapa à seguinte
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: $number-size + $space-2;
      bottom: -1 * $step-gap + $space-2;
      left: $number-size * 0.5 - 1px;
      width: 2px;
      background-color: $gold-300;
    }
  }

  &__number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $number-size;
    height: $number-size;
    border-radius: 50%;
    background-color: $red-900;
    color: $gold-500;
    font-family: $font-display;
    font-weight: $weight-semibold;
  }

  &__body {
    padding-top: $space-2;
  }

  &__title {
    margin-bottom: $space-2;
    font-size: $font-size-heading-md;
  }

  &__description {
    color: $color-muted-text;
  }
}
</style>
