/// <reference types= "cypress" />


describe("Corporate website Regression Test suite", function () {
  
  const testCaseid1 = "C1016";
  const testCaseid2 = "C1015";
  
  function openBrowser() {
    cy.OpenUrl({});
  }

  it('Validate that Home page populates ' +testCaseid1, function () {
   
   //Open 1wa url
   openBrowser();
 

  });

  

  it('Validate that Programs page populates ' +testCaseid2, function () {
   
    //Open 1wa url
    openBrowser();
   
    //Select programs
    cy.Programs({});



  });



});
