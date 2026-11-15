<script setup lang="ts">
import type {
  FaqItem,
  MethodStep,
  PartnerLogo,
  TeamMember,
  Testimonial,
} from '~/types/content'

definePageMeta({
  layout: 'sections',
})

useSeoMeta({
  title: 'Consultoria Estratégica para Negócios entre Brasil e China',
  description:
    'Há mais de 20 anos conectamos empresas brasileiras e chinesas: contatos qualificados, identificação de parceiros, apoio em negociações e intermediação comercial e institucional.',
})

// Os marcadores de "Conteúdo pendente" só aparecem em desenvolvimento. Em produção, as seções
// sem conteúdo (casos, equipe, depoimentos/logos) ficam ocultas até os arrays abaixo serem preenchidos.
const showPendingContent = import.meta.dev

const methodSteps: MethodStep[] = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos os objetivos, o perfil do negócio e as prioridades do projeto.',
  },
  {
    title: 'Mapeamento e aproximação',
    description: 'Identificamos parceiros relevantes e organizamos os contatos iniciais.',
  },
  {
    title: 'Negociação e acompanhamento',
    description: 'Apoiamos as conversas e a continuidade das relações comerciais e institucionais.',
  },
]

// Experiência em delegações, missões oficiais e implantação de empresas (seção "Assessoria e Intercâmbio").
const experienceItems = [
  {
    tag: '2008 · Pequim',
    title: 'Jogos Olímpicos de Pequim',
    text: 'Ao longo de sua trajetória, o CCCB acumulou ampla experiência no acompanhamento de delegações oficiais e missões empresariais. Em 2008, durante os Jogos Olímpicos de Pequim, sua filial na capital chinesa prestou apoio integral ao Ministério do Esporte do Brasil, incluindo serviços de tradução, interpretação e suporte logístico.',
  },
  {
    tag: '2017 · Pequim, Xangai e Hangzhou',
    title: 'Visitas oficiais de autoridades brasileiras',
    text: 'O Centro também tem participado de diversas visitas oficiais de autoridades brasileiras à China. Em novembro de 2017, sua fundadora e diretora, Yuan Aiping, acompanhou o prefeito do Rio de Janeiro em uma visita oficial a cidades chinesas, incluindo Pequim, Xangai e Hangzhou.',
  },
  {
    tag: 'Empresarial · Petróleo e gás',
    title: 'Empresas chinesas no Brasil',
    text: 'Na área empresarial, o CCCB auxilia empresas chinesas interessadas em estabelecer operações no mercado brasileiro, oferecendo orientação e apoio institucional. Entre os projetos realizados, destaca-se o suporte à implantação no Brasil da empresa chinesa Shandong Kerui, especializada em equipamentos para o setor de petróleo e gás.',
  },
]

// CONTEÚDO PENDENTE: sócios e consultores responsáveis pelos projetos.
const teamMembers: TeamMember[] = []

// CONTEÚDO PENDENTE: depoimentos autorizados, sempre com nome, cargo e empresa.
const testimonials: Testimonial[] = []

const partnerLogos: PartnerLogo[] = [
  { name: 'All Nations', src: '/parceiros/logo_allnations.png' },
  { name: 'Amsterdam Sauer', src: '/parceiros/logo_amsterdam_sauer.png' },
  { name: 'Bradesco', src: '/parceiros/logo_bradesco.png' },
  { name: 'Eletrobras', src: '/parceiros/logo_eletrobras.png' },
  { name: 'EPE – Empresa de Pesquisa Energética', src: '/parceiros/logo_epe.png' },
  { name: 'Furnas', src: '/parceiros/logo_furnas.png' },
  { name: 'globo.com', src: '/parceiros/logo_globocom.png' },
  { name: 'H.Stern', src: '/parceiros/logo_hstern.png' },
  { name: 'Huawei', src: '/parceiros/logo_huawei.png' },
  { name: 'Ibmec', src: '/parceiros/logo_ibemec.png' },
  { name: 'IBMR – Centro Universitário', src: '/parceiros/logo_ibmr.png' },
  { name: 'Itaú', src: '/parceiros/logo_itau.png' },
  { name: 'MetrôRio', src: '/parceiros/logo_metrorio.png' },
  { name: 'Prefeitura do Rio de Janeiro', src: '/parceiros/logo_prefeiturario.png' },
  { name: 'State Grid Corporation of China', src: '/parceiros/logo_stategrid.png' },
  { name: 'Vale', src: '/parceiros/logo_vale.png' },
  { name: 'ZTE', src: '/parceiros/logo_zte.png' },
]

