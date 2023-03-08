describe('ExpensesFilter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('filters the expenses list by year when a year is selected', () => {
        cy.get('.expenses-filter select').select('2023');
        cy.get('.expense-item__date').each(($el) => {
            expect($el.text()).to.include('2023');
        });

        cy.get('.expenses-filter select').select('2024');
        cy.get('.expense-item__date').each(($el) => {
            expect($el.text()).to.include('2024');
        });

        cy.get('.expenses-filter select').select('2025');
        cy.get('.expense-item__date').each(($el) => {
            expect($el.text()).to.include('2025');
        });
    });
});
