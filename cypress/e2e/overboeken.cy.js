describe('Testscenario: Geld overmaken naar een andere rekening met een positief saldo.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click()
  });

  it('passes', () => {
    cy.visit("http://localhost:3000/transfer")
    cy.get(".toaccount").select("Sara Ravestein")
    cy.get(".transfer__currency").select("EURO")
    cy.get(".amount-input").type("250")
    cy.get(".description").type("Kleine lening")
    cy.get('button[type="submit"]').click()
    cy.visit("http://localhost:3000/transactions")
  })
})

describe('Testscenario: Meer geld overmaken dan je saldo naar een andere rekening.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click()
  });

  it('passes', () => {
    cy.visit("http://localhost:3000/transfer")
    cy.get(".toaccount").select("Sara Ravestein")
    cy.get(".transfer__currency").select("EURO")
    cy.get(".amount-input").type("2000")
    cy.get(".description").type("Lening auto")
    cy.get('button[type="submit"]').click()
    cy.visit("http://localhost:3000/transactions")
  })
})

describe('Testscenario: Geld overmaken zonder een bedrag in te vullen.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click()
  });

  it('passes', () => {
    cy.visit("http://localhost:3000/transfer")
    cy.get(".toaccount").select("Sara Ravestein")
    cy.get(".transfer__currency").select("EURO")
    cy.get(".description").type("Lening auto")
    cy.get('button[type="submit"]').click()
  })
})

describe('Testscenario: Geld overmaken zonder een omschrijving in te vullen.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click()
  });

  it('passes', () => {
    cy.visit("http://localhost:3000/transfer")
    cy.get(".toaccount").select("Sara Ravestein")
    cy.get(".transfer__currency").select("EURO")
    cy.get(".amount-input").type("2000")
    cy.get('button[type="submit"]').click()
  })
})

describe('Testscenario: Geld overmaken zonder een naar rekening, dus niemand kiezen.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click()
  });

  it('passes', () => {
    cy.visit("http://localhost:3000/transfer")
    cy.get(".transfer__currency").select("EURO")
    cy.get(".amount-input").type("250")
    cy.get(".description").type("Kleine lening")
    cy.get('button[type="submit"]').click()
  })
})

describe('Testscenario: Geld overmaken in een vreemde valuta.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click()
  });

  it('passes', () => {
    cy.visit("http://localhost:3000/transfer")
    cy.get(".toaccount").select("Sara Ravestein")
    cy.get(".transfer__currency").select("USD")
    cy.get(".amount-input").type("1")
    cy.get(".description").type("Vreem valuta")
    cy.get('button[type="submit"]').click()
    cy.visit("http://localhost:3000/transactions")
  })
})