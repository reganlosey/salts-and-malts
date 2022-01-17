describe('Single Beer Page', () => {
  beforeEach(() => {
    cy.intercept('https://api.punkapi.com/v2/beer/1', { status: 200, fixture: 'beers' })
    cy.visit('http://localhost:3000/1');
  })
  it('should have a sample test',() => {
    expect(true).to.equal(true)
  })

  it('should have a url corresponding to the current beer\'s id', () => {
    cy.url().should('eq', 'http://localhost:3000/1')
  })

  it('should still be displaying the header component', () => {
    cy.get('.header')
    .get('.site-name')
    .contains('salts and malts')
    .get('.tagline')
    .contains('a beer-food pairing app that rises in the yeast and sets in the waist')

  })

  it('should display the current beer\'s name and tagline', () => {
    cy.get('.beer-name')
    .get('.name')
    .contains('Buzz')
    .get('.tagline')
    .contains('A Real Bitter Experience')
  })

  it('should have more detailed info about the beer', () => {
    cy.get('.beer-info')
    .contains('about this brew')
    .get('.abv')
    .contains('abv: 4.5')
    .get('.ibu')
    .contains('ibu: 60')
    .get('.pairings')
    .get(':nth-child(1)')
    .contains('Spicy chicken tikka masala')
    .get(':nth-child(2)')
    .contains('Grilled chicken quesadilla')
    .get(':nth-child(3)')
    .contains('Caramel toffee cake')
  })

  it('should navigate back to the homepage on click of the site\'s name', () => {
    cy.get('.header')
    .get('.site-name')
    .click()
    .get('beer-info').should('not.exist')
    cy.url().should('eq','http://localhost:3000/')
    .get('.homepage-grid > :nth-child(1)')
    .get(':nth-child(1)')
    .contains('Buzz')
  })
})  