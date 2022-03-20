/// <reference types= "cypress" />

describe("Instagram Regression Test suite",  () => {
  beforeEach(() => {
    cy.OpenUrl({});
  });

  it("Validate that user with invalid details cannot login to the Instagram successfully",  () => {
  
    //Login
    cy.Login({});
    //Assert login with wrong details.
    cy.AssertLoginWrongDetails({});
  });

});
