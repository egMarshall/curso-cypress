import Cadastro from '../support/pages/cadastro/pagina-cadastro';

describe('Página de Cadastro', () => {
  it('Deve preencher o campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');

    cy.get('[data-test="register-button"]').click();

    cy.register('Abigaildo', 'abigaildo@email.com', 'Senha123');
  });

});



describe('Página de cadastro com Page Objects', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-iota.vercel.app/');
    })
           
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            Cadastro.acessarPaginaDeCadastro();
            Cadastro.preencherFormulario();
            Cadastro.submeterCadastro();
       
        })
     })
