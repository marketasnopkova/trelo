/// <reference types="cypress" />

beforeEach( () => {

  cy.server()
  cy.route('/api/boards').as('boardList')
  cy.route('POST', '/api/boards').as('createBoard')

  cy
    .visit('/');

});

it('nacitanie zoznamu boardov', () => {

  cy.wait('@boardList')

  cy
    .get('.board_item')
    .should('have.length', 0)

})

it.only('vytvorenie noveho boardu', () => {

  cy
    .get('#new-board')
    .click()

  cy
    .get('.board_addBoard')
    .type('nova zahrada')
  
  cy
    .contains('Save')
    .click()

  cy.wait('@createBoard').then(zahrada => {
    expect(zahrada.status).to.eq(201)
    expect(zahrada.request.body.name).to.eq('nova zahrada')
    expect(zahrada.response.body.name).to.eq('nova zahrada')
    expect(zahrada.response.body.starred).to.be.false
  })
  
 // cy.wait('@createBoard').its('response.name').should('be.text', "nova zahrada")


})