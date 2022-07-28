/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  videoUploadOnPasses: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
