describe("Delete destinasi", () => {
  beforeEach(() => {
    cy.seedTodo("Delete Me");
  });

  it("deletes a destinasi", () => {
    cy.contains("Delete Me").should("be.visible").click();
    cy.contains("button", "Delete").should("be.visible").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("Delete Me").should("not.exist");
  });
});