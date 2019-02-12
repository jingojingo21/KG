const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const waitTime = 2000;

function products(browser){
    this.browser= browser;

    this.getDolceAndGabbana = function(){
        var xpath =  "//div[@id='tab1']//a[@href='https://www.kurtgeiger.es/brands/dolce-gabbana']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find dolce-gabbana element")
    }
    
    this.getByColorElement = function(colour){
        var xpath = "//ul[@id='colours']//span[contains(text(),'"+colour+"')]"
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find  element by colour : "+colour)
    }
    this.getBySizeElement = function(size){
        var xpath = "//ul[@class='sizes']//span[@class='eu_region sizes-btn']//span[contains(text(),'"+size+"')]"
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find  element by size : "+size)
    }
    
    this.getBySizeGuideElement= function(){
        var xpath = "//a[@id='size-guide']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find size-guilde element")
    }
    this.getProductHeaderElement= function(){
        var xpath = "//h1";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find header element")
    }
    this.getProductElement= function(id){
        var xpath = "//li[@id='"+id+"']//a";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find product element")
    }
    this.addProductToBasket= function(){
        var xpath = "//button[@title='Add to bag']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find add to product element")
    }
    
    
}
module.exports = products;