describe('Login', () => {
  it('Is should login, correct login and password', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type("jan.testowy@wskz.pl");
    cy.get('#password').type("aqLrvDJ348");
    cy.get("input[type='submit']").click();
    cy.get("body").contains("Welcome back, jan.testowy@wskz.pl!").should("be.visible");
  })

  it('Is should not login, correct just login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type("jan.testowy@wskz.pl");
    cy.get('#password').type("Wadssadwq");
    cy.get("input[type='submit']").click();
    cy.get("body").contains("Incorrect Username and/or Password!").should("be.visible");
  })

  it('Is should not login, correct just password', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type("janektestowy@wskz.pl");
    cy.get('#password').type("aqLrvDJ348");
    cy.get("input[type='submit']").click();
    cy.get("body").contains("Incorrect Username and/or Password!").should("be.visible");
  })
})