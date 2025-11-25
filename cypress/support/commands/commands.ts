declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<JQuery<HTMLElement>>
        
        }
    }
}
//Adição do comando 'login'
import LoginPage from "../pages/LoginPage";

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    LoginPage.fillCredentials(email, password);
    LoginPage.submit();
});