class HomePage
{
    

getHome()

{

    return cy.get('#MENU_HOME > [href="#/"]')
}

getTeam()

{

    return cy.contains('Our Team')
}

getEQA()

{

    return cy.contains('Our EQA')
}

getOASYS()

{

    return cy.contains('OASYS')
}

getIntro()

{

    return cy.contains('Intro')
}

getFuture()

{

    return cy.contains('Future')
}

getOurTeam()

{

    return cy.get('#react-tabs-4')
}




getLogo()

{

    return cy.get('#MENU_LOGO > img')
}

getUrlLink ()
{
    return cy.url()
}

getEnglishLanguage()
{
    return cy.get('.selected')
}

getSpanishLanguage()
{
    return cy.get('ul > :nth-child(2) > .link-inert')
}

getFrenchLanguage()
{
    return cy.get(':nth-child(3) > .link-inert')
}


getItalianLanguage()
{
    return cy.get(':nth-child(4) > .link-inert')
}

getTurkishLanguage()
{
    return cy.get(':nth-child(5) > .link-inert')
}

getCart()
{
    return cy.get('#MENU_CART')
}

getHamburger()
{
    return cy.get('.link-hamburger > .fas')
}

getNotificationLine()
{
    return cy.get('.pulse-slow')
}

getBanner()
{
    return cy.get('.slide-hero-covid')
}


}

export default HomePage;