// As respostas também alimentam o JSON-LD (FAQPage): o texto visível e o estruturado precisam ser iguais.
const faqItems: FaqItem[] = [
  {
    question: 'O que faz uma consultoria de negócios entre Brasil e China?',
    answer:
      'Uma consultoria de negócios entre Brasil e China ajuda empresas e instituições a iniciar, conduzir e manter relações comerciais com o outro país. Na prática, isso envolve identificar parceiros confiáveis, preparar e acompanhar negociações, fazer a intermediação com empresas e instituições e orientar sobre as diferenças culturais e o ambiente de negócios. Nossa atuação reúne mais de 20 anos de experiência nos dois mercados.',
  },
  {
    question: 'Preciso falar mandarim para fazer negócios com empresas chinesas?',
    answer:
      'Não. Muitas negociações são conduzidas em inglês ou com o apoio de intérpretes. O maior desafio costuma estar menos no idioma e mais nos códigos culturais: a forma de construir confiança, a hierarquia nas decisões e o que fica implícito nas conversas. É nesse ponto que o acompanhamento de quem conhece as duas culturas faz diferença.',
  },
  {
    question: 'Como vocês identificam parceiros confiáveis na China?',
    answer:
      'Com análise preliminar, referências e verificação de informações dentro do escopo contratado. Conforme o projeto, isso inclui análise documental, reputação no mercado, histórico de operações e, sempre que possível, contato direto e visitas. Nossa rede de relacionamentos na China permite checar informações que dificilmente aparecem em plataformas on-line, o que reduz o risco de escolher o parceiro errado.',
  },
  {
    question: 'Que tipo de empresa pode contratar a consultoria?',
    answer:
      'Atendemos empresas de diferentes portes e segmentos, além de instituições e entidades de classe. Isso vale tanto para quem está dando os primeiros passos em direção à China quanto para quem já tem operações e deseja ampliá-las.',
  },
  {
    question: 'A consultoria atende empresas brasileiras e chinesas?',
    answer:
      'Sim. Apoiamos projetos nos dois sentidos, conforme a necessidade de cada empresa: empresas brasileiras que buscam oportunidades na China e empresas chinesas que desejam investir, comprar ou estabelecer parcerias no Brasil.',
  },
  {
    question: 'Como começar um projeto com a consultoria?',
    answer:
      'O primeiro passo é uma conversa para entendermos os objetivos da sua empresa e o momento do projeto. A partir dela, indicamos o caminho mais adequado e o tipo de apoio necessário. Basta entrar em contato pela nossa página de contato.',
    link: { text: 'página de contato', to: '/contato' },
  },
]

// Alimenta o grid de serviços e o JSON-LD (Service).
const services = [
  {
    title: 'Conexões e parceiros estratégicos',
    description: 'Identificamos e aproximamos empresas e instituições alinhadas ao objetivo de cada projeto.',
  },
  {
    title: 'Inteligência de mercado e cultura',
    description: 'Ajudamos a compreender o ambiente de negócios e as diferenças culturais entre os dois países.',
  },
  {
    title: 'Negociações e intermediação',
    description: 'Facilitamos o diálogo, as reuniões e o alinhamento de propostas entre as partes.',
  },
  {
    title: 'Acompanhamento de parcerias',
    description: 'Apoiamos a continuidade dos relacionamentos e o desenvolvimento dos projetos.',
  },
]
const serviceNames = services.map((service) => service.title)

