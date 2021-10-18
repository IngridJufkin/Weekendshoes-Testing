//WEEKWNDSHOES PAGE TESTING

const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  //To wait for browser to build and launch properly and window maximizing
  let driver = await new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize(); 

  //1. To fetch https://www.weekendshoes.ee/ from the browser with our code.
  await driver.get("https://www.weekendshoes.ee/");
  //1.a Finding Title
  let title = await driver.getTitle(); //funktsioon tiitli leidmiseks
  console.log("1. Title is:", title);

  //2. Opening https://www.weekendshoes.ee/naistele/saapad.html
  await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
  console.log("2. Opening Women Boots page https://www.weekendshoes.ee/naistele/saapad.html");

  /* //2. Opening https://www.weekendshoes.ee/naistele/saapad.html OTSE TOOTE LEHELT
        await driver.get("https://www.weekendshoes.ee/aaltonen-jaanaeltega-nahast-poolsaapad-307811.html");
        console.log('Opening Women Boots page https://www.weekendshoes.ee/aaltonen-jaanaeltega-nahast-poolsaapad-307811.html')
      */

  //3. Adding product to wishlist from womens boots page
  let element = await driver.findElement(By.xpath('//*[@id="amasty-shopby-product-list"]/div[3]/ol/li[8]/div/div[3]/div/div/a'));
  driver.executeScript("arguments[0].click();", element);
  console.log("3. Adding product to wishlist...");

  //4. Opening product page from wishlist
  //Clicking wishlist
  await driver.sleep(5000);
  await driver.findElement(By.xpath('//*[@id="wishlist-link-mobile"]')).click();
  // await driver.findElement(By.xpath('//*[@id="wishlist-link-mobile"]')).click();
  console.log("4. Clicking wishlist...");
 
  //4.1 Opening wishlist
  await driver.findElement(By.xpath('//*[@id="miniwishlist-content-wrapper-mobile"]/div/div/div/button')).click();
  console.log("5. Opening wishlist...");
  await driver.sleep(5000);
  //4.2 Opening product from wishlist
  let wishlistProduct = await driver.findElement(By.className("product-item-link"));
  driver.executeScript("arguments[0].click()", wishlistProduct);
  console.log("5.1. Opening product form wishlist...Opened");

  //5. scrollimine kuni drowdownini Scroll to dropdown menu
  await driver.sleep(5000);
  let testEle = await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div'));
  driver.executeScript("arguments[0].scrollIntoView()", testEle);
  console.log("5. Scroll me down");

  //5.1 opening dropdown menu
  await driver.sleep(5000);
  await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div')).click();
  console.log("5.1 Opening size dropdown menu...");

  //5.2 Choosing size...
  await driver.sleep(5000);
  await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[4]')).click();
  console.log("5.2 Choosing size...");

  //5.3 Adding to Shopping Cart
  await driver.sleep(4000);
  await driver.findElement(By.xpath('//*[@id="product-addtocart-button"]')).click();
  console.log("5.3. Adding product to Shopping chart...");

  //6. Opening shopping cart
  await driver.sleep(5000);
  let shoppingChart = await driver.findElement(By.xpath('//*[@id="minicart-content-wrapper"]/div[2]/div[4]/div/a'));
  driver.executeScript("arguments[0].click()", shoppingChart);
  console.log("6. Opening shopping chart...");

  //7. Adding 1 more product to chart
  await driver.sleep(5000);
  await driver.findElement(By.className("action qty increase-qty")).click();
  console.log("7. Adding +1 product...");

  //8.Deleting products from shopping cart...
  await driver.sleep(5000);
  await driver.findElement(By.className("action action-delete")).click();
  console.log("8. Deleting products from shopping cart...");

  //9. Opening search...and searching string
  //9. Openging search
  await driver.sleep(3000);
  await driver.findElement(By.className("block-search-trigger bottom")).click();
  console.log("9. Opening search...");

  //9.1 Searching string...
  await driver.sleep(3000);
  let searchString = "Jope";
  //await driver.findElement(By.id("search")).sendKeys(searchString);
  await driver.findElement(By.id("search")).sendKeys(searchString, Key.RETURN);
  console.log("9.1 Searching for Jope...");

  //10. Filter products by bestsellers
  await driver.sleep(3000);
  await driver.findElement(By.css("#sorter > option:nth-child(1)")).click();
  console.log("10. Filtering bestsellers...");
}

example();
