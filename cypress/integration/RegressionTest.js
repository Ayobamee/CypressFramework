/// <reference types= "cypress" />
import HomePage from "../pageObjects/HomePage";
import ProgramPage from "../pageObjects/ProgramPage";
import ProvidersPage from "../pageObjects/ProvidersPage";
import SupportPage from "..//pageObjects/SupportPage";
import CareerPage from "..//pageObjects/CareerPage";


describe("Corporate Website Regression Test suite", function () {
  
  const urlLinkTestCase = "C1015";
  const ourNumbersTestCase = "C1024";
  const programpageTestCase = "C1032";
  const logoTestCase = "C1018";
  const renderHomeTestCase = "C1017";
  const supportedLangTestCase = "C1019";
  const menuIconButtonTestCase = "C1020";
  const notificationsTestCase = "C1021";
  const bannerTestCase = "C1022";
  const ourStoryTestCase = "C1025";
  const baseUrl = "https://1wa.org/#/";
  

  //Page Imports.
  const homePage = new HomePage();
  const progPage = new ProgramPage();
  const providerPage = new ProvidersPage();
  const supportPage = new SupportPage();
  const careerPage = new CareerPage();


  
  function openBrowser() {
    cy.OpenUrl({});
  }

  function wait() {
    cy.wait(5000);
  }


  it('Validate that the website is rendered successfully ' +renderHomeTestCase, function () {
   
    //Open 1wa url
    openBrowser();
 
   });


  it('Validate that the website link is displayed ' +urlLinkTestCase, function () {
   
    //Open 1wa url
    openBrowser();

    //wait
    wait();

    //Assert that the website link shows.
    homePage.getUrlLink().should('eq', baseUrl)
 
   });

   it('Validate that Logo page populates ' +logoTestCase, function () {
   
    //Open 1wa url.
    openBrowser();
 
     //wait
     wait();
 
    //Assert that logo is visible.
    homePage.getLogo().should("be.visible");
 
   });


   it('Validate that Supported Languages are displayed ' +supportedLangTestCase, function () {
   
    //Open 1wa url.
    openBrowser();
 
     //wait
     wait();
 
    //Assert that the  English language is visible.
    homePage.getEnglishLanguage().should("be.visible");
    //Assert that the Spanish language is visible
    homePage.getSpanishLanguage().should("be.visible");
     //Assert that the French language is visible
     homePage.getFrenchLanguage().should("be.visible");
      //Assert that the Italian language is visible
      homePage.getItalianLanguage().should("be.visible");
       //Assert that the Turkish language is visible
       homePage.getTurkishLanguage().should("be.visible");
 
   });

   it('Validate that Menus, Icons and Buttons are displayed ' +menuIconButtonTestCase, function () {
   
    //Open 1wa url.
    openBrowser();
 
     //wait
     wait();

     //Assert that the Home module is visible.
     homePage.getHome().should("be.visible");
    //Assert that the Program module is visible.
    progPage.getPrograms().should("be.visible");
    //Assert that the Providers module is visible
    providerPage.getProviders().should("be.visible")
    //Assert that the Support module is visible
    supportPage.getSupport().should("be.visible")
    //Assert that the Career module is visible
    careerPage.getCareer().should("be.visible")
    //Assert cart icon is displayed.
    homePage.getCart().should("be.visible")
    //Assert that the hamburger menu is visible
    homePage.getHamburger().should("be.visible")

   });


   it('Validate that Notification lines populates ' +notificationsTestCase, function () {
   
    //Open 1wa url.
    openBrowser();
 
     //wait
     wait();
 
    //Assert that notification line is displayed, highlighted in red.
    homePage.getNotificationLine().should("be.visible")
 
   });


   it('Validate that a Banner image is displayed ' +bannerTestCase, function () {
   
    //Open 1wa url.
    openBrowser(); 
     //wait
     wait();

    //Assert that banner is displayed.
    homePage.getBanner().should("be.visible")
 
   });



  it('Validate that Our Numbers page populates ' +ourNumbersTestCase, function () {
   
    //Open 1wa url
    openBrowser();
    //wait
    wait();
    //Assert that Our Team module loads.
    homePage.getTeam().should("be.visible");
    //Assert that our EQA module loads.
    homePage.getEQA().should("be.visible")
    //Assert that our OASYS module loads.
    homePage.getOASYS().should("be.visible")
   });

   it('Validate that Our Story page populates ' +ourStoryTestCase, function () {
   
    //Open 1wa url
    openBrowser();
    //wait
    wait();
    //Assert that Intro module loads.
    homePage.getIntro().should("be.visible")
    //Assert that Future module loads.
    homePage.getFuture().should("be.visible")
    //Assert that Our Team module loads.
    homePage.getOurTeam().should("be.visible")
   });


  it('Validate that Programs page populates ' +programpageTestCase, function () {
   
    //Open 1wa url.
    openBrowser();
     //wait
     wait();
    //Select programs
    cy.Programs({});

  });













});
