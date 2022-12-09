const puppeteer = require('puppeteer')
async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.aliexpress.com/category/200215336/bodysuits.html?spm=a2g0o.productlist.0.0.264a443fWrPW1g')
    await page.screenshot({path:"img.png"})
    await browser.close()
}
start()
