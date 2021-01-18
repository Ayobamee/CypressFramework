
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


it('Validate that an Admin with correct Credentials can log into the platform', function() {

 const landingPage = new LandingPage()

 //Open as an Iphone 6 view
 //cy.viewport(320, 568)

  //Open Warenext
  cy.visit(this.data.baseURL)  
  //Wait for 2 secs
  cy.wait(2000)


  //Click Continue
  //homePage.getOnboardButton().click({force :true})
  
   //Login to the application
   cy.loginAdmin({username:this.data.adminUsername, password:this.data.adminPassword,
   })

  
   //Wait for 5 secs
   cy.wait(5000)


  //Validate that Admin user is successfully logged into the app.

  //Check that the spaces logo displays on landing page.
  //landingPage.getOnscreenSuccess().should('be.visible')

 //Check that Dashboard is displayed
 landingPage.getDashboard().should('be.visible')

 //Check that shipment is displayed
 landingPage.getShipments().should('be.visible')

 //Check that Partners is displayed
 landingPage.getPartners().should('be.visible')

 //Check that Settings is displayed
 landingPage.getSettings().should('be.visible')
  
 //Check that Profile Image is displayed
 landingPage.getProfile().should('be.visible')



})




})
