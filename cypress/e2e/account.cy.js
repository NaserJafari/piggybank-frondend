describe('Testscenario: Je accountnaam aanpassen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click()
  });

    it('passes', () => {
        cy.visit("http://localhost:3000/settings")
        cy.get(".accountName-input").clear().type("Nieuwe naam")
        cy.get('button[type="submit"]').click()
        cy.get(".alert").should("be.visible")
    })
})