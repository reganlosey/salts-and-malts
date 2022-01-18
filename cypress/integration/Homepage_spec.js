describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('https://api.punkapi.com/v2/beers', { status: 200, fixture: 'beers' });
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
      .contains('Salts and Malts')
      .get('.site-tagline')
      .contains('A beer-food pairing app that rises in the yeast and sets in the waist')
  })

  it('should display cards on a grid that contain beer details', () => {
    cy.get('.homepage-grid')
      .get('.homepage-grid > :nth-child(1)')
      .get(':nth-child(1) > .text-container >  .card-name')
      .contains('Buzz')
      .get('.text-container > :nth-child(2)')
      .contains('ABV: 4.5')
      .get('.text-container > :nth-child(3)')
      .contains('IBU: 60')
      .get('.text-container > a')
      .contains('More about this brew')
  })

  it('should have a link to the specific beer\'s details in each card', () => {
    cy.get('.homepage-grid')
      .get('.homepage-grid > :nth-child(1)')
      .get(':nth-child(1) > .text-container')
      .get(':nth-child(1) > .text-container > a')
      .should('have.attr', 'href', '/1')
  })

  it('should have button with beer type labels', () => {
    cy.get('.button-container')
      .get('.lager')
      .should('have.attr', 'name', 'lager')
      .contains('Lagers')
      .get('.ale')
      .should('have.attr', 'name', 'ale')
      .contains('Ales')
      .get('.ipa')
      .should('have.attr', 'name', 'ipa')
      .contains('Ipas')
      .get('.saison')
      .should('have.attr', 'name', 'saison')
      .contains('Saisons')
      .get('.reset')
      .should('have.attr', 'name', 'allBeers')
      .contains('All Beers')
  })

  it('should sort the beer cards according to button name', () => {
    cy.get('.button-container')
      .get('.lager')
      .click()
      .get('.homepage-grid')
      .get('.beer-card > .text-container > .card-name')
      .contains('Pilsen Lager')
  })

  it('should display all cards on click of all beers button', () => {
    cy.get('.button-container')
      .get('.reset')
      .click()
      .get('.homepage-grid')
      .get('.homepage-grid > :nth-child(1)')
      .get(':nth-child(1) > .text-container >  .card-name')
      .contains('Buzz')
      .get('.text-container > :nth-child(2)')
      .contains('ABV: 4.5')
      .get('.text-container > :nth-child(3)')
      .contains('IBU: 60')
      .get('.text-container > a')
      .contains('More about this brew')
  })

  it('should redirect to the clicked beer\'s page on click of link', () => {
    cy.get('.button-container')
      .get('.reset')
      .click()
      .get('.homepage-grid')
      .get(':nth-child(1) > .text-container >  a')
      // .get(':nth-child(1) > .info-container > .info-link')
      .click()
      .get('.button-container').should('not.exist')
  })
})