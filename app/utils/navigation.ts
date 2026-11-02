export interface NavItem {
  label: string
  to?: string
  children?: NavItem[]
}

export interface NavLink {
  label: string
  to: string
}

/**
 * Versão enxuta do menu, usada apenas na navegação horizontal de telas
 * a partir de `md` no AppHeader. O menu completo (com submenus) continua
 * disponível no slideover mobile via `navigationMenu`.
 */
export const desktopNavLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'In Company', to: '/conexao-empresarial-estrategica/treinamento-executivos' },
  { label: 'Consultoria', to: '/conexao-empresarial-estrategica/consultoria' },
  { label: 'Livros', to: '/livros-e-publicacoes' },
  { label: 'Sobre', to: '/sobre-a-china-brasil' },
  { label: 'Contato', to: '/contato' },
]

/** Hyperlinks legais exibidos no rodapé do site. */
export const legalLinks: NavLink[] = [
  { label: 'Política de Privacidade', to: '/politica-de-privacidade' },
  { label: 'Termos de Uso', to: '/termos-de-uso' },
]

export const navigationMenu: NavItem[] = [
  {
    label: 'Página Inicial',
    to: '/',
  },
  {
    label: 'Conexão Empresarial Estratégica China-Brasil',
    children: [
      {
        label: 'Consultoria',
        children: [
          { label: 'Estratégica', to: '/conexao-empresarial-estrategica/consultoria/estrategica' },
          { label: 'Tática', to: '/conexao-empresarial-estrategica/consultoria/tatica' },
          { label: 'Operacional', to: '/conexao-empresarial-estrategica/consultoria/operacional' },
        ],
      },
      { label: 'Networking', to: '/conexao-empresarial-estrategica/networking' },
      { label: 'Importação & Exportação', to: '/conexao-empresarial-estrategica/importacao-exportacao' },
      { label: 'Treinamento de executivos', to: '/conexao-empresarial-estrategica/treinamento-executivos' },
      { label: 'Acompanhamento de delegações', to: '/conexao-empresarial-estrategica/acompanhamento-delegacoes' },
    ],
  },
  {
    label: 'Livros e Publicações',
    to: '/livros-e-publicacoes',
  },
  {
    label: 'Intercâmbio Cultural',
    children: [
      { label: 'Filial Shangai / Pequim', to: '/intercambio-cultural/filial-shanghai-pequim' },
    ],
  },
  {
    label: 'Sobre a China-Brasil',
    to: '/sobre-a-china-brasil',
  },
  {
    label: 'Contato',
    to: '/contato',
  },
]
