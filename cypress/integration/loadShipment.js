
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



it('Load Shipment Test', function() {


cy.request('GET' , this.data.apiBaseURL, {


"password": this.data.adminPassword,
"email": this.data.adminUsername
  

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.accessToken)

//cy.log(authtoken)




cy.request({
    
  method: 'GET' ,
  url: this.data.truckerURL, 


headers: {


  Authorization: authtoken
  
},


body:{}


}).then(function(shipmentLoad)

{
expect(shipmentLoad.status).to.eq(200)
expect(shipmentLoad).to.have.property('headers')
expect(shipmentLoad).to.have.property('body')



})

})


})

})
