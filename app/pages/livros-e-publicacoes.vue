<script setup lang="ts">
import type { Livro } from '~/types/content'
import livrosData from '~~/livros.json'

definePageMeta({
  layout: 'sections',
})

const livros = livrosData as Livro[]

const seoTitle = 'Livros para Aprender Mandarim e Português para Chineses | Yuan Aiping'
const seoDescription =
  'Livros didáticos de mandarim para brasileiros e de português para chineses, da coleção da professora Yuan Aiping: cursos do básico ao avançado, kits, mandarim infantil e para negócios.'

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: '/img/livros/livros.avif',
})

const bookstoreUrl = 'https://chinasil.commercesuite.com.br'

const siteUrl = useRequestURL().origin
const pageUrl = `${siteUrl}/livros-e-publicacoes`
const organizationId = `${siteUrl}/#organization`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'EducationalOrganization'],
      '@id': organizationId,
      name: 'Centro Cultural China-Brasil Yuan Aiping',
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
    },
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: seoTitle,
      description: seoDescription,
      mainEntity: { '@id': `${pageUrl}#catalogo` },
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#catalogo`,
      name: 'Livros didáticos do Centro Cultural China-Brasil Yuan Aiping',
      numberOfItems: livros.length,
      itemListElement: livros.map((livro, index) => {
        const categoria = getLivroCategoria(livro)
        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Book',
            name: livro.titulo,
            url: livro.link_para_compra,
            image: livro.image_path,
            description: getLivroParagrafos(livro.descricao).join(' '),
            genre: categoria.label,
            ...(categoria.nivel && { educationalLevel: categoria.nivel }),
            inLanguage: categoria.tema === 'portugues' ? ['pt-BR', 'zh'] : ['zh', 'pt-BR'],
            ...(livro.autora && { author: { '@type': 'Person', name: livro.autora } }),
            ...(livro.ano_de_publicacao && { datePublished: String(livro.ano_de_publicacao) }),
            publisher: { '@id': organizationId },
          },
        }
      }),
    },
  ],
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }],
})
</script>

<template>
  <SectionTitle title="Livros e Publicações" img="/img/livros/livros.avif" />
  <TextContent>
    <!-- 1. Introdução: responde diretamente "quais livros vocês publicam" (AEO). -->
    <section class="page-section" aria-labelledby="intro-title">
      <p class="text-caption">Material didático próprio</p>
      <h2 id="intro-title">Livros para aprender mandarim e português, criados por quem ensina há mais de 20 anos</h2>
      <p class="page-section__lead">
        Os livros do Centro Cultural China-Brasil reúnem a coleção da professora <strong>Yuan Aiping</strong>,
        criada a partir da experiência real de sala de aula. São cursos de <strong>mandarim para brasileiros</strong>
        do nível básico ao avançado, livros de exercícios, cadernos de caligrafia, kits completos, material
        infantil, mandarim para negócios e cursos de <strong>português do Brasil para chineses</strong>.
      </p>
    </section>

    <!-- 2. Catálogo -->
    <section class="page-section" aria-labelledby="catalog-title">
      <div class="catalog__header">
        <h2 id="catalog-title">Nossos livros</h2>
        <p class="catalog__count">{{ livros.length }} títulos</p>
      </div>
      <ul class="catalog" data-cy="catalogo-livros">
        <li v-for="(livro, index) in livros" :key="livro.link_para_compra" class="catalog__item">
          <CardLivro :livro="livro" :eager="index < 3" />
        </li>
      </ul>
    </section>

    <!-- 3. Produção editorial -->
    <section class="page-section" aria-labelledby="books-title">
      <p class="text-caption">Produção editorial</p>
      <h2 id="books-title">Seu livro produzido na China, com acompanhamento em português</h2>
      <p class="page-section__lead">
        Intermediamos a produção gráfica e a impressão de livros na China para editoras e autores que buscam
        custos mais competitivos sem abrir mão da qualidade. Cuidamos da conversa com a gráfica, do
        orçamento à aprovação das provas, e mantemos você informado em português em cada etapa, para que o
        projeto chegue às suas mãos como foi planejado.
      </p>
    </section>

    <!-- 4. CTA -->
    <section class="cta-section" aria-labelledby="cta-title">
      <h2 id="cta-title">Visite a nossa livraria virtual</h2>
      <p>
        Todos os títulos, kits e materiais complementares reunidos em um só lugar.
      </p>
      <a :href="bookstoreUrl" class="cta-section__button" target="_blank" rel="noopener">
        Acesse a livraria virtual
        <span class="sr-only">(abre em nova aba)</span>
      </a>
    </section>
  </TextContent>
</template>

<style lang="scss" scoped>
.page-section {
  margin-bottom: $space-16;

  @include respond-to(md) {
    margin-bottom: $space-20;
  }

  h2 {
    margin-bottom: $space-4;
  }

  .text-caption {
    margin-bottom: $space-2;
  }

  &__lead {
    margin-bottom: $space-4;
    font-size: $font-size-body-lg;
    color: $color-muted-text;
  }
}

.catalog {
  display: grid;
  gap: $space-6;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to(xl) {
    grid-template-columns: repeat(3, 1fr);
    gap: $space-8;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: $space-2 $space-4;
    margin-bottom: $space-6;

    h2 {
      margin: 0;
    }
  }

  &__count {
    color: $color-muted-text;
    font-size: $font-size-body-sm;
    font-weight: $weight-semibold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}

.cta-section {
  padding: $space-8;
  border-radius: $radius-xl;
  background-color: $color-dark-section;
  text-align: center;

  @include respond-to(md) {
    padding: $space-12;
  }

  h2 {
    margin: 0 0 $space-4;
    color: $white;
  }

  p {
    margin: 0 auto $space-8;
    color: rgba(255, 255, 255, 0.8);
  }

  &__button {
    @include button-accent;
    white-space: normal;
  }
}
</style>
