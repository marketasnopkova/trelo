/// <reference types="cypress" />

const Promenna = 'Zahrada'

beforeEach( () => {

  cy.request('POST', '/api/reset')
  // pred začiatkom testu vymaž všetky boardy
  
  cy.request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: Promenna
      }
    })

})

it('vytvorenie boardu cez api a overenie', () => {


  cy.visit('/')
  cy.get('.board_item .board_title').should('contain.text', Promenna)

})