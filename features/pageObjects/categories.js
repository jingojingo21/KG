const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const waitTime = 2000;

function categories(browser){
    this.browser = browser;

    this.getMensCategory = function(){
        var xpath = "//div[@class='link-container']/a[@href='/men/shoes']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find mens category element")
    }
    this.getBrandsCategory = function(){
        var xpath= "//a[@href='/shop-by-brand']"
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find shop-by-brand element")
    }
}
module.exports = categories;