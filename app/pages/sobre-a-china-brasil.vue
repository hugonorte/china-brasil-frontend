<script setup lang="ts">
import type { MethodStep, Testimonial } from '~/types/content'

definePageMeta({
  layout: 'sections',
})

useSeoMeta({
  title: 'Sobre o Centro Cultural China-Brasil Yuan Aiping',
  description:
    'Desde 2004 no Rio de Janeiro, com filiais em Pequim e Xangai: ensino de mandarim e português, tradução, intercâmbio e conexões de negócios entre Brasil e China.',
})

interface IconItem {
  title: string
  description: string
  /** Conteúdo interno de um ícone Lucide (24x24, stroke). */
  icon: string
}

// Ícones Lucide inline (sem dependência extra), conforme design-system/tokens.json > icons.
const icons = {
  languages:
    '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  handshake:
    '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  ship: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>',
  printer:
    '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  heart:
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
}

// Os títulos das duas listas alimentam o JSON-LD (OfferCatalog): mantenha visível e estruturado iguais.
// Serviços principais: consultoria e facilitação de negócios, exibidos em destaque.
const featuredServices: IconItem[] = [
  {
    title: 'Intermediação comercial',
    description:
      'Aproximamos a sua empresa de fornecedores, distribuidores, investidores e instituições chinesas e fazemos a interlocução com quem conhece as duas culturas de dentro. Isso dá agilidade ao processo, evita ruídos de comunicação e confere ao seu projeto o respaldo de uma rede de relacionamentos construída ao longo de mais de 20 anos.',
    icon: icons.handshake,
  },
  {
    title: 'Assessoria em importação e exportação',
    description:
      'Apoiamos empresas que querem comprar ou vender entre Brasil e China, da identificação e avaliação de parceiros à negociação e ao acompanhamento de cada etapa da operação. Você conta com orientação clara para tomar decisões com segurança, sem depender apenas de plataformas on-line.',
    icon: icons.ship,
  },
]

const otherServices: IconItem[] = [
  {
    title: 'Aulas de mandarim para brasileiros',
    description:
      'Cursos pensados para quem fala português, do primeiro contato com os tons até a conversa do dia a dia e o vocabulário de negócios. Uma forma eficiente de abrir portas na China, seja para trabalhar, estudar ou viajar.',
    icon: icons.languages,
  },
  {
    title: 'Português do Brasil para chineses',
    description:
      'Preparamos chineses para viver, estudar e trabalhar no Brasil, com atenção especial às expressões, aos costumes e ao jeito brasileiro de se comunicar.',
    icon: icons.book,
  },
  {
    title: 'Tradução e interpretação',
    description:
      'Traduções e intérpretes em chinês, português e inglês para documentos, reuniões, eventos e visitas técnicas, para que nada importante se perca entre um idioma e outro.',
    icon: icons.mic,
  },
  {
    title: 'Produção e impressão de livros na China',
    description:
      'Intermediamos a produção gráfica de livros na China, com acompanhamento em português, para editoras e autores que buscam custos mais competitivos.',
    icon: icons.printer,
  },
]

const pillars: IconItem[] = [
  {
    title: 'Missão',
    description:
      'Criar um ambiente em que brasileiros aprendam a língua e a cultura chinesas de forma eficiente, aproximando Brasil e China e ampliando as oportunidades de negócio entre os dois países. Para isso, investimos continuamente na qualidade dos serviços, no método de ensino, na formação dos professores e em novas tecnologias.',
    icon: icons.target,
  },
  {
    title: 'Visão',
    description:
      'Ser a principal referência nacional no ensino de mandarim para brasileiros, fortalecendo a relação entre Brasil e China por meio da cultura, do idioma, do intercâmbio estudantil e da intermediação comercial.',
    icon: icons.eye,
  },
  {
    title: 'Valores',
    description: 'Honestidade, excelência, inovação e o cuidado com cada relacionamento que construímos.',
    icon: icons.heart,
  },
]

const highlights = [
  {
    title: 'Reconhecimento internacional',
    description: 'Eleita pelo governo chinês como uma das melhores escolas de mandarim do mundo.',
  },
  {
    title: 'Método feito para brasileiros',
    description:
      'Desenvolve de forma equilibrada audição, fala, leitura e escrita, para que o aluno ganhe fluência com segurança.',
  },
  {
    title: 'Material didático exclusivo',
    description: 'Coleção própria com 14 livros e 5 CDs, criada especialmente para quem fala português.',
  },
  {
    title: 'Mandarim para crianças',
    description:
      'Material infantil com conteúdo multimídia, cartões de jogos e exercícios lúdicos que mantêm o interesse pelo idioma.',
  },
  {
    title: 'Filiais em Pequim e Xangai',
    description: 'Apoio local para quem deseja estudar na China ou fazer um intercâmbio com tranquilidade.',
  },
  {
    title: 'Acervo cultural',
    description:
      'Livros, CDs, filmes, séries, espetáculos e documentários chineses para os alunos mergulharem na cultura e treinarem a compreensão do idioma.',
  },
]

