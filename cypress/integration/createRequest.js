
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


it('Validate Merchant can create a shipment request successfully', function() {

 const requestPage = new RequestPage()

  //Open warenext url
  //cy.visit(this.data.baseURL)  

  cy.visit(Cypress.env("stagingUrl"))


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
    

})




})
