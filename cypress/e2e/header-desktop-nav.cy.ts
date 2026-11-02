describe('AppHeader — navegação horizontal (desktop, >= md)', () => {
  it('exibe os links de desktop e esconde o hamburger em telas >= md', () => {
    cy.viewport(1024, 768)
    cy.visit('/')
    cy.get('[data-cy="site-header"]').should('have.attr', 'data-hydrated', 'true')

    cy.get('[data-cy="desktop-nav"]').should('be.visible')
    cy.get('[data-cy="nav-toggle"]').should('not.be.visible')

    const expected: Array<[string, string]> = [
      ['Home', '/'],
      ['Consultoria', '/conexao-empresarial-estrategica/consultoria'],
      ['Livros', '/livros-e-publicacoes'],
      ['Sobre', '/sobre-a-china-brasil'],
      ['Contato', '/contato'],
    ]

    cy.get('[data-cy="desktop-nav-link"]').should('have.length', expected.length)

    expected.forEach(([label, href], index) => {
      cy.get('[data-cy="desktop-nav-link"]')
        .eq(index)
        .should('have.text', label)
        .and('have.attr', 'href', href)
    })
  })

  it('esconde a navegação de desktop e mantém o hamburger em telas mobile (< md)', () => {
    cy.viewport(375, 812)
    cy.visit('/')
    cy.get('[data-cy="site-header"]').should('have.attr', 'data-hydrated', 'true')

    cy.get('[data-cy="desktop-nav"]').should('not.be.visible')
    cy.get('[data-cy="nav-toggle"]').should('be.visible')
  })
})
