<script setup lang="ts">
definePageMeta({
  layout: 'sections',
})

const seoTitle = 'Curso de Formação de Professores de Mandarim'
const seoDescription =
  'Formação de professores de mandarim para profissionais de Letras e do ensino de idiomas, com o método e o material didático do Centro Cultural China-Brasil Yuan Aiping.'

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: '/img/home/hero/carousel/01.avif',
})

const contactLink = {
  path: '/contato',
  query: { assunto: 'curso-formacao-professores' },
}

const audience = [
  'Professores de idiomas que querem incluir o mandarim no currículo',
  'Graduandos, graduados e pós-graduandos em Letras',
  'Pesquisadores e acadêmicos da área de linguagem e ensino',
  'Professores de línguas em escolas, cursos livres e universidades',
]

const highlights = [
  {
    title: 'Método pensado para alunos brasileiros',
    text: 'Como ensinar tons, pronúncia e caracteres a partir das dificuldades reais de quem fala português.',
  },
  {
    title: 'Material didático próprio',
    text: 'Formação apoiada na coleção criada por Yuan Aiping, usada há mais de 20 anos em sala de aula.',
  },
  {
    title: 'Língua e cultura chinesa',
    text: 'O idioma ensinado junto com o contexto cultural que dá sentido a cada expressão.',
  },
]

const siteUrl = useRequestURL().origin
const pageUrl = `${siteUrl}/curso-formacao-professores`
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
      foundingDate: '2004-02',
      founder: { '@type': 'Person', name: 'Yuan Aiping' },
    },
    {
      '@type': 'Course',
      '@id': `${pageUrl}#course`,
      name: 'Curso de formação de professores de mandarim',
      description: seoDescription,
      url: pageUrl,
      inLanguage: 'pt-BR',
      teaches: highlights.map((item) => item.title),
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'teacher',
        audienceType: audience.join('; '),
      },
      provider: { '@id': organizationId },
      // CONTEÚDO PENDENTE: quando houver, acrescentar hasCourseInstance (datas, formato, carga horária) e offers.
    },
  ],
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }],
})
</script>

