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


describe.only('Kontrola tasků', () => {

  beforeEach(() =>{
    cy
    .visit('/board/27648090229')
  })

  lists.forEach((list, listIndex) => {

    list.tasks.forEach((task, taskIndex) => {
    it(`Skontrolovat že ${list.name} obsahuje task: ${task}`, () => {
    
    cy
    .get('.List')
    .eq(listIndex).as(`list${listIndex}`)
    .find('.taskTitle')
    .should('have.value', list.name)
    
    cy
    .get(`@list${listIndex}`)
    .find('.Task_title')
    .eq(taskIndex)
    .should('contain.text', task)
    
    })
    })
    })

    
})

/* řešení Filip Hric

lists.forEach(list => {
  list.tasks.forEach(task => {
    console.log(task)
    



 *****************

   lists.forEach((list, ii) => {
      list.tasks.forEach((task, index) => {
          it(`Skontrolovat že ${task} patří do ${list.name}`, () => {
            cy.get('.List_tasks label').eq(index).should('have.text', task).parents('.List')
              .children('.List input').should('have.value', list.name)
          })
      })
  })

 *************
   

      })
  })
})

*/