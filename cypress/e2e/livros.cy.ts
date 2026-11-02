describe('Livros — seção da livraria virtual na home', () => {
  beforeEach(() => {
    cy.viewport(375, 812)
    cy.visit('/')
  })

  it('exibe o título, o texto de apoio e o botão de ação', () => {
    cy.get('[data-cy="livros"] h2').should('have.text', 'Livraria Virtual')
    cy.get('[data-cy="livros"]').should(
      'contain.text',
      'Encontre aqui todo o conteúdo editorial produzido pelo Centro Cultural China-Brasil',
    )
    cy.get('[data-cy="livros-cta"]').should('be.visible').and('contain.text', 'Veja mais')
    cy.get('[data-cy="livros-cta"]').should('have.attr', 'href', '/livros-e-publicacoes')
  })
})
