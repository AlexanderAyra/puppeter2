const metod = require('../methods')

const scraperObject = {
  url: process.env.url,
  async scraper(browser, krowdy) {
    let page = await browser.newPage();
    await page.setViewport({ width: 0, height: 0 });
    await page.goto(this.url);
    await metod.iniciarSesion(page);
    await page.waitForTimeout(3000);
    await page.goto(this.url);
    await metod.clickCompañia(page);
    await metod.clickBtnCreateJob(page);
    await metod.nombreJob(page);
    await metod.cambiarFecha(page);
    await metod.AgregandoCompañia(page);
    await metod.btnPublicar(page);
    await metod.cerrarVentana(page);
    await metod.seguimientoJob(page);
    await metod.renombrarJob1(page);
    await metod.clickTarea(page);
    await metod.clickFormulario(page);
    await metod.agregarLocacion(page);
    await page.waitForTimeout(1000);
    await metod.agregarConocimientos(page);
    await page.waitForTimeout(1000);
    await metod.agregarFunciones(page);
    await page.waitForTimeout(1000);
    await metod.ActivarTarea(page);
    await metod.clickVideoCuestionario(page);
    await metod.AgregarPregunta1(page);
    await metod.btnQuienEvalua(page);
    await metod.anadirKrowder(page, krowdy);
    await metod.btnTareaVideoCuestionario(page);

    await metod.btnAgregarEtapa(page);
    await metod.nuevaTarea(page);
    await metod.btnVideoEntrevista(page);
    await metod.btnAddCompetencia(page);
    await metod.selectCheckBox(page);
    await metod.btnGuardarVidConf(page);
    await metod.btnQuienEval(page);
    await metod.btnSoliKrow(page);
    await metod.btnActivarTarea(page);
    await page.close();
  }
}

module.exports = scraperObject;