const initiatives: MethodStep[] = [
  {
    title: 'Estratégico: diagnóstico e rota de entrada',
    description:
      'Entendemos os objetivos da sua empresa, o produto ou serviço envolvido e o seu estágio de internacionalização. A partir daí, definimos juntos onde vale a pena chegar na China e o que significa sucesso para o projeto.',
  },
  {
    title: 'Estratégico: leitura do ambiente de negócios',
    description:
      'Muitos projetos não fracassam por falta de oportunidade, mas por desencontros culturais. Mostramos como se constrói confiança, como funcionam a hierarquia e a tomada de decisão e o que esperar do ambiente regulatório chinês.',
  },
  {
    title: 'Tático: mapeamento e qualificação de parceiros',
    description:
      'Pesquisamos o mercado e avaliamos reputação, capacidade produtiva e histórico de fornecedores, distribuidores e investidores. Você recebe uma seleção criteriosa de parceiros com aderência real aos seus objetivos, e não uma lista genérica de contatos.',
  },
  {
    title: 'Tático: aproximação pelos canais certos',
    description:
      'Na China, as portas se abrem por meio de relações de confiança, o chamado guanxi. Preparamos a apresentação da sua empresa e conduzimos os primeiros contatos com a credibilidade de quem já é conhecido e respeitado nesse meio.',
  },
  {
    title: 'Operacional: apoio em negociações e visitas',
    description:
      'Acompanhamos reuniões, visitas e rodadas de negociação ao lado da sua equipe, ajudando a interpretar o que é dito e o que fica nas entrelinhas, para chegar a acordos equilibrados para os dois lados.',
  },
  {
    title: 'Operacional: intermediação e acompanhamento contínuo',
    description:
      'Fazemos a interlocução com empresas, câmaras de comércio e instituições dos dois países e seguimos ao seu lado depois do acordo fechado, na implementação e na gestão da relação, para que a parceria se mantenha sólida no longo prazo.',
  },
]

const founderQuote: Testimonial = {
  quote:
    'Nosso objetivo também é ultrapassar as barreiras do preconceito e dos mal-entendidos, frequentes quando essas culturas se encontram, por causa da grande distância que as separa, na história e na geografia.',
  name: 'Yuan Aiping',
  role: 'Fundadora',
  company: 'Centro Cultural China-Brasil Yuan Aiping',
  photo: '/img/home/sobre/foto-da-Yuan.jpg',
}

const siteUrl = useRequestURL().origin
const pageUrl = `${siteUrl}/sobre-a-china-brasil`
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
      // Perfil completo (Person) publicado pelo componente YuanAipingPerfil.
      founder: { '@id': `${siteUrl}/#yuan-aiping`, name: 'Yuan Aiping' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rio de Janeiro',
        addressRegion: 'RJ',
        addressCountry: 'BR',
      },
      areaServed: [
        { '@type': 'Country', name: 'Brasil' },
        { '@type': 'Country', name: 'China' },
      ],
      knowsAbout: [
        'Ensino de mandarim',
        'Ensino de português para chineses',
        'Tradução e interpretação chinês-português',
        'Intercâmbio cultural Brasil-China',
        'Negócios entre Brasil e China',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços do Centro Cultural China-Brasil',
        itemListElement: [...featuredServices, ...otherServices].map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title },
        })),
      },
      // CONTEÚDO PENDENTE: acrescentar streetAddress/postalCode, contactPoint e sameAs (redes sociais).
    },
    {
      '@type': 'AboutPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Sobre o Centro Cultural China-Brasil Yuan Aiping',
      about: { '@id': organizationId },
    },
  ],
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }],
})
</script>

