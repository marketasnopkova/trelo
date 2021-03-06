import { all } from "cypress/types/bluebird";

const lists = [
  {
    name: 'to do',
    tasks: ['odpáliť raketu', 'pobaliť jedlo', 'tlačová správa']
  },
  {
    name: 'in progress',
    tasks: ['pripraviť astronautov', 'nastaviť odpočítavanie']
  },
  {
    name: 'completed',
    tasks: ['natankovať raketu']
  }
]

describe('Kontrola seznam', () => {
  lists.forEach((list, index) => {

    it(`skontrolovať ${list.name} zoznam`, () => {

      const pole_tasku = []
      lists.forEach(list => {
          list.tasks.forEach(task => {
          pole_tasku.push(task)
          }
      }

      cy
        .visit('/board/27648090229')

      cy
        .get('.List')  
        .eq(index)
        .find('.Task')
        .should('have.length', list.tasks.length)
      
      cy.get('.taskTitle').eq(index).should('have.value', list.name)




    pole_tasku.forEach((policko, index) => {
        cy.get('.List_tasks label').eq(index).should('have.text', list.tasks[index])
        console.log(policko)
    })

  //     cy.get('.List_tasks label').eq(index).should('have.text', list.tasks[index])
        
      });

});

})

/* řešení Filip Hric

lists.forEach(list => {
  list.tasks.forEach(task => {
    console.log(task)
    
  })
})

*/