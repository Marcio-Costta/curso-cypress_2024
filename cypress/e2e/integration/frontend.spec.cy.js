/// <reference types="cypress" />


describe('Testes FrontEnd' , () => {
    before(() => {
        cy.server();
        cy.route({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            response: { id: 1000000,
                        nome:'Usuario Falso', 
                        token:'Uma string muito grande'
            }
        })
        cy.login()

    })
})