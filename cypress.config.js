const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio',
    overwrite: true, // ele rescreve o arquivo
    html: true,
    json: false,
    timestamp: 'ddmmyyyy_HHMMss'
  }
});
