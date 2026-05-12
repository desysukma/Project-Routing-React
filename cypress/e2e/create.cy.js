describe("Create Destinasi", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });
  });

  it("creates a new destinasi", () => {
    cy.contains("Create destinasi").click();
    cy.get("input[name='title']").type("New destinasi");
    cy.contains("button", "Create").click();
    cy.url().should("eq", "http://localhost:5173/");
    cy.contains("New destinasi").should("be.visible");
  });
});