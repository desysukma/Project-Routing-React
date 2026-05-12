describe("Edit destinasi", () => {
  beforeEach(() => {
    cy.seedTodo("Old Title");
  });

  it("updates a destinasi", () => {
    cy.contains("Old Title").should("be.visible").click();
    cy.contains("Edit").should("be.visible").click();
    cy.get("input[name='title']").clear().type("Updated Title");
    cy.contains("button", "Save").click();
    cy.contains("Updated Title").should("be.visible");
  });
});