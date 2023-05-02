describe('Form e2e', () => {
  it('form', () => {
    cy.visit('/form');
    cy.get('input[name=name]').type('Name');
    cy.get('input[name=name]').should('have.value', 'Name');
  });
});
