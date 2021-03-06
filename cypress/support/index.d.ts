declare namespace Cypress {
    interface Chainable {

    /*
     * adds a new task to list
    */

    addTask(name: string): Chainable<Element>

    }
}

    /*
     * login a User and saves cookie to browser
    */

    loginUser(email: string, password: string): Chainable<Element>

    }
}