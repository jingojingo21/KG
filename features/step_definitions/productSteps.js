const config = require('./../../config.json');
const categories = require('../pageObjects/categories.js');
const product = require('../pageObjects/product.js');
const expect = require('chai').expect;
const {
    Given,
    When,
    Then
} = require('cucumber');
const helper = require('../utils/helper.js');

Given(/^I select men category from the header$/, async function () {
    await this.browser.get(config.baseUrl);

    var helperFunctions = new helper(this.browser);
    var cookeButton = await helperFunctions.getCookieButton();
    await cookeButton.click();
    await this.browser.sleep(1000);
    var mensCat = new categories(this.browser);
    var mensCategory = await mensCat.getMensCategory();
    await mensCategory.click();
    var prod = new product(this.browser);
    var productHeader = await prod.getProductHeaderElement();
    var headerText = await productHeader.getText()
    expect(headerText).to.equal(config.mensCategoryHeaderText);
});


Given(/^I am on PDP$/, async function () {
    var p = new product(this.browser);
    var prod = await p.getProductElement(2394400979);
    await prod.click();
})


When(/^I select any colour and size for the chosen men category$/, async function () {
    var prod = new product(this.browser);
    var colourElement = await prod.getByColorElement('WHITE');
    await colourElement.click();
    var sizeElement = await prod.getBySizeElement(42);
    await sizeElement.click();
    await this.browser.sleep(1000);
});


When(/^I add the product to the bag$/, async function () {
    var prod = new product(this.browser);
    this.browser.sleep(1000);
    var addProductElement = await prod.addProductToBasket();
    await addProductElement.click();
});

Then(/^I can see the bag with single item$/, async function () {
    var helperFunctions = new helper(this.browser);
    await this.browser.sleep(1500);
    var gotoBagElement = await helperFunctions.gotoBagElement();
    await gotoBagElement.click();
     var bagElement = await helperFunctions.getBagElement();
    var itemsCount = await bagElement.getText();
    expect(itemsCount).to.equal('1');
});

Then(/^I click Proceed to Checkout$/, async function () {
    var helperFunctions = new helper(this.browser);
    await this.browser.sleep(1000);
    var proceed = await helperFunctions.getProceedToCheckoutElement();
    await proceed.click();
});


Then(/^I should be on checkout page$/, async function () {
    var helperFunctions = new helper(this.browser);
    await this.browser.sleep(1000);
    var headerTextElement = await helperFunctions.getCheckoutpageHederElement();
    var headerText = await headerTextElement.getText();
    expect(headerText).to.equal(config.checkoutHeaderText);
});
