/// <reference types="cypress" />

/*
  vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
*/

// úloha #1: vytvor si nový zoznam na boarde
it('vytvorenie nového zoznamu', () => {

  cy
    .visit('/')
  cy
    .get('.board_newItem').click()
  cy
    .get('.board_addBoard').type('Nákupní seznam')
  cy
    .get('.board_options button').click()
  

});

// úloha #2: vytvor si nový task v zozname
it('vytvorenie nového tasku', () => {

  cy
    .visit('/')
  cy
    .get('.board_newItem').click()
  cy
    .get('.board_addBoard').type('Nákup')
  cy
    .get('.board_options button').click()
  cy
    .visit('/board/2880374360')
  cy
    .get('.CreateList_title').click()
  cy
    .get('.CreateList_input').type('Potraviny')
  cy
    .get('.CreateList_options button').click()
  cy
    .get('.List_addTask').click()
  cy
    .get('[data-id="newTaskTitle"]').type('Mléko plnotučné{enter}')



});

// úloha #3: zaškrtni task ako vybavený
it.only('označenie tasku', () => {

  cy
    .visit('/board/2880374360')
  cy
    .get('.Task input').check()

});

// úloha #4: odškrtni task ako nevybavený
it.only('odznačenie tasku', () => {

  cy
    .visit('/board/2880374360')
  cy
    .get('.Task input').uncheck()

});