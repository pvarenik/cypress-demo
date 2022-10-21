const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io/',
    e2e: {
        setupNodeEvents(on, config) {
      },
      viewportWidth: 1000,
      viewportHeight: 660
    },
    env: {
      allure: true,
      allureAddVideoOnPass: true
    }
  }
});