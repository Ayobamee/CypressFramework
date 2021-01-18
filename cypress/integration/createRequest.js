
/// <reference types= "cypress" />
//import LandingPage from '../pageObjects/LandingPage'
import RequestPage from '../pageObjects/RequestPage'

describe('Warenext Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate Merchant can create a shipment request', function() {

 const requestPage = new RequestPage()

  //Open Spaces
  cy.visit(this.data.baseURL)  


  //Wait for 2 secs
  cy.wait(2000)

  
   //Login to the application
   cy.loginMerchant({merchUsername:this.data.merchantUsername, merchPassword:this.data.merchantPassword,
  
   })


   //Click create request
   requestPage.getcreateRequest().click()

   //requestPage.getSelectSpecArea().type('ikeja')

   //requestPage.getSelectIkeja()

   //Select pick up area
   //requestPage.getPickUpArea()

   //Select pick up address
   requestPage.getLocationFrom().type(this.data.PickUpAddress)

   //Select area
   requestPage.getSelectArea()

   //Enter address 
   requestPage.getAddress().type(this.data.Address)
   

   //Enter Contact Name 
   requestPage.getContactName().type(this.data.customerName)

   //Enter Phone No 
   requestPage.getPhoneNo().type(this.data.customerPhoneNo)

   //Enter Reciever Name 
   requestPage.getRecieverName().type(this.data.createdCustName)

   //Enter Reciever Phone No 
   requestPage.getRecieverPhoneNo().type(this.data.receiverPhoneNo)

   //Click Next
   requestPage.getNext().click({force: true})

   //Choose vehicle Type
   requestPage.getVehicleType().click()

   //Select Product Detail
   requestPage.getProductDetails()
 
   //Click next
   requestPage.getSecondNext().click({force: true})

  /*
  //Validate that Admin user is successfully logged into the app.

  //Check that the spaces logo displays on landing page.
  landingPage.getOnscreenSuccess().should('be.visible')

 //Check that Dashboard is displayed
 landingPage.getDashboard().should('be.visible')

 //Check that shipment is displayed
 landingPage.getShipments().should('be.visible')

 //Check that Inventory is displayed
 landingPage.getInventory().should('be.visible')

 //Check that Bookings is displayed
 landingPage.getBookings().should('be.visible')
  
 //Check that Profile Image is displayed
 landingPage.getProfile().should('be.visible')


 //Check that ware housing element is displayed
 landingPage.getwareHousing().should('be.visible')

*/
})




})
