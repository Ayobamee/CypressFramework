// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add('loginAdmin', (user) => {
    cy.get('[name="username"]')
      .type(user.username)
      

   cy.get('[style="position: relative; width: 100%;"] > .input')
   .type(user.password)
 
      cy.get('.sc-emmjRN').click()
      
  })
  
 


  Cypress.Commands.add('loginMerchant', (merchantUser) => {
    cy.get('[name="username"]')
      .type(merchantUser.merchUsername)
      

   cy.get('[style="position: relative; width: 100%;"] > .input')
   .type(merchantUser.merchPassword)
 
      cy.get('.button').click()
      
  })





  Cypress.Commands.add('typeLogin', (vehicleMgruser) => {
    cy.get('[name="username"]')
      .type(vehicleMgruser.vehicleMgrUsername)
      

   cy.get('[style="position: relative; width: 100%;"] > .input')
   .type(vehicleMgruser.vehicleMgrPassword)
 
      cy.get('.button').click()
      
  })

  



  
    





  
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... 
