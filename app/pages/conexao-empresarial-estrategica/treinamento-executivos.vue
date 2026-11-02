<script setup lang="ts">
import type { FaqItem, MethodStep, PartnerLogo } from '~/types/content'

definePageMeta({
  layout: 'sections',
})

const seoTitle = 'Treinamento In Company para Executivos: Mandarim e Português para Chineses'
const seoDescription =
  'Treinamento in company para executivos: mandarim e cultura de negócios chinesa para empresas brasileiras e português para executivos de empresas chinesas no Brasil. Mais de 20 anos de experiência.'

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: '/img/incompany/incompanyheader.avif',
})

const booksRoute = '/livros-e-publicacoes'

interface IconItem {
  title: string
  description: string
  /** Conteúdo interno de um ícone Lucide (24x24, stroke). */
  icon: string
  /** Link opcional exibido ao final do card. */
  link?: { to: string; label: string }
}

interface Track {
  id: string
  audience: string
  title: string
  description: string
  points: string[]
  /** Conteúdo interno de um ícone Lucide (24x24, stroke). */
  icon: string
}

// Ícones Lucide inline (sem dependência extra), conforme design-system/tokens.json > icons.
const icons = {
  languages:
    '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  handshake:
    '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  calendar:
    '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  globe:
    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  briefcase:
    '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  plane:
    '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  mapPin:
    '<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
}

const checkIcon = '<path d="M20 6 9 17l-5-5"/>'

const tracks: Track[] = [
  {
    id: 'trilha-mandarim',
    audience: 'Para empresas brasileiras',
    title: 'Mandarim e cultura de negócios chinesa para executivos brasileiros',
    description:
      'Para diretores, gerentes e lideranças que negociam com fornecedores, clientes, sócios ou investidores chineses, ou que estão prestes a embarcar para a China.',
    points: [
      'Mandarim para reuniões, apresentações, negociações e jantares de negócios',
      'Hierarquia, guanxi e etiqueta empresarial chinesa',
      'Como os chineses negociam, decidem e dizem “não” sem dizer',
      'Preparação para missões, feiras e visitas técnicas à China',
    ],
    icon: icons.languages,
  },
  {
    id: 'trilha-portugues',
    audience: 'Para empresas chinesas no Brasil',
    title: 'Português e cultura de negócios brasileira para executivos chineses',
    description:
      'Para executivos expatriados e lideranças de multinacionais chinesas que precisam conduzir equipes, atender clientes e se relacionar com parceiros e órgãos públicos no Brasil.',
    points: [
      'Português do Brasil para o dia a dia do escritório e para reuniões',
      'Como liderar equipes brasileiras e entender o jeito brasileiro de trabalhar',
      'Comunicação com clientes, fornecedores e instituições locais',
      'Ambientação para quem acaba de chegar ao país',
    ],
    icon: icons.globe,
  },
]

const benefits: IconItem[] = [
  {
    title: 'Conteúdo para a agenda do executivo',
    description:
      'Nada de decorar frases soltas. O executivo aprende o que vai usar de verdade: abrir uma reunião, apresentar a empresa, conduzir uma negociação, liderar uma equipe e manter a conversa no jantar de negócios.',
    icon: icons.briefcase,
  },
  {
    title: 'Cultura e etiqueta empresarial',
    description:
      'Saber o que dizer é metade do caminho; a outra metade é saber como agir. Trabalhamos os códigos de cada lado: a hierarquia e o guanxi chineses, a informalidade e o relacionamento próximo dos brasileiros.',
    icon: icons.handshake,
  },
  {
    title: 'Programa sob medida',
    description:
      'O conteúdo parte do setor da empresa, do cargo de cada participante e do objetivo do projeto, seja uma viagem marcada para daqui a três meses, seja uma operação de longo prazo no outro país.',
    icon: icons.target,
  },
  {
    title: 'Material didático próprio',
    description:
      'Usamos a nossa coleção de 14 livros e 5 CDs, com títulos de mandarim para quem fala português e de português do Brasil para chineses, criados a partir das dificuldades reais de cada aluno.',
    icon: icons.book,
    link: { to: booksRoute, label: 'Conheça o material didático' },
  },
  {
    title: 'Agenda que respeita a rotina',
    description:
      'As aulas acontecem nas instalações da sua empresa, no horário que cabe na agenda da diretoria e do time. Menos deslocamento, mais constância e resultados que aparecem no trabalho.',
    icon: icons.calendar,
  },
  {
    title: 'Professores que conhecem os dois lados',
    description:
      'Nossa equipe vive a relação entre Brasil e China há mais de duas décadas. Por isso, ensina o idioma junto com o contexto: o que esperar de cada reunião e como evitar os mal-entendidos mais comuns.',
    icon: icons.users,
  },
]

