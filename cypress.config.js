const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io/',
    e2e: {
        setupNodeEvents(on, config) {
      },
      viewport: macbook - 15
    },
    env: {
      allure: true,
      allureAddVideoOnPass: true
    }
  }
});