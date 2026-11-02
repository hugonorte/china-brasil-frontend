import type { Livro } from '~/types/content'

export type LivroTema = 'mandarim' | 'portugues' | 'infantil' | 'negocios' | 'viagem' | 'caligrafia'

export interface LivroCategoria {
  tema: LivroTema
  /** Rótulo exibido no card e usado como `genre` no JSON-LD. */
  label: string
  /** Nível do curso, quando o título informa. */
  nivel?: string
  /** Kits com vários livros/CDs. */
  isKit: boolean
}

const normalize = (value: string) => value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

/**
 * Deriva categoria e nível a partir do título e da descrição do livro,
 * já que o livros.json não traz esses campos.
 */
export function getLivroCategoria(livro: Livro): LivroCategoria {
  const titulo = normalize(livro.titulo)
  const descricao = normalize(livro.descricao)

  let tema: LivroTema = 'mandarim'
  let label = 'Mandarim para brasileiros'

  if (titulo.includes('portugues')) {
    tema = 'portugues'
    label = 'Português para chineses'
  } else if (titulo.includes('criancas')) {
    tema = 'infantil'
    label = 'Mandarim infantil'
  } else if (titulo.includes('negocios')) {
    tema = 'negocios'
    label = 'Mandarim para negócios'
  } else if (titulo.includes('vou para a china')) {
    tema = 'viagem'
    label = 'Guia de viagem'
  } else if (titulo.includes('ideograma') || titulo.includes('caderno')) {
    tema = 'caligrafia'
    label = 'Caligrafia chinesa'
  }

  const nivelMatch = titulo.match(/basico|intermediario|avancado/)
  const niveis: Record<string, string> = {
    basico: 'Básico',
    intermediario: 'Intermediário',
    avancado: 'Avançado',
  }

  return {
    tema,
    label,
    nivel: nivelMatch ? niveis[nivelMatch[0]] : undefined,
    isKit: /\bkit\b/.test(descricao),
  }
}

/** Divide a descrição em parágrafos (o JSON usa quebras de linha). */
export function getLivroParagrafos(descricao: string): string[] {
  return descricao
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}
