
describe('Task4', () => {


  it("get '/api/customers'", () => {
    cy.request('GET','http://localhost:3000/api/customers')
    .its('status')
    .should('equal',200);
  })
  it("get '/api/customers/:id'", () => {
      cy.request('GET','http://localhost:3000/api/customers/2/')
      .its('status')
      .should('equal',200);
      
  })

    it("post '/api/customers'", () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/customers',
        body: {
                name: 'Tomek Bezbłedny'
              }
        })
        .its('status')
        .should('equal',200);
      })

     it("put '/api/customers/:id'", () => {
       cy.request({
         method: 'PUT',
         url: 'http://localhost:3000/api/customers/2/',
         body: {              
                 name: 'Janina Bezbłedna'
               }
         })
         .its('status')
         .should('equal',200);
       })

        it("delete '/api/customers/:id'", () => {
          cy.request('DELETE','http://localhost:3000/api/customers/last/')
            .its('status')
            .should('equal',200);
          })

        
    






})