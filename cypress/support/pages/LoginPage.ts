class LoginPage {
    //Seletor de elementos da página
    private get emailImput() { return cy.get('#email'); }
    private get passwordInput() { return cy.get('#password'); }
    private get loginButton() { return cy.get('button[type="submit"]'); }

    //Método de ação
    fillCredentials(email: string, password: string) {
        this.emailImput.type(email);
        this.passwordInput.type(password);
    }

    submit(): void {
        this.loginButton.click();
    }
}

export default new LoginPage()