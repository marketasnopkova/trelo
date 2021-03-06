/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/54526309074'); // doplň si adresu svojho boardu

});

it('over vsetky zaskrtnute tasky', () => {

  cy.get('.Task input').then(items => {
    expect(items[0]).to.not.be.checked
    expect(items[1]).to.be.checked

  })

  cy.get('.Task_title').should(items => {
    expect(items[0]).have.not.class('completed')
    expect(items[1]).have.class('completed')

  })

  // 1. zaškrtni si jeden z taskov
  // 2. použi príkaz .then() a over obidva tasky v zozname naraz
  // 3. skús jeden z taskov odškrtnúť tak, aby test neprechádzal
  // 4. použi príkaz .should() a task znova zaškrtni, aby Ti test prešiel počas toho ako test beží
  // poznámka: na vypracovanie tohto testu môžeš kontrolovať checkbox, alebo text tasku (ten má v zaškrtnutom stave classu .completed)

})