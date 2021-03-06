/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/54526309074'); // doplň si adresu svojho boardu

})

it('vytvorenie listu', () => {

  cy.get('.CreateList_title').click()
  cy.get('.CreateList_input').type('Kameny{enter}')
  cy.get('.List').should('be.visible')

})

it('overenie poctu listov', () => {

  cy.get('.CreateList_title').click()
  cy.get('.CreateList_input').type('Stromy{enter}')
  cy.get('.List').should('have.length', 2)

})

it('odstranenie listu', () => {

  cy.get('[data-id="32364610152"] .dropdown').click()
  cy.get('[data-id="32364610152"] .delete').click()
  cy.get('.List').should('have.length', 1)

})

it('overenie odskrtnutia', () => {

  cy.get('.List_addTask').click()
  cy.get('[data-id="newTaskTitle"]').type('Žula{enter}')
  cy.get('.Task .checkmark').should('not.be.checked')
  cy.get('.Task label').should('not.have.class', 'completed')

})

it('overenie názvu listu', () => {

  cy.get('.taskTitle').should('have.value', 'Kameny')

})

it('overenie textu na pridanie tasku (add card)', () => {

  cy.get('.List_addTask').should('contain.text', 'Add a card..')

})