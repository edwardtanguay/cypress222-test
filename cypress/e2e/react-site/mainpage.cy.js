beforeEach(() => {
	cy.visit('/');
});

it('the page loads', () => {});

it('the header text is correct', () => {
	cy.get('h1').invoke('text').should('equal', 'The Info Site');
});

context('message box', () => {
	it('the message does not show when no text is in box', () => {
		// cy.get('[data-cy="numberOfChars"]').as('numchars');
		cy.get('[data-cy="numberOfChars"]').should('not.exist');
	});

	it('the message reports number of characters that are typed in the box', () => {
		cy.get('input').type('this is a test');

		// cy.get('[data-cy="numberOfChars"]').as('numchars');
		cy.get('[data-cy="numberOfChars"]')
			.invoke('text')
			.should('equal', '14');
	});
});
