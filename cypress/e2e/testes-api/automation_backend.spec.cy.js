/// <reference types="cypress" />
"<!DOCTYPE html>"

describe( 'Realizar testes de API como exercicios'  , ()  => {

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer your_acess_token_here'
    };

    const params = {
        email: "bob_esponja@hotmail.com",
        password:"123@calca"
    }

    it('Get All Products List' , () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        })
    })

    it('POST To All Products List' , () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/productsList'
        })
    })

    it('Get All Brands List' , () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/brandsList'
        })
    })

    it('PUT To All Brands List' , () => {
        cy.request({
            method: 'PUT',
            url:'https://automationexercise.com/api/brandsList',
            body:{
                search_product: "tshirt"
            }
        })

    })

    it('POST To Search Product' , () => {
        cy.request({
            method: 'POST',
            url:'https://automationexercise.com/api/searchProduct',
            body:{
                search_product: "Polo"
            }

        })
    })

    it.only('API 7: POST To Verify Login with valid details' , () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            headers:headers,
            qs:params
        }).then((response) => {
            console.log;
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })

    

    it('API 8: POST To Verify Login without email parameter' , () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            body:{
                password: "123@calca"
            }
        }).then(res => console.log(res));
    })
})