class LearnMorePage
{
    
    getLearnMore()
    {
        return cy.get('#button-learn')
    }

    getOverview()
    {
        return cy.get('#react-tabs-6')
    }

    getMolecularTesting()
    {
        return cy.get('#react-tabs-8')
    }

    getSerologyTesting()
    {
        return cy.get('#react-tabs-10')
    }


    getResources()
    {
        return cy.get('#react-tabs-12')
    }

}

export default LearnMorePage;