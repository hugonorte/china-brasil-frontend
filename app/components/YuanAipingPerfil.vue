<script setup lang="ts">
// Perfil completo da fundadora, usado na página /sobre-a-china-brasil.
// Conteúdo: conteudo/Apresentação da Yuan Aiping 2026.docx (texto integral).

interface TextPart {
  text: string
  lang?: string
  cite?: boolean
}

interface Recognition {
  year: number
  parts: TextPart[]
}

interface Publication {
  prefix?: string
  title: string
  detail?: string
}

const roles = [
  'Professora',
  'Autora',
  'Fundadora de instituições de ensino',
  'Intercâmbio cultural China–Brasil',
]

const facts = [
  { value: '1997', label: 'Chegada ao Rio de Janeiro' },
  { value: '2004', label: 'Fundação do Centro Cultural China–Brasil' },
  { value: '+20', label: 'Obras didáticas publicadas no Brasil e na China' },
  { value: '5', label: 'Unidades, incluindo polos em Pequim e Xangai' },
]

const recognitions: Recognition[] = [
  {
    year: 2015,
    parts: [{ text: 'Reconhecimento do governo chinês por sua atuação de destaque internacional no ensino de mandarim.' }],
  },
  {
    year: 2017,
    parts: [
      {
        text: 'Título de Cidadã do Estado do Rio de Janeiro, concedido pela Assembleia Legislativa do Estado do Rio de Janeiro (ALERJ).',
      },
    ],
  },
  {
    year: 2018,
    parts: [
      {
        text: 'Título de Cidadã Honorária do Município do Rio de Janeiro, concedido pela Câmara Municipal do Rio de Janeiro (Decreto Legislativo nº 1.321/2018).',
      },
    ],
  },
  {
    year: 2023,
    parts: [
      { text: 'Homenagem de Destaque no Ensino da Língua Chinesa, concedida pela Câmara Municipal do Rio de Janeiro.' },
    ],
  },
  {
    year: 2025,
    parts: [
      { text: 'Homenageada como personalidade de destaque da comunidade chinesa global e incluída no ' },
      { text: '华人楷模名人堂', lang: 'zh-Hans' },
      { text: ' (Hall da Fama de Personalidades Chinesas Exemplares). Sua trajetória integra a obra publicada ' },
      { text: '《楷模的力量·新时代奋斗者》', lang: 'zh-Hans' },
      { text: ', aqui apresentada em tradução livre como ' },
      { text: 'A Força do Exemplo: Protagonistas da Nova Era', cite: true },
      { text: '.' },
    ],
  },
]

const publications: Publication[] = [
  {
    title: 'Chinês para Brasileiros',
    detail: 'volumes 1, 2 e 3; coleção apresentada como uma das primeiras obras didáticas de chinês lançadas no Brasil.',
  },
  { title: 'Livro de Exercícios e Testes Complementares' },
  { title: 'Português para Chineses', detail: 'volumes 1 e 2.' },
  { title: 'Eu Vou para a China', detail: 'volumes 1 e 2; guia prático de chinês para brasileiros.' },
  {
    title: 'Chinês com a Professora Yuan Aiping',
    detail: 'material multimídia com DVD, quatro CDs e duas apostilas.',
  },
  {
    title: 'Aprenda Chinês com a Professora Yuan Aiping',
    detail: 'coleção de nove livros em três níveis; e coleção de nível intermediário em quatro livros.',
  },
  {
    title: 'Como Dizer Tudo em Chinês; Como Dizer Tudo em Chinês nos Negócios; Como Dizer Tudo em Chinês nas Viagens',
    detail: 'Editora Campus.',
  },
  {
    title: 'Curso Conciso da Língua Portuguesa',
    detail:
      'volumes 1 e 2, Shanghai Foreign Language Education Press; obra pioneira dedicada ao português do Brasil na China.',
  },
  {
    title: 'Brincando e Aprendendo Chinês com a Professora Yuan',
    detail: 'coleção multimídia de seis livros.',
  },
  { prefix: 'Cotradutora de', title: 'China Made in Brasil', detail: 'Editora Babilônia.' },
]

