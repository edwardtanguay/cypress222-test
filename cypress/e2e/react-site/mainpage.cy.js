it('loads page', () => {
	cy.visit('http://127.0.0.1:5173');
});

it('header has correct text', () => {
	cy.visit('http://127.0.0.1:5173');
	cy.get('h1').invoke('text').should('equal', 'The Info Site');
})
