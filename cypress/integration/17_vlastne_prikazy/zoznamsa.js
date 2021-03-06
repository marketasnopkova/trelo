/// <reference types="cypress" />



it('prihlasenie pomocou custom commandu', () => {

  cy.visit('/')
  cy.loginUser('marketa.snopkova@centrum.cz', '123456')
  
});