# 🧪 Teste de Login - ServeRest com Cypress

Este projeto contém um teste automatizado de login utilizando [Cypress](https://www.cypress.io/) na aplicação [ServeRest](https://front.serverest.dev/login).  
O objetivo é validar o fluxo de autenticação com credenciais válidas.

---

## 🚀 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript

---

## 📄 Estrutura do teste

```javascript
describe('Login ServeRest', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('cypress1@gmail.com')
    cy.get('[data-testid="senha"]').type('1234')
    cy.get('[data-testid="entrar"]').click()
  })
});
