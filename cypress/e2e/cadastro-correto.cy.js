describe('Página de Cadastro', () => {
  it('Deve preencher o campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');

    cy.get('[data-test="register-button"]').click();

    cy.register('Abigaildo', 'abigaildo@email.com', 'Senha123');
  });

});