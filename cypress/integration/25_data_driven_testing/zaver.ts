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

      cy
        .visit('/board/27648090229')

      cy
        .get('.List')  
        .eq(index)
        .find('.Task')
        .should('have.length', list.tasks.length)
      
      cy.get('.taskTitle').eq(index).should('have.value', list.name).then(() => {
        list.tasks.forEach((task, index) => {
          console.log(task)
          console.log(index)
          console.log(list.tasks.length)
  
          cy.get('.List_tasks label').eq(i).should('have.text', list.tasks[index])
          
      })

      }
        
       
      });

    });

  })
})

describe.only('Kontrola tasků', () => {

  beforeEach(() =>{
    cy
    .visit('/board/27648090229')
  })

    it(`skontrolovať Task`, () => {

      const A = []
      lists.forEach(list => {
        list.tasks.forEach(task => {
          console.log(task)
          A.push(task)
        })
      })

      console.log(A)
      
      lists.forEach((list,ii) => {
        A.forEach((item, index) => {
        cy.get('.List_tasks label').eq(index).should('have.text', item).parents('.List')
          .children('.List input').should('have.value', list.name)
   
        })
      })

  //     cy.get('.List_tasks label').eq(index).should('have.text', list.tasks[index])
    }

  })
})

/* řešení Filip Hric

lists.forEach(list => {
  list.tasks.forEach(task => {
    console.log(task)
    



          console.log(A)
      A.forEach((item, index) => {
      cy.get('.List_tasks label').eq(index).should('have.text', item).parents('.List')
        .children('.List input').should( () => {

        })
   

      })
  })
})

*/