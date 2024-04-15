/// <reference types="cypress" />

describe( 'Iframe...' ,() => {

    it('Deve preencher campo de tesxto' , () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body');
            cy.wrap(body).find('#tfield').type('Funciona!').should('have.value' , 'Funciona!');

            
        })
   })

   it('Deve preencher frame diretamente' , () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html');
        cy.get('#otherButton').click();

        cy.on('window:alert' , msg => {
            expect(msg).to.be.equal('Click OK!');
        })

        cy.get('#tfield').type('Funciona?').should('have.value' , 'Funciona?');

   })
})
