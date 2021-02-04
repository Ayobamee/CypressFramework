
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


it('Validate that a Merchant with correct Credentials can log into the platform', function() {

 const landingPage = new LandingPage()



 //Open warenext url
  //cy.visit(this.data.baseURL)  

  cy.visit(Cypress.env("stagingUrl"))


  //Wait for 2 secs
  cy.wait(2000)


  
   //Login to the application
   cy.loginMerchant({merchUsername:this.data.merchantUsername, merchPassword:this.data.merchantPassword,
  
   })

      
   //Wait for 5 secs
   cy.wait(5000)
  
  //Validate that Merchant user is successfully logged into the app.

  //Check that the spaces logo displays on landing page.
  //landingPage.getOnscreenSuccess().should('be.visible')

 //Check that Dashboard is displayed
 landingPage.getDashboard().should('be.visible')

 //Check that shipment is displayed
 landingPage.getShipments().should('be.visible')

 //Check that Inventory is displayed
 landingPage.getInventory().should('be.visible')

 //Check that Bookings is displayed
 //landingPage.getShipments().should('be.visible')
  
 //Check that Profile Image is displayed
 landingPage.getProfile().should('be.visible')


 //Check that ware housing element is displayed
 landingPage.getwareHousing().should('be.visible')


 landingPage.getFufilment().should('be.visible')

})




})
