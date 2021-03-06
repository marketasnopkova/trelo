/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/54526309074'); // doplň si adresu svojho boardu

});

// ⚠️ pred začiatkom testovania si prosím vytvor dva zoznamy
// použi príkaz .contains()
it('pridanie položky do druhého zoznamu', () => {

  cy
    .get('[data-id="76099089768"]')
    .find('.List_addTask')
    .click()

  cy
    .get('[data-id="76099089768"]')
    .find('.TextArea')
    .type('Vodka{enter}')

  cy
    .get('[data-id="76099089768"]')
    .find('.Task')
    .eq(2)
    .should('contain.text', 'Vodka')

})

it('nastavenie timeoutu', () => {

  cy
    .get('[data-id="76099089768"] .Task', {timeout: 30000})
    .should('have.length', 3)
})