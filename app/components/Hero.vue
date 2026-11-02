<script setup lang="ts">
import type { CarouselSlide } from '~/components/Carousel.vue'

const slides: CarouselSlide[] = [
  {
    eyebrow: 'Curso in company',
    title: 'Treinamento de executivos dentro da sua empresa',
    text: 'Mandarim para executivos brasileiros e português para executivos chineses no Brasil, com cultura de negócios dos dois lados.',
    image: '/img/home/hero/carousel/01.avif',
    alt: 'Professora conduzindo aula de chinês para executivos em uma sala de treinamento corporativo',
    to: '/conexao-empresarial-estrategica/treinamento-executivos',
  },
  {
    eyebrow: 'Consultoria',
    title: 'Estratégia para fazer negócios com a China',
    text: 'Apoio estratégico, tático e operacional para sua empresa entrar e crescer no mercado chinês.',
    image: '/img/home/hero/carousel/02.avif',
    alt: 'Equipe de consultoria com capacetes de segurança em visita técnica a uma instalação industrial na China',
    to: '/conexao-empresarial-estrategica/consultoria',
  },
  {
    eyebrow: 'Livros didáticos',
    title: 'Material próprio para aprender chinês e português',
    text: 'Publicações desenvolvidas para brasileiros e chineses que querem se comunicar com confiança.',
    image: '/img/home/hero/carousel/03.avif',
    alt: 'Livros didáticos de chinês e de português para chineses sobre uma mesa de madeira',
    to: '/livros-e-publicacoes',
  },
]
</script>

<template>
  <section class="hero" data-cy="hero" aria-labelledby="hero-heading">
    <h1 id="hero-heading" class="hero__heading">Conexão Empresarial China-Brasil</h1>
    <Carousel :slides="slides" label="Destaques da China-Brasil" />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 70svh;

  @include respond-to(lg) {
    min-height: 85svh;
  }

  // Mantém o H1 da página para SEO e leitores de tela;
  // o destaque visual fica com os títulos de cada slide.
  &__heading {
    @include visually-hidden;
  }
}
</style>
