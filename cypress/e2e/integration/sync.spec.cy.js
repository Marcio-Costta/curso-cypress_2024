/// <reference types="cypress" />

describe( 'Esperas...' ,() => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
   })

   beforeEach(() => {
      cy.reload();
   })

   it('Trabalhando com delay' , () => {
    cy.get('#novoCampo').should('not.exist');
    cy.get('#buttonDelay').click();
    cy.get('#novoCampo').should('not.exist');
    cy.get('#novoCampo').should('exist');
    cy.get('#novoCampo').type('Funcionou!');  
   })

   it('Fazendo retrys' , () => {
      cy.get('#buttonDelay').click();
      cy.get('#novoCampo').should('exist')
         .type('Funciona!')

   })

   it('Uso do find' , () => {
      cy.get('#buttonList').click();
      cy.get('#lista li')
      .find('span').should('contain' , 'Item 1');
      cy.get('#lista li span').should('contain' , 'Item 2');
   })

   it('Uso do Timeout' , () => {
      cy.get('#buttonDelay').click()
      cy.wait(5000);
      cy.get('#novoCampo').should('exist');
   })

   it('Click retry' , () => {
      cy.get('#buttonCount')
         .click()
         .click()
         .should('have.value' , '111');
   })

   it.only('Should vs Then' , () => {
      cy.get('#buttonListDOM').click();
      cy.get('#lista li span').then($el => {
         console.log($el);
         expect($el).to.have.length(1);
      })
         //.should('have.length' , 1)

   })
})