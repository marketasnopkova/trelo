/// <reference types="cypress" />

it('autorizacia', () => {

  cy.request({
    method: 'POST',
    url: '/api/boards',
    headers: {
      accept: 'application/json, text/plain, */*',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmtldGEuc25vcGtvdmFAY2VudHJ1bS5jeiIsImlhdCI6MTYxMzkyNzk4MiwiZXhwIjoxNjEzOTMxNTgyLCJzdWIiOiIxIn0.BY8jnngBu5Dzca_LmanysR24makjblYGIEKIHx4AGKY'
    }
  })
  cy.visit('/')
  
});