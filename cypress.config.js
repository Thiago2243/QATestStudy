import { defineConfig } from 'cypress';

export default defineConfig({
    // Configurações para Testes End-To-End (E2E)
    e2e: {
        //URL padrão que será utilizada com 'cy.visit()'
        baseUrl: 'http://localhost:3000',

        //Caminho para os arquivos de testes
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

        //Caminho para os arquivos de suporte
        supportFile: 'cypress/support/e2e.ts',
    },
    // Adicionando variáveis de ambiente
    env: {
        
    }
});