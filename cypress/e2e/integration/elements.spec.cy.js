/// <reference types="cypress" />


describe('Work with basic elements' , () => {

    before(() => {
         cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() => {
       cy.reload();
    })

    it('text' , () => {
       
        cy.get('body').should('contain' , 'Cuidado');
        cy.get('span').should('contain' , 'Cuidado');
        cy.get('.facilAchar').should('contain' , 'Cuidado');
        cy.get('.facilAchar').should('have.text' , 'Cuidado onde clica, muitas armadilhas...');

    })

    
    it('TextFields' , () => {
        cy.get('#formNome').type('Cypress Test');
        cy.get('#formNome').should('have.value' , 'Cypress Test');

        cy.get('#elementosForm\\:sugestoes').type('textarea')
            .should('have.value' , 'textarea');
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???');    
    })

    it('Radio Button' , () => {
        cy.get('#formSexo > tbody > tr > :nth-child(2)')
            .click()
            .should('be.checked');

        cy.get('#formSexoMasc')
            .click()
            .should('not.be.checked'); 
    })
    
    it('CheckBox' , () => {
        cy.get('#formComidaFrango').click()
            .should('be.checked');
        
        cy.get('[name=formComidaFavorita]').click({multiple: true}); 
        
        cy.get('#formComidaFrango')
            .should('not.be.checked');
    })

    it('Combo box' , () => {
        cy.get('[data-test="dataEscolaridade"]').select('Mestrado')
            .should('have.value' , 'mestrado');
        
        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length' , 8);
        
        cy.get('[data-test="dataEscolaridade"] option').then($arr => {
            const values = []
            $arr.each(function(){
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior" , "Mestrado"]);
        })    
    })

    it.only('Combo Multiplo' , () => {
        cy.get('[data-testid="dataEsportes"]').select(['natacao' , 'Corrida']);

        cy.get('[data-testid="dataEsportes"]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao' , 'Corrida']);
            expect($el.val()).to.have.length(2);
        })
        
    })
})
 