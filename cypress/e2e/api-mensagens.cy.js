describe('API AdoPet', () => {
  // const tempoEsperado = Math.random() * 1000; //exemplo para flaky test.

  it('Deve retornar as mensagens do usuário', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopetapi-pgks.onrender.com/mensagem/14451c6b-5431-4bbe-8851-56b85633f360',
      headers: Cypress.env()
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.have.property('msg');
      // expect(response.duration).to.be.lte(tempoEsperado); //lte = less than or equal
    })
  });

  it('Nome do perfil', () => {
    cy.request({
        method: 'GET' ,
        url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
        headers: Cypress.env()
       
    }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('perfil')
    expect(res.body.perfil.nome).to.be.equal('camila')
                     
    })
})

});