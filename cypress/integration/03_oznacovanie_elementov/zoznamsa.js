/// <reference types="cypress" />

const { createVoidZero } = require("typescript");

it('oznacovanie elementov', () => {

  cy
    .visit('/');

  cy  
    .get('.background_title');

  cy 
    .contains('My Boards');

  cy
    .get('.board_newItem').click();

  cy
    .get('.board_addBoard').type('první');

  cy 
    .get('#new-board > div > button').click();

  /* 

  úloha #1: označ nadpis „My boards“ pomocou príkazu .get()
  úloha #2: označ nadpis „My boards“ pomocou príkazu .contains()
  úloha #3: vytvor si board a označ jeho názov pomocou príkazu .get()
  úloha #4: vytvor si board a označ jeho názov pomocou príkazu .contains()
  
  */

})