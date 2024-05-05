describe('Backend teszt', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000')
    cy.contains("Rendezvények Backend");
  })
})