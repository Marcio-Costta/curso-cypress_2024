/// <reference types="cypress" />


describe('Helpers....' , () => {
    it('Wrap' , () => {
        const obj = {nome : 'User' , idade: 20};
        expect(obj).to.have.property('nome');
        cy.wrap(obj).should('have.property' , 'nome');

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
       // cy.get('#formNome').then($el => {
            //cy.wrap($el).type('Funciona via cypress');
       // })

       const promise = new Promise((resolve , reject) => {
            setTimeout(() => {
                resolve(10)
            } , 500)
       })

       cy.get('#buttonLazy').then(() => console.log('Encontrei o primeiro botão'));
       promise.then(num => console.log(num));
       cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'));
    })

    it('Its' , () => {
        const obj = {nome: 'User' , idade: 20}
        cy.wrap(obj).its('nome').should('be.equal' , 'User');
        cy.wrap(obj).its('idade').should('be.equal' ,20);

        const obj2 = {nome: 'User' , idade: 20 , endereco:{rua: 'Rua dos bobos'}};
        cy.wrap(obj2).its('endereco.rua').should('contain' , 'Rua');
    })

    it.only('Invoke...' , () => {
        const getValue = ()=>  1;
        const soma = (a , b) => a + b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal' , 1);
        cy.wrap({fn: soma}).invoke('fn' , 3 , 9).should('be.equal' , 12);

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#formNome').invoke('val' , 'Texto passado por Invoke');
    })
})