const siteUrl = useRequestURL().origin
const pageUrl = `${siteUrl}/conexao-empresarial-estrategica/consultoria`
const organizationId = `${siteUrl}/#organization`
const areaServed = [
  { '@type': 'Country', name: 'Brasil' },
  { '@type': 'Country', name: 'China' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Centro Cultural China-Brasil Yuan Aiping',
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      areaServed,
      knowsAbout: [
        'Negócios entre Brasil e China',
        'Comércio exterior',
        'Importação e exportação',
        'Negociação intercultural',
        'Cultura empresarial chinesa',
      ],
      // CONTEÚDO PENDENTE: acrescentar foundingDate (ano de fundação, comprova os +20 anos),
      // address (endereços no Brasil e na China), contactPoint (telefone/e-mail comercial)
      // e sameAs (URLs de LinkedIn, Instagram, WeChat etc.).
      // Quando outras páginas também tiverem JSON-LD, mover este nó para o app.vue.
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Consultoria estratégica para negócios entre Brasil e China',
      serviceType: 'Consultoria empresarial internacional',
      description:
        'Consultoria e intermediação de negócios entre empresas brasileiras e chinesas: desenvolvimento de contatos, identificação de parceiros, apoio em negociações e orientação sobre o ambiente de negócios e as diferenças culturais.',
      url: pageUrl,
      provider: { '@id': organizationId },
      areaServed,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de consultoria Brasil–China',
        itemListElement: serviceNames.map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }],
})
</script>

