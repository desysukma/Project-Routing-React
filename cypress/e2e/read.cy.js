describe("Read destinasi", () => {
  beforeEach(() => {
    cy.seedTodo("Read Me");
  });

  it("opens destinasi detail page", () => {
    cy.contains("Read Me").should("be.visible").click();
    cy.url().should("include", "/destinasi/");
    cy.contains("Read Me").should("be.visible");
  });
});