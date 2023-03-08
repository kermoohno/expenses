describe('Expense Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('clicks on the "Add Expense" button and adds new expense to the list', () => {
        // Type in the form inputs
        cy.get('input[type="text"]').type('New PC')
        cy.get('input[type="number"]').type('300')
        cy.get('input[type="date"]').type('2023-05-05')

        // Click on the submit button
        cy.get('button[type="submit"]').click()

    })
})
