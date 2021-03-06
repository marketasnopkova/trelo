export class BoardList {
    star(){
        cy.get('.Star').click({force: true})
        return this

    }

    open(boardName: string){ 
        cy.contains(boardName).click()

    }
}