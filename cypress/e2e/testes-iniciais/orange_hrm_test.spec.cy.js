/// <reference types="cypress" />

describe('Realizando testes de automação' , () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    it(' CT001 Realizando login' , () => {
        cy.get('.orangehrm-login-branding').should('exist');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin').should('have.value' ,'Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123').should('have.value' , 'admin123');
        cy.get('.oxd-button').click();
    })
})