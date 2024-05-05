describe('Navbar komponens teszt', () => {
  beforeEach('',()=>{
    cy.visit('http://localhost:5173/')
  })

  it('Első menüpont teszt!',()=>{
    cy.get('li').should('contains.text','Főoldal')
  })

  it('Második menüpont teszt!',()=>{
    cy.get('li').should('contains.text','Rendezvények')
  })

  it('Harmadik menüpont teszt!',()=>{
    cy.get('li').should('contains.text','Bejelentkezés')
  })
})