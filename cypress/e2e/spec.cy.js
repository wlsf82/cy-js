describe('JS fixture', () => {
  it('runs a simple JavaScript code defined in a fixture file', () => {
    cy.visit('https://DuckDuckGo.com')
    cy.fixture('greet').then(greeting => {
      cy.log(greeting)
      const subject = greeting.replace('Hi, ', '').toLowerCase()
      cy.get('input[type="text"]')
        .type(`${subject}{enter}`)
      cy.get('[data-testid="result"]')
        .first()
        .should('contain', subject)
    })
  })
})