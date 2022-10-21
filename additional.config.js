const { defineConfig } = require("cypress");
const defaultConfig = require("./cypress.config.js");

module.exports = defineConfig({
  //extends: "./test.js",
  e2e: {
    projectId: "guusto",  
    // baseUrl: defaultConfig.e2e.baseUrl
  },  
});
