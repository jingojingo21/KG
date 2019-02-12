const config = require( './../../config.json');
const categories = require('../pageObjects/categories.js');
const products = require('../pageObjects/product.js');
const expect = require('chai').expect;
const {
    Given,
    When,
    Then
} = require('cucumber');
const helper = require('../utils/helper.js');

Scenario1:
    Given(/^I am on the homepage$/, async function () {
        await this.browser.get(config.baseUrl);
    });
When(/^I select brand category from the header$/, async function () {

    var helperFunctions = new helper(this.browser);
    var cookeButton = await helperFunctions.getCookieButton();
    await cookeButton.click()
    await this.browser.sleep(1000);
    var cat = new categories(this.browser);
    var brandsLink = await cat.getBrandsCategory();
    await brandsLink.click();
   
    var prod = new products(this.browser);
    var productHeader = await prod.getProductHeaderElement();
    var headerText = await productHeader.getText()
    expect(headerText).to.equal(config.brandsCategoryHeaderText);
   
})

Then(/^I should see the list of brands$/, async function () {
    var helperFunctions = new helper(this.browser);
    var activeTab = await helperFunctions.getActiveTab()
    var allBrandsText = await activeTab.getText();
    expect(allBrandsText).to.equal(config.allbrandsText);
    this.browser.executeScript("scroll(0, 350)")
   
})

Then(/^I select DOLCE & GABBANA brand from the list$/, async function () {
    var prod = new products(this.browser);
    var dolceAndGabbanaElement = await prod.getDolceAndGabbana()
    dolceAndGabbanaElement.click();
})

Then(/^I should see the list of products from DOLCE & GABBANA$/, async function () {
    var prod = new products(this.browser);
     var productHeader = await prod.getProductHeaderElement();
     await this.browser.sleep(1000);
     var headerText = await productHeader.getText()
     expect(headerText).to.equal(config.doceGabbanaProductsHeaderText);
    
})
