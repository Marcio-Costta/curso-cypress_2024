/// <reference types="cypress" />

describe( 'Iframe...' ,() => {

    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })
     
    it('Should force link on same page' , () => {
        cy.contains('Popup2')
            .invoke('removeAttr' , 'target').click();
        cy.get('#tfield').type('Funciona!');    
    })
})
