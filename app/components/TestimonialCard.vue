<script setup lang="ts">
import type { Testimonial } from '~/types/content'

defineProps<{
  testimonial: Testimonial
}>()
</script>

<template>
  <figure class="testimonial">
    <blockquote class="testimonial__quote">
      <p>{{ testimonial.quote }}</p>
    </blockquote>
    <figcaption class="testimonial__author">
      <img
        v-if="testimonial.photo"
        :src="testimonial.photo"
        :alt="`Foto de ${testimonial.name}`"
        class="testimonial__photo"
        loading="lazy"
        width="48"
        height="48"
      />
      <span>
        <strong class="testimonial__name">{{ testimonial.name }}</strong>
        <span class="testimonial__role">{{ testimonial.role }}, {{ testimonial.company }}</span>
      </span>
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
.testimonial {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: $space-6;
  padding: $space-6;
  border-radius: $radius-md;
  background-color: $white;
  box-shadow: $shadow-soft;

  &__quote {
    position: relative;
    padding-top: $space-6;
    font-family: $font-display;
    font-size: $font-size-body-lg;
    color: $color-heading-text;

    &::before {
      content: '“';
      position: absolute;
      top: -$space-2;
      left: 0;
      font-size: 3rem;
      line-height: 1;
      color: $gold-600;
    }
  }

  &__author {
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__photo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__name {
    display: block;
  }

  &__role {
    color: $color-muted-text;
    font-size: $font-size-body-sm;
  }
}
</style>
