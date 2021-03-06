describe('První automatizovaný test mls', () => {

    beforeEach( () => {
        cy.visit('https://mlsstorageprojectsite1.z6.web.core.windows.net/'); 
      })

    it('Otevření aplikace, kontrola tabulky', () => {
        const testItem = '019971134560'
        const testItemName = 'FATIGUE UNIFORM'
        
        cy.get('.side-menu__category-label').contains('Item catalogue').click()
        cy.get('.ag-center-cols-container').contains(testItem)

        cy.get('.ag-center-cols-container').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes(testItem))
            {
                cy.get('[row-index='+index+']').find('[aria-colindex="2"]').should('contain.text', testItemName)
            }

        })

    })

    it('V rozbalovacím menu je CoverNumber nastaveno na 0000', () => {
        cy.get('.top-menu-select__button--withBorder').find('span').should('contain.text', '0000')
    })

    it('V rozbalovacím menu je CoverNumber změněno na 9100', () => {
        cy.get('.top-menu-select__button--withBorder').click()
        cy.get('.c-dropdown--scrollable').contains('9100').click()
        cy.get('.top-menu-select__button--withBorder').find('span').should('contain.text', '9100')


    })
})
