describe('Expense Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('checks the title input', () => {
        cy.get('input[type="text"]')
            .type('New book')
            .should('have.value', 'New book')
    })

    it('checks the amount input', () => {
        cy.get('input[type="number"]')
            .type('30')
            .should('have.value', '30')
    })

    it('checks the date input', () => {
        cy.get('input[type="date"]')
            .type('2023-03-07')
            .should('have.value', '2023-03-07')
    })

    it('clicks on the "Add Expense" button', () => {
        cy.get('button[type="submit"]').click()
    })
})

