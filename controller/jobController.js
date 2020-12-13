const browserObject = require('../puppeteer/browser')
const scraperController = require('../puppeteer/pageController')

module.exports.crearProyecto = async (req, res) => {

  const { numJobs, numKrowders } = req.body;

  let browserInstance = browserObject.startBrowser()
  scraperController(browserInstance, numKrowders)
}