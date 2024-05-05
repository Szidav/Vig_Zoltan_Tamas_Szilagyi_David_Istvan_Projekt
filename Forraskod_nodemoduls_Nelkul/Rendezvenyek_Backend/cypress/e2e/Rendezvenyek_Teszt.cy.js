describe('Rendezvények végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/api/rendezvenyek').as('rendezvenyekfetch');
    cy.get('@rendezvenyekfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    );
  })
})