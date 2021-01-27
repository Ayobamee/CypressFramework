class RequestPage
{
    

getcreateRequest()

{

    return  cy.get('.sc-bdVaJa')
}


getSelectSpecArea()
{
    return cy.get(':nth-child(8) > .kxogMg > .input')
}


getSelectIkeja()
{
    return cy.get(':nth-child(8) > .kxogMg > .input').select('Ikeja')
    .should('have.value', 'Ikeja')
}

getSelectArea() 

{

    return cy.get(':nth-child(9) > .sc-isBZXS > .location-search-input').select('Ikeja')
    .should('have.value', 'Ikeja')
    
}

getPickUpArea() 

{

    return cy.get(':nth-child(8) > .lcltTB > .input').select('Ikeja')
    .should('have.value', 'Ikeja')
    
}


getLocationFrom() 
{

    return cy.get(':nth-child(7) > .sc-bOCYYb > .location-search-input')
}



getDestination() 
{

    return cy.get(':nth-child(11) > .sc-bOCYYb > .location-search-input')
}


getAddress()
{

    return cy.get('[name="locationTo.address"]')
}

getContactName() 
{
    return cy.get(':nth-child(13) > .exKwLu > .input')
}


getPhoneNo() 
{
    return cy.get(':nth-child(13) > .kxogMg > .input')
}


getRecieverName()
{
    return cy.get(':nth-child(15) > .exKwLu > .input')
}

getRecieverPhoneNo ()
{
    return cy.get(':nth-child(15) > .kxogMg > .input')

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
    return cy.get('.sc-iwsKbI > .sc-bdVaJa')
}

getSecondNext () 
{
    return cy.get('[style="display: flex; flex-flow: row nowrap; justify-content: space-between; margin-top: 20px; width: 100%;"] > .sc-gzVnrw > .sc-ifAKCX')
}



getTick()
{
    return cy.get('.sc-fjdhpX')
}



}



export default RequestPage;