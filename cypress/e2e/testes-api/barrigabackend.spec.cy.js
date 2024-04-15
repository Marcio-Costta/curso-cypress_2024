/// <reference types="cypress" />



describe('Cenários BACK-End' , () => {
    let token

    before(() => {
        cy.getToken('bob_esponja@hotmail.com' , '@Cer1010')
            .then(tkn => {
                token = tkn;
            })
        
    })

    beforeEach(() => {
        cy.resetRest()

    })

    it('CT001 Validando Login' , () => {
       cy.request({
            method: 'POST',
            url:'https://barrigarest.wcaquino.me/signin',
            body: { 
                email: "bob_esponja@hotmail.com",
                redirecionar: false,
                senha: "@Cer1010"
            }
       }).its('body.token').should('not.be.empty');
    })

    it(' CT002 Inserir Conta' , () => {
            cy.request({
                method: 'POST',
                url:'https://barrigarest.wcaquino.me/contas',
                headers: {Authorization: `JWT ${token} `},
                body:{
                    nome: 'Conta Conjunta'
                }
            }).as('response')

            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('nome' , 'Conta Conjunta');
            })
            
        })
    
    it('CT003 Alterar Conta' , () => {
        cy.request({
            method: 'GET',
            url: 'https://barrigareact.wcaquino.me/contas',
            headers: {Authorization: `JWT ${token} `},
            qs:{
                nome: 'Conta para alterar'
            }
        }).then(res => {
            cy.request({
                url: `https://barrigareact.wcaquino.me/contas/${res.body[0].id}`,
                method: 'PUT',
                headers: {Authorization: `JWT ${token} `},
                body:{
                    nome: 'Conta alterada'
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal' , 200)
    }) 
    
    it('Inserir Conta repetida' , () => {
        cy.request({
            method: 'POST',
            url:'https://barrigarest.wcaquino.me/contas',
            headers: {Authorization: `JWT ${token} `},
            body:{
                nome: 'Conta mesmo nome'
            }
        }).as('response')

        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(201);
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('nome' , 'Conta Conjunta');
        })
    })

    it('Inserir movimentacao' , () => {
        cy.localizarContaPorNome('Conta para movimentacoes')
            .then(contaId => {
                cy.request({
                    method: 'POST',
                    url:'https://barrigarest.wcaquino.me/transacoes',
                    headers: {Authorization: `JWT ${token} `},
                    body:{
                        conta_id: contaId,
                        data_pagamento:	Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                        data_transacao:	Cypress.moment().format('DD/MM/YYYY'),
                        descricao:"teste ",
                        envolvido:"teste 2",
                        status:	true,
                        tipo:"REC",
                        valor:"1500",
                    }
                }).as('response')
             })
        })
    cy.get('@response').its('status').should('be.equal' , 201);    
})

    
        
   



