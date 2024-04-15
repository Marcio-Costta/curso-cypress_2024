/// <reference types="cypress" />

describe('Validando APIs no site do FakeApis' , () => {

    const headers ={
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJjaWtfZXN0cmVsYUBob3RtYWlsLmNvbS5iciIsInBhc3N3b3JkIjoiZXN0cmVsYTEyMyIsImlhdCI6MTcxMTU1NDk2MiwiZXhwIjoxNzExNTU1NTYyfQ.Ul2fehSVL5nFpz8dVOVnVFb0GnVXohNq0k_4buR_6QQ'
    };
    
    it('Get all products' , () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            headers: headers
        }).then((response) => {
            cy.log
            console.log;
            expect(response.status).to.eq(200)
        })    
    })

    it('Get a single product' , () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products/1',
            headers: headers
        }).then((response) => {
            cy.log
            console.log;
            expect(response.status).to.eq(200)
        })    
    })

    it('Limit results' , () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products?limit=6',
            headers: headers,
        }).then((response) => {
            cy.log;
            expect(response.status).to.eq(200);
        })
    })

    it('Get all categories' , () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products/categories',
            headers: headers
        }).then((response) => {
            cy.log;
            expect(response.status).to.eq(200);
           
        })    
    })
    
    it('Add a new product' , () => {
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/products',
            body: {
                title: 'Samsung A12',
                price: 750.5,
                description: 'smartphone',
                image: 'https://i.pravatar.cc',
                category: 'electronics'
            }
        }).then((response) => {
            cy.log;
            expect(response.status).to.eq(200)
        })
    })

    it('Add a new user' , () => {
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/users',
            headers: headers,
            body: {
                email:'Bob_esponja@gmail.com',
                    username:'Bob_esponja',
                    password:'calca123',
                    name:{
                        firstname:'Bob Esponja',
                        lastname:'Calça Quadrada'
                    },
                    address:{
                        city:'Fenda do biquini',
                        street:'pineapple street',
                        number:3,
                        zipcode:'12926-3855',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-5555'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.only('User Login' , () => {
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/auth/login',
            headers: headers,
            body:{
                username: "hopkins",
                password: "William56$hj"
            }
        }).then((response) => {
            cy.log()
            expect(response.status).to.eq(200)
        })   
    })
})
