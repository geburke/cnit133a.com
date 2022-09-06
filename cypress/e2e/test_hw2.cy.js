/// <reference types="cypress" />

const { elementIsEnabled } = require("selenium-webdriver/lib/until");

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
    cy.visit(my_visit)
  })

  it('Check h2 cert text', () => {
    cy.get('.content ul li').each(element => {
      expect(element.text()).to.be.oneOf(my_certs);
    })
  })

  it('check for hrefs', () => {
    cy.get('.content ul li a').each(element => {
      let my_id = make_id(element.text())
      expect(element.attr('href')).to.be.equal("#" + my_id)

    })
  })
  it('check for ids', () => {
    let tmp_my_certs = my_certs
    for( let cert_name of my_certs)  {
      let my_id = make_id(cert_name)

      cy.get('#' + my_id).invoke('text').then((text) => {
        expect(text).to.be.oneOf(tmp_my_certs)
        //remove the matched cert
        tmp_my_certs = tmp_my_certs.filter(item => item !== text)
      });
    }
  });
})