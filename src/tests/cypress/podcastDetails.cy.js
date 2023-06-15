describe("Podcast details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(".podcast-list").should("be.visible");
    cy.get(".podcast-list-item").first().click();
  });
  it("Podcast details url should be the correct one", () => {
    // Arrange
    cy.get(".episodes-list", { timeout: 20000 }).should("be.visible");

    // Act
    // Assertions
    cy.location("pathname").should("include", "/podcast");
  });
  it("Podcast details redirect to podcast details episode when clicking in one of the episodes", () => {
    // Arrange
    cy.get(".episodes-list", { timeout: 20000 }).should("be.visible");

    // Act
    cy.get(".MuiTableCell-body")
      .first()
      .within(() => {
        cy.get("a").first().click();
      });

    // Assertions
    cy.get(".episode-details").should("be.visible");
  });
});
