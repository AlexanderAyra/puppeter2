const pageScraper = require('./pageScraper')

async function scrapeAll(browserInstance, krowdy) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser, krowdy);
  } catch (error) {
    console.log('No se pudo resolver la instancia' + error);
  }
}

module.exports = (browserInstance, krowdy) => scrapeAll(browserInstance, krowdy)