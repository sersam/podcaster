describe("Header", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
  });
  it("Header should redirect to podcast list when clicking on the title", () => {
    // Arrange
    cy.get(".podcast-list").should("be.visible");
    cy.get(".podcast-list-item").first().click();

    // Act
    cy.get(".header").within(() => {
      cy.get("a").click();
    });
    // Assertions
    cy.location("pathname").should("eq", "/");
  });
  it("Header circular spinner should be shown while loading the content", () => {
    // Arrange
    // Act

    // Assertions
    cy.get(".MuiCircularProgress-root").should("be.visible");
  });
  it("Header circular spinner should not be shown once the content is loaded", () => {
    // Arrange
    cy.get(".podcast-list").should("be.visible");
    // Act

    // Assertions
    cy.get(".MuiCircularProgress-root").should("not.exist");
  });
});
