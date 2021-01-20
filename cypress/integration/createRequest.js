
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

    //Select pick up address
    requestPage.getLocationFrom().type('ikeja')

    //Wait for 4 secs
    cy.wait(4000)

    //Scroll down to particular locatiom
    requestPage.getLocationFrom().type('{downarrow}')

    //Wait for 1 sec
    cy.wait(1000)
    requestPage.getLocationFrom().type('{enter}')

    //Select ikeja from drop down
    requestPage.getSelectIkeja()


    //Select destination address
    requestPage.getDestination().type('ikeja')


     //Wait for 4 secs
     cy.wait(4000)

     //Scroll down to particular locatiom
     requestPage.getDestination().type('{downarrow}')

     //Select ikeja from drop down
    requestPage.getSelectIkeja()


    //Enter Contact Name 
   requestPage.getContactName().type(this.data.customerName)
    

    //Enter Phone No 
    requestPage.getPhoneNo().type(this.data.customerPhoneNo)

    // Tick check box for same delivery 
   //requestPage.getTick().click()

   //Enter Reciever Name 
   requestPage.getRecieverName().type(this.data.createdCustName)

    //Enter Reciever Phone No 
    requestPage.getRecieverPhoneNo().type(this.data.receiverPhoneNo)

   //Click Next
   requestPage.getNext().click({force: true})
    
    //requestPage.getLocationFrom().type('{downarrow}').click()
    

    //cy.wait(2000)

    //requestPage.getSelectIkeja()

    /*
    //Select destination
   requestPage.getDestination().type(this.data.PickUpAddress)


   //Enter Contact Name 
   requestPage.getContactName().type(this.data.customerName)
   
   //Enter Phone No 
   requestPage.getPhoneNo().type(this.data.customerPhoneNo)

   // Tick check box for same delivery 
   requestPage.getTick().click()

    //Click Next
    requestPage.getNext().click({force: true})
    
*/
   //requestPage.getSelectSpecArea().type('ikeja')

   //requestPage.getSelectIkeja()

   //Select pick up area
   //requestPage.getPickUpArea()

  

   //cy.get('.autocomplete-dropdown-container > :nth-child(5)').click()
   
   
   //Select area
   //requestPage.getSelectArea()

   //Enter address 
   //requestPage.getAddress().type(this.data.Address)
   

   

/*
   //Enter Reciever Name 
   requestPage.getRecieverName().type(this.data.createdCustName)

   //Enter Reciever Phone No 
   requestPage.getRecieverPhoneNo().type(this.data.receiverPhoneNo)

  

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
