
var {After} = require('cucumber');
// Asynchronous Promise
After(function () {
  // Assuming this.driver is a selenium webdriver
   return this.browser.quit();
});