describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', 'actions')
    cy.get('.action-email').type('test@mail.com')
    cy.get('.action-email').should('have.value', 'test@mail.com')
  })
})