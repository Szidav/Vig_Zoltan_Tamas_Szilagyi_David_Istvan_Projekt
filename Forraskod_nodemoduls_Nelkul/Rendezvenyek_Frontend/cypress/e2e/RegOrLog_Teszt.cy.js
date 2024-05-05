describe('RegOrLog komponens teszt', () => {
  beforeEach('',()=>{
    cy.visit('http://localhost:5173/regorlog')
  })

  it('Első label komponens teszt!',()=>{
    cy.get('label').should('contains.text','E-mail cím')
  })
})