<template>
  <SectionTitle title="Sobre o Centro Cultural China-Brasil" img="/img/consultoria/consultoria.avif" />
  <TextContent>
    <!-- 1. Introdução -->
    <section class="page-section page-section--intro" aria-labelledby="intro-title">
      <p class="text-caption">Desde 2004</p>
      <h2 id="intro-title">Uma ponte viva entre o Brasil e a China</h2>
      <p class="page-section__lead">
        O <strong>Centro Cultural China-Brasil Yuan Aiping</strong> nasceu em fevereiro de 2004, no centro
        do Rio de Janeiro, pelas mãos da professora Yuan Aiping. A ideia era simples e ambiciosa ao mesmo
        tempo: aproximar dois povos que vivem a meio mundo de distância. Mais de duas décadas depois, a
        ponte cresceu e ganhou filiais no Brasil e na China, incluindo Pequim e Xangai.
      </p>
      <p class="page-section__lead">
        Somos especialistas no ensino de <strong>mandarim para brasileiros</strong> e de
        <strong>português do Brasil para chineses</strong>. E, porque idioma e negócios caminham juntos,
        também ajudamos pessoas e empresas a se entender, negociar e crescer entre os dois países.
      </p>
    </section>

    <!-- 2. Números -->
    <section aria-label="Nossa trajetória em números">
      <ul class="metrics-banner">
        <li class="metrics-banner__item">
          <span class="metrics-banner__number">2004</span>
          <span class="metrics-banner__text">Ano de fundação</span>
        </li>
        <li class="metrics-banner__item">
          <span class="metrics-banner__number">14</span>
          <span class="metrics-banner__text">Livros didáticos próprios</span>
        </li>
        <li class="metrics-banner__item">
          <span class="metrics-banner__number">02</span>
          <span class="metrics-banner__text">Filiais na China</span>
        </li>
      </ul>
    </section>

    <!-- 3. Propósito -->
    <section class="page-section" aria-labelledby="purpose-title">
      <p class="text-caption">Propósito</p>
      <h2 id="purpose-title">Mais do que ensinar um idioma, aproximar duas culturas</h2>
      <p class="page-section__lead">
        Nosso compromisso é difundir as culturas brasileira e chinesa, acelerar o intercâmbio cultural e
        tecnológico e fortalecer as relações comerciais entre os dois países. Com o peso crescente da China
        na economia mundial, cada vez mais profissionais querem aprender mandarim e entender de verdade os
        hábitos e a cultura chinesa. Foi para atender essa demanda que o Centro Cultural surgiu.
      </p>
      <TestimonialCard :testimonial="founderQuote" />
    </section>

    <!-- 4. Fundadora: perfil completo de Yuan Aiping -->
    <YuanAipingPerfil />

     <!-- 5. Missão, visão e valores -->
    <section class="page-section" aria-labelledby="pillars-title">
      <p class="text-caption">Quem somos</p>
      <h2 id="pillars-title">Missão, visão e valores</h2>
      <ul class="pillars">
        <li v-for="pillar in pillars" :key="pillar.title" class="pillars__item">
          <svg
            class="pillars__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            focusable="false"
            v-html="pillar.icon"
          />
          <h3 class="pillars__title">{{ pillar.title }}</h3>
          <p class="pillars__text">{{ pillar.description }}</p>
        </li>
      </ul>
    </section>



   
    <!-- 7. Consultoria em três níveis -->
    <section class="page-section" aria-labelledby="initiatives-title">
      <p class="text-caption">Conexão empresarial</p>
      <h2 id="initiatives-title">Do planejamento à operação: seus negócios com a China</h2>
      <p class="page-section__lead">
        Há mais de 20 anos ajudamos empreendedores brasileiros a fazer negócios com empresas chinesas com
        segurança e clareza de propósito. Atuamos como facilitadores em três níveis, estratégico, tático e
        operacional, para que a sua empresa tenha apoio desde a decisão de olhar para a China até o dia a
        dia da parceria.
      </p>
      <MethodTimeline :steps="initiatives" />
    </section>

    <!-- 4. Serviços -->
    <section class="page-section" aria-labelledby="services-title">
      <p class="text-caption">O que fazemos</p>
      <h2 id="services-title">Facilitamos os seus negócios com a China</h2>
      <p class="page-section__lead">
        Nosso foco é ajudar empresas brasileiras a encontrar, negociar e manter parcerias sólidas com
        empresas chinesas.
      </p>

      <ul class="featured-services">
        <li v-for="service in featuredServices" :key="service.title" class="featured-services__item">
          <span class="featured-services__icon-wrap" aria-hidden="true">
            <svg
              class="featured-services__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
              v-html="service.icon"
            />
          </span>
          <h3 class="featured-services__title">{{ service.title }}</h3>
          <p class="featured-services__text">{{ service.description }}</p>
          <NuxtLink to="/conexao-empresarial-estrategica/consultoria" class="featured-services__link">
            Conheça a consultoria
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </NuxtLink>
        </li>
      </ul>

      <h3 class="page-section__subtitle">Outros serviços</h3>
      <ul class="services-grid">
        <li v-for="service in otherServices" :key="service.title" class="services-grid__item">
          <h4>
            <svg
              class="services-grid__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              focusable="false"
              v-html="service.icon"
            />
            {{ service.title }}
          </h4>
          <p>{{ service.description }}</p>
        </li>
      </ul>
    </section>

    <!-- 8. CTA -->
    <section class="cta-section" aria-labelledby="cta-title">
      <h2 id="cta-title">Comece hoje a sua ponte com a China</h2>
      <p>
        Seja para aprender mandarim, preparar um intercâmbio ou fazer negócios com empresas chinesas,
        nossa equipe está pronta para entender o seu objetivo e indicar o melhor caminho.
      </p>
      <NuxtLink to="/contato" class="cta-section__button">Fale com um especialista</NuxtLink>
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
    margin-bottom: $space-8;
    font-size: $font-size-body-lg;
    color: $color-muted-text;
  }

  &--intro &__lead {
    margin-bottom: $space-4;
  }

  // Especificidade extra para sobrepor o :deep(h3) do TextContent.
  & &__subtitle {
    margin: $space-12 0 $space-6;
    font-size: $font-size-heading-md;
  }
}

