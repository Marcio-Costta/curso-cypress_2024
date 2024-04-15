/// <reference types="cypress" />

describe('Validando testes de API na Deck cards' , () => {

    it('Shuffle the Cards:' , () => {
        cy.request({
            method: 'GET',
            url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=5'

        }).then((response) => {
            console.log
            expect(response.status).to.equal(200)
            expect(response.body).not.be.null
        })
    })

    it.only('Draw a Card::' , () => {
        cy.request({
            method: 'PUT',
            url: 'https://deckofcardsapi.com/api/deck/1q3xx2pqtn5m/draw/?count=2'

        }).then((response) => {
            console.log
            expect(response.status).to.equal(200)
            expect(response.body).not.be.null
        })
    })

})