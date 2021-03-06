Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})


it('zaciatok testu v cistom stave', () => {



 // cy
   // .task('resetDb')
    
  cy
    .visit('/')
  
});