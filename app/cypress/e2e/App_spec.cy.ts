describe('App e2e', () => {
  it('should have a searh input', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
    cy.get('h1').should('have.text', 'Home');
    cy.get('input').type('text').should('have.value', 'text');
  });
  it('should have 3 link', () => {
    cy.visit('/');
    cy.get('li').should('have.length', 3);
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
  });
  it('should open a modal', () => {
    cy.visit('/');
    cy.get('.card__container:first').click();
    cy.get('.modal-card').should('exist');
    cy.get('.modal__close').click();
    cy.get('.modal-card').should('not.exist');
  });
});
