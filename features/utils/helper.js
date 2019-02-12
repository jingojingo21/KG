const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const waitTime = 2000;

function helper(browser)
{
    this.browser = browser;
    this.getTitle = async function(){
        return await this.browser.getTitle()
    }
    this.getText = function(element){
        return element.getText();
    }
    this.getCookieButton = async function(){
        var xpath = "//div[@id='siteswitcher-banner']//div[@class='inner-wrap switch']//button[@class='close']";
        return await this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find coockie accept  button")
    }
    this.getBagElement = function(){
        var xpath = "//span[@class='skiplinks_count']"
         return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find bag element")
    }
    this.gotoBagElement = function(){
        var xpath = "//div[@class='add-to-cart']//a[@href='/checkout/cart/']"
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find go to bag element")
    } 
    this.getProceedToCheckoutElement = function(){
        var xpath = "//button[@id='btn-proceed-checkout']"
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not proceed to checkout element")
    } 

    this.getCheckoutpageHederElement = function (){
        var xpath = "//div[@class='page-title']//h2"
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find checkout header element")
    }
    this.getActiveTab = function(){
        var xpath ="//div[@id='shop-by-tabs']//li//a[@class='active']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find active tab element")
    }
}
module.exports = helper;