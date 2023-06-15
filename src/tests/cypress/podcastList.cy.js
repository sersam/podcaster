describe("Podcast list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Podcast list is not shown if the are not podcasts matching the text introduced", () => {
    // Arrange
    // Act
    cy.get(".podcast-list").should("be.visible");
    cy.get(".search-input").type("test");

    // Assertions
    cy.get(".podcast-list").should("not.be.visible");
  });
  it("Podcast list redirect to podcast details when clicking in one of the entries", () => {
    // Arrange
    // Act
    cy.get(".podcast-list").should("be.visible");
    cy.get(".podcast-list-item").first().click();

    // Assertions
    cy.get(".podcast-details").should("be.visible");
  });
});
