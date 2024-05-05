describe('Kedvezmeny Típusok végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/api/kedvezmeny_tipusok').as('tipusokfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    );
  })
})