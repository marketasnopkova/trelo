const { createVoidZero } = require("typescript");

it('otvorenie trello boardu', () => {

    cy.visit('localhost:3000');
    cy.visit('/'); //stejné jako výše, url bere z cypress.json

    cy.visit('http://localhost:3000/board/11518620139');
    cy.visit('/board/11518620139'); //stejné jako výše, url bere z cypress.json

    /* 

  úloha #1: vyskúšaj si otvorenie stránky pomocou príkazu .visit()
  úloha #2: vytvor si nový trello board a pomocou príkazu .visit() si ho otvor
  úloha #3: pozri sa do baseUrl v súbore cypress.json. skús prísť na to, akým 
  spôsobom môžeš tento parameter využiť. skús otvoriť domovskú stránku, 
  alebo trello board z úlohy #2
  
  */

});