/* eslint-disable no-undef */
describe('Tests', () => {
  beforeEach(function () {
    resetDatabase();
    cy.viewport(1920, 911);
    cy.visit('http://localhost:3000');
  });
  it('Can add an anecdote', function () {
    cy.contains('Testing testing 123').should('not.exist');
    cy.get('#createAnecdoteForm > div > input').click();
    cy.get('#createAnecdoteForm > div > input').type('Testing testing 123');
    cy.get('#createAnecdoteForm > div > button').click();
    cy.get('#anecdoteList').contains('Testing testing 123');
  });
  it('Can vote for an anecdote', function () {
    cy.contains('has 1 votes').should('not.exist');
    cy.get('#anecdoteList > #anecdote').first().find('#votes > button').click();
    cy.contains('has 1 votes');
  });
});