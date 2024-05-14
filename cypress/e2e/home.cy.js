describe('Página Home', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  });

  it("Clica no botão “Falar com o responsável”", () => {
    cy.contains('Falar com responsável').click({multiple: true});  
  });

  it("Retorna para a principal do AdoPet através do botão de home", () => {
    cy.get('.header__home').click();
    cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/')
  });
})