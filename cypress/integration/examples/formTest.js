describe('Pizza ordering submission process', ()=>{
beforeEach(()=>{
    cy.visit('http://localhost:3000/pizza');
})
const textInput=()=>cy.get('input[name=name]');
const toppingsInput=()=>cy.get('[type="checkbox"]') 
const submitBttn =()=>cy.get(`button[id="submit"]`)

it("should test the text input", ()=>{
    textInput().should('have.value','')
    .type('Bradley Dion')
    .should('have.value','Bradley Dion')
})
it('it should select multiple toppings and sauces',()=>{
    toppingsInput().check()
    toppingsInput().uncheck()
})
it('should  submit',()=>{
    submitBttn().click()
})
})