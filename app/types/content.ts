// Tipos dos blocos de conteúdo reutilizáveis (linha do tempo, casos, equipe, depoimentos, FAQ).

export interface MethodStep {
  title: string
  description: string
}

export interface CaseStudy {
  /** Segmento ou perfil do cliente, ex.: "Indústria de máquinas agrícolas (PR)" */
  sector: string
  title: string
  challenge: string
  approach: string
  result: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  /** Caminho em /public, ex.: "/img/equipe/nome.avif" */
  photo?: string
  /** Idiomas, formação, anos de atuação na China etc. */
  credentials?: string[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  photo?: string
}

export interface PartnerLogo {
  name: string
  /** Caminho em /public, ex.: "/img/parceiros/nome.svg" */
  src: string
  href?: string
}

/** Livro do catálogo — espelha as chaves de /livros.json. */
export interface Livro {
  titulo: string
  link_para_compra: string
  descricao: string
  ano_de_publicacao: number | null
  autora: string | null
  /** Ex.: "165 X 240 mm" */
  tamanho: string | null
  image_path: string
}

export interface FaqItem {
  question: string
  answer: string
}
