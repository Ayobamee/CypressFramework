
/// <reference types= "cypress" />


describe('Warenext API TestSuite', function()
{

//Import test data
before(function() {
  
  cy.fixture('testData').then(function(data)
  {
this.data=data

  })

})



it('List Pricing Test', function() {


cy.request('GET' , this.data.stagingBaseURL+this.data.authStaging, {


"password": this.data.merchantPassword,
"email": this.data.merchantUsername
  

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.accessToken)

//cy.log(authtoken)




cy.request({
    
  method: 'POST' ,
  url: this.data.stagingBaseURL+this.data.shipmentPricing, 


headers: {


  Authorization: authtoken
  
},


body:{



      "locationFrom": [
       {
          "country": "Nigeria",
          "state": "Lagos",
          "city": "Ikeja",
          "address": "12 Sobo Arobiodu Street, Ikeja, Nigeria",
          "zone": "Ikeja",
          "coords": {
             "lat": 6.4352756,
             "lng": 3.4147873
          }
       }
    ],
    "locationTo": [
       {
          "country": "Nigeria",
          "state": "Lagos",
          "city": "Lekki",
          "address": "33 Bisola Durosinmi Etti Drive, Lekki, Nigeria",
          "zone": "VI/Lekki Phase 1/Lagos Island/Ikoyi",
          "coords": {
             "lat": 6.4561505,
             "lng": 3.4298537
          }
       }
    ],
    "details": {
       "vehicleQuantity": 1,
       "vehicleType": "motorbike",
       "truckType": "",
       "truckWeight": "",
       "products": [
          {
             "type": "Documents",
             "weight": "2",
             "quantity": 1,
             "description": ""
          }
       ]
    }
 
    

  
    
    }


}).then(function(listprice)

{ 

  

  if(expect(listprice.status).to.eq(200) && expect(listprice).to.have.property('headers')
  &&expect(listprice).to.have.property('body') ) {

    cy.log('Test passed, pricing can be listed.')
  }
  else {

    cy.log('Oops, something went wrong :(')
  }



})

})


})

})


