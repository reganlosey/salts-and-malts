describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('https://api.punkapi.com/v2/beers', {status: 200, fixture: 'beers'})
    cy.visit('http://localhost:3000/')
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true)
  })

  it('should visit the homepage at the base url', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should display the site\'s name and tagline', () => {
    cy.get('.header')
    .get('.site-name')
    .contains('salts and malts')
    .get('.tagline')
    .contains('a beer-food pairing app that rises in the yeast and sets in the waist')
  })


})