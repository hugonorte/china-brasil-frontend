/**
 * Assuntos do formulário de contato.
 *
 * O formulário envia apenas a `key`. O e-mail de destino é decidido no servidor
 * (backend/api/contato.php > SUBJECTS), nunca pelo navegador: assim ninguém
 * consegue usar o formulário para enviar mensagens a endereços arbitrários.
 * Ao incluir ou renomear uma chave aqui, atualize também o mapa no PHP.
 */
export const contactSubjectGroups = [
  {
    label: 'Consultoria',
    options: [
      { key: 'consultoria-abertura-empresas', label: 'Consultoria: abertura de empresas' },
      { key: 'consultoria-networking', label: 'Consultoria: networking' },
      { key: 'consultoria-delegacoes', label: 'Consultoria: acompanhamento de delegações' },
    ],
  },
  {
    label: 'Cursos',
    options: [
      { key: 'curso-formacao-professores', label: 'Curso de formação de professores' },
      { key: 'incompany-executivos-brasileiros', label: 'Cursos para executivos brasileiros in company' },
      { key: 'incompany-executivos-chineses', label: 'Cursos para executivos chineses in company' },
    ],
  },
  {
    label: 'Outros assuntos',
    options: [
      { key: 'palestras', label: 'Palestras' },
      { key: 'livros-duvidas', label: 'Livros didáticos: dúvidas gerais' },
      { key: 'intercambio', label: 'Intercâmbio' },
    ],
  },
] as const

export type ContactSubjectKey = (typeof contactSubjectGroups)[number]['options'][number]['key']

export const contactSubjectKeys = contactSubjectGroups.flatMap((group) =>
  group.options.map((option) => option.key),
) as [ContactSubjectKey, ...ContactSubjectKey[]]

export function isContactSubject(value: unknown): value is ContactSubjectKey {
  return typeof value === 'string' && (contactSubjectKeys as string[]).includes(value)
}
