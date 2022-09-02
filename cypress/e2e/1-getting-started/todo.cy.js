/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const desc = "cnit133a homework 2";
const my_visit = "./../../../hw2/hw2.html";
const my_certs = ['Beginning Web Development Certificate',
                  'Advanced Web Development Certificate',
                  'Optional for Web Development Certificate',
                  'Other Certificates' ];

function make_id(my_str) {
  return(my_str.toLowerCase()).replaceAll(' ', '-');
}


describe(desc, () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(my_visit)
  })

  it('Check h2 cert text', () => {
    cy.get('.content ul li').each(element => {
      expect(element.text()).to.be.oneOf(my_certs);
    })
  })
  it('hrefs', () => {
    cy.log("moo")
    expect("moo").to.be.equal("moo");
  })
})


//  it('Check h2 cert anchors', () => {
//    cy.get('.content ul li').each(element => {
//      expect(element.text()).to.be.oneOf(my_certs);
//      cy.log("-->", element.text());
//    })
