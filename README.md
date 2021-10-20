# Automated testing: Weekendshoest-Testing
Testing https://www.weekendshoes.ee/ (Test2) and https://www.rademar.ee/ (Test)

# Test requirements:

1. Use at least 4 different Locators (css selector, id, class name / name, xpath) to create the test

  READ MORE: https://www.selenium.dev/documentation/webdriver/locating_elements/#element-selection-strategies

2. Use at least one type of Wait between activities 

  READ MORE: https://www.selenium.dev/documentation/webdriver/waits/

3. Console log the console for every action the script does (Click / Sendkeys)

# STEP BY STEP TESTING
1. Open the page, log the page title
2. Go to chosen link 
3. Add one product of your choice to your wishlist
4. Open the product via the wishlist
5. Add the product to the shopping cart
6. Move to the shopping cart
7. Increase the quantity of the product in the shopping cart by 1
8. Remove the product(s) from the shopping cart
9. Use the search ribbon and search for: "Jope" 
10. Filter search results by "Popularity"

# NPM INSTALL
Install packages
npm install

# RUN THE TEST WITH
node test2.js



