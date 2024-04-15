// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickAlert' , (locator , message) => {
    cy.get(locator).click();
    cy.on('window:alert' , msg => {
        expect(msg).to.be.equal(message);
    })
})

Cypress.Commands.add('getToken' , (user , password) => {
    cy.request({
        method: 'POST',
        url:'https://barrigarest.wcaquino.me/signin',
        body: { 
            email: user,
            redirecionar: false,
            senha: password
        }
   }).its('body.token').should('not.be.empty')
   .then(token => {
        return token
   })
})

Cypress.Commands.add('resetRest' , () => {
    cy.getToken('bob_esponja@hotmail.com' , '@Cer1010').then(token => {
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/reset',
            headers: {Authorization: `JWT ${token} `}
        }).its('status').should('be.equal' , 200);
    })
})

Cypress.Commands.add('localizarContaPorNome' , () => {
    cy.getToken('bob_esponja@hotmail.com' , '@Cer1010').then(token => {
        cy.request({
            method: 'GET',
            url: 'https://barrigareact.wcaquino.me/contas',
            headers: {Authorization: `JWT ${token} `},
            qs:{
                nome: 'Conta para alterar'
            }    
        }).then(res => {
            return res.body[0].id
        }) 
    })           
})

Cypress.Commands.add('login', (email , password) => {  
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body:{
               email: email,
               password: password
        }
    }).then((response) => {
        cy.log(response.body)
        window.localStorage.setItem('severest/userToken' , response.body.authorization);
        expect(response.status).to.eq(200)
        expect(response.body.message).to.be.equal('Login realizado com sucesso')
    })    
})  

