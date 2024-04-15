/// <reference types="cypress" />

describe('Realizar testes no portal Amazon' , () => {

    before(() => {
        cy.visit('https://www.amazon.com.br/');
        cy.viewport(414, 896);
        cy.viewport('iphone-xr');

        

    })

    it('Login no portal Amazon' , () => {
        
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();
        cy.get('#ap_email').type('11964773000').should('have.value' , '11964773000');
        cy.get('.a-button-inner > #continue').click();
        //cy.get('h1.a-spacing-small').should('have.text' , 'Fazer login');
        cy.get('#ap_password').type('Senh@link01');
        cy.get('#signInSubmit').click();
    })

    it.only('Pesquisar um produto' , () => {
        cy.get('#twotabsearchtextbox').type('God of War Ragnarok PS5').should( 'have.value' , 'God of War Ragnarok PS5');
        cy.get('#nav-search-submit-button').click();
        cy.get('[data-asin="B0BH59HP23"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus')
        .should('have.text' , 'God of War Ragnarök - Edição Standard - PlayStation 5');

    })
})

