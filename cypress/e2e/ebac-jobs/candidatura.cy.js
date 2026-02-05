/// <reference types="cypress" />


describe('testes para a pagina de candidatura', () => {
    beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')

        })
        
    it('deve levar o usuario ate o formulario de inscrição', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.url().should('include', '/vagas/1')
    cy.get('input').should('have.length', 7)
    cy.screenshot('tela-inscrinçao')
    
    })
    it('deve prencer o formulario', () => {

        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('thiago')
        cy.get('input[name="email"]').type('dmthiagoribeiro@gmail.com')
        cy.get('input[name="telefone"]').type('11 12345678')
        cy.get('input[name="endereco"]').type('rua jest bairro cypress sp')
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
        cy.screenshot('tela-inscrinçao-preenchido')
    })
})


