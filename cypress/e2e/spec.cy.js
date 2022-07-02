// pavyzdys del testatvimo
// describe('App', ()=> {
//   it('opens app and renders navigation',()=> {
//     cy.visit('http://google.com')
//     cy.get('#L2AGLb').click()
//   })
// })

describe('App', () => {
  it('opens app and renders navigation', () => {
    cy.visit('http://localhost:3000')


    const navigation = cy.get('.navigation__list.primary')
    navigation.should('contains.text', 'Home')
    navigation.should('contains.text', 'Contact')

    const card = cy.get('.card')
    card.should('contains.text', 'about')
    card.should('contains.text', 'services')
    card.should('contains.text', 'services')

    const cardQt = cy.get('.card')
    cardQt.should('have.length', 3)
  })

  it('opens app and renders navigation', () => {
    cy.visit('http://localhost:3000')


    const navigation2 = cy.get('.navigation.secondary')
    navigation2.should('contains.text', 'Home')
    navigation2.should('contains.text', 'Contact')

  })
})