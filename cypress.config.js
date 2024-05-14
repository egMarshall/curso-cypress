const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nkcmjb", //Adiciona ao Cypress Cloud
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timeStamp: 'mmddyyyy_HHMMss'
  },
});
