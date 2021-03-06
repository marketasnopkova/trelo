/// <reference types="cypress" />

beforeEach( () => {
  cy
  .request('POST', '/api/reset')

cy
  .request('POST', '/api/boards', {
    name: 'board vytvoreny cez api'
  }).then( board => {

    Cypress.env('board', board.body)

  })

})

it('otvorenie novovytvoreneho boardu', () => {

      cy.visit('/board' + Cypress.env('board')['id'])
      cy.get('.borderDetal_title').should('have.value', Cypress.env('board')['name'])

})
;