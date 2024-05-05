describe('Header', () => {
  beforeEach('',()=>{
    cy.visit('http://localhost:5173/')
  })

  it('Header komponens teszt!',()=>{
    cy.get('h1').should('contains.text','Event Horizon')
  })
})