<template>
    <SectionTitle title="Consultoria" img="/img/consultoria/consultoria.avif" />
    <TextContent>
      <!-- 1. Introdução -->
      <section class="page-section page-section--intro" aria-labelledby="intro-title">
        <h2 id="intro-title">Consultoria estratégica para negócios entre Brasil e China</h2>
        <p class="page-section__lead">
          Oferecemos consultoria para empresas e instituições que querem fazer negócios com a China:
          apoio na busca de parceiros, no desenvolvimento de relacionamentos e nas negociações entre os
          dois países. Unimos experiência prática no Brasil e na China, conhecimento intercultural e uma
          rede de contatos construída ao longo de mais de 20 anos.
        </p>
        <NuxtLink to="/contato" class="page-section__cta">Converse sobre seu projeto</NuxtLink>
      </section>

      <!-- 2. Métricas -->
      <!-- CONTEÚDO PENDENTE: confirmar os números "02 escritórios" e "+100 projetos" antes de publicar. -->
      <section aria-label="Nossa trajetória em números">
        <ul class="metrics-banner">
          <li class="metrics-banner__item">
            <span class="metrics-banner__number">+20</span>
            <span class="metrics-banner__text">Anos de Experiência</span>
          </li>
          <li class="metrics-banner__item">
            <span class="metrics-banner__text">atuação no Brasil e na China</span>
          </li>
        </ul>
      </section>

      <!-- 3. Serviços -->
      <section class="page-section" aria-labelledby="services-title">
        <p class="text-caption">Serviços</p>
        <h2 id="services-title">Como apoiamos a sua empresa</h2>

        <ol class="services-grid">
          <li v-for="(service, index) in services" :key="service.title" class="services-grid__item">
            <span class="services-grid__number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </li>
        </ol>
      </section>

      <!-- 4. Como trabalhamos -->
      <section class="page-section" aria-labelledby="method-title">
        <p class="text-caption">Método</p>
        <h2 id="method-title">Como trabalhamos</h2>
        <p class="page-section__lead">
          Cada empresa chega com objetivos e níveis de maturidade diferentes em relação ao mercado chinês.
          Por isso, trabalhamos com um método claro, que dá previsibilidade ao processo sem engessar o que
          precisa ser ajustado a cada caso.
        </p>
        <MethodTimeline :steps="methodSteps" />
      </section>

      <!-- 5. Assessoria e intercâmbio: experiência comprovada -->
      <section class="page-section experience" aria-labelledby="cases-title">
        <p class="text-caption">Experiência</p>
        <h2 id="cases-title">Assessoria e Intercâmbio China–Brasil</h2>
        <div class="experience__intro">
          <p class="page-section__lead experience__lead">
            O Centro Cultural China–Brasil Yuan Aiping (CCCB) oferece serviços de assessoria, consultoria e
            intermediação nas áreas cultural, institucional, educacional e empresarial, promovendo a cooperação e
            fortalecendo as relações entre o Brasil e a China.
          </p>

          <!-- Registro histórico: a legenda data o evento para não sugerir parceria institucional vigente. -->
          <figure class="experience__figure">
            <img
              src="/img/consultoria/meeting01.avif"
              alt="Yuan Aiping em encontro institucional em Xangai durante a visita oficial da delegação do Rio de Janeiro à China, em novembro de 2017"
              class="experience__image"
              width="1280"
              height="853"
              loading="lazy"
              decoding="async"
            />
            <figcaption class="experience__caption">
              <span class="experience__caption-meta">Novembro de 2017 | Xangai, China</span>
              Encontro institucional durante a visita oficial da delegação do Rio de Janeiro à China, com
              participação de Yuan Aiping.
            </figcaption>
          </figure>
        </div>

        <ol class="experience__list">
          <li v-for="item in experienceItems" :key="item.title" class="experience__item">
            <p class="experience__tag">{{ item.tag }}</p>
            <h3 class="experience__title">{{ item.title }}</h3>
            <p class="experience__text">{{ item.text }}</p>
          </li>
        </ol>

        <p class="experience__closing">
          Por meio dessas iniciativas, o CCCB reafirma seu compromisso de atuar como uma ponte de cooperação,
          integração e desenvolvimento entre os dois países.
        </p>
      </section>

      <!-- 6. Depoimentos e logos -->
      <section
        v-if="testimonials.length || partnerLogos.length || showPendingContent"
        class="page-section"
        aria-labelledby="trust-title"
      >
        <p class="text-caption">Credibilidade</p>
        <h2 id="trust-title">Quem confia no nosso trabalho</h2>
        <p class="page-section__lead">
          A confiança de quem já trabalhou conosco é o melhor indicador do que podemos fazer pela sua
          empresa.
        </p>

        <div v-if="testimonials.length" class="testimonials-grid">
          <TestimonialCard v-for="item in testimonials" :key="item.name" :testimonial="item" />
        </div>
        <!-- <ContentPending
          v-else-if="showPendingContent"
          title="Depoimentos de clientes (2 a 4)"
          description="Preencha o array testimonials no <script> desta página. Depoimentos sem identificação não devem ser publicados."
          :items="[
            'Texto do depoimento (2 a 4 frases), com autorização por escrito',
            'Nome, cargo e empresa',
            'Foto (opcional, mas recomendada)',
          ]"
        /> -->

        <h3 v-if="partnerLogos.length" class="page-section__subtitle">
          Instituições e empresas com quem atuamos
        </h3>
        <LogoStrip v-if="partnerLogos.length" :logos="partnerLogos" />
      </section>

      <!-- 8. FAQ -->
      <section class="page-section" aria-labelledby="faq-title">
        <p class="text-caption">Dúvidas frequentes</p>
        <h2 id="faq-title">Perguntas frequentes sobre negócios com a China</h2>
        <FaqList :items="faqItems" />
      </section>

      <!-- 9. CTA -->
      <section class="cta-section" aria-labelledby="cta-title">
        <h2 id="cta-title">Vamos conversar sobre seu projeto?</h2>
        <p>
          Conte-nos sua necessidade de negócios entre Brasil e China. Vamos avaliar juntos o caminho mais
          adequado.
        </p>
        <NuxtLink to="/contato" class="cta-section__button">Falar com um consultor</NuxtLink>
      </section>
    </TextContent>
</template>

