const pageScraper = require('./pageScraper')
const puppeteer = require('puppeteer')

async function scrapeAll(numKrowder) {
  let browser;
  browser = await startBrowser();
  return await pageScraper.scraper(browser, numKrowder);
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

module.exports = (numKrowder) => scrapeAll(numKrowder)