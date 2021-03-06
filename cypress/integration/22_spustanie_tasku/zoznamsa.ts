beforeEach(() => {
  
  cy.task('resetTs');

});

it('spustenie aplikácie s 0 taskami', () => {

  cy
    .visit('/')

});