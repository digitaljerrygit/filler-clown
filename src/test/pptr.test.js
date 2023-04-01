import puppeteer from "puppeteer";
jest.setTimeout(10000);

test("Input field contains hello world", async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('http://localhost:3000');
  
    await page.setViewport({width: 720, height: 480});

    const searchResultSelector = "a[href='/list']";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    await page.type('input', 'hello world');

    const content = await page.content();
    expect(content).toContain("hello world");

    await browser.close();    
});
