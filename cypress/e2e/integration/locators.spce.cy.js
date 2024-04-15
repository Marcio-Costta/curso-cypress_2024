/// <reference types="cypress" />

describe( 'Work with basic elements' ,() => {

    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() =>{
        cy.reload();
    })
     
    it('using jquery selector' , () => {
        cy.get("[onclick*='Francisco']").click();  
    })
})