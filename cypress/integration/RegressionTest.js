/// <reference types= "cypress" />


describe("Corporate Website Regression Test suite", function () {
  
  const urlLinkTestCase = "C1015";
  const websiteVersionTestCase = "C1016";
  const renderHomeTestCase = "C1017";
  const logoTestCase = "C1018";
  const supportedLangTestCase = "C1019";
  const menuIconButtonTestCase = "C1020";
  const notificationsTestCase = "C1021";
  const bannerTestCase = "C1022";
  const ourNumbersTestCase = "C1024";
  const ourStoryTestCase = "C1025";
  const footerTestCase = "C1026";
  const viewMoreProgramTestCase = "C2218";
  const learnMore = "C2252";

  
  


  function openBrowserAndWait() {
    cy.OpenUrl({});
    cy.wait(5000);
  }


  it('Validate that the website is rendered successfully ' +renderHomeTestCase, function () {
    //Open 1wa url
    openBrowserAndWait();
   });


  it('Validate that the website link is displayed ' +urlLinkTestCase, function () {
    //Open 1wa url
    openBrowserAndWait();
    //Assert that the website link shows.
    cy.AssertUrlLink({});
   });

   it('Validate that the correct website version is displayed ' +websiteVersionTestCase, function () {
    //Open 1wa url
    openBrowserAndWait();
    //Assert that the website link shows.
    cy.AssertVersion({});
   });


   it('Validate that Logo page populates ' +logoTestCase, function () {
   
    //Open 1wa url.
    openBrowserAndWait();
    //Assert that logo is visible.
   cy.AssertLogo({});
   });


   it('Validate that Supported Languages are displayed ' +supportedLangTestCase, function () {
   
    //Open 1wa url.
    openBrowserAndWait();
    //Assert that Supported language is displayed.
    cy.AssertSupportedLanguages({});
 
   });

   it('Validate that Menus, Icons and Buttons are displayed ' +menuIconButtonTestCase, function () {
    //Open 1wa url.
    openBrowserAndWait();
     //Assert Menu Items are displayed.
    cy.AssertMenuItems({});

   });


   it('Validate that Notification lines populates ' +notificationsTestCase, function () {
    //Open 1wa url.
    openBrowserAndWait();
    //Assert that notification line is displayed, highlighted in red.
    cy.AssertNotificationLine({});
   });


   it('Validate that a Banner image is displayed ' +bannerTestCase, function () {
   
    //Open 1wa url.
    openBrowserAndWait();
    //Assert that banner is displayed.
   cy.AssertBanners({});
   });


  it('Validate that Our Numbers page populates ' +ourNumbersTestCase, function () {
   
    //Open 1wa url
    openBrowserAndWait();
    //Assert Our numbers page.
    cy.AssertOurNumbers({});
   });

   it('Validate that Our Story page populates ' +ourStoryTestCase, function () {
   
    //Open 1wa url
    openBrowserAndWait();
    //Assert that Our Story page.
    cy.AssertOurStory({});
  
   });


  it('Validate that Programs page populates ' +viewMoreProgramTestCase, function () {
   
    //Open 1wa url.
    openBrowserAndWait();
    //Select programs
    cy.Programs({force:true});
  });


  it('Validate that items in the Footer page populates ' +footerTestCase, function () {
    //Open 1wa url.
    openBrowserAndWait();
     //Assert that the Footer Page
     cy.AssertFooterPage({});
  });

  it('Validate that when user clicks the learn more button, learn more page items displays ' +learnMore, function () {
    //Open 1wa url.
    openBrowserAndWait();
     //Click learn more
     cy.ClickLearnMore({});
     //Assert learn more page items.
     cy.AssertLearnMorePageItems({})
  });


});
