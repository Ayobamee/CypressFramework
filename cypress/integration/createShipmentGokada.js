
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



it('Create Shipment for Gokada Test(s)', function() {
cy.request('GET' , this.data.stagingBaseURL+this.data.authStaging, {


"password": this.data.merchantPassword,
"email": this.data.merchant2Username
  

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.accessToken)


//Confirm user can create shipment

cy.request({
    
  method: 'PUT' ,
  url: this.data.stagingBaseURL+this.data.createShipment, 


headers: {


  Authorization: authtoken
  
},


body:{  
    "pickupDate": "12/12/2021",
    "pickupTime": "12:02 AM",
    "locationFrom": [
    {
    "address": {
    "country": "Nigeria",
    "state": "Lagos",
    "city": "Ikeja",
    "address": "12 Sobo Arobiodu Street, Ikeja, Nigeria",
    "zone": "Ikeja",
    "coords": {
    "lat": 6.5757504,
    "lng": 3.3510988
    },
    "contactName": "ware next",
    "contactNumber": "+2347063560000"
    },
    "products": [
    {
    "type": "Documents",
    "weight": "2",
    "quantity": 2,
    "description": ""
    }
    ]
    }
    ],
    "locationTo": [
    {
    "address": {
    "country": "Nigeria",
    "state": "Lagos",
    "city": "Lekki",
    "address": "20 Layi Yusuf Cresent, Lekki, Nigeria",
    "zone": "VI/Lekki Phase 1/Lagos Island/Ikoyi",
    "coords": {
    "lat": 6.4384494,
    "lng": 3.4545062
    },
    "contactName": "ware next",
    "contactNumber": "+2347063560000"
    },
    "products": [
    {
    "type": "Documents",
    "weight": "2",
    "quantity": 2,
    "description": ""
    }
    ]
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
    "quantity": 2,
    "description": ""
    }
    ]
    },
    "deliveryPartner": [
    "aRbEWt5glOcodzRTYMSk"
    ],
    "paymentInformation": {
    "method": "cash",
    "status": "success",
    "price": 6000
    }
    }



}).then(function(createShipment)

{ 

  if(expect(createShipment.body).to.have.property("jobId")&& expect(createShipment.status).to.eq(200) && expect(createShipment).to.have.property('headers')
  &&expect(createShipment).to.have.property('body') ) {

    cy.log('Test passed, shipments can be created.')
  }
  else {

    cy.log('Oops, something went wrong :(')
  }




const jobId = (createShipment.body.jobId)


//Confirm Job Id displays

  cy.request({
    
    method: 'GET' ,
    url: this.data.stagingBaseURL +'/truckerJobV1/'+jobId, 




  headers: {

    Authorization: authtoken
    
  },


  body:{
    
  }
  
  }).then(function(checkjob)
  
  {


 

  
    if(expect(checkjob.status).to.eq(200) && expect(checkjob.body).to.have.property("jobId")

    
    )
    
    
    
    {

      cy.log("Job Id is displaying for Gokada delivery partner")

    }
      else{

        cy.log("Oops, Job Id is not showing")
      }
    

})

})


})

})

})




