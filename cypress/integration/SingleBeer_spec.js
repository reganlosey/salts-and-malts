describe('Single Beer Page', () => {
  beforeEach(() => {
    cy.intercept('https://api.punkapi.com/v2/beer/1', { status: 200, fixture: 'beers' })
    cy.visit('http://localhost:3000/#/1/');
  })
  it('should have a sample test',() => {
    expect(true).to.equal(true)
  })

  it('should have a url corresponding to the current beer\'s id', () => {
    cy.url().should('eq', 'http://localhost:3000/#/1/')
  })

  it('should still be displaying the header component', () => {
    cy.get('.header')
    .get('.site-name')
    .contains('Salts and Malts')
    .get('.site-tagline')
    .contains('A beer-food pairing app that rises in the yeast and sets in the waist')

  })

  it('should display the current beer\'s name, tagline and description', () => {
    cy.get('.beer-container')
    .get('.basic-info')
    .get('.name')
    .contains('Buzz')
    .get('.tagline')
    .contains('A Real Bitter Experience')
  })

  it('should have more detailed info about the beer', () => {
    cy.get('.details')
    .get(':nth-child(1)')
    .contains('Prominent Hops: Fuggles')
    .get(':nth-child(2)')
    .contains('Alcohol By Volume: 4.5')
    .get(':nth-child(3)')
    .contains('International Bitterness Units: 60')
    cy.get('.pairings')
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
    cy.url().should('eq','http://localhost:3000/#/')
    .get('.homepage-grid > :nth-child(1)')
    .get(':nth-child(1)')
    .contains('Buzz')
  })
})  