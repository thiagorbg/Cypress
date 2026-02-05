/// <reference types="cypress" />


describe('testes para home', () => {
    it('deve renderizar  4 vagas', () => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('deve filtar por fullstack', () => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})