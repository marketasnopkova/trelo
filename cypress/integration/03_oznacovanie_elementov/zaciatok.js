/// <reference types="cypress" />

it('oznacovanie elementov', () => {

  cy
    .visit('/');
  
  cy
    .get('.board_newItem')

  cy
    .contains('Create board')

  cy
    .get('.board_title')

})