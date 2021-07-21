class HomePage
{
    

getHome()

{

    return cy.get('#MENU_HOME > [href="#/"]')
}

getVersion()
{
    return cy.get('.version')
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

getInstagramLogo()
{
    return cy.get('[href="https://www.instagram.com/oneworldaccuracy"] > .fab')
}
getLinkedinLogo()
{
    return cy.get('[href="https://www.linkedin.com/company/oneworld-accuracy"] > .fab')
}

getYoutubeLogo()
{
    return cy.get('[href="https://www.youtube.com/channel/UCgIEX3y7Fyxoa6WNqWayc0A/"] > .fab')
}

getNewsletter()
{
    return cy.get('[href="https://oneworldaccuracy.zendesk.com/hc/en-us/categories/200115895-1WA-Newsletter-Bulletin"] > .fas')
}

getSupportEmail()
{
    return cy.get('.link-email')
}


getCopyright()
{
    return cy.get('.note > div')
}

}

export default HomePage;