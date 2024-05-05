
describe('Rendezvények post teszt', () => {
  it('rendezveny post', () => {
    cy.request({
      method:'POST',
      url:'http://localhost:8000/api/rendezvenyek',
      body:{
        nev:'Országos Star Wars Rajongói Találkozó',
        hely_cim:'Budapest, Haller utca 27',
        eloadok:'501.Légió, Lázadó Légió,',
        kezdo_d:'2024-04-22',
        veg_d:'2024-04-22',
        max_letszam:80000,
        kep:'https://starwarsmedia.hu/thumb.php?src=e_MEDIA_IMAGE%2F2023-02%2Fswrajongoi_tal23.png&w=900&h=675'
      }
    }).as('@rendezvenypost').then(
      res=>{
        expect(res.status).to.eq(201);
        expect(res.body).has.property('message','Új rendezvény beillesztve!')
      }
    );
  })
})