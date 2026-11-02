describe('AppHeader — navegação mobile (slideover)', () => {
  beforeEach(() => {
    cy.viewport(375, 812)
    cy.visit('/')
    cy.get('[data-cy="site-header"]').should('have.attr', 'data-hydrated', 'true')
  })

  it('renderiza um header fixo com HTML semântico e o botão de menu', () => {
    cy.get('header[data-cy="site-header"]').should('exist')
    cy.get('header[data-cy="site-header"]').should('have.css', 'position', 'fixed')
    cy.get('header[data-cy="site-header"]')
      .find('nav[data-cy="site-navigation"]')
      .should('exist')
    cy.get('[data-cy="nav-toggle"]').should('be.visible')
  })

  it('mantém o menu fechado por padrão', () => {
    cy.get('[data-cy="nav-toggle"]').should('have.attr', 'aria-expanded', 'false')
    cy.get('[data-cy="site-navigation"]').should('have.attr', 'data-open', 'false')
  })

  it('abre o slideover ao clicar no ícone hamburger', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.get('[data-cy="nav-toggle"]').should('have.attr', 'aria-expanded', 'true')
    cy.get('[data-cy="site-navigation"]').should('have.attr', 'data-open', 'true')
    cy.get('[data-cy="nav-backdrop"]').should('be.visible')
  })

  it('fecha o slideover ao clicar no botão de fechar', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.get('[data-cy="nav-close"]').click()
    cy.get('[data-cy="nav-toggle"]').should('have.attr', 'aria-expanded', 'false')
    cy.get('[data-cy="site-navigation"]').should('have.attr', 'data-open', 'false')
  })

  it('fecha o slideover ao clicar no backdrop', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.get('[data-cy="nav-backdrop"]').click({ force: true })
    cy.get('[data-cy="site-navigation"]').should('have.attr', 'data-open', 'false')
  })

  it('fecha o slideover ao pressionar Escape', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.get('[data-cy="site-navigation"]').should('have.attr', 'data-open', 'true')
    cy.get('body').type('{esc}')
    cy.get('[data-cy="site-navigation"]').should('have.attr', 'data-open', 'false')
  })

  it('lista os itens de primeiro nível do menu, na ordem correta', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.get('[data-cy="site-navigation"] > ul > li').should('have.length', 6)
    cy.get('[data-cy="site-navigation"] > ul > li').eq(0).should('contain.text', 'Página Inicial')
    cy.get('[data-cy="site-navigation"] > ul > li')
      .eq(1)
      .should('contain.text', 'Conexão Empresarial Estratégica China-Brasil')
    cy.get('[data-cy="site-navigation"] > ul > li').eq(2).should('contain.text', 'Livros e Publicações')
    cy.get('[data-cy="site-navigation"] > ul > li').eq(3).should('contain.text', 'Intercâmbio Cultural')
    cy.get('[data-cy="site-navigation"] > ul > li').eq(4).should('contain.text', 'Sobre a China-Brasil')
    cy.get('[data-cy="site-navigation"] > ul > li').eq(5).should('contain.text', 'Contato')
  })

  it('aponta os itens sem submenu para as rotas corretas', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.get('[data-cy="nav-link"]').contains('Página Inicial').should('have.attr', 'href', '/')
    cy.get('[data-cy="nav-link"]')
      .contains('Livros e Publicações')
      .should('have.attr', 'href', '/livros-e-publicacoes')
    cy.get('[data-cy="nav-link"]')
      .contains('Sobre a China-Brasil')
      .should('have.attr', 'href', '/sobre-a-china-brasil')
    cy.get('[data-cy="nav-link"]').contains('Contato').should('have.attr', 'href', '/contato')
  })

  it('expande "Conexão Empresarial Estratégica China-Brasil" e mostra seus filhos', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.contains('[data-cy="nav-submenu-toggle"]', 'Conexão Empresarial Estratégica China-Brasil').as(
      'conexaoToggle',
    )

    cy.get('@conexaoToggle').should('have.attr', 'aria-expanded', 'false')
    cy.get('@conexaoToggle').click()
    cy.get('@conexaoToggle').should('have.attr', 'aria-expanded', 'true')

    cy.contains('[data-cy="nav-submenu-toggle"]', 'Consultoria')
      .should('be.visible')
      .should('have.attr', 'aria-expanded', 'false')

    cy.get('[data-cy="nav-link"]')
      .contains('Networking')
      .should('be.visible')
      .should('have.attr', 'href', '/conexao-empresarial-estrategica/networking')

    cy.get('[data-cy="nav-link"]')
      .contains('Importação & Exportação')
      .should('have.attr', 'href', '/conexao-empresarial-estrategica/importacao-exportacao')

    cy.get('[data-cy="nav-link"]')
      .contains('Treinamento de executivos')
      .should('have.attr', 'href', '/conexao-empresarial-estrategica/treinamento-executivos')

    cy.get('[data-cy="nav-link"]')
      .contains('Acompanhamento de delegações')
      .should('have.attr', 'href', '/conexao-empresarial-estrategica/acompanhamento-delegacoes')
  })

  it('expande "Consultoria" (submenu de 3º nível) dentro de Conexão Empresarial', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.contains('[data-cy="nav-submenu-toggle"]', 'Conexão Empresarial Estratégica China-Brasil').click()
    cy.contains('[data-cy="nav-submenu-toggle"]', 'Consultoria').click()

    cy.get('[data-cy="nav-link"]')
      .contains('Estratégica')
      .should('be.visible')
      .should('have.attr', 'href', '/conexao-empresarial-estrategica/consultoria/estrategica')

    cy.get('[data-cy="nav-link"]')
      .contains('Tática')
      .should('have.attr', 'href', '/conexao-empresarial-estrategica/consultoria/tatica')

    cy.get('[data-cy="nav-link"]')
      .contains('Operacional')
      .should('have.attr', 'href', '/conexao-empresarial-estrategica/consultoria/operacional')
  })

  it('expande "Intercâmbio Cultural" e mostra a Filial Shangai / Pequim', () => {
    cy.get('[data-cy="nav-toggle"]').click()
    cy.contains('[data-cy="nav-submenu-toggle"]', 'Intercâmbio Cultural').click()
    cy.get('[data-cy="nav-link"]')
      .contains('Filial Shangai / Pequim')
      .should('be.visible')
      .should('have.attr', 'href', '/intercambio-cultural/filial-shanghai-pequim')
  })
})
