const puppeteer = require('puppeteer')
async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.aliexpress.com/category/100003109/women-clothing.html')
    await page.screenshot({path:"img.png"})
    await browser.close()
}
start()
