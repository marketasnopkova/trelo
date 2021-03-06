/// <reference types="cypress" />

const { exception } = require("console");

it('overenie user id', () => {

  cy
    .visit('/')

  cy
    .request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmtldGEuc25vcGtvdmFAY2VudHJ1bS5jeiIsImlhdCI6MTYxMzkyNzk4MiwiZXhwIjoxNjEzOTMxNTgyLCJzdWIiOiIxIn0.BY8jnngBu5Dzca_LmanysR24makjblYGIEKIHx4AGKY'
      }
    }).then( boards => {
      let Private = Cypress._.find(boards.body, {name: "Markétino"})
      let Public = Cypress._.find(boards.body, {name: "Alej"})

      expect(Private.user).to.eq(1)
      expect(Public.user).to.eq(0)
      
      expect(boards.body).to.have.length(5) //zůstalo mi tam nějaký chaozz odminule, proto takový hausnumero
    })
  
  cy
    .request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
      }
    }).then( boards => {
      let Public = Cypress._.find(boards.body, {name: "Alej"})

      expect(Public.user).to.eq(0)
    })
  
});