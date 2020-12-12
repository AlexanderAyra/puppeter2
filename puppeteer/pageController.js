const pageScraper = require('./pageScraper')

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (error) {
    console.log('No se pudo resolver la instancia' + error);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)