describe('API AdoPet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcwOTA0MTMwNSwiZXhwIjoxNzA5MzAwNTA1fQ.nhiaUyKdvN8RVxCkvne2gyI5n_pYnY_OMMdogMMqOlc`;

  it('Deve retornar as mensagens do usuário', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopetapi-pgks.onrender.com/mensagem/14451c6b-5431-4bbe-8851-56b85633f360',
      headers: {
        authorization
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.have.property('msg');
    })
  });

  it('Nome do perfil', () => {
    cy.request({
        method: 'GET' ,
        url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
        headers: { authorization }
       
    }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('perfil')
    expect(res.body.perfil.nome).to.be.equal('camila')
                     
    })
})

});