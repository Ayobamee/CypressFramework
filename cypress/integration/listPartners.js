
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



it('List Partners Test', function() {


cy.request('GET' , this.data.stagingBaseURL+this.data.authStaging, {


"password": this.data.adminPassword,
"email": this.data.adminUsername
  

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.accessToken)

//cy.log(authtoken)




cy.request({
    
  method: 'GET' ,
  url: this.data.stagingBaseURL+this.data.logisticsPartners, 


headers: {


  Authorization: authtoken
  
},


body:{}


}).then(function(logisticsPart)

{ 

  if(expect(logisticsPart.status).to.eq(200) && expect(logisticsPart).to.have.property('headers')
  &&expect(logisticsPart).to.have.property('body') ) {

    cy.log('Test passed, partners can be listed.')
  }
  else {

    cy.log('Oops, something went wrong :(')
  }



})

})


})

})
