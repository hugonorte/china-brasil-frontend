<script setup lang="ts">
import type { PartnerLogo } from '~/types/content'

defineProps<{
  logos: PartnerLogo[]
}>()
</script>

<template>
  <ul class="logo-strip">
    <li v-for="logo in logos" :key="logo.name" class="logo-strip__item">
      <component
        :is="logo.href ? 'a' : 'span'"
        :href="logo.href"
        :target="logo.href ? '_blank' : undefined"
        :rel="logo.href ? 'noopener' : undefined"
        class="logo-strip__link"
      >
        <img
          :src="logo.src"
          :alt="logo.name"
          :title="logo.name"
          class="logo-strip__img"
          loading="lazy"
          width="140"
          height="140"
        />
      </component>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
// Os logos são quadrados (140×140) com fundo branco e margem interna própria,
// por isso o tamanho é controlado pela largura da célula, não pela altura.
.logo-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-4;
  align-items: center;

  @include respond-to(md) {
    grid-template-columns: repeat(4, 1fr);
  }

  @include respond-to(lg) {
    grid-template-columns: repeat(6, 1fr);
  }

  &__link {
    display: flex;
    justify-content: center;

    @include focus-ring;
  }

  &__img {
    width: 100%;
    max-width: 140px;
    height: auto;
    filter: grayscale(1);
    opacity: 0.75;
    transition: filter $duration-normal $easing-brand, opacity $duration-normal $easing-brand;

    &:hover {
      filter: none;
      opacity: 1;
    }
  }
}
</style>