<style lang="scss" scoped>
// Botão de CTA compartilhado pela introdução e pela seção final.
%cta-button {
  display: inline-block;
  background-color: $red-900;
  color: $white !important;
  padding: $space-3 $space-8;
  border-radius: $radius-pill;
  font-weight: $weight-semibold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: $red-950;
    text-decoration: none;
  }
}

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
  }

  &--intro &__lead {
    margin-bottom: 0;
  }

  &__cta {
    @extend %cta-button;
    margin-top: $space-8;
  }

  &__subtitle {
    margin-top: $space-12;
    margin-bottom: $space-6;
    font-size: $font-size-heading-md;
  }

  &__stack {
    display: grid;
    gap: $space-6;
  }
}

.experience {
  // Texto à esquerda e foto reduzida (~40% da largura) à direita.
  &__intro {
    display: grid;
    gap: $space-8;
    margin-bottom: $space-10;

    @include respond-to(md) {
      grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
      align-items: start;
    }
  }

  & &__lead {
    margin-bottom: 0;
  }

  &__figure {
    margin: 0;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: $radius-lg;
    box-shadow: $shadow-card;
  }

  &__caption {
    margin-top: $space-3;
    padding-left: $space-3;
    border-left: 3px solid $gold-500;
    color: $color-muted-text;
    font-size: $font-size-caption;
    line-height: 1.5;
  }

  &__caption-meta {
    display: block;
    margin-bottom: $space-1;
    color: $gold-700;
    font-weight: $weight-semibold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__list {
    display: grid;
    gap: $space-6;

    @include respond-to(lg) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding: $space-8 $space-6;
    background-color: $white;
    border: $border-subtle;
    border-top: 4px solid $color-highlight;
    border-radius: $radius-lg;
    box-shadow: $shadow-soft;
  }

  &__tag {
    margin-bottom: $space-2;
    color: $gold-700;
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  // Especificidade extra para sobrepor o :deep(h3) do TextContent.
  & &__title {
    margin: 0 0 $space-3;
    color: $color-heading-text;
    font-size: $font-size-heading-md;
    line-height: 1.3;
  }

  & &__text {
    max-width: none;
    color: $color-muted-text;
    font-size: $font-size-body-sm;
    line-height: 1.7;
  }

  & &__closing {
    max-width: none;
    margin-top: $space-10;
    padding: $space-6 $space-8;
    border-left: 4px solid $red-900;
    border-radius: 0 $radius-md $radius-md 0;
    background-color: $off-white;
    color: $color-heading-text;
    font-family: $font-display;
    font-size: $font-size-heading-md;
    line-height: 1.5;
  }
}

.services-grid {
  display: grid;
  gap: $space-8;
  margin-top: $space-8;
  padding: 0;
  list-style: none;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    background-color: $surface;
    padding: $space-6;
    border-radius: $radius-md;
    border-top: 4px solid $red-950;

    h3 {
      margin-bottom: $space-3;
      font-size: $font-size-heading-md;
      color: $color-heading-text;
    }
  }

  &__number {
    display: block;
    margin-bottom: $space-2;
    color: $jade-600;
    font-family: $font-display;
    font-size: $font-size-heading-md;
    font-weight: $weight-semibold;
    font-variant-numeric: tabular-nums;
  }
}

.metrics-banner {
  display: flex;
  flex-direction: column;
  gap: $space-6;
  background-color: $red-950;
  color: $white;
  padding: $space-8;
  border-radius: $radius-md;
  margin-block: $space-12 $space-16;
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
    font-size: 3rem;
    font-weight: $weight-bold;
    color: $gold-500;
    line-height: 1;
    margin-bottom: $space-2;
  }

  &__text {
    font-size: $font-size-body-md;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.testimonials-grid {
  display: grid;
  gap: $space-6;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.cta-section {
  background-color: $surface-alt;
  padding: $space-8;
  border-radius: $radius-md;
  text-align: center;
  border: 1px solid $border;

  @include respond-to(md) {
    padding: $space-12;
  }

  h2 {
    margin-bottom: $space-4;
    color: $red-900;
  }

  p {
    margin-inline: auto;
    margin-bottom: $space-4;

    &:last-of-type {
      margin-bottom: $space-8;
    }
  }

  &__button {
    @extend %cta-button;
  }
}
</style>
