
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


it('Validate that a driver can be added to the platform', function() {

 const landingPage = new LandingPage()


  //Open warenext url
  //cy.visit(this.data.baseURL)  

  cy.visit(Cypress.env("stagingUrl"))

  //Wait for 2 secs
  cy.wait(2000)


  
   //Login to the application
   cy.typeLogin({vehicleMgrUsername:this.data.vehicleMgrUsername, vehicleMgrPassword:this.data.vehicleMgrPassword,
  
   })
  
   landingPage.getDriverss().click()

   
   //Choose driver
   //landingPage.getDrivers().click()

   //Add driver
   landingPage.getAddDriver().click()

   //Add driver name
   landingPage.getDriverName().type(landingPage.randomChar(10))

   //Add driver phoneNo
   landingPage.getDriverPhoneNo().type('+234809019'+landingPage.keyGen(4))

   //Add driver email
   landingPage.getDriverEmail().type(landingPage.random(7)+'@yahoo.com')

  //Add driver license
  landingPage.getDriverLicense().type(landingPage.keyGen(8))

  //Create Driver
  landingPage.getSaveDriver().click()



//Validate that the driver is created successfully


if(landingPage.getSuccessfulAlertDriver('be.visible'))
{
  cy.log('Driver was created successfully')
} 


else {
  cy.log('Oops, driver could not be created!')
}


})




})
