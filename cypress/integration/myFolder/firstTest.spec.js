/// <reference types="cypress" />

describe('Our first suite', () => {

    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]') // we can create our new uniqe selector and find element by it 
        //(just find Attribute for the element and put it to search in Visual Studio, 

        //next put your selector to the element which you aare looking for)

        cy.contains('Sign in') // you can find element by text, 
        // if you use the text which fit to more than one element, cypress find the first of them

        cy.contains('[status="warning"]','Sign in') // if you want to find other elements with the same text, 
        // you have to use more than one locators

        // if you can't find a id of concrete element
        cy.get('#inputEmail3') // find id for element wchich is in the same area
        .parents('form') //find tag tor the area wchich contains your element and this with id
        .find('button') //finf tag for your element
        .should('contain', 'Sign in') //create assertion that button should contains 'text'
        .parents('form')
        .find('nb-checkbox')
        .click()

        // .find method is only for looking for element wich hes parents, 
        // .parrents is using only when you find id of element 
        // which has tha same parent as the element which you want to find

        cy.contains('nb-card','Horizontal form').find('[type="email"]') 
        // or you can find text for element and his tag and inside this parent find element e.g by atrribute
    });

});