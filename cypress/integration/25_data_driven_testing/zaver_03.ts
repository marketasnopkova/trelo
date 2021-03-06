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

  const A = []
  lists.forEach(list => {
    list.tasks.forEach(task => {
      console.log(task)
      A.push(task)
    })
  })

  let i=0
  lists.forEach((list, ii) => {
      list.tasks.forEach((task) => {
          it(`Skontrolovat že ${task} patří do ${list.name}`, () => {
            cy.get('.List_tasks label').eq(i).should('have.text', task).parents('.List')
              .children('.List input').should('have.value', list.name)
            i++
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