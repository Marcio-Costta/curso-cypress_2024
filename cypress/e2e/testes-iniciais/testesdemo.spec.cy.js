/// <reference types="cypress" />


describe('Realizar Testes em WebSite', () => {
    before(() => {
        cy.visit('https://phptravels.com/demo');

    })

    it('Preencher formaulario de requisição' , () => {
        cy.get('.container > .mb-0').should('exist').and('have.text' , 'Demonstration');
        cy.get('.container > .mt0').should('exist').and('have.text' , 'Test drive online the demo product available with complete features');
        cy.get('.first_name').type('Bob Esponja').should('have.value' , 'Bob Esponja');
        cy.get('.last_name').type('Calça Quadrada').should('have.value' ,'Calça Quadrada');
        cy.get('.business_name').type('Bob Esponja Calça Quadrada').should('have.value' , 'Bob Esponja Calça Quadrada');
        cy.get('.email').type('bob_esponja@hotmail.com');
        cy.get('#number').type('#numb1' + '#numb2');

    })

    it('Selecionando aba products (Integrations)' , () => {
        cy.get('.navbar-toggler').click();
        cy.get('.navbar-nav > :nth-child(4) > .nav-link').click();
        cy.wait(2000);
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(3) > .dropdown-item').click();
        cy.get('.mb0').should('exist').and('have.text' , "Integrated Suppliers API's XML Json");

    })

    it('Selecionando aba products (Customization)' , () => {
        cy.get('.navbar-toggler').click();
        cy.get('.navbar-nav > :nth-child(4) > .nav-link').click();
        cy.wait(2000);
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(4) > .dropdown-item').click();
        cy.get('.text > .text-white').should('exist').and('have.text' , "We Love Customization's");
        
    })

    it.only('Selecionando aba products (Technology' , () => {
        cy.get('.navbar-toggler').click();
        cy.get('.navbar-nav > :nth-child(4) > .nav-link').click();
        cy.wait(2000);
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(5) > .dropdown-item').click();
    
    })
})