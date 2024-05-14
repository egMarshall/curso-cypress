describe('Página de login', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('Deve preencher os campos do login corretamente e autenticar o usuário no sistema',() => {

    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="input-loginEmail"]').type('abigaildo@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });

  it('Deve logar o usuário a partir do ícone de mensagens', () => {

    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type('abigaildo@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();

  });
});