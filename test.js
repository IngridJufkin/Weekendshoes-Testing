//Tund 1
// const {By,Key,Builder} = require("selenium-webdriver");
// require("chromedriver");

// async function example(){

//        var searchString = "Pappkast";

//        //To wait for browser to build and launch properly
//        let driver = await new Builder().forBrowser("chrome").build();

//         //To fetch http://google.com from the browser with our code.
//         await driver.get("https://www.pakendikeskus.ee");

//         //To send a search query by passing the value in searchString.
//         await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

//         //Verify the page title and print it
//         var title = await driver.getTitle();
//         console.log('Title is:',title);

//         //It is always a safe practice to quit the browser after execution

//         //await driver.quit();

// }

// example()

//-----------Tund 14.10--------

/* const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
       var searchString = "Pappkast";
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.pakendikeskus.ee/kotid");
        console.log('Kotid kategooria avatud...');
        //ID 
        await driver.findElement(By.id("btn-cookie-allow")).click();
        console.log('Cookie btn kinni...');
        await driver.findElement(By.id("tocart-submit-14671")).click();
        console.log('toode edukalt ostukorvi lisatud...');
        await driver.get("https://www.pakendikeskus.ee/sangadega-hall-vildist-kandekott-35-15x45cm");
        console.log('Tooteleht avatud...');
        //Name 
        await driver.findElement(By.id("btn-minicart-close")).click();
        console.log('Minicart edukalt suletud');
        
        await driver.findElement(By.name("q")).click();
        await driver.findElement(By.name("q")).sendKeys("abc");
        console.log("otsing lõpetatud...");  
        //xPath

        await driver.findElement(By.xpath('//*[@id="special-orders"]')).click();
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);
 
        //await driver.quit();
 
}
 
example() */

const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  //    var searchString = "Pappkast";

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  //To fetch http://google.com from the browser with our code.
  await driver.get("https://www.rademar.ee/");
  let title = await driver.getTitle(); //funktsioon tiitli leidmiseks
  console.log("Title is:", title);

  //2. Opening https://www.weekendshoes.ee/naistele/saapad.html
  await driver.get("https://www.rademar.ee/tooted/naised/naiste-jalatsid/naiste-talvejalatsid?orderBy=weight&order=desc&page=1");
  console.log(
    'Opening Women Boots page https://www.rademar.ee/tooted/naised/naiste-jalatsid/naiste-talvejalatsid?orderBy=weight&order=desc&page=1"'
  );

  /*   //POOLIK 3. certain product into wishlist
      let productID = '//*[@id="amasty-shopby-product-list"]/div[3]/ol/li[4]/div/div[3]/div/div/a'
        await driver.findElement(By.xpath(productID)).click();
        console.log('POOLIK toode edukalt ostukorvi lisatud...');
 */
  //------------------3.1 certain product into wishlist
  /* await driver.get("https://www.weekendshoes.ee/rieker-poolsaapad-471446.html");
  await driver.findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[1]/a')).click();
  console.log('toode edukalt soovikorvi lisatud...');
  await driver.findElement(By.xpath('//*[@id="wishlist-link-mobile"]')).click();
  console.log('valin soovikorvi');
  //VAATA ÜLE
  //await driver.findElement(By.xpath('#wishlist-popup > li > div > a > img')).click();
 // await driver.findElement(By.cssSelector("#miniwishlist-content-wrapper-mobile > div > div > div > button")).click();
  await driver.findElement(By.cssSelector("[title^='"+'Go to Wish List'+"']")).click();
  //console.log('Cookie btn kinni...'); */

  //-------------

  //3.1 certain product into wishlist
  await driver.findElement(By.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div[3]/div[3]/div/div[1]/img')).click();
  console.log("toode edukalt soovikorvi lisatud...");
  await driver.findElement(By.xpath('//*[@id="root"]/div/header/div/div[2]/div[2]/div[2]/div[2]/div[2]/a')).click();
  console.log("valin soovikorvi");

  setTimeout(async function () {
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div/div[1]/div/div/a/div/div[1]/h5[2]')).click();
  }, 2000);
  //await driver.findElement(By.xpath('//*[@id="root"]/div/main/div/div[1]/div/div/a/div/div[1]/h5[2]')).click();
  //await driver.findElement(By.css('#root > div > main > div > div.page-favourites > div > div > a > div > div.component-product__info__left > h5.component-product__info__left__title')).click();
  console.log("Opening product from wishlist... ");

  // get the scroll height of the window

  //4.TOOTE OSTUKORVI LISAMINE
  setTimeout(async function () {
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div[3]/div[4]/div[7]')).click();
  }, 3000);
  console.log("Choosing size 40...");

  // scroll to the bottom of webpage
  //scrollimine kuni drowdownini
  setTimeout(async function () {
    let testEle = await driver.findElement(By.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div[3]/div[4]/div[1]/h5'));

    driver.executeScript("arguments[0].scrollIntoView()", testEle);
  }, 3000);

  console.log("scroll me down");

  //Ostuorvi lisamine
  setTimeout(async function () {
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div[3]/div[5]/div[1]/button')).click();
  }, 3000);

  console.log("toode edukalt ostukorvi lisatud...");

  //*[@id="root"]/div/main/div/div[1]/div[2]/div[3]/div[4]/div[2]

  // //ID
  // await driver.findElement(By.id("btn-cookie-allow")).click();
  // console.log('Cookie btn kinni...');
  // await driver.findElement(By.id("tocart-submit-14671")).click();
  // console.log('toode edukalt ostukorvi lisatud...');
  // await driver.get("https://www.pakendikeskus.ee/sangadega-hall-vildist-kandekott-35-15x45cm");
  // console.log('Tooteleht avatud...');
  // //Name
  // await driver.findElement(By.id("btn-minicart-close")).click();
  // console.log('Minicart edukalt suletud');

  // await driver.findElement(By.name("q")).click();
  // await driver.findElement(By.name("q")).sendKeys("abc");
  // console.log("otsing lõpetatud...");
  // //xPath

  // await driver.findElement(By.xpath('//*[@id="special-orders"]')).click();

  // //Verify the page title and print it
  // var title = await driver.getTitle();
  // console.log('Title is:',title);

  //await driver.quit();
}

example();
