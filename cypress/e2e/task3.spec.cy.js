
describe('Login', () => {
  it('Is should allow creat account', () => {
   // cy.visit('https://www.wskz.pl')
    cy.visit('http://localhost:3000/new-page')    

    cy
    .get('a')
    .invoke('removeAttr','target')
    .click();

    cy.origin('https://www.wskz.pl', () => {
      // declare cy.origin command on expected domain
      cy.get('h1').contains("Wyższa Szkoła Kształcenia Zawodowego");
      cy.get('#comp-ils2cgqy2 ul').invoke('removeAttr','style');
      cy.contains('Samorząd studencki').click();

      cy.contains('Tomasz Michalik').should("be.visible");
      cy.get("#comp-kz42x7wp__item1 p").contains("- student II roku");
      cy.contains('Dawid Małecki').should("be.visible");
      cy.get("#comp-kz42x7wp__item-kf51ysxt p").contains("- student III roku");
      cy.contains('Paweł Barowicz').should("be.visible");
      cy.get("#comp-kz42x7wp__item-kf51yt5v p").contains("- student II roku");
})
})

})