// Mantenha esta lista igual aos cards visíveis: ela alimenta o JSON-LD (OfferCatalog).
const formats: IconItem[] = [
  {
    title: 'Aulas individuais para executivos',
    description:
      'Atenção total, agenda flexível e conteúdo focado no papel de cada diretor ou liderança, para quem precisa de resultados rápidos.',
    icon: icons.briefcase,
  },
  {
    title: 'Turmas para lideranças e equipes',
    description:
      'Grupos formados por profissionais da mesma empresa, organizados por nível, para áreas que lidam com o outro país no dia a dia.',
    icon: icons.users,
  },
  {
    title: 'Preparação intensiva para missões à China',
    description:
      'Programa concentrado antes de viagens, feiras e visitas técnicas: frases essenciais, etiqueta e o que esperar de cada encontro.',
    icon: icons.plane,
  },
  {
    title: 'Ambientação de executivos chineses no Brasil',
    description:
      'Português e cultura brasileira para expatriados recém-chegados, para que comecem a liderar e a se relacionar com segurança desde as primeiras semanas.',
    icon: icons.mapPin,
  },
]

const methodSteps: MethodStep[] = [
  {
    title: 'Conversa inicial e diagnóstico',
    description:
      'Entendemos o momento da empresa, quem vai participar, o idioma a ser trabalhado, o nível de cada executivo e o que precisa estar resolvido ao final do treinamento.',
  },
  {
    title: 'Programa personalizado',
    description:
      'Montamos a proposta com formato, carga horária, conteúdo e cronograma alinhados aos objetivos do negócio e à agenda dos participantes.',
  },
  {
    title: 'Aulas na sua empresa',
    description:
      'Cada aula combina idioma, situações reais de negócios e cultura, sempre com foco no que o executivo vai enfrentar na próxima reunião, viagem ou negociação.',
  },
  {
    title: 'Acompanhamento da evolução',
    description:
      'Acompanhamos o progresso dos participantes e ajustamos ritmo e conteúdo sempre que necessário, mantendo a empresa informada ao longo do caminho.',
  },
  {
    title: 'Da sala de aula para a prática',
    description:
      'Quando chega a hora da negociação, da visita ou da mudança de país, a empresa pode contar também com a nossa consultoria, com intérpretes e com o apoio das nossas filiais em Pequim e Xangai.',
  },
]

const brazilianLogos: PartnerLogo[] = [
  { name: 'Vale', src: '/parceiros/logo_vale.png' },
  { name: 'Itaú', src: '/parceiros/logo_itau.png' },
  { name: 'Bradesco', src: '/parceiros/logo_bradesco.png' },
  { name: 'Eletrobras', src: '/parceiros/logo_eletrobras.png' },
  { name: 'Furnas', src: '/parceiros/logo_furnas.png' },
  { name: 'EPE – Empresa de Pesquisa Energética', src: '/parceiros/logo_epe.png' },
  { name: 'globo.com', src: '/parceiros/logo_globocom.png' },
  { name: 'H.Stern', src: '/parceiros/logo_hstern.png' },
  { name: 'MetrôRio', src: '/parceiros/logo_metrorio.png' },
  { name: 'Amsterdam Sauer', src: '/parceiros/logo_amsterdam_sauer.png' },
  { name: 'All Nations', src: '/parceiros/logo_allnations.png' },
  { name: 'Ibmec', src: '/parceiros/logo_ibemec.png' },
  { name: 'IBMR – Centro Universitário', src: '/parceiros/logo_ibmr.png' },
  { name: 'Prefeitura do Rio de Janeiro', src: '/parceiros/logo_prefeiturario.png' },
]

