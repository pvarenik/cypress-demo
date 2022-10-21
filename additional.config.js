const { defineConfig } = require("cypress");
const baseConfig = require("./cypress.config.js");

const e2e = {
  projectId: "teeeest",  
}

module.exports = defineConfig({
  e2e: {
    ...e2e,           // values from above
    ...baseConfig     // add or overwrite from imported file
  }
})