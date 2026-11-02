<script setup lang="ts">
defineProps<{
  img: string
  title: string
}>()
</script>

<template>
  <header class="section-title" :style="{ backgroundImage: `url('${img}')` }">
    <div class="section-title__overlay"></div>
    <div class="section-title__content">
      <span class="section-title__marker" aria-hidden="true"></span>
      <h1 class="section-title__title">{{ title }}</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.section-title {
  position: relative;
  min-height: 30vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  isolation: isolate;

  &__overlay {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &__content {
    @include container;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__marker {
    display: inline-block;
    flex-shrink: 0;
    width: 6px;
    height: 3em;
    background-color: $gold-600;
  }

  &__title {
    color: $white;
    font-size: $font-size-heading-xl;
  }
}
</style>
