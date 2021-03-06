/// <reference types="cypress" />

beforeEach( () => {

  cy.server()
  cy.route('POST','/api/tasks').as('newTask')
  cy.route('DELETE', '/api/lists/4161528527').as('delTask') 
  //  cy.route('DELETE', '/api/lists/*').as('delTask') ...... možno místo čísla dát *

  cy.route('PATCH', '/api/tasks/35694473769').as('checkTask')
  cy.visit('/board/54526309074'); // doplň si adresu svojho boardu

});

it('vytvorenie tasku', () => {

  cy.get('.List_addTask').click()
  cy.get('[data-id="newTaskTitle"]').type('Rajče{enter}')
  cy.wait('@newTask').its('request.body.completed').should('be', 'false')
  //cy.wait('@newTask').its('status').should('eq', 201)
  // vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení. pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

})

it('odstránenie zoznamu', () => {

  cy.get('.List .dropdown').click()
  cy.get('.List .delete').click()
  cy.wait('@delTask')
  // manuálne si vytvor nový zoznam a pomocou testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu

})

it.only('zaskrtnutie tasku', () => {

    cy.get('.Task_title').contains('Hrášek').parent().parent().find('input').check()
    cy.wait('@checkTask').should(kliknuty => {
      expect(kliknuty.status).to.eq(200)
      expect(kliknuty.request.body.completed).to.be.true

    })

    cy.get('.Task_title').contains('Mrkev').parent().parent().find('input').uncheck()


  // pomocou testu si zaškrtni task v zozname a odsleduj si request, ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request. skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

})