describe('Página de login', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode: 400,}).as('stubPost');
  });

  it('Deve falhar mesmo com os campos preenchidos corretamente', () => {
    cy.login('abigaildo@email.com', 'Senha123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais').should('be.visible');
  });
  

  it('Deve preencher o email em um formato inválido', () => {
    cy.get('[data-test="input-loginEmail"]').type('abigaildoemail.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
  })

  it('Deve preencher a senha em um formato inválido', () => {
    cy.get('[data-test="input-loginEmail"]').type('abigaildo@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
  });
});