<template>
  <SectionTitle title="Formação de Professores de Mandarim" img="/img/home/hero/carousel/01.avif" />

  <section class="curso-professores" data-cy="curso-professores-page" aria-labelledby="curso-professores-title">
    <div class="curso-professores__container">
      <div class="curso-professores__col curso-professores__col--text">
        <p class="curso-professores__eyebrow">Formação de professores</p>
        <h2 id="curso-professores-title" class="curso-professores__title">
          Torne-se professor de mandarim com quem é referência no ensino de chinês no Brasil
        </h2>
        <p class="curso-professores__lead">
          O mandarim é uma das línguas que mais cresce no mundo, e ainda são poucos os professores
          preparados para ensiná-lo a brasileiros. O
          <strong>curso de formação de professores de mandarim</strong> do Centro Cultural China-Brasil
          Yuan Aiping é uma oportunidade para profissionais de Letras e do ensino de idiomas abrirem uma
          nova frente na carreira.
        </p>

        <ul class="curso-professores__highlights">
          <li v-for="item in highlights" :key="item.title" class="curso-professores__highlight">
            <svg
              class="curso-professores__check"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <div>
              <h3 class="curso-professores__highlight-title">{{ item.title }}</h3>
              <p class="curso-professores__highlight-text">{{ item.text }}</p>
            </div>
          </li>
        </ul>

        <div class="curso-professores__actions">
          <NuxtLink :to="contactLink" class="curso-professores__cta" data-cy="curso-professores-cta">
            Quero receber mais informações
          </NuxtLink>
          <p class="curso-professores__cta-note">
            Envie uma mensagem e nossa equipe responde com datas, formato e investimento.
          </p>
        </div>
      </div>

      <aside class="curso-professores__col curso-professores__col--card" aria-label="Para quem é o curso">
        <div class="curso-professores__card">
          <h3 class="curso-professores__card-title">Para quem é</h3>
          <ul class="curso-professores__audience">
            <li v-for="item in audience" :key="item">{{ item }}</li>
          </ul>

          <figure class="curso-professores__founder">
            <img
              src="/img/home/sobre/foto-da-Yuan.jpg"
              alt="Professora Yuan Aiping"
              class="curso-professores__founder-photo"
              loading="lazy"
              width="64"
              height="64"
            />
            <figcaption>
              <strong>Yuan Aiping</strong>
              <span>
                Fundadora do Centro Cultural, autora de 20 livros didáticos e eleita pelo governo chinês uma
                das melhores professoras de mandarim do mundo.
              </span>
            </figcaption>
          </figure>
        </div>
      </aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.curso-professores {
  @include section-padding;
  // Respiro antes do footer, que também é escuro.
  margin-bottom: $space-16;
  background-color: $color-dark-section;
  color: $white;

  &__container {
    @include container;
    display: flex;
    flex-direction: column;
    gap: $space-10;

    @include respond-to(lg) {
      flex-direction: row;
      align-items: center;
      gap: $space-16;
    }
  }

  &__col--text {
    flex: 1.3;
  }

  &__col--card {
    flex: 1;
  }

  &__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    margin-bottom: $space-3;
    color: $gold-500;
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.14em;
    text-transform: uppercase;

    &::before {
      content: '';
      width: $space-8;
      height: 1px;
      background-color: currentColor;
    }
  }

  &__title {
    max-width: 22ch;
    margin-bottom: $space-5;
    color: $white;
    text-wrap: balance;
  }

  &__lead {
    max-width: $text-width;
    color: rgba($white, 0.8);
    font-size: $font-size-body-lg;
    line-height: 1.6;

    strong {
      color: $white;
    }
  }

  &__highlights {
    display: grid;
    gap: $space-4;
    margin-top: $space-8;
  }

  &__highlight {
    display: flex;
    gap: $space-3;
  }

  &__check {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    margin-top: 2px;
    color: $gold-500;
  }

  &__highlight-title {
    margin-bottom: $space-1;
    color: $white;
    font-family: $font-body;
    font-size: $font-size-body-md;
    font-weight: $weight-semibold;
  }

  &__highlight-text {
    color: rgba($white, 0.7);
    font-size: $font-size-body-sm;
    line-height: 1.6;
  }

  &__actions {
    margin-top: $space-10;
  }

  &__cta {
    @include button-accent;
  }

  &__cta-note {
    margin-top: $space-3;
    color: rgba($white, 0.6);
    font-size: $font-size-body-sm;
  }

  &__card {
    padding: $space-8 $space-6;
    background-color: rgba($white, 0.05);
    border: $border-dark;
    border-top: 4px solid $color-highlight;
    border-radius: $radius-lg;

    @include respond-to(md) {
      padding: $space-10 $space-8;
    }
  }

  &__card-title {
    margin-bottom: $space-5;
    color: $gold-500;
    font-size: $font-size-heading-md;
  }

  &__audience {
    display: grid;
    gap: $space-3;

    li {
      position: relative;
      padding-left: $space-6;
      color: rgba($white, 0.85);
      line-height: 1.5;

      &::before {
        content: '';
        position: absolute;
        top: 0.6em;
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $gold-500;
      }
    }
  }

  &__founder {
    display: flex;
    gap: $space-4;
    align-items: flex-start;
    margin-top: $space-8;
    padding-top: $space-6;
    border-top: $border-dark;

    figcaption {
      display: flex;
      flex-direction: column;
      gap: $space-1;
      font-size: $font-size-body-sm;
      line-height: 1.5;
      color: rgba($white, 0.7);

      strong {
        color: $white;
        font-size: $font-size-body-md;
      }
    }
  }

  &__founder-photo {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    border: 2px solid $gold-500;
  }
}
</style>
