describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('https://api.punkapi.com/v2/beers', {status: 200, fixture: 'beers'});
    cy.visit('http://localhost:3000/');
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true);
  })

  it('should visit the homepage at the base url', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('should display the site\'s name and tagline', () => {
    cy.get('.header')
    .get('.site-name')
    .contains('salts and malts')
    .get('.tagline')
    .contains('a beer-food pairing app that rises in the yeast and sets in the waist')
  })

  it('should display cards on a grid that contain beer details', () => {
    cy.get('.homepage-grid')
    .get('.homepage-grid > :nth-child(1)')
    .get(':nth-child(1) > :nth-child(1)')
    .contains('Buzz')
    .get(':nth-child(1) > :nth-child(2)')
    .contains('abv: 4.5')
    .get(':nth-child(1) > :nth-child(3)')
    .contains('ibu: 60')
    .get('.info-container > .info-link')
    .contains('see the salts that pair with this malt')
  })

  it('should have a link to the specific beer\'s details in each card', () => {
    cy.get('.homepage-grid')
    .get('.homepage-grid > :nth-child(1)')
    .get('.info-container > .info-link')
    .should('have.attr', 'href', '/1')
  })

  it('should have button with beer type labels', () => {
    cy.get('.button-container')
    .get('.lager')
    .should('have.attr', 'name', 'lager')
    .contains('lagers')
    .get('.ale')
    .should('have.attr', 'name', 'ale')
    .contains('ales')
    .get('.ipa')
    .should('have.attr', 'name', 'ipa')
    .contains('ipas')
    .get('.saisons')
    .should('have.attr', 'name', 'saison')
    .contains('saisons')
    .get('.reset')
    .should('have.attr', 'name', 'allBeers')
    .contains('all beers')
  })

  it('should be able to sort the beer cards according to button name', () => {
    cy.get('.button-container')
    .get('.lager')
    .click()
    .get('.homepage-grid')
    .get('.beer-card > :nth-child(1)')
    .contains('Pilsen Lager')
  })


})