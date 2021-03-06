/// <reference types="cypress" />



beforeEach(() => {

  cy
    .request('DELETE', '/api/tasks')

})

it('vytvorenie noveho tasku', () => {

  cy.visit('/board/1301793973')
  cy.addTask('vymyslet název')
  
});