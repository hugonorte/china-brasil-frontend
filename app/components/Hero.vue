<script setup lang="ts">
import type { CarouselSlide } from '~/components/Carousel.vue'

const slides: CarouselSlide[] = [
  {
    eyebrow: 'Cursos in company',
    title: 'Mandarim e Português In Company',
    text: 'Treinamento linguístico e intercultural para profissionais brasileiros e chineses, com foco no ambiente corporativo.',
    image: '/img/home/hero/carousel/01.avif',
    alt: 'Professora conduzindo aula de chinês para executivos em uma sala de treinamento corporativo',
    to: '/conexao-empresarial-estrategica/treinamento-executivos',
    ctaLabel: 'Conheça nossos cursos',
  },
  {
    eyebrow: 'Consultoria',
    title: 'Consultoria Empresarial Brasil–China',
    text: 'Apoiamos empresas chinesas na entrada e expansão no mercado brasileiro, com soluções para abertura de empresas, investimentos e desenvolvimento de negócios.',
    image: '/img/home/hero/carousel/02.avif',
    alt: 'Equipe de consultoria com capacetes de segurança em visita técnica a uma instalação industrial na China',
    to: '/conexao-empresarial-estrategica/consultoria',
    ctaLabel: 'Conheça nossa consultoria',
  },
  {
    eyebrow: 'Livros didáticos',
    title: 'Livros Didáticos de Chinês e Português',
    text: 'Materiais didáticos de autoria própria para brasileiros e chineses aprenderem idiomas e se aproximarem de novas culturas.',
    image: '/img/home/hero/carousel/03.avif',
    alt: 'Livros didáticos de chinês e de português para chineses sobre uma mesa de madeira',
    to: '/livros-e-publicacoes',
    ctaLabel: 'Ver livros',
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
