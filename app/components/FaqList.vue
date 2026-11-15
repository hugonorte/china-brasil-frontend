<script setup lang="ts">
import type { FaqItem } from '~/types/content'

defineProps<{
  items: FaqItem[]
}>()

// Divide a resposta em antes/trecho do link/depois; sem link (ou trecho ausente), devolve null.
const splitAnswer = (item: FaqItem) => {
  if (!item.link) return null
  const index = item.answer.indexOf(item.link.text)
  if (index === -1) return null
  return {
    before: item.answer.slice(0, index),
    after: item.answer.slice(index + item.link.text.length),
  }
}
</script>

<template>
  <div class="faq-list">
    <details v-for="item in items" :key="item.question" class="faq-list__item">
      <summary class="faq-list__question">{{ item.question }}</summary>
      <p v-if="item.link && splitAnswer(item)" class="faq-list__answer">
        {{ splitAnswer(item)!.before }}<NuxtLink :to="item.link.to" class="faq-list__link">{{ item.link.text }}</NuxtLink>{{ splitAnswer(item)!.after }}
      </p>
      <p v-else class="faq-list__answer">{{ item.answer }}</p>
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

  &__link {
    color: $color-primary-action;
    font-weight: $weight-medium;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: $color-primary-action-hover;
    }
  }
}
</style>
