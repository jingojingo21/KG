var {setWorldConstructor} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
    var options =  {
                "args": ["--start-fullscreen"]
            };
     var   capabilities = seleniumWebdriver.Capabilities.chrome();
           capabilities.set('chromeOptions', options);
    
    this.browser = new seleniumWebdriver.Builder().withCapabilities(capabilities).build();

  // Returns a promise that resolves to the element
   this.waitForElement = function(locator) {
    var condition = seleniumWebdriver.until.elementLocated(locator);
    return this.browser.wait(condition)
  }
 
}

setWorldConstructor(CustomWorld)

