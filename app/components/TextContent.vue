<script setup lang="ts"></script>

<template>
  <div class="text-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.text-content {
  position: relative;
  z-index: 1;
  width: 95%;
  min-height: 80vh;
  margin-inline: auto;
  margin-top: -25px;
  padding: 2rem;
  border-radius: 10px 10px 0 0;
  background-color: $white;

  :deep(h2) {
    font-size: clamp(1.6rem, 3vw + 1rem, 2rem);
    margin:1.5rem 0;
  }

  :deep(h3) {
    font-size: clamp(1.5rem, 1.8vw + 1rem, 1.5rem);
    margin:2.5rem 0 1rem 0;
  }

  :deep(p) {
    width: 100%;
    max-width: 95%;
  }

  @include respond-to(sm) {
    width: 90.5%;
  }

  @include respond-to(md) {
    width: 85.025%;
  }

  @include respond-to(lg) {
    width: 80.27125%;
  }

  @include respond-to(xl) {
    width: 78.9805625%;
  }

  @include respond-to(2xl) {
    width: 75.933478125%;
  }
}
</style>
