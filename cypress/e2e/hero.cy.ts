describe('Hero — carousel de abertura da home', () => {
  beforeEach(() => {
    cy.viewport(375, 812)
    cy.visit('/')
  })

  it('mantém o H1 da página', () => {
    cy.get('[data-cy="hero"] h1').should('have.text', 'Conexão Empresarial China-Brasil')
  })

  it('renderiza 3 slides na ordem: in company, consultoria, livros', () => {
    cy.get('[data-cy="carousel-slide"]').should('have.length', 3)
    cy.get('[data-cy="carousel-slide"]').eq(0).find('img').should('have.attr', 'src').and('include', '01.avif')
    cy.get('[data-cy="carousel-slide"]').eq(0).should('contain.text', 'Curso in company')
    cy.get('[data-cy="carousel-slide"]').eq(1).should('contain.text', 'Consultoria')
    cy.get('[data-cy="carousel-slide"]').eq(2).should('contain.text', 'Livros didáticos')
  })

  it('exibe o CTA "Veja Mais" do slide ativo', () => {
    cy.get('[data-cy="carousel-slide"].is-active [data-cy="carousel-cta"]')
      .should('be.visible')
      .and('contain.text', 'Veja Mais')
      .and('have.attr', 'href', '/conexao-empresarial-estrategica/treinamento-executivos')
  })

  it('navega entre os slides pelos controles', () => {
    cy.get('[data-cy="carousel-pause"]').click()
    cy.get('[data-cy="carousel-next"]').click()
    cy.get('[data-cy="carousel-slide"]').eq(1).should('have.class', 'is-active')
    cy.get('[data-cy="carousel-dot"]').eq(2).click()
    cy.get('[data-cy="carousel-slide"]').eq(2).should('have.class', 'is-active')
    cy.get('[data-cy="carousel-next"]').click()
    cy.get('[data-cy="carousel-slide"]').eq(0).should('have.class', 'is-active')
  })
})