// Dados estruturados da pessoa (AEO: "quem é Yuan Aiping").
const siteUrl = useRequestURL().origin

const personData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#yuan-aiping`,
  name: 'Yuan Aiping',
  alternateName: '袁爱平',
  image: `${siteUrl}/img/home/sobre/foto-da-Yuan.jpg`,
  jobTitle: ['Professora', 'Autora', 'Fundadora e diretora-geral da Escola Chinesa Internacional'],
  description:
    'Professora e autora de mais de 20 obras didáticas publicadas no Brasil e na China, fundadora do Centro Cultural China–Brasil Yuan Aiping e da Escola Chinesa Internacional.',
  birthPlace: { '@type': 'Country', name: 'China' },
  homeLocation: { '@type': 'City', name: 'Rio de Janeiro' },
  knowsLanguage: ['zh', 'pt-BR', 'en'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Hebei Normal University' },
    { '@type': 'CollegeOrUniversity', name: 'Universidade Federal do Rio de Janeiro (UFRJ)' },
    { '@type': 'CollegeOrUniversity', name: 'Universidade do Estado do Rio de Janeiro (UERJ)' },
  ],
  worksFor: { '@id': `${siteUrl}/#organization`, name: 'Centro Cultural China–Brasil Yuan Aiping' },
  award: recognitions.map((item) => `${item.year} — ${item.parts.map((part) => part.text).join('')}`),
}

useHead({
  script: [{ key: 'ld-yuan-aiping', type: 'application/ld+json', innerHTML: JSON.stringify(personData) }],
})
</script>

