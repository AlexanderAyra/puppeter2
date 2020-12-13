const pageScraper = require('./pageScraper')
const puppeteer = require('puppeteer')

async function scrapeAll(numKrowder) {
  let browser;
  try {
    browser = await startBrowser();
    await pageScraper.scraper(browser, numKrowder);
  } catch (error) {
    console.log('No se pudo resolver la instancia' + error);
  }
}

async function startBrowser() {
  let browser;
  try {
    console.log('Abriendo el navegador');
    browser = await puppeteer.launch({
      product: 'chrome',
      headless: false,
      args: ['--disable-setuid-sandbox', '--start-maximized'],
      'ignoreHTTPSErrors': true
    })
  } catch (error) {
    console.log('No se ha abierto el navegador');
  }
  return browser;
}

module.exports = (numKrowder) => scrapeAll(numKrowder)