
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


it('Validate login as a Vehicle Manager with correct Credentials', function() {

 const landingPage = new LandingPage()



  //Open Spaces
  cy.visit(this.data.baseURL)  


  //Wait for 2 secs
  cy.wait(2000)


  
   //Login to the application
   cy.typeLogin({vehicleMgrUsername:this.data.vehicleMgrUsername, vehicleMgrPassword:this.data.vehicleMgrPassword,
  
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

 //Check that Inventory is displayed
 landingPage.getInventory().should('be.visible')

 //Check that Bookings is displayed
 //landingPage.getBookings().should('be.visible')
  
 //Check that Profile Image is displayed
 landingPage.getProfile().should('be.visible')

 //Check that drivers info appears
 landingPage.getDrivers().should('be.visible')


//Check that pricing sheets info appears
landingPage.getPricingSheets().should('be.visible')


//Check that delivery zones info appears
landingPage.getDeliveryZones().should('be.visible')



 //Check that ware housing element is displayed
 //landingPage.getwareHousing().should('be.visible')


})




})
