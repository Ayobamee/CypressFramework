/// <reference types= "cypress" />

describe("Instagram Regression Test suite", function () {
  beforeEach(() => {
    cy.OpenUrl({});
  });

  it("Validate that user with invalid details cannot login to the Instagram successfully", function () {
  
    //Login
    cy.Login({});
    //Assert login with wrong details.
    cy.AssertLoginWrongDetails({});
  });

  it("Validate that user with invalid details cannot login to the Instagram successfully", function () {
  
    //Login
    cy.Login({});
    //Assert login with wrong details.
    cy.AssertLoginWrongDetails({});
  });
});
