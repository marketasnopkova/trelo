beforeEach(() => {
  
  cy.task('resetDb');

});

it('zaciatok testu v cistom stave', () => {

  cy.visit('/')
  
});