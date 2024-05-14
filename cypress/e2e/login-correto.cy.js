describe('Página de login', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('Deve preencher os campos do login corretamente e autenticar o usuário no sistema',() => {

    cy.get('[data-test="login-button"]').click();
    cy.login('abigaildo@email.com', 'Senha123');
  });

  it('Deve logar o usuário a partir do ícone de mensagens', () => {

    cy.get('.header__message').click();
    cy.login('abigaildo@email.com', 'Senha123');
  });
});