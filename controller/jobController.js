const browserObject = require('../puppeteer/browser')
const scraperController = require('../puppeteer/pageController')

module.exports.crearProyecto = async (req, res) => {

  try {
    const { numJobs, numKrowders } = req.body;
    const listJobs = []
    for (let i = 0; i < numJobs; i++) {
      listJobs.push(scraperController(numKrowders))
    }
    const resultScrap = await Promise.all(listJobs)
    res.json({
      success: true,
      message: 'Proceso exitoso'
    })
  } catch (error) {
    console.log('este es el error: ' + error);
    res.json({
      "error": error.message
    })
  }
}