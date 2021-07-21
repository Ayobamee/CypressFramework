// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })


import HomePage from "../pageObjects/HomePage";
import ProgramPage from "../pageObjects/ProgramPage";
import ProvidersPage from "../pageObjects/ProvidersPage";
import SupportPage from "..//pageObjects/SupportPage";
import CareerPage from "..//pageObjects/CareerPage";

const homePage = new HomePage();
const progPage = new ProgramPage();
  const providerPage = new ProvidersPage();
  const supportPage = new SupportPage();
  const careerPage = new CareerPage();

const baseUrl = "https://1wa.org/#/";

Cypress.Commands.add('AssertUrlLink', () => {

  //Get Url link
  homePage.getUrlLink().should('eq', baseUrl)

})

Cypress.Commands.add('AssertSupportedLanguages', () => {
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

})

Cypress.Commands.add('AssertMenuItems', () => {
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

})


Cypress.Commands.add('AssertLogo', () => {

  //Assert logo
  homePage.getLogo().should("be.visible");

})

Cypress.Commands.add('AssertNotificationLine', () => {

  //Assert Notifications
  homePage.getNotificationLine().should("be.visible")

})

Cypress.Commands.add('AssertBanners', () => {

  //Assert Banners
  homePage.getBanner().should("be.visible")

})

Cypress.Commands.add('AssertOurNumbers', () => {

  //Assert Our Numbers page.
    //Assert that Our Team module loads.
    homePage.getTeam().should("be.visible");
    //Assert that our EQA module loads.
    homePage.getEQA().should("be.visible")
    //Assert that our OASYS module loads.
    homePage.getOASYS().should("be.visible")

})

Cypress.Commands.add('AssertOurStory', () => {
    //Assert that Our Team module loads.
    homePage.getIntro().should("be.visible")
    //Assert that Future module loads.
    homePage.getFuture().should("be.visible")
    //Assert that Our Team module loads.
    homePage.getOurTeam().should("be.visible")

})

Cypress.Commands.add('AssertFooterPage', () => {
  //Assert Footer Page
  homePage.getInstagramLogo().should("be.visible")
  //Assert that the Linkedin logo is displyed
  homePage.getLinkedinLogo().should("be.visible")
  //Assert that the youtube logo is displayed.
  homePage.getYoutubeLogo().should("be.visible")
  //Assert that newsletter is displayed
  homePage.getNewsletter().should("be.visible")
  //Assert that the support email is displayed.
  homePage.getNewsletter().should("be.visible")
  //Assert that the support email link is displayed
  homePage.getSupportEmail().should("be.visible")
  //Assert that the copy right is displayed.
  homePage.getCopyright().should("be.visible")

})


//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... 
