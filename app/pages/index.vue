<script setup lang="ts">
import Consultoria from '~/components/Consultoria.vue';

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <Hero />
  <Consultoria />
  <Livros />
  <Intercambio />
  <Sobre />
  <CursoProfessores />
</template>