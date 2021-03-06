/// <reference types="cypress" />

const { exception } = require("console")

describe('testovanie casu pomocou momentjs', () => {

  beforeEach( () => {
    
    cy.server()

    cy.route('POST', '/api/tasks').as('createTask')

    cy.request('DELETE', '/api/tasks')

    cy.visit('/board/1301793973')

  })

  it('vytvoreny task ma deadline o 3 dni', () => {

    cy.contains('Add a card...').click()

    cy.get('.List .TextArea').type('chlieb{enter}')

    cy.wait('@createTask').then( task => {
      expect(task.response.body.created).to.eq(Cypress.moment(task.response.body.deadline).subtract(3, 'days').format('YYYY-MM-DD'))
//      expect(task.response.body.deadline).to.eq(Cypress.moment().add(3, 'days').format('YYYY-MM-DD'))

      })

  })
  
})

const tasks = ['chlieb', 'mlieko', 'pivo', 'syr']

describe.only('testovanie taskov pomocou lodash', () => {

  beforeEach( () => {

    cy.server()

    cy.route('/api/boards/*').as('boardDetails')
    
    cy.request('DELETE', '/api/tasks')
    
    tasks.forEach( task => {

      cy.request('POST', '/api/tasks', { 
          title: task, 
          listId: 41434565135,
          boardId: 1301793973
        })

    })

    // ⚠️ dopln id boardu
    cy.visit('/board/1301793973')

  })

  it('nazov druheho tasku v liste', () => {

    cy.wait('@boardDetails')
      .then( board => {

        let taskName = Cypress._.map(board.response.body.tasks)

        console.log(taskName)

        let taskIndex = Cypress._.findIndex(board.response.body.tasks, {title: 'mlieko'})
        console.log(taskIndex)

        expect(taskIndex).to.eq(1)

      })

  })
  
})