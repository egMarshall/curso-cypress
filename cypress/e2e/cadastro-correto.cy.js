describe('Página de Cadastro', () => {
  it('Deve preencher o campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');

    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Abigaildo');
    cy.get('[data-test="input-email"]').type('abigaildo@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });

});