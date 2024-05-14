describe('Página Inicial', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('Deve exibir o título da página', () => {
    cy.get('title').should('have.text', 'AdoPet');
  })

  it('Deve exibir o texto "Quem Ama Adota"', () => {
    cy.contains('Quem ama adota').should('be.visible');
  });

  it('Deve exibir o texto da campanha para adoção', () => {
    cy.contains('dotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  })

});