const chineseLogos: PartnerLogo[] = [
  { name: 'Huawei', src: '/parceiros/logo_huawei.png' },
  { name: 'ZTE', src: '/parceiros/logo_zte.png' },
  { name: 'State Grid Corporation of China', src: '/parceiros/logo_stategrid.png' },
]

// As respostas também alimentam o JSON-LD (FAQPage): o texto visível e o estruturado precisam ser iguais.
// Respostas começam pela resposta direta (AEO), depois trazem o contexto.
const faqItems: FaqItem[] = [
  {
    question: 'O que é um treinamento in company para executivos?',
    answer:
      'É um programa de idioma e cultura de negócios realizado dentro da própria empresa, planejado para os executivos e lideranças que lidam com outro país. No Centro Cultural China-Brasil Yuan Aiping, ele tem duas trilhas: mandarim e cultura chinesa para executivos brasileiros, e português e cultura brasileira para executivos chineses que trabalham no Brasil. São mais de 20 anos de experiência nesse tipo de treinamento.',
  },
  {
    question: 'O treinamento atende empresas brasileiras e empresas chinesas?',
    answer:
      'Sim. Empresas brasileiras que fazem negócios com a China preparam seus executivos em mandarim e na cultura empresarial chinesa. Empresas chinesas instaladas no Brasil capacitam seus executivos em português do Brasil e na cultura de trabalho brasileira. Os dois programas seguem o mesmo método, adaptado a cada público.',
  },
  {
    question: 'Por que um executivo brasileiro deveria aprender mandarim?',
    answer:
      'Porque a China é o maior parceiro comercial do Brasil e, nas relações com empresas chinesas, a confiança pesa tanto quanto o preço. Executivos que entendem o idioma e a cultura chinesa negociam melhor, evitam mal-entendidos e constroem relações mais sólidas. Mesmo um conhecimento básico de mandarim é recebido pelos chineses como um sinal claro de respeito e comprometimento.',
  },
  {
    question: 'Como funciona o curso de português para executivos chineses no Brasil?',
    answer:
      'O curso é realizado na empresa, com foco no português usado no trabalho: reuniões, liderança de equipes, atendimento a clientes e contato com fornecedores e instituições. Ele também prepara o executivo para entender a cultura brasileira, como a informalidade, a importância do relacionamento pessoal e a forma de dar e receber feedback. Executivos recém-chegados podem começar por um programa de ambientação.',
  },
  {
    question: 'Preciso ter conhecimento prévio do idioma para participar?',
    answer:
      'Não. Os programas atendem desde quem nunca estudou mandarim ou português até executivos que já falam o idioma e querem se aprofundar no vocabulário de negócios. Antes do início, avaliamos o nível de cada participante para definir o formato mais adequado.',
  },
  {
    question: 'Em quanto tempo um executivo consegue se comunicar no novo idioma?',
    answer:
      'Depende da carga horária, da frequência das aulas e do objetivo definido. Em programas de preparação para viagens ou de ambientação, o foco está em frases essenciais e etiqueta, com resultados em poucas semanas. Para quem precisa conversar com autonomia, o caminho é mais longo e planejado em etapas. No diagnóstico inicial, definimos metas realistas para o prazo da empresa.',
  },
  {
    question: 'Qual material didático é usado no treinamento?',
    answer:
      'Usamos a coleção própria do Centro Cultural China-Brasil, com 14 livros e 5 CDs, que inclui títulos de mandarim para falantes de português e de português do Brasil para chineses. O material pode ser conhecido em detalhes na página Livros e Publicações do site.',
  },
  {
    question: 'Como contratar o treinamento in company para executivos?',
    answer:
      'Basta entrar em contato pela nossa página de contato. Marcamos uma conversa para entender o objetivo da empresa, o idioma desejado, o número de participantes e a agenda dos executivos e, a partir disso, enviamos uma proposta personalizada.',
  },
]

