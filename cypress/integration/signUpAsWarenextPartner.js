
/// <reference types= "cypress" />
import LandingPage from '../pageObjects/LandingPage'

describe('Warenext Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate that a Merchant can sign up to the platform', function() {

 const landingPage = new LandingPage()

 //Open as an Iphone 6 view
 //cy.viewport(320, 568)

  //Open warenext url
  //cy.visit(this.data.baseURL)  

  cy.visit(Cypress.env("stagingUrl"))
  
  //Wait for 2 secs
  cy.wait(2000)


  //Click create account
  landingPage.getCreateAccount().click()
 

 //Click customer
 landingPage.getWarenextPartner().click()

 //Wait for 6 secs
cy.wait(6000)

 //Enter first Name
 landingPage.getFirstName().type(landingPage.randomChar(8))

 //Enter last Name
 landingPage.getLastName().type(landingPage.randomChar(6))

 //Enter email address
 landingPage.getEmail().type(landingPage.random(5)+'@yahoo.com')

 //Enter Phone Number
 landingPage.getPhoneNo().type('+234809019'+landingPage.random(4))

 //Enter Password
 landingPage.getPassword().type(this.data.password)
  
  //Retype Password
  landingPage.getRetypePassword().type(this.data.password)

//Select refered medium
landingPage.getHowYouHeard()


  //Click signup
  landingPage.getSignUp().click()

 //Validate signup is successsful
 landingPage.getSignUpAlert().should('be.visible')


 


})




})
