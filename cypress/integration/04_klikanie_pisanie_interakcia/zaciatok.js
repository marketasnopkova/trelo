/// <reference types="cypress" />

const { createVoidZero } = require("typescript");

it('vytvorenie nového boardu', () => {

    cy
        .visit('/');

    cy
        .get('.board_newItem').click();

    cy
        .get('#new-board input').type('první{enter}');

//    cy 
 //       .get('#new-board > div > button').click();
  
});

it('označenie boardu hviezdičkou', () => {

    cy
        .visit('/');

    cy
        .get('.Star').click({force: true});

  

});

it.only('označenie tasku', () => {

    cy 
        .visit('/board/60032372853')

    cy
        .get('.Task input').check()
        
});