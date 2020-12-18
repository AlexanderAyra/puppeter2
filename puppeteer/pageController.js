const pageScraper = require('./pageScraper')
const puppeteer = require('puppeteer')

async function scrapeAll(numKrowder, ayudaKrow) {
  console.log(ayudaKrow);
  let browser;
  browser = await startBrowser();
  return await pageScraper.scraper(browser, numKrowder, ayudaKrow);
}

async function startBrowser() {
  let browser;
  console.log('Abriendo el navegador');
  browser = await puppeteer.launch({
    product: 'chrome',
    headless: false,
    args: ['--disable-setuid-sandbox', '--start-maximized'],
    'ignoreHTTPSErrors': true
  })
  return browser;
}

module.exports = (numKrowder, ayudaKrow) => scrapeAll(numKrowder, ayudaKrow)