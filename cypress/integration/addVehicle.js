
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


it('Validate that a vehicle can be added to the platform', function() {

 const landingPage = new LandingPage()


  //Open Spaces
  cy.visit(this.data.baseURL)  


  //Wait for 2 secs
  cy.wait(2000)


  
   //Login to the application
   cy.typeLogin({vehicleMgrUsername:this.data.vehicleMgrUsername, vehicleMgrPassword:this.data.vehicleMgrPassword,
  
   })
  
   //Choose driver
   landingPage.getVehicles().click()

   //Create Vehicle
   landingPage.getCreateVehicle().click()

   //Add Vehicle
   //landingPage.getAddVehicle().click()


  //Input Vehicle Registration No
  landingPage.getVehicleRegNo().type(landingPage.keyGen(8))

  //Select vehicle type
  landingPage.getVehicleType()

  //Input vehicle model
  landingPage.getVehicleModel().type(this.data.bicycleModel)

  //Input vehicle make
  landingPage.getVehicleMake().type(this.data.bicyclemake)

  //Click Add vehicle
  landingPage.getAddVehicleButton().click()


//Validate that the vehicle is created successfully

landingPage.getSuccessfulVehicle('be.visible')
 

})




})
