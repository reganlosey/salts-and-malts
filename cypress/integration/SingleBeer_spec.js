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

  it('should display the current beer\'s name and tagline', () => {
    cy.get('.beer-name')
    .get('.name')
    .contains('Buzz')
    .get('.tagline')
    .contains('A Real Bitter Experience')
    
  })
})  