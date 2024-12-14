describe("end2end testes", () => {
  it("renders Main page", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="cypress-title"]')
      .should("exist")
      .should("have.text", "My litle project");

    cy.get("p")
      .should("exist")
      .should("have.text", "My litle project with storybook jest and cypress");

    cy.contains("a").click();
  });

  it("renders my Count Page", () => {
    cy.visit("http://localhost:3000/CountPage");
    cy.url().should("include", "/CountPage");

    cy.get("h2").should("exist").should("have.text", "Count Page");
    cy.get("h4").should("exist").should("have.value", "");

    cy.get('[data-testid="cypress-botton-container"]').should("exist");

    cy.contains("Increment").should("exist");
    cy.contains("Decrement").should("exist");
    cy.contains("Home Page").should("exist");
  });

  it("increment the count", () => {
    cy.visit("http://localhost:3000/CountPage");

    cy.contains("Increment").should("exist").click();
    cy.get("h4").should("exist").should("have.text", "Count: 1");
    cy.contains("Increment").should("exist").click();
    cy.contains("Increment").should("exist").click();
    cy.get("h4").should("exist").should("have.text", "Count: 3");
  });

  it("decrement the count", () => {
    cy.visit("http://localhost:3000/CountPage");

    cy.contains("Decrement").should("exist").click();
    cy.get("h4").should("exist").should("have.text", "Count: -1");
    cy.contains("Decrement").should("exist").click();
    cy.get("h4").should("exist").should("have.text", "Count: -2");
  });

  it("return to Home Page", () => {
    cy.visit("http://localhost:3000/CountPage");

    cy.contains("Home Page").should("exist").click();
    cy.url().should("include", "/");
  });
});
