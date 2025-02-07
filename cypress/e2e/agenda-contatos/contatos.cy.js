describe('Testes da Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('Hanna Sampaio')
        cy.get('input[placeholder="E-mail"]').type('hannasampaio@email.com')
        cy.get('input[placeholder="Telefone"]').type('11999998888')
        cy.get('.adicionar').click()

        cy.contains('Hanna Sampaio').should('exist')
        cy.contains('hannasampaio@email.com').should('exist')
        cy.contains('11999998888').should('exist')
    })

    it('Deve alterar um contato na lista', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').clear().type('Julia Sampaio')
        cy.get('input[placeholder="E-mail"]').clear().type('julia@teste.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11234568888')
        cy.get('.alterar').click()

        cy.contains('Julia Sampaio').should('exist')
        cy.contains('julia@teste.com').should('exist')
        cy.contains('11234568888').should('exist')
    })

    it('Deve remover um contato na lista', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.contains('Hanna Sampaio').should('exist')
    })
})