const siteUrl = useRequestURL().origin
const pageUrl = `${siteUrl}/conexao-empresarial-estrategica/treinamento-executivos`
const organizationId = `${siteUrl}/#organization`
const executiveAudience = { '@type': 'BusinessAudience', name: 'Executivos e lideranças corporativas' }
const onsiteInstance = {
  '@type': 'CourseInstance',
  courseMode: 'onsite',
  location: { '@type': 'Place', name: 'Nas instalações da empresa contratante' },
}

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
      '@id': `${pageUrl}#mandarim`,
      name: 'Mandarim in company para executivos brasileiros',
      description: tracks[0]!.description,
      url: `${pageUrl}#trilha-mandarim`,
      inLanguage: 'zh',
      availableLanguage: ['pt-BR', 'zh'],
      teaches: ['Mandarim para negócios', 'Cultura e etiqueta empresarial chinesa', 'Negociação com empresas chinesas'],
      audience: executiveAudience,
      provider: { '@id': organizationId },
      hasCourseInstance: onsiteInstance,
    },
    {
      '@type': 'Course',
      '@id': `${pageUrl}#portugues`,
      name: 'Português in company para executivos chineses no Brasil',
      description: tracks[1]!.description,
      url: `${pageUrl}#trilha-portugues`,
      inLanguage: 'pt-BR',
      availableLanguage: ['zh', 'pt-BR'],
      teaches: ['Português do Brasil para negócios', 'Cultura empresarial brasileira', 'Liderança de equipes brasileiras'],
      audience: executiveAudience,
      provider: { '@id': organizationId },
      hasCourseInstance: onsiteInstance,
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Treinamento in company para executivos: mandarim e português para chineses',
      serviceType: 'Treinamento corporativo de idiomas',
      url: pageUrl,
      provider: { '@id': organizationId },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      audience: executiveAudience,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Formatos de treinamento in company',
        itemListElement: formats.map((format) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: format.title, description: format.description },
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
  <SectionTitle title="Treinamento de Executivos In Company" img="/img/incompany/incompanyheader.avif" />
  <TextContent>
    <!-- 1. Introdução: o primeiro parágrafo responde diretamente "o que é" e "para quem é" (AEO). -->
    <section class="page-section page-section--intro" aria-labelledby="intro-title">
      <p class="text-caption">Treinamento corporativo Brasil–China</p>
      <h2 id="intro-title">
        Treinamento in company para executivos: mandarim para brasileiros, português para chineses
      </h2>
      <p class="page-section__lead">
        O <strong>treinamento in company para executivos</strong> do Centro Cultural China-Brasil Yuan Aiping
        leva idioma e cultura de negócios para dentro da sua empresa, nos dois sentidos da ponte. Empresas
        brasileiras preparam seus executivos em <strong>mandarim e cultura empresarial chinesa</strong>.
        Empresas chinesas no Brasil capacitam suas lideranças em
        <strong>português do Brasil e cultura de trabalho brasileira</strong>.
      </p>
      <p class="page-section__lead">
        Há <strong>mais de 20 anos</strong> preparamos diretores, gerentes e executivos de algumas das
        <strong>principais empresas do país</strong>, e de multinacionais chinesas que escolheram o Brasil
        para crescer. Sabemos que a agenda de um executivo não tem espaço para desperdício: cada aula é
        pensada para virar prática já na próxima reunião, negociação ou viagem.
      </p>
    </section>

    <!-- 2. Números -->
    <section aria-label="Nossa experiência em números">
      <ul class="metrics-banner">
        <li class="metrics-banner__item">
          <span class="metrics-banner__number">+20</span>
          <span class="metrics-banner__text">Anos treinando executivos</span>
        </li>
        <li class="metrics-banner__item">
          <NuxtLink :to="booksRoute" class="metrics-banner__link">
            <span class="metrics-banner__number">14</span>
            <span class="metrics-banner__text">Livros didáticos próprios</span>
          </NuxtLink>
        </li>
        <li class="metrics-banner__item">
          <span class="metrics-banner__number">02</span>
          <span class="metrics-banner__text">Filiais na China</span>
        </li>
      </ul>
    </section>

    <!-- 3. Duas trilhas -->
    <section class="page-section" aria-labelledby="tracks-title">
      <p class="text-caption">Para quem é</p>
      <h2 id="tracks-title">Duas trilhas, uma mesma ponte entre Brasil e China</h2>
      <p class="page-section__lead">
        Seja a sua empresa brasileira ou chinesa, o objetivo é o mesmo: executivos que se comunicam com
        segurança e entendem a cultura de quem está do outro lado da mesa.
      </p>
      <div class="tracks">
        <article
          v-for="track in tracks"
          :id="track.id"
          :key="track.id"
          class="tracks__item"
          :aria-labelledby="`${track.id}-title`"
        >
          <span class="tracks__icon-wrap" aria-hidden="true">
            <svg
              class="tracks__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
              v-html="track.icon"
            />
          </span>
          <p class="tracks__audience">{{ track.audience }}</p>
          <h3 :id="`${track.id}-title`" class="tracks__title">{{ track.title }}</h3>
          <p class="tracks__text">{{ track.description }}</p>
          <ul class="tracks__points">
            <li v-for="point in track.points" :key="point">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                focusable="false"
                v-html="checkIcon"
              />
              {{ point }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- 4. Por que investir -->
    <section class="page-section" aria-labelledby="why-title">
      <p class="text-caption">Por que investir</p>
      <h2 id="why-title">Executivos que falam a língua do parceiro saem na frente</h2>
      <p class="page-section__lead">
        A China é o maior parceiro comercial do Brasil, mas os bons negócios não nascem apenas de uma
        planilha de preços. Eles nascem da confiança. Quando um executivo brasileiro cumprimenta, se
        apresenta e conduz parte da conversa em mandarim, a mensagem que chega do outro lado é clara:
        <em>esta empresa leva a parceria a sério</em>.
      </p>
      <p class="page-section__lead">
        O mesmo vale no caminho inverso. Um executivo chinês que fala português e entende o jeito
        brasileiro de trabalhar lidera melhor a equipe local, ganha a confiança de clientes e parceiros e
        resolve com mais rapidez o que antes dependia de intermediários.
      </p>
      <p class="page-section__lead">
        Em ambos os casos, muitos impasses não vêm do idioma, e sim de códigos culturais que passam
        despercebidos: a hierarquia na mesa, o tempo de cada decisão, o que é dito e o que fica implícito.
        Nosso treinamento prepara os seus executivos para os dois desafios.
      </p>
    </section>

    <!-- 5. O que o treinamento oferece -->
    <section class="page-section" aria-labelledby="benefits-title">
      <p class="text-caption">O que a sua empresa recebe</p>
      <h2 id="benefits-title">Um treinamento feito para a realidade do executivo</h2>
      <ul class="services-grid">
        <li v-for="item in benefits" :key="item.title" class="services-grid__item">
          <h3>
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
              v-html="item.icon"
            />
            {{ item.title }}
          </h3>
          <p>{{ item.description }}</p>
          <NuxtLink v-if="item.link" :to="item.link.to" class="text-link">
            {{ item.link.label }}
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
    </section>

    <!-- 6. Autoridade -->
    <section class="page-section" aria-labelledby="trust-title">
      <p class="text-caption">Quem confia no nosso trabalho</p>
      <h2 id="trust-title">Mais de duas décadas ao lado das principais empresas do país</h2>
      <p class="page-section__lead">
        Desde 2004, grandes nomes da energia, da mineração, do sistema financeiro, da comunicação, do varejo
        de luxo e da tecnologia confiaram no Centro Cultural China-Brasil para preparar seus executivos. E,
        do outro lado da ponte, multinacionais chinesas contaram conosco para ensinar português e cultura
        brasileira às suas lideranças no país.
      </p>

      <h3 class="page-section__subtitle">Empresas e instituições brasileiras</h3>
      <LogoStrip :logos="brazilianLogos" />

      <h3 class="page-section__subtitle">Multinacionais chinesas no Brasil</h3>
      <LogoStrip :logos="chineseLogos" />

      <p class="page-section__note">
        Nosso trabalho também é reconhecido do outro lado do mundo: o Centro Cultural foi eleito pelo
        governo chinês como uma das melhores escolas de mandarim do mundo.
      </p>
    </section>

    <!-- 7. Formatos -->
    <section class="page-section" aria-labelledby="formats-title">
      <p class="text-caption">Formatos</p>
      <h2 id="formats-title">O formato certo para cada executivo</h2>
      <p class="page-section__lead">
        Um diretor que embarca para a China no próximo trimestre tem necessidades diferentes de um executivo
        chinês que acaba de assumir uma operação no Brasil. Por isso, oferecemos formatos que se combinam
        conforme a realidade de cada empresa.
      </p>
      <ul class="formats">
        <li v-for="format in formats" :key="format.title" class="formats__item">
          <span class="formats__icon-wrap" aria-hidden="true">
            <svg
              class="formats__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
              v-html="format.icon"
            />
          </span>
          <h3 class="formats__title">{{ format.title }}</h3>
          <p class="formats__text">{{ format.description }}</p>
        </li>
      </ul>
    </section>

    <!-- 8. Como funciona -->
    <section class="page-section" aria-labelledby="method-title">
      <p class="text-caption">Como funciona</p>
      <h2 id="method-title">Do primeiro contato à primeira reunião no novo idioma</h2>
      <p class="page-section__lead">
        Um processo simples, transparente e ajustado à agenda dos seus executivos, com acompanhamento de
        perto em cada etapa.
      </p>
      <MethodTimeline :steps="methodSteps" />
      <p class="page-section__note">
        Precisa de apoio além da sala de aula? Conheça também a nossa
        <NuxtLink to="/conexao-empresarial-estrategica/consultoria">consultoria para negócios com a China</NuxtLink>
        e o
        <NuxtLink to="/conexao-empresarial-estrategica/acompanhamento-delegacoes">acompanhamento de delegações</NuxtLink>.
      </p>
    </section>

    <!-- 9. Fundadora -->
    <section class="page-section" aria-labelledby="founder-title">
      <p class="text-caption">Quem está por trás</p>
      <h2 id="founder-title">Ensinar um idioma é, antes de tudo, aproximar pessoas</h2>
      <p class="page-section__lead">
        O Centro Cultural foi fundado em 2004, no Rio de Janeiro, pela professora
        <strong>Yuan Aiping</strong>, autora da
        <NuxtLink :to="booksRoute">coleção didática que usamos em sala</NuxtLink>. Desde então, o nosso
        propósito continua o mesmo: derrubar as barreiras de idioma e cultura que separam brasileiros e
        chineses, para que pessoas e empresas se entendam de verdade e façam bons negócios juntas.
      </p>
    </section>

    <!-- 10. FAQ -->
    <section class="page-section" aria-labelledby="faq-title">
      <p class="text-caption">Dúvidas frequentes</p>
      <h2 id="faq-title">Perguntas frequentes sobre o treinamento in company para executivos</h2>
      <FaqList :items="faqItems" />
    </section>

    <!-- 11. CTA -->
    <section class="cta-section" aria-labelledby="cta-title" data-cy="incompany-cta">
      <h2 id="cta-title">Vamos preparar os seus executivos para o próximo negócio entre Brasil e China?</h2>
      <p>
        Mandarim para a sua liderança brasileira ou português para os seus executivos chineses: conte para a
        gente o que a sua empresa precisa. Em uma conversa rápida, entendemos o objetivo e montamos uma
        proposta de treinamento feita sob medida.
      </p>
      <NuxtLink to="/contato" class="cta-section__button">Solicitar proposta</NuxtLink>
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
    margin-bottom: $space-6;
    font-size: $font-size-body-lg;
    color: $color-muted-text;

    a {
      color: $color-primary-action;
      font-weight: $weight-semibold;
    }
  }

  &--intro &__lead:last-child {
    margin-bottom: 0;
  }

  // Especificidade extra para sobrepor o :deep(h3) do TextContent.
  & &__subtitle {
    margin: $space-10 0 $space-4;
    font-family: $font-body;
    font-size: $font-size-body-md;
    font-weight: $weight-semibold;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: $color-muted-text;
  }

  &__note {
    margin-top: $space-8;
    color: $color-muted-text;

    a {
      color: $color-primary-action;
      font-weight: $weight-semibold;
    }
  }
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  margin-top: $space-4;
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

  &__item,
  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__link {
    color: inherit;
    text-decoration: none;
    border-radius: $radius-md;
    @include focus-ring;

    &:hover .metrics-banner__text {
      color: $gold-300;
      text-decoration: underline;
    }
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
    transition: color $duration-normal $easing-brand;
  }
}

