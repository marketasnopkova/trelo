/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/54526309074')

})

it('vytvorenie tasku', () => {

  cy.get('.List_addTask').click()
  cy.get('[data-id="newTaskTitle"]').type('Mléko{enter}')
  cy.get('.Task').should('be.visible')

})

it('overenie poctu taskov', () => {

  cy.get('.List_addTask').click()
  cy.get('[data-id="newTaskTitle"]').type('Maso{enter}')
  cy.get('.Task').should('have.length', 2)

})

it('overenie zaskrtnutia', () => {

  cy.get('.Task input').check()
  cy.get('.Task label').should('have.class', 'completed')


})

it('overenie názvu listu', () => {

  cy.get('.boardDetail_title').should('have.value', 'Nákupní seznam')

})