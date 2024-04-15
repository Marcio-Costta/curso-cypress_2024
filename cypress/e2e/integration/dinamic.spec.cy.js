/// <reference types="cypress" />

describe( 'Dinamic tests' ,() => {

    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');    
   })

   const foods = ['Carne' , 'Frango' , 'Pizza' , 'Vegetariano']
   foods.forEach(food => {
        it(`Cadastro de Comida ${food}` , () => {
            cy.get('#formNome').type('Usuário');
            cy.get('[data-cy="dataSobrenome"]').type('Qualquer');
            cy.get(`[name=formSexo][value=F]`).click().should('be.checked')
            cy.get(`//*['${food}']`).click().should('be.checked')
            cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
            cy.get('[data-testid="dataEsportes"]').select('Corrida')
            cy.get('#formCadastrar').click();
            cy.get('#resultado > :nth-child(1)').should('contain' , 'Cadastrado!');
        })

        it.only('Executando testes com each' , () => {
            cy.get('#formNome').type('Usuário');
            cy.get('[data-cy="dataSobrenome"]').type('Qualquer');
            cy.get(`[name=formSexo][value=F]`).click().should('be.checked')

            cy.get('[name=formComidaFavorita]').each($el => {

                if($el.val() != 'vegetariano')
                    cy.wrap($el).click();
            })

            cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
            cy.get('[data-testid="dataEsportes"]').select('Corrida')
            //cy.get('#formCadastrar').click();
            //cy.get('#resultado > :nth-child(1)').should('contain' , 'Cadastrado!');
            cy.clickAlert('#formCadastrar' , 'Tem certeza que voce eh vegetariano?');
        })

   })

})