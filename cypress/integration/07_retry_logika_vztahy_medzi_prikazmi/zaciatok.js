/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/54526309074');

});

it('v zozname je mlieko', () => {

  cy.contains('Mléko')
  cy.get('[data-id="76099089768"]').contains('Mléko')

});

it('v druhom zozname je mlieko', () => {

  cy
    .get('[data-id="76099089768"]')
    .find('.Task')
    .eq(1)
    .should('contain.text','Mléko')

});

it('v druhom zozname je len jeden task', () => {

  cy.get('[data-id="76099089768"] .Task', {timeout: 3000}).should('have.length', 2)
  
});