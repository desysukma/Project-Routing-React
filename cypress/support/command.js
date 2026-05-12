// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createDestinasi", (title) => {
  cy.visit("/destinasi/new");
  cy.get("input[name='title']").type(title);
  cy.contains("Create").click();
});

Cypress.Commands.add("seedDestinasi", (title) => {
  // Create via UI so the real uuid gets generated
  cy.visit("/destinasi/new");
  cy.get("input[name='title']").type(title);
  cy.contains("button", "Create").click();
  // Now on /, click the todo to get its ID from the URL
  cy.contains(title).click();
  cy.url().then((url) => {
    const id = url.split("/destinasi/")[1];
    cy.wrap(id).as("destinasiId");
  });
  cy.visit("/");
});