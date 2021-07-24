/// <reference types= "cypress" />


describe("Instagram Regression Test suite", function () {
  
  
  function openBrowser() {
    cy.OpenUrl({});
  }
  it('Validate that user with invalid details cannot login to the Instagram successfully', function () {
    //Open Instagram url
    openBrowser();
    //Login
    cy.Login({});
    //Assert login with wrong details.
    cy.AssertLoginWrongDetails({})
   });


});
