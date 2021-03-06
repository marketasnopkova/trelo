/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: 'Alej'
    }).then( boards => {
      Cypress.env('board', boards.body )
    })

})

it('vytvorenie zoznamu novovytvorenom boarde', () => {

  cy.request({
    method: 'POST', 
    url: '/api/lists',
    body: {
      title: 'Jabloň',
      boardId: Cypress.env('board')['id']
    }
  })

  cy.visit('/board/' + Cypress.env('board')['id']);

})