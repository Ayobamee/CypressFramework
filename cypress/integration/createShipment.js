
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



it('Create Shipment Test', function() {


cy.request('GET' , this.data.apiBaseURL, {


"password": this.data.adminPassword,
"email": this.data.merchantUsername
  

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.accessToken)

//cy.log(authtoken)




cy.request({
    
  method: 'PUT' ,
  url: this.data.createShipmentBaseURL, 


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
    "xZivkwgfKAamCXTb3C9m"
    ],
    "paymentInformation": {
    "method": "cash",
    "status": "success",
    "price": 6000
    }
    }








}).then(function(createShipment)

{ 

  if(expect(createShipment.status).to.eq(200) && expect(createShipment).to.have.property('headers')
  &&expect(createShipment).to.have.property('body') ) {

    cy.log('Test passed, shipments can be created.')
  }
  else {

    cy.log('Oops, something went wrong :(')
  }



})

})


})

})