<template>
  <section class="perfil-yuan" id="yuan-aiping" data-cy="perfil-yuan" aria-labelledby="perfil-yuan-title">
    <div class="perfil-yuan__container">
      <!-- Apresentação -->
      <div class="perfil-yuan__intro">
        <figure class="perfil-yuan__portrait">
          <span class="perfil-yuan__watermark" aria-hidden="true">袁爱平</span>
          <div class="perfil-yuan__frame">
            <img
              src="/img/home/sobre/foto-da-Yuan.jpg"
              alt="Professora Yuan Aiping sorrindo em seu escritório, ao lado das bandeiras do Brasil e da China"
              class="perfil-yuan__image"
              width="949"
              height="852"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p class="perfil-yuan__badge" aria-hidden="true">
            <strong>Rio de Janeiro</strong>
            <span>desde 1997</span>
          </p>
          <figcaption class="sr-only">Yuan Aiping, fundadora do Centro Cultural China–Brasil Yuan Aiping.</figcaption>
        </figure>

        <div class="perfil-yuan__content">
          <p class="perfil-yuan__eyebrow">Quem é a fundadora</p>
          <h2 id="perfil-yuan-title" class="perfil-yuan__title">
            Yuan Aiping
            <span class="perfil-yuan__title-zh" lang="zh-Hans">袁爱平</span>
          </h2>

          <ul class="perfil-yuan__roles" aria-label="Atuação">
            <li v-for="role in roles" :key="role">{{ role }}</li>
          </ul>

          <h3 class="perfil-yuan__subheading">Apresentação</h3>
          <div class="perfil-yuan__text">
            <p class="perfil-yuan__lead">
              Nascida na China e radicada no Rio de Janeiro desde 1997, Yuan Aiping construiu uma trajetória
              dedicada à educação, ao ensino de idiomas e à aproximação cultural entre a China e o Brasil.
            </p>
            <p>
              Professora e autora de <strong>mais de 20 obras didáticas</strong> publicadas nos dois países, é
              fundadora do <strong>Centro Cultural China–Brasil Yuan Aiping</strong> e da
              <strong>Escola Chinesa Internacional</strong>, da qual é diretora-geral.
            </p>
            <p>
              Graduada em Língua e Literatura Inglesa pela Hebei Normal University, lecionou inglês na China
              durante 13 anos. No Brasil, aprofundou seus estudos de língua portuguesa na Universidade Federal
              do Rio de Janeiro (UFRJ) e na Universidade do Estado do Rio de Janeiro (UERJ), obtendo, em 2001,
              certificação de proficiência em português para estrangeiros. Também atuou como professora de
              chinês na UniverCidade, no Rio de Janeiro.
            </p>
            <p>
              Em 2004, fundou o Centro Cultural China–Brasil Yuan Aiping, cuja trajetória chegou a reunir cinco
              unidades, incluindo polos em Pequim e Xangai.
            </p>
            <p>
              Por meio do ensino do mandarim a brasileiros e do português a chineses, além da elaboração de
              materiais didáticos e da realização de atividades culturais, tem contribuído para fortalecer o
              diálogo entre os dois países.
            </p>
            <p>
              Sua produção editorial inclui coleções pioneiras voltadas ao ensino do chinês no Brasil e do
              português brasileiro na China, materiais para diferentes níveis de aprendizagem e obras de
              comunicação prática para viagens e negócios.
            </p>
          </div>
        </div>
      </div>

      <!-- Números da trajetória -->
      <dl class="perfil-yuan__facts">
        <div v-for="fact in facts" :key="fact.value" class="perfil-yuan__fact">
          <dt class="perfil-yuan__fact-label">{{ fact.label }}</dt>
          <dd class="perfil-yuan__fact-value">{{ fact.value }}</dd>
        </div>
      </dl>

      <!-- Reconhecimentos e publicações -->
      <div class="perfil-yuan__details">
        <section class="perfil-yuan__card perfil-yuan__card--awards" aria-labelledby="perfil-yuan-awards-title">
          <h3 id="perfil-yuan-awards-title" class="perfil-yuan__card-title">Reconhecimentos e homenagens</h3>
          <ol class="perfil-yuan__timeline">
            <li v-for="item in recognitions" :key="item.year" class="perfil-yuan__milestone">
              <time class="perfil-yuan__year" :datetime="String(item.year)">{{ item.year }}</time>
              <p class="perfil-yuan__milestone-text">
                <template v-for="(part, index) in item.parts" :key="index">
                  <cite v-if="part.cite">{{ part.text }}</cite>
                  <span v-else-if="part.lang" :lang="part.lang">{{ part.text }}</span>
                  <template v-else>{{ part.text }}</template>
                </template>
              </p>
            </li>
          </ol>
        </section>

        <section class="perfil-yuan__card perfil-yuan__card--books" aria-labelledby="perfil-yuan-books-title">
          <h3 id="perfil-yuan-books-title" class="perfil-yuan__card-title">Publicações e obras selecionadas</h3>
          <ul class="perfil-yuan__books">
            <li v-for="book in publications" :key="book.title" class="perfil-yuan__book">
              <svg
                class="perfil-yuan__book-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Zm0 0A2 2 0 0 0 6 22h13" />
              </svg>
              <p>
                <template v-if="book.prefix">{{ `${book.prefix} ` }}</template>
                <cite class="perfil-yuan__book-title">{{ book.title }}</cite>
                <template v-if="book.detail"> — {{ book.detail }}</template>
              </p>
            </li>
          </ul>
          <NuxtLink to="/livros-e-publicacoes" class="perfil-yuan__books-link" data-cy="perfil-yuan-livros-link">
            Conheça os livros da coleção
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.perfil-yuan {
  position: relative;
  padding-top: $space-4;
  margin-bottom: $space-16;
  overflow: hidden;

  @include respond-to(md) {
    margin-bottom: $space-20;
  }

  // Os seletores dos elementos usam "& &__" (.perfil-yuan .perfil-yuan__x) para vencer
  // os estilos :deep(h2/h3/p) do TextContent, onde este componente é renderizado.

  // ---------------------------------------------------------------- Apresentação
  & &__intro {
    display: grid;
    gap: $space-12;

    @include respond-to(lg) {
      grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
      gap: $space-16;
      align-items: start;
    }
  }

  & &__portrait {
    position: relative;
    max-width: 440px;
    margin: 0 auto;
    width: 100%;
    padding: 0 $space-4 $space-6 0;

    @include respond-to(lg) {
      position: sticky;
      top: $space-24;
      margin: 0;
    }
  }

  // Nome em chinês na vertical, como um selo atrás da foto.
  & &__watermark {
    position: absolute;
    top: -$space-4;
    right: -$space-2;
    z-index: 0;
    color: rgba($gold-600, 0.18);
    font-size: clamp(4rem, 12vw, 7rem);
    font-weight: $weight-bold;
    line-height: 1;
    writing-mode: vertical-rl;
    pointer-events: none;
    user-select: none;
  }

  & &__frame {
    position: relative;
    z-index: 1;

    // Moldura dourada deslocada.
    &::before {
      content: '';
      position: absolute;
      inset: $space-4 (-$space-4) (-$space-4) $space-4;
      z-index: -1;
      border: 2px solid $gold-600;
      border-radius: $radius-xl;
    }
  }

  & &__image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    // Mantém o rosto e as bandeiras do Brasil e da China no recorte.
    object-position: 100% center;
    border-radius: $radius-xl;
    box-shadow: $shadow-card;
  }

  & &__badge {
    position: absolute;
    left: -$space-2;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: none;
    padding: $space-3 $space-5;
    background-color: $red-900;
    border-radius: $radius-md;
    box-shadow: $shadow-floating;
    color: $white;
    line-height: 1.3;

    strong {
      font-family: $font-display;
      font-size: $font-size-body-lg;
    }

    span {
      color: $gold-300;
      font-size: $font-size-caption;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
  }

  & &__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    margin-bottom: $space-3;
    color: $gold-700;
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

  & &__title {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: $space-2 $space-4;
    margin: 0 0 $space-5;
    font-size: $font-size-display-lg;
    line-height: 1.05;
  }

  & &__title-zh {
    color: $red-700;
    font-family: $font-body;
    font-size: 0.55em;
    font-weight: $weight-medium;
    letter-spacing: 0.08em;
  }

  & &__roles {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-bottom: $space-10;

    li {
      padding: $space-1 $space-3;
      background-color: $white;
      border: $border-subtle;
      border-radius: $radius-pill;
      color: $red-900;
      font-size: $font-size-body-sm;
      font-weight: $weight-medium;
    }
  }

  & &__subheading {
    margin: 0 0 $space-4;
    color: $color-muted-text;
    font-family: $font-body;
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  & &__text {
    display: grid;
    gap: $space-4;
    max-width: 68ch;

    p {
      max-width: none;
      color: $color-muted-text;
      line-height: 1.75;
    }

    strong {
      color: $color-body-text;
      font-weight: $weight-semibold;
    }
  }

  // Seletor composto para vencer a regra `.perfil-yuan__text p`.
  & &__text &__lead {
    padding-left: $space-5;
    border-left: 3px solid $gold-600;
    color: $color-heading-text;
    font-family: $font-display;
    font-size: $font-size-heading-md;
    line-height: 1.5;
  }

  // ---------------------------------------------------------------- Números
  & &__facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: $space-16 0;
    background-color: $white;
    border: $border-subtle;
    border-radius: $radius-lg;
    box-shadow: $shadow-soft;

    @include respond-to(md) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  & &__fact {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: $space-2;
    padding: $space-6 $space-5;
    border-color: $border;
    border-style: solid;
    border-width: 0;

    &:nth-child(odd) {
      border-right-width: 1px;
    }

    &:nth-child(-n + 2) {
      border-bottom-width: 1px;
    }

    @include respond-to(md) {
      padding: $space-8 $space-6;
      border-width: 0;

      &:not(:last-child) {
        border-right-width: 1px;
      }
    }
  }

  & &__fact-value {
    color: $red-900;
    font-family: $font-display;
    font-size: $font-size-heading-xl;
    font-weight: $weight-semibold;
    line-height: 1;
  }

  & &__fact-label {
    color: $color-muted-text;
    font-size: $font-size-body-sm;
    line-height: 1.45;
  }

  // ---------------------------------------------------------------- Cards
  & &__details {
    display: grid;
    gap: $space-6;

    @include respond-to(lg) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: $space-8;
      align-items: start;
    }
  }

  & &__card {
    padding: $space-8 $space-6;
    border-radius: $radius-xl;

    @include respond-to(md) {
      padding: $space-10;
    }

    &--awards {
      background:
        radial-gradient(circle at 100% 0, rgba($gold-500, 0.16), transparent 45%),
        $color-dark-section;
      color: $white;

      .perfil-yuan__card-title {
        color: $gold-500;
      }
    }

    &--books {
      background-color: $white;
      border: $border-subtle;
      box-shadow: $shadow-soft;
    }
  }

  & &__card-title {
    margin: 0 0 $space-8;
    font-size: $font-size-heading-lg;
  }

  // Linha do tempo
  & &__timeline {
    position: relative;
    display: grid;
    gap: $space-6;

    &::before {
      content: '';
      position: absolute;
      top: $space-2;
      bottom: $space-2;
      left: 5px;
      width: 1px;
      background: linear-gradient($gold-500, rgba($gold-500, 0.1));
    }
  }

  & &__milestone {
    position: relative;
    display: grid;
    gap: $space-1;
    padding-left: $space-8;

    &::before {
      content: '';
      position: absolute;
      top: 0.45em;
      left: 0;
      width: 11px;
      height: 11px;
      border: 2px solid $gold-500;
      border-radius: 50%;
      background-color: $color-dark-section;
    }

    &:last-child::before {
      background-color: $gold-500;
    }
  }

  & &__year {
    color: $gold-500;
    font-family: $font-display;
    font-size: $font-size-heading-md;
    font-weight: $weight-semibold;
    line-height: 1.2;
  }

  & &__milestone-text {
    max-width: none;
    color: rgba($white, 0.82);
    font-size: $font-size-body-sm;
    line-height: 1.65;

    cite {
      color: $white;
      font-style: italic;
    }

    [lang='zh-Hans'] {
      color: $gold-300;
    }
  }

  // Publicações
  & &__books {
    display: grid;
  }

  & &__book {
    display: flex;
    gap: $space-3;
    padding: $space-3 0;
    border-bottom: $border-subtle;

    &:first-child {
      padding-top: 0;
    }

    p {
      max-width: none;
      color: $color-muted-text;
      font-size: $font-size-body-sm;
      line-height: 1.6;
    }
  }

  & &__book-icon {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    color: $gold-700;
  }

  & &__book-title {
    color: $color-heading-text;
    font-style: normal;
    font-weight: $weight-semibold;
  }

  & &__books-link {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    margin-top: $space-6;
    color: $red-900;
    font-weight: $weight-semibold;
    text-decoration: underline;
    text-decoration-color: $gold-600;
    text-underline-offset: 4px;
    transition: color $duration-normal $easing-brand;

    span {
      transition: transform $duration-normal $easing-brand;
    }

    &:hover {
      color: $red-950;

      span {
        transform: translateX(4px);
      }
    }

    @include focus-ring;

    @media (prefers-reduced-motion: reduce) {
      &,
      span {
        transition: none;
      }
    }
  }
}
</style>
