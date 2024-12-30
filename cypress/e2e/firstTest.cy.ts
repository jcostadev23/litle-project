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

    cy.get('[data-testid="count-page-title"]')
      .should("exist")
      .should("have.text", "Pagina de Contar");

    cy.get('[data-testid="count-value"]')
      .should("exist")
      .should("have.value", "");

    cy.get('[data-testid="cypress-botton-container"]').should("exist");

    cy.get('[data-testid="increment"]').should("exist");
    cy.get('[data-testid="decrement"]').should("exist");
    cy.get('[data-testid="homePage"]').should("exist");
  });

  it("increment the count", () => {
    cy.visit("http://localhost:3000/CountPage");

    cy.get('[data-testid="increment"]').should("exist").click();
    cy.get('[data-testid="count-value"]')
      .should("exist")
      .should("have.text", "Contagem: 1");
    cy.get('[data-testid="increment"]').should("exist").click();
    cy.get('[data-testid="increment"]').should("exist").click();
    cy.get('[data-testid="count-value"]')
      .should("exist")
      .should("have.text", "Contagem: 3");
  });

  it("decrement the count", () => {
    cy.visit("http://localhost:3000/CountPage");

    cy.get('[data-testid="decrement"]').should("exist").click();
    cy.get('[data-testid="count-value"]')
      .should("exist")
      .should("have.text", "Contagem: -1");
    cy.get('[data-testid="decrement"]').should("exist").click();
    cy.get('[data-testid="count-value"]')
      .should("exist")
      .should("have.text", "Contagem: -2");
  });

  it("return to Home Page", () => {
    cy.visit("http://localhost:3000/CountPage");

    cy.get('[data-testid="homePage"]').should("exist").click();
    cy.url().should("include", "/");
  });
});
