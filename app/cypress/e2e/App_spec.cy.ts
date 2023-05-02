describe('App e2e', () => {
  it('should have a searh input', () => {
    cy.visit('/');
    cy.get('.home__loading').should('have.text', 'Loading...');
    cy.get('input').should('have.value', '');
    cy.get('h1').should('have.text', 'Home');
    cy.get('input').type('text');
    cy.get('input').should('have.value', 'text');
  });
  it('should have 3 link', () => {
    cy.visit('/');
    cy.get('li').should('have.length', 3);
  });
  it('routing', () => {
    cy.visit('/');
    cy.contains('About us').click();
    cy.get('h1').should('have.text', 'About us');
    cy.contains('Form').click();
    cy.get('h2').should('have.text', 'Form');
    cy.contains('Home').click();
    cy.get('h1').should('have.text', 'Home');
  });
  it('should have an about page', () => {
    cy.visit('/about');
    cy.get('h1').should('have.text', 'About us');
  });
  it('should have a form page', () => {
    cy.visit('/form');
    cy.get('h2').should('have.text', 'Form');
  });
  it('should have a 404 page', () => {
    cy.visit('/404');
    cy.get('h2').should('have.text', 'Not Found');
  });
  it('should have a card', () => {
    cy.visit('/');
    cy.get('.card__container').should('have.class', 'card__container');
    cy.get('.home__loading').should('not.exist');
  });
  it('should open a modal', () => {
    cy.intercept('https://rickandmortyapi.com/api/character/1').as('fetchCard');
    cy.visit('/');
    cy.get('.card__container:first').click();
    cy.get('.modal-card').should('exist');
    cy.contains('LOADING...').should('exist');
    cy.wait('@fetchCard');
    cy.contains('Status').should('exist');
    cy.contains('LOADING...').should('not.exist');
    cy.get('.modal__close').click({ force: true });
    cy.get('.modal-card').should('not.exist');
  });
  it('active link', () => {
    cy.visit('/');
    cy.get('a:first').should('have.class', 'nav__link nav__link_active');
    cy.contains('About us').click();
    cy.get('a:last').should('have.class', 'nav__link nav__link_active');
    cy.get('a:first').should('have.class', 'nav__link');
  });
  it('redirect to 404', () => {
    cy.visit('/notexist');
    cy.get('h2').should('have.text', 'Not Found');
  });
});
