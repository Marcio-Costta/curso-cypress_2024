/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Cenários Front-End' , () => {

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me');
        
        //cy.viewport(414, 896);
        //cy.viewport('iphone-xr');
    })

    it.only('CT001 Validando Login' , () => {
        cy.get(loc.LOGIN.USER).type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get(loc.LOGIN.PASSWORD).type('@Cer1010');
        cy.get(loc.LOGIN.BTN_LOGIN).click();
        cy.get(loc.MESSAGE).should('exist').should('have.text' , 'Bem vindo, Bob Esponja Calça Quadrada!');
        
    })

    it(' CT002 Inserir Conta' , () => {
        cy.get('[data-test="email"]').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('[data-test="passwd"]').type('@Cer1010');
        cy.get('.btn').click();
        cy.get('.toast-message').should('exist').should('have.text' , 'Bem vindo, Bob Esponja Calça Quadrada!');
        cy.get('[data-test="menu-settings"]').click();
        cy.get('[href="/contas"]').click();
        cy.get('h2').should('exist').and('have.text' , 'Contas');
        cy.get('[data-test="nome"]').type('Conta Teste 2');
        cy.get('.btn').click();
        cy.get('.toast-success > .toast-message').should('exist').and('have.text' , 'Conta inserida com sucesso!');
    })

    it('CT003 Alterar Conta' , () => {
        cy.get('[data-test="email"]').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('[data-test="passwd"]').type('@Cer1010');
        cy.get('.btn').click();
        cy.get('.toast-message').should('exist').should('have.text' , 'Bem vindo, Bob Esponja Calça Quadrada!');
        cy.get('[data-test="menu-settings"]').click();
        cy.get('[href="/contas"]').click();
        cy.get('h2').should('exist').and('have.text' , 'Contas');
        cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text' , 'Conta Teste 2');
        cy.get('tbody > :nth-child(2) > :nth-child(2) > :nth-child(1) > .far').click();
        cy.get('[data-test="nome"]').type('Conta Poupança');
        cy.get('.btn').click();
    })

    it('CT004 Inserir Conta repetida' , () => {
        cy.get('[data-test="email"]').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('[data-test="passwd"]').type('@Cer1010');
        cy.get('.btn').click();
        cy.get('.toast-message').should('exist').should('have.text' , 'Bem vindo, Bob Esponja Calça Quadrada!');
        cy.get('[data-test="menu-settings"]').click();
        cy.get('[href="/contas"]').click();
        cy.get('h2').should('exist').and('have.text' , 'Contas');
        cy.get('[data-test="nome"]').type('Conta Teste 1');
        cy.get('.btn').click();
        cy.get('.toast-error > .toast-message').should('exist').and('have.text' , 'Erro: Error: Request failed with status code 400');
    })

    it('CT005 Inserir Movimentação' , () => {
        cy.get('[data-test="email"]').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('[data-test="passwd"]').type('@Cer1010');
        cy.get('.btn').click();
        cy.get('.toast-message').should('exist').should('have.text' , 'Bem vindo, Bob Esponja Calça Quadrada!');
        cy.get('[data-test="menu-movimentacao"] > .fas').click();
        cy.get('[data-test="descricao"]').type('Depósito Conta 1');
        cy.get('[data-test="valor"]').type('2000');
        cy.get('[data-test="envolvido"]').type('Bob Esponja Calça Quadrada');
        cy.get('.btn-primary').click();
        cy.get('.toast-success > .toast-message').should('have.text' , 'Movimentação inserida com sucesso!');
        cy.get('.col-12 > :nth-child(1) > small').should('have.text' , 'R$ 2.000,00');
        cy.get(':nth-child(2) > .d-none').should('have.text' , 'Bob Esponja Calça Quadrada');
        
    })

    it('CT006 Remover Movimentação' , () => {
        cy.get('[data-test="email"]').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('[data-test="passwd"]').type('@Cer1010');
        cy.get('.btn').click();
        cy.get('.toast-message').should('exist').should('have.text' , 'Bem vindo, Bob Esponja Calça Quadrada!');
        cy.get('[data-test="menu-extrato"] > .fas').click();
        cy.get('.col-12 > :nth-child(1) > small').should('have.text' , 'R$ 2.000,00');
        cy.get(':nth-child(2) > .d-none').should('have.text' , 'Bob Esponja Calça Quadrada');
        cy.get('[href="#"] > .far').click();
        cy.get('.toast-success > .toast-message').should('have.text' , 'Movimentação removida com sucesso!');
    })
})