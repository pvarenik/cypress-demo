// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // allureWriter(on, config);
      // return config;
    },
  },
});