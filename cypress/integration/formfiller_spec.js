describe('Formfiller simple test', function() {
    it('Open playground page, have some fun this beat is sick', function() {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Next, write the test', function () {
        cy
            .get('.action-email')
            .type('hire.me@example.com')
            .should('have.value', 'hire.me@example.com')

            .wait(2000)

            .type('{selectall}{backspace}')
            .type('you.really.should@example.com', {delay:100})
            .should('have.value', 'you.really.should@example.com')

            .wait(3000)

            .get('.action-focus').focus()
            .should('have.class', 'focus')
            .type('This password is hidden, lol')

            .wait(5000)
    })
})