.tracks {
  display: grid;
  gap: $space-6;

  @include respond-to(lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    padding: $space-8 $space-6;
    background-color: $surface;
    border-top: 4px solid $color-highlight;
    border-radius: $radius-lg;
    scroll-margin-top: 120px;

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

  &__audience {
    margin-bottom: $space-2;
    color: $gold-700;
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  // Especificidade extra para sobrepor o :deep(h3) do TextContent.
  &__item &__title {
    margin: 0 0 $space-3;
    font-size: $font-size-heading-lg;
    line-height: 1.25;
  }

  &__text {
    margin-bottom: $space-5;
    color: $color-muted-text;
    line-height: 1.6;
  }

  &__points {
    display: grid;
    gap: $space-3;

    li {
      display: flex;
      gap: $space-3;
      line-height: 1.5;
    }

    svg {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      margin-top: 2px;
      color: $jade-600;
    }
  }
}

.services-grid {
  display: grid;
  gap: $space-6;
  margin-top: $space-8;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    padding: $space-6;
    background-color: $surface;
    border-top: 4px solid $red-950;
    border-radius: $radius-md;

    // Especificidade extra para sobrepor o :deep(h3) do TextContent.
    & h3 {
      display: flex;
      align-items: center;
      gap: $space-3;
      margin: 0 0 $space-3;
      font-size: $font-size-heading-md;
      color: $color-heading-text;
    }

    p {
      color: $color-muted-text;
      line-height: 1.6;
    }
  }

  &__icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    color: $jade-600;
  }
}

.formats {
  display: grid;
  gap: $space-6;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    padding: $space-8 $space-6;
    background-color: $white;
    border: $border-subtle;
    border-top: 4px solid $color-highlight;
    border-radius: $radius-lg;
    box-shadow: $shadow-card;
  }

  &__icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    margin-bottom: $space-4;
    border-radius: 50%;
    background-color: $red-900;
    color: $gold-500;
  }

  &__icon {
    width: 26px;
    height: 26px;
  }

  // Especificidade extra para sobrepor o :deep(h3) do TextContent.
  &__item &__title {
    margin: 0 0 $space-3;
    font-size: $font-size-heading-md;
  }

  &__text {
    color: $color-muted-text;
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
