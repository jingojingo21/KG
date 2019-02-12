
Feature: Shopper can  search for the product from homepage
          and add an item to their checkout to place an order
 

Scenario: Add product to the bag 
     Given I select men category from the header
     And   I am on PDP
     When  I select any colour and size for the chosen men category
     And   I add the product to the bag
     Then  I can see the bag with single item
     And   I click Proceed to Checkout
     Then  I should be on checkout page
  