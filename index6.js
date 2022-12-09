const puppeteer = require('puppeteer')
async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.hurriyet.com.tr/')
    await page.screenshot({path:"img.png"})
    await browser.close()
}
start()
