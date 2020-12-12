const metod = {
  async iniciarSesion(page) {
    //await page.waitForTimeout(2000)
    console.log('Iniciando Sesion');
    await page.type('div.MuiBox-root.jss193 > div:nth-child(1) > div > input', 'ramirovillenar.v.l@gmail.com')
    await page.type('div.MuiBox-root.jss193 > div:nth-child(2) > div > input', 'Apple2020');

    await page.click('#root > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-4 > div > div.jss106 > div > div.MuiBox-root.jss193 > div.MuiBox-root.jss290.jss185 > button')
  },

  async clickCompañia(page) {
    await page.waitForSelector("#root > div > div:nth-child(2) > div > div > div > ul > div:nth-child(5) > a");
    await page.click("#root > div > div:nth-child(2) > div > div > div > ul > div:nth-child(5) > a");
  },

  async clickBtnCreateJob(page) {
    console.log("Clickeando boton create job");
    await page.waitForSelector("#scroll-5e95f1f830dadb3284c0ce5d");
    await page.evaluate(() => {
      document.querySelector('#root > div > div:nth-child(2) > div > main > div > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss31.jss34.MuiButton-containedPrimary').click()
      return
    }, [])

  },
  async nombreJob(page) {
    await page.waitForSelector('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input')

    await page.click('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input')
    await page.focus('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input');
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');

    await page.type('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input', 'job1', { delay: 1 })
  },

  async cambiarFecha(page) {

    await page.evaluate(() => {
      document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > div > button").click();
      document.querySelector("body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div > div:nth-child(1) > div.MuiPickersCalendarHeader-switchHeader > button:nth-child(3)").click();

      let global = document.querySelectorAll('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div > div.MuiPickersSlideTransition-transitionContainer.MuiPickersCalendar-transitionContainer > div')
      let semanas = global[0].querySelectorAll('div');
      let dia = semanas[16].querySelectorAll('div');
      dia[3].click();
    })
  },
  async AgregandoCompañia(page) {
    console.log("select dropdown");

    await page.evaluate(() => {
      document.querySelector('#job-company-container > div > a').click()
      return
    })
    await page.type('#simple-popover > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardContent-root > form > div > div > div > input', 'Chaos-Monkey', { delay: 1 });
    await page.waitForSelector('body > div.MuiAutocomplete-popper > div > ul > li')
    await page.evaluate(() => {
      const listSelect = document.querySelectorAll("body > div.MuiAutocomplete-popper > div > ul > li")
      listSelect[listSelect.length - 1].querySelector('li').click()
    }, [])
  },

  async btnPublicar(page) {
    console.log('Publicar Job');
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div > button").click()
    })
  },

  async cerrarVentana(page) {

    await page.waitForTimeout(1000)
    await page.keyboard.down('Escape');
  },

  async seguimientoJob(page) {
    console.log('Dando click al Seguimiento');
    await page.waitForTimeout(2000)
    await page.evaluate(() => {
      let list = document.querySelectorAll("#root > div > div:nth-child(2) > div > div > div > ul")
      let listSpan = list[0].querySelectorAll('span')

      let padre = listSpan[10].parentNode;
      let abuelo = padre.parentNode
      abuelo.click()
      return
    }, [])

  },
  async renombrarJob1(page) {
    await page.waitForSelector('#cards-container > div > div')
    console.log('Renombrar el Input');

    await page.click('#asociate-company > span')
    await page.focus('#asociate-company > div > div > input');
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');

    await page.type('#asociate-company > div > div > input', 'job1', { delay: 1 });
    await page.keyboard.press('Enter');
  },

  async clickTarea(page) {
    console.log('Dar click a las tareas');
    await page.waitForSelector('#cards-container > div > div > div > div > div > div > div > button:nth-child(2)')
    await page.click('#cards-container > div > div > div > div > div > div > div > button:nth-child(2)');
    console.log('Agregar Tarea');
    await page.waitForSelector('#wrapped-tabpanel-tasks > div > button');
    await page.click('#wrapped-tabpanel-tasks > div > button');
  },

  async clickFormulario(page) {
    console.log('Click al formulario');
    await page.waitForSelector('#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(4) > div')
    await page.evaluate(() => {
      document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(4) > div").click()
      return
    })
  },

  async agregarLocacion(page) {
    console.log('Agregando Locacion');
    await page.waitForSelector('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');

    await page.click('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Lima', { delay: 1 });
    await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root');
  },
  async agregarConocimientos(page) {
    console.log('Agregando Conocimientos');
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root > div:nth-child(3) > span").click()
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button").click()
      return
    })

    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Testing', { delay: 1 })
    await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root.MuiCard-root')
  },

  async agregarFunciones(page) {
    console.log('Agregando Funciones');
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root.MuiStepper-vertical > div:nth-child(5) > span").click()
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button").click()
      return
    })

    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Testear', { delay: 1 })
    await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root.MuiCard-root')
  },

  async ActivarTarea(page) {
    console.log('Click  a Activar Tarea');
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained").click();
      return
    })
  },

  async clickVideoCuestionario(page) {
    console.log('Cliack al Video Cuestionario');
    await page.waitForTimeout(2000)
    await page.evaluate(() => {
      document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(2) > div").click()
      return
    })
  },

  async AgregarPregunta1(page) {
    await page.waitForTimeout(1000)
    console.log('Agregando preunta 1');
    await page.evaluate(() => {
      let listDiv = document.querySelectorAll("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div")
      let listArea = listDiv[0].querySelectorAll('textarea')
      let busDiv = listArea[0].parentNode
      busDiv.click();
      return
    })

    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div > div > div:nth-child(1) > textarea:nth-child(1)', 'Pregunta 1', { delay: 1 })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div > div > div:nth-child(2) > textarea:nth-child(1)', 'Respuesta 1', { delay: 1 })
  },

  async AgregarPregunta2(page) {
    await page.waitForTimeout(1000)
    console.log('Agregando preunta 2');
    await page.evaluate(() => {
      let listDiv = document.querySelectorAll("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div")
      let listArea = listDiv[0].querySelectorAll('textarea')
      let busDiv = listArea[4].parentNode
      busDiv.click();
      return
    })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div > div:nth-child(1) > textarea:nth-child(1)', 'Pregunta 2', { delay: 1 })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div > div:nth-child(2) > textarea:nth-child(1)', 'Respuesta 2', { delay: 1 })
  },

  async AgregarPregunta3(page) {
    await page.waitForTimeout(1000)
    console.log('Agregando preunta 3');
    await page.evaluate(() => {
      let listDiv = document.querySelectorAll("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div")
      let listArea = listDiv[0].querySelectorAll('textarea')
      let busDiv = listArea[8].parentNode
      busDiv.click();
      return
    })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(3) > div > div > div:nth-child(1) > textarea:nth-child(1)', 'Pregunta 3', { delay: 1 })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(3) > div > div > div:nth-child(2) > textarea:nth-child(1)', 'Respuesta 3', { delay: 1 })
  },

  async btnQuienEvalua(page) {
    console.log('Click a Quien Evalua');
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)").click()
    })
  },

  async anadirKrowder(page) {
    console.log('Añadir Krowders');
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div > button").click()
      return
    })

    await page.type('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardContent-root > div > div > input', '10', { delay: 1 })
    await page.click('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardActions-root > button')
  },

  async btnTareaVideoCuestionario(page) {
    await page.waitForTimeout(1000)
    console.log('Click activar Tarea');
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained").click()
      return
    })

    await page.waitForTimeout(1500)
    await page.click("#root > div > div:nth-child(2) > div > main > div > div.MuiPaper-root > div > button");
  },

  async btnAgregarEtapa(page) {
    console.log('Agregando nueva etapa');
    await page.waitForSelector("#cards-container > button")
    await page.evaluate(() => {
      document.querySelector("#cards-container > button").click()
      return
    })
  },

  async nuevaTarea(page) {
    console.log('Agregando nueva tarea');
    await page.waitForTimeout(1500)
    await page.evaluate(() => {
      document.querySelector("#cards-container > div:nth-child(2) > div > div > div.MuiCardContent-root > div.MuiTabs-root > div > div > button:nth-child(2)").click()
      let listDiv = document.querySelectorAll("#cards-container > div")
      let div2 = listDiv[listDiv.length - 1].querySelectorAll('button')
      div2[5].click();
      return
    })
  },

  async btnVideoEntrevista(page) {
    console.log('Click Video Entrevista');
    await page.waitForSelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(7) > div");
    await page.evaluate(() => {
      document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(7) > div").click()
      return
    })
  },

  async btnAddCompetencia(page) {
    console.log('Agregando Competencias');
    await page.waitForSelector('div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > button')
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > button").click()
    })
    return true
  },


  async selectCheckBox(page) {
    await page.waitForTimeout(3000)
    console.log('select checbox');
    const result = await page.evaluate(() => {
      for (let i = 0; i < 3; i++) {
        let label = document.querySelectorAll("body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > div:nth-child(1) > div > label")[i]
        let a = label.querySelectorAll('span')
        a[0].click()
      }
      // listLabel[1].querySelector('span > span > input').querySelector(input).click()
      // if (label) {
      //   label.click()
      //   for (let span in label.querySelectorAll('span')) {
      //     span.click()
      //   }
      //   // label.querySelector('input') ? label.querySelector('input').click() : null
      //   return "clicks terminados correctamente"
      // } else {
      //   return "label no existe"
      // }
    })
    console.log("Resultado de clicks: " + result)
    return
  },

  async btnGuardarVidConf(page) {
    console.log('Click a Guardar');
    await page.waitForSelector('body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained')
    await page.evaluate(() => {
      document.querySelector("body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained").click()
      return
    })
  },

  async btnActivarTarea(page) {
    console.log('Activar Tarea');
    await page.waitForSelector('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained')
    await page.evaluate(() => {
      document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained").click()
      return
    })
  }

}

module.exports = metod
