describe('Footer — rodapé do site', () => {
  beforeEach(() => {
    cy.viewport(1024, 900)
    cy.visit('/')
  })

  it('renderiza o footer semântico com o logo', () => {
    cy.get('footer[data-cy="site-footer"]').should('exist')
    cy.get('[data-cy="site-footer"] img').should('have.attr', 'src', '/logo.svg')
  })

  it('exibe os links principais do site', () => {
    const expected: Array<[string, string]> = [
      ['Home', '/'],
      ['Consultoria', '/conexao-empresarial-estrategica/consultoria'],
      ['Livros', '/livros-e-publicacoes'],
      ['Sobre', '/sobre-a-china-brasil'],
      ['Contato', '/contato'],
    ]

    cy.get('[data-cy="footer-nav-link"]').should('have.length', expected.length)

    expected.forEach(([label, href], index) => {
      cy.get('[data-cy="footer-nav-link"]')
        .eq(index)
        .should('contain.text', label)
        .and('have.attr', 'href', href)
    })
  })

  it('exibe os links legais', () => {
    const expected: Array<[string, string]> = [
      ['Política de Privacidade', '/politica-de-privacidade'],
      ['Termos de Uso', '/termos-de-uso'],
    ]

    cy.get('[data-cy="footer-legal-link"]').should('have.length', expected.length)

    expected.forEach(([label, href], index) => {
      cy.get('[data-cy="footer-legal-link"]')
        .eq(index)
        .should('contain.text', label)
        .and('have.attr', 'href', href)
    })
  })
})
