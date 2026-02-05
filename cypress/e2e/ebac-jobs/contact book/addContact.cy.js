/// <reference types="cypress" />


describe('test end functions of aplication', () => {

    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('add new contact ' , () => {
        cy.get('[type="text"]').type('thiago')
        cy.get('[type="email"]').type('gian@gmail.com')
        cy.get('[type="tel"]').type('53648295478')
        cy.get('.adicionar').click()

    })
    it('editing contact', () => {
        cy.get('.contato').eq(0).find('button.edit').click()
        cy.get('[type="tel"]').clear().type('0000005000')
        cy.get('.alterar').click()

    })
    it('delete of contact' , () => {
        cy.get('.contato').eq(0).find('button.delete').click() 
    })

})