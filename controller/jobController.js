const browserObject = require('../puppeteer/browser')
const scraperController = require('../puppeteer/pageController')

module.exports.crearProyecto = async (req, res) => {

  let params = req.params;
  const { job, krowdy } = params;

  let browserInstance = browserObject.startBrowser()
  scraperController(browserInstance)
}