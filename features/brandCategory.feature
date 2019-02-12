 Feature: Shopper can  search for the product from homepage
          and add an item to their checkout to place an order
 
    Scenario: See list of the products 
    Given  I am on the homepage
    When   I select brand category from the header
    Then   I should see the list of brands 
    And    I select DOLCE & GABBANA brand from the list 
    Then   I should see the list of products from DOLCE & GABBANA

    