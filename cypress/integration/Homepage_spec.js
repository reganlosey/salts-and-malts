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
    .get(':nth-child(1) > .info-link')
    .contains('click here to see more')
  })

  it('should have a link to the specific beer\'s details in each card', () => {
    cy.get('.homepage-grid')
    .get('.homepage-grid > :nth-child(1)')
    .get(':nth-child(1) > .info-link')
    .should('have.attr', 'href', '/1')
  })


})