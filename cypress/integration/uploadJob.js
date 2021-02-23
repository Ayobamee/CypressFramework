
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



it('Upload job API Test', function() {


cy.request('GET' , this.data.stagingBaseURL+this.data.authStaging, {


"password": this.data.merchantPassword,
"email": this.data.adminUsername
  

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.accessToken)


//cy.log(authtoken)




cy.request({
    
  method: 'POST' ,
  url: this.data.stagingBaseURL+this.data.uploadJob, 


headers: {


  Authorization: authtoken
  
},


body:

  [{
    "pickupLocationCity": "Yaba",
    "pickupAddress": "24 yaba road",
    "pickupContactPhoneNumber": "08037909777",
    "pickupContactName": "Tunji",
    "productQuantity": 10,
    "productDescription": "Cake",
    "deliveryAddress": "Surelere stadium",
    "deliveryLocationCity": "Surelere",
    "deliveryContactPhoneNumber": "08037909777",
    "deliveryContactName": "Ibukun",
    "vehicleType": "car",
    "partnerId": "VV8Pc8oGkzSobUMVxtQu",
    "merchantId": "4KBq4RMsYT8p71G0Z3wV",
    "pickupDate": "2020-02-04",
    "costPrice": "2000",
    "productWeight": 10,
    "productType": "document",
    "pickupTime": "12:10"
    }]



}).then(function(uploadJob)

{ 
  if(expect(uploadJob.status).to.eq(200) && expect(uploadJob).to.have.property('headers')
  &&expect(uploadJob).to.have.property('body') && expect(uploadJob.body.success)["true"]) {



    cy.log('Test passed, jobs can be uploaded successfully.')
  }
  else {

    cy.log('Oops, something went wrong :(')
  }



})

})


})

})


