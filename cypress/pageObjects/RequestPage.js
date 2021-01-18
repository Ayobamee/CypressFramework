class RequestPage
{
    

getcreateRequest()

{

    return  cy.get('[href="/createRequest"] > .sc-ifAKCX')
}


getSelectSpecArea()
{
    return cy.get(':nth-child(7) > .sc-fHSTwm > .location-search-input')
}


getSelectIkeja()
{
    return cy.get(':nth-child(7) > .sc-fHSTwm > .location-search-input').select('Ikeja,Nigeria')
    .should('have.value', 'Ikeja,Nigeria')
}

getSelectArea() 

{

    return cy.get(':nth-child(12) > .lcltTB > .input').select('Ikeja')
    .should('have.value', 'Ikeja')
    
}

getPickUpArea() 

{

    return cy.get(':nth-child(8) > .lcltTB > .input').select('Ikeja')
    .should('have.value', 'Ikeja')
    
}


getLocationFrom() 
{

    return cy.get('[name="locationFrom.address"]')
}


getAddress()
{

    return cy.get('[name="locationTo.address"]')
}

getContactName() 
{
    return cy.get(':nth-child(15) > .iMGMOd > .input')
}


getPhoneNo() 
{
    return cy.get(':nth-child(15) > .lcltTB > .input')
}


getRecieverName()
{
    return cy.get(':nth-child(17) > .iMGMOd > .input')
}

getRecieverPhoneNo ()
{
    return cy.get(':nth-child(17) > .lcltTB > .input')

}


getVehicleType () 
{
    return cy.get(':nth-child(5) > :nth-child(1) > svg')
}


getProductDetails() 

{

    return cy.get(':nth-child(1) > .input').select('Phones')
    .should('have.value', 'Phones')
    
}



getNext()
{
    return cy.get('.sc-gzVnrw > .sc-ifAKCX')
}

getSecondNext () 
{
    return cy.get('[style="display: flex; flex-flow: row nowrap; justify-content: space-between; margin-top: 20px; width: 100%;"] > .sc-gzVnrw > .sc-ifAKCX')
}

}



export default RequestPage;