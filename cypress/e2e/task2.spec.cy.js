describe('Task2', () => {
  it('Is should allow creat account', () => {
    cy.visit('http://localhost:3000/registration')
    cy.get('#username').type("jan.testowy@wskz.pl");
    cy.get('#password').type("aqLrvDJ348");
    cy.get('#country').select("Poland");
    cy.get('#hobby').select(2);
    cy.get('input[type=file]').selectFile(['README.md']);
    
    cy.get('input[type="checkbox"]').check();
    cy.get("input[type='submit']").click();
    cy.get("body").contains("Account created for: jan.testowy@wskz.pl").should("be.visible");
  })


})