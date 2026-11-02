<script setup lang="ts">
import type { FaqItem } from '~/types/content'

defineProps<{
  items: FaqItem[]
}>()
</script>

<template>
  <div class="faq-list">
    <details v-for="item in items" :key="item.question" class="faq-list__item">
      <summary class="faq-list__question">{{ item.question }}</summary>
      <p class="faq-list__answer">{{ item.answer }}</p>
    </details>
  </div>
</template>

<style lang="scss" scoped>
.faq-list {
  border-top: $border-subtle;

  &__item {
    border-bottom: $border-subtle;
  }

  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $space-4;
    padding-block: $space-5;
    cursor: pointer;
    list-style: none;
    font-family: $font-display;
    font-size: $font-size-body-lg;
    color: $color-heading-text;

    @include focus-ring;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: '+';
      flex-shrink: 0;
      color: $jade-600;
      font-size: 1.5rem;
      line-height: 1;
      transition: transform $duration-normal $easing-brand;
    }
  }

  &__item[open] &__question::after {
    transform: rotate(45deg);
  }

  &__answer {
    padding-bottom: $space-5;
    color: $color-muted-text;
  }
}
</style>
