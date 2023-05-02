describe('Form e2e', () => {
  it('form', () => {
    cy.visit('/form');
    cy.get('input[name=name]').type('Name');
    cy.get('input[name=name]').should('have.value', 'Name');
    cy.get('input[name=date]').type('2023-01-01');
    cy.get('input[name=date]').should('have.value', '2023-01-01');
    cy.get('select').select('other');
    cy.get('select').should('have.value', 'other');
    cy.get('input[type=radio]').first().check();
    cy.get('input[type=radio]').first().should('be.checked');
    cy.get('input[type=file]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.jpg',
      lastModified: Date.now(),
    });
    cy.get('input[type=checkbox]').first().check();
    cy.get('input[type=checkbox]').should('be.checked');
    cy.get('form').submit();
    cy.get('.form-card').should('exist');
    cy.get('input[name=name]').should('have.value', '');
    cy.get('input[name=date]').should('have.value', '');
    cy.get('select').select('-- select --');
    cy.get('input[type=radio]').first().should('not.be.checked');
    cy.get('input[type=checkbox]').should('not.be.checked');
  });
  it('shoud required fields', () => {
    cy.visit('/form');
    cy.get('input[name=name]').should('have.class', 'form__field');
    cy.get('input[name=date]').should('have.class', 'form__field');
    cy.get('select').should('have.value', '');
    cy.get('select').should('have.class', 'form__field');
    cy.get('form').submit();
    cy.get('p:first').should('have.text', 'Enter your name');
    cy.get('p:last').should('have.text', 'Accept the agreement');
    cy.get('input[name=name]').should('have.class', 'form__field form__field_error');
    cy.get('input[name=date]').should('have.class', 'form__field form__field_error');
    cy.get('select').should('have.class', 'form__field_error');
    cy.get('input[name=name]').type('Name');
    cy.get('input[name=name]').should('have.class', 'form__field');
    cy.get('form').submit();
    cy.get('input[name=name]').should('have.class', 'form__field');
    cy.get('p:first').should('have.text', 'Select date');
  });
});
