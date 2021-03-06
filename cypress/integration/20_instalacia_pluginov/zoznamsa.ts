it('upload obrazku', () => {

  cy
    .visit('/board/59018898366')

  cy.get('.Task').click()

//  cy.get('.dropzone-custom-content').attachFile('cypressLogo.png')
  cy.get('[type="file"]').attachFile('cypressLogo.png')

});