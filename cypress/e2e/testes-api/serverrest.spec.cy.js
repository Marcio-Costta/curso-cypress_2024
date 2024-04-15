/// <reference types="cypress" />

describe('cenários de testes de api' , () => {

    after(() => {
        cy.clearLocalStorage()
    })

    beforeEach(() => {
        
       // buildEnv()
        cy.login("patrcik_estrela@hotmail.com.br" , "estrela123")
    })
    
    const headers ={
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJjaWtfZXN0cmVsYUBob3RtYWlsLmNvbS5iciIsInBhc3N3b3JkIjoiZXN0cmVsYTEyMyIsImlhdCI6MTcxMTU1NDk2MiwiZXhwIjoxNzExNTU1NTYyfQ.Ul2fehSVL5nFpz8dVOVnVFb0GnVXohNq0k_4buR_6QQ'
    };

    
    it('CT002 cadastrar um usuario' , () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            headers:headers,
            body:{
                 nome: "Patrick Estrela",
                 email: "patrcik_estrela@hotmail.com.br",
                 password: "estrela123",
                 administrador: "true"
            }
        }).then((response) => {
            console.log
            expect(response.status).to.eq(201)
            expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
        })  
    })

    it('CT003 cadastrar um produto' , () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: headers,
            body:{
                 nome: "Xbox one X",
                 preco: 2000,
                 descricao: "hardware console",
                 quantidade: 200
            }
        }).then((response) => {
            cy.log
            expect(response.status).to.eq(201)
            expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
        })  
    })

    it('CT004 Listar Produtos Cadastrados' , () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos',
            headers: headers
        }).then((response) => {
            cy.log
            expect(response.status).to.eq(200)
            //expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
        })  
    })

    it('CT005 Listar Usuários Cadastrados' , () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
            headers: headers
        }).then((response) => {
            cy.log
            expect(response.status).to.eq(200)
            //expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
        })  
    })

    it('CT006 Listar Usuários pelo id' , () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios/2vu2T70BcVdq11F',
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            cy.log
            expect(response.status).to.eq(400)
            expect(response.body.message).to.equal('Usuário não encontrado')
        })  
    })

    it('CT007 Excluir produto cadastrado' , () => {
        cy.request({
            method: 'DELETE',
            url: 'https://serverest.dev/produtos/WgcypHbFrXRVcSs7',
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            cy.log
            expect(response.status).to.eq(200)
            expect(response.body.message).to.equal('Registro excluído com sucesso')
        })  
    })

    it.only('CT008 Alterar produto cadastrado' , () => {
        cy.request({
            method: 'PUT',
            url: 'https://serverest.dev/produtos/I6IUJCnA58gAkj9G',
            headers: headers,
            //failOnStatusCode: false
            body:{
                nome: "Xbox one X",
                preco: 2500,
                descricao: "hardware console",
                quantidade: 170
           }
        }).then((response) => {
            expect(response.status).to.eq(200)
            
            expect(response.body.message).to.equal('Registro alterado com sucesso')
        })  
    })
})