.featured-services {
  display: grid;
  gap: $space-6;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding: $space-8 $space-6;
    background-color: $white;
    border: $border-subtle;
    border-top: 4px solid $color-highlight;
    border-radius: $radius-lg;
    box-shadow: $shadow-card;

    @include respond-to(md) {
      padding: $space-10 $space-8;
    }
  }

  &__icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin-bottom: $space-5;
    border-radius: 50%;
    background-color: $red-900;
    color: $gold-500;
  }

  &__icon {
    width: 28px;
    height: 28px;
  }

  &__item &__title {
    margin: 0 0 $space-3;
    font-size: $font-size-heading-lg;
  }

  &__text {
    margin-bottom: $space-6;
    color: $color-muted-text;
    line-height: 1.6;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    margin-top: auto;
    color: $color-primary-action;
    font-size: $font-size-button;
    font-weight: $weight-semibold;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;

    svg {
      width: 16px;
      height: 16px;
      transition: transform $duration-normal $easing-brand;
    }

    &:hover {
      text-decoration: underline;

      svg {
        transform: translateX(3px);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      svg {
        transition: none;
      }
    }
  }
}

.metrics-banner {
  display: flex;
  flex-direction: column;
  gap: $space-6;
  padding: $space-8;
  margin-block: $space-12 $space-16;
  border-radius: $radius-xl;
  background-color: $color-dark-section;
  color: $white;
  text-align: center;

  @include respond-to(md) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: $space-20;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__number {
    margin-bottom: $space-2;
    font-family: $font-display;
    font-size: 2.6rem;
    line-height: 1;
    color: $gold-500;
  }

  &__text {
    font-size: $font-size-body-sm;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.72);
  }
}

// Lista secundária: visual mais discreto que os serviços em destaque.
.services-grid {
  display: grid;
  gap: $space-4;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    padding: $space-5 $space-6;
    background-color: $surface;
    border-radius: $radius-md;

    h4 {
      display: flex;
      align-items: center;
      gap: $space-3;
      margin-bottom: $space-2;
      font-family: $font-body;
      font-size: $font-size-body-md;
      font-weight: $weight-semibold;
    }

    p {
      color: $color-muted-text;
      font-size: $font-size-body-sm;
      line-height: 1.6;
    }
  }

  &__icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    color: $red-800;
  }
}

.pillars {
  display: grid;
  gap: $space-6;

  @include respond-to(lg) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__item {
    padding: $space-8 $space-6;
    background-color: $surface;
    border-top: 3px solid $color-highlight;
    border-radius: $radius-lg;
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-bottom: $space-4;
    color: $red-800;
  }

  // Especificidade extra para sobrepor o :deep(h3) do TextContent.
  &__item &__title {
    margin: 0 0 $space-3;
    font-size: $font-size-heading-md;
  }

  &__text {
    color: $color-muted-text;
    font-size: $font-size-body-sm;
    line-height: 1.6;
  }
}

.highlights {
  display: grid;
  gap: $space-6 $space-8;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    display: flex;
    gap: $space-4;
  }

  &__icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-top: 2px;
    color: $jade-600;
  }

  &__item &__title {
    margin: 0 0 $space-1;
    font-family: $font-body;
    font-size: $font-size-body-md;
    font-weight: $weight-semibold;
  }

  &__text {
    color: $color-muted-text;
    font-size: $font-size-body-sm;
    line-height: 1.6;
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
  }
}
</style>
