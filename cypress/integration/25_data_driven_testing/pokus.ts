it(`skontrolovať taskTitle zoznam`, () => {

    cy
      .visit('/board/27648090229')

    cy.get('[data-id="13691731769"]').find('.taskTitle').should('have.value', 'to do')
}