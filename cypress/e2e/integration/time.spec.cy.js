/// <reference types="cypress" />

describe('Fixture tests' , () => {
   before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
   })
    
   it('Going back to the past' , () => {
        cy.get('#buttonNow').click();
        cy.get('#resultado > span').should('contain' , '29/02/2024');

        const dia = new Date(2012 , 4 , 10 , 15, 23, 50);
        cy.clock(dia.getTime())
        cy.get('#buttonNow').click();
        cy.get('#resultado > span').should('contain' , '10/05/2012');
   })

   it.only('Goes to the Future' , () => {
        cy.get('#buttonTimePassed').click();
        cy.get('#resultado > span').should('contain' , '1709219');
        cy.get('#resultado > span').invoke('text').should('gt' , 1709219182225);

   })
})