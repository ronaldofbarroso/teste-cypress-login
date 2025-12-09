describe('Login ServeRest', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('cypress1@gmail.com')
    cy.get('[data-testid="senha"]').type('1234')
    cy.get('[data-testid="entrar"]').click()
  })
});
