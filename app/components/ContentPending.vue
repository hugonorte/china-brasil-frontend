<script setup lang="ts">
// Marcador visual de conteúdo ainda não fornecido. Use apenas enquanto o material real não chega;
// as páginas devem exibi-lo somente em desenvolvimento (ver `showPendingContent` em cada página).
defineProps<{
  title: string
  description: string
  items?: string[]
}>()
</script>

<template>
  <aside class="content-pending" role="note">
    <span class="content-pending__label">Conteúdo pendente</span>
    <p class="content-pending__title">{{ title }}</p>
    <p class="content-pending__description">{{ description }}</p>
    <ul v-if="items?.length" class="content-pending__items">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.content-pending {
  padding: $space-6;
  border: 2px dashed $gold-600;
  border-radius: $radius-md;
  background-color: rgba($gold-300, 0.25);
  color: $color-body-text;

  &__label {
    display: inline-block;
    margin-bottom: $space-3;
    padding: $space-1 $space-3;
    border-radius: $radius-pill;
    background-color: $gold-600;
    color: $red-950;
    font-size: $font-size-caption;
    font-weight: $weight-bold;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__title {
    margin-bottom: $space-2;
    font-weight: $weight-semibold;
  }

  &__description {
    color: $color-muted-text;
    font-size: $font-size-body-sm;
  }

  &__items {
    margin-top: $space-3;
    padding-left: $space-5;
    list-style: disc;
    color: $color-muted-text;
    font-size: $font-size-body-sm;
  }
}
</style>
