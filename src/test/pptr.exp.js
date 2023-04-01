const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');

  await page.setViewport({width: 720, height: 480});

  await page.screenshot({
    path: "s1.jpg",
    type: "jpeg"
  });

  const searchResultSelector = "a[href='/list']";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  await page.screenshot({
    path: "s2.jpg",
    type: "jpeg"
  });

  await page.type('input', 'Puppeteer was here!');

  await page.screenshot({
    path: "s3.jpg",
    type: "jpeg"
  });

  await browser.close();

})();