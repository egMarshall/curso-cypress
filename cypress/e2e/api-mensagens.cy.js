describe('API AdoPet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcwOTA0MTMwNSwiZXhwIjoxNzA5MzAwNTA1fQ.nhiaUyKdvN8RVxCkvne2gyI5n_pYnY_OMMdogMMqOlc`;

  it('Deve retornar as mensagens do usuário', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
      headers: {
        authorization
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.have.property('msg